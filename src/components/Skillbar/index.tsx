import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { PercentageText, SkillBarContainer, SkillLabel } from './index.styles';

interface SkillBarProps {
  skillName: string;
  progress: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  skillName,
  progress,
  color,
}: {
  skillName: string;
  progress: number;
  color: string;
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animatedProgress < progress) {
        setAnimatedProgress((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [animatedProgress, progress]);

  return (
    <SkillBarContainer>
      <SkillLabel>{skillName}</SkillLabel>

      <PercentageText progress={animatedProgress}>{animatedProgress}%</PercentageText>

      <LinearProgress
        variant="determinate"
        value={animatedProgress}
        sx={{
          height: 10,
          borderRadius: '5px',
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
          },
        }}
      />
    </SkillBarContainer>
  );
};

export default SkillBar;
