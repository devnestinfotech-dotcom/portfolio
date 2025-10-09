import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Rating, useTheme } from '@mui/material';
import { Card, Description, DividerComp, Heading, Title, QuoteIcon } from './index.styles';
export const TestimonialCard = ({ feedback, name, designation, rating, }) => {
    const theme = useTheme();
    return (_jsxs(Card, { minHeight: '325px', children: [_jsx(QuoteIcon, { style: { color: theme.palette.secondary.main } }), _jsx(Description, { children: feedback }), _jsx(Rating, { name: "read-only", value: rating, readOnly: true, precision: 0.5 }), _jsx(DividerComp, {}), _jsx(Heading, { children: name }), _jsx(Title, { children: designation })] }));
};
