import { Rating, useTheme } from '@mui/material';
import { Card, Description, DividerComp, Heading, Title, QuoteIcon } from './index.styles';
export const TestimonialCard = ({
  feedback,
  name,
  designation,
  rating,
}: {
  feedback: string;
  name: string;
  designation: string;
  rating: number;
}) => {
  const theme = useTheme();
  return (
    <Card minHeight={'325px'}>
      <QuoteIcon style={{ color: theme.palette.secondary.main }} />
      <Description>{feedback}</Description>
      <Rating name="read-only" value={rating} readOnly precision={0.5} />
      <DividerComp />
      <Heading>{name}</Heading>
      <Title>{designation}</Title>
    </Card>
  );
};
