import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BottomBox, Card, CardBox, ChipBox, Description, Grid2Container, Grid2Wrapper, ImageContainer, OpenButton, OverLay, ProjectDetail, Title, } from './index.styles';
import EastIcon from '@mui/icons-material/East';
import { Chip, Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery, useTheme, } from '@mui/material';
import { useState } from 'react';
import { SecondaryButton } from '../../common/common.styles';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import useIsMobile from '../../hooks/useIsMobile';
export const ProjectCard = ({ imgUrl, title, description, skills, link }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useIsMobile();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleViewProject = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };
    return (_jsxs(CardBox, { children: [_jsx(ImageContainer, { src: imgUrl, clickable: true }), _jsx(OverLay, { className: "overlay", onClick: handleClickOpen, children: _jsx(OpenButton, { children: _jsx(CameraAltOutlinedIcon, {}) }) }), _jsxs(Dialog, { fullScreen: fullScreen, open: open, onClose: handleClose, maxWidth: 'lg', "aria-labelledby": "responsive-dialog-title", children: [_jsxs(DialogTitle, { id: "responsive-dialog-title", children: [_jsx(Title, { children: title }), _jsx(IconButton, { "aria-label": "close", onClick: handleClose, sx: (theme) => ({
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: theme.palette.grey[500],
                                }), children: _jsx(CloseIcon, {}) })] }), _jsx(DialogContent, { children: _jsx(Card, { children: _jsxs(Grid2Wrapper, { container: true, spacing: 2, children: [_jsx(Grid2Container, { size: { xs: 12, md: 7 }, children: _jsx(ImageContainer, { isMobile: isMobile, src: imgUrl }) }), _jsx(Grid2Container, { size: { xs: 12, md: 5 }, children: _jsxs(BottomBox, { children: [_jsx(Title, { children: title }), _jsx(ProjectDetail, { children: _jsx(Description, { children: description }) }), _jsx(ChipBox, { children: skills?.map((skillItem) => _jsx(Chip, { label: skillItem })) }), _jsxs(SecondaryButton, { onClick: handleViewProject, children: ["View", _jsx(EastIcon, {})] })] }) })] }) }) })] })] }));
};
