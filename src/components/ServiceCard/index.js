import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Description, IconBox, Title } from './index.styles';
export const ServiceCard = ({ icon, title, description, }) => {
    return (_jsxs(Card, { height: '100%', children: [_jsx(IconBox, { children: icon }), _jsx(Title, { children: title }), _jsx(Description, { children: description })] }));
};
