import {
  BottomBox,
  Card,
  CardBox,
  ChipBox,
  Description,
  Grid2Container,
  Grid2Wrapper,
  ImageContainer,
  OpenButton,
  OverLay,
  ProjectDetail,
  Title,
} from './index.styles';
import EastIcon from '@mui/icons-material/East';
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { SecondaryButton } from '../../common/common.styles';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import useIsMobile from '../../hooks/useIsMobile';

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  skills,
  link
}: {
  imgUrl: string;
  title: string;
  description: string;
  skills: string[];
  link: string
}) => {
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

  return (
    <CardBox>
      <ImageContainer src={imgUrl} clickable />
      <OverLay className="overlay" onClick={handleClickOpen}>
        <OpenButton>
          <CameraAltOutlinedIcon />
        </OpenButton>
      </OverLay>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth={'lg'}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Title>{title}</Title>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Card>
            <Grid2Wrapper container spacing={2}>
              <Grid2Container size={{ xs: 12, md: 7 }}>
                <ImageContainer isMobile={isMobile} src={imgUrl} />
              </Grid2Container>
              <Grid2Container size={{ xs: 12, md: 5 }}>
                <BottomBox>
                  <Title>{title}</Title>
                  <ProjectDetail>
                    <Description>{description}</Description>
                  </ProjectDetail>
                  <ChipBox>{skills?.map((skillItem) => <Chip label={skillItem} />)}</ChipBox>
                  <SecondaryButton onClick={handleViewProject}>
                    View
                    <EastIcon />
                  </SecondaryButton>
                </BottomBox>
              </Grid2Container>
            </Grid2Wrapper>
          </Card>
        </DialogContent>
      </Dialog>
    </CardBox>
  );
};
