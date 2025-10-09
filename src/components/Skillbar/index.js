import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { PercentageText, SkillBarContainer, SkillLabel } from './index.styles';
const SkillBar = ({ skillName, progress, color, }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (animatedProgress < progress) {
                setAnimatedProgress((prev) => prev + 1);
            }
            else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [animatedProgress, progress]);
    return (_jsxs(SkillBarContainer, { children: [_jsx(SkillLabel, { children: skillName }), _jsxs(PercentageText, { progress: animatedProgress, children: [animatedProgress, "%"] }), _jsx(LinearProgress, { variant: "determinate", value: animatedProgress, sx: {
                    height: 10,
                    borderRadius: '5px',
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: color,
                    },
                } })] }));
};
export default SkillBar;
