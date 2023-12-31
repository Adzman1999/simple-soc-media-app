import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored Website
        </Typography>
        <Typography color={medium}>More Ad</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='/assets/info4.jpeg'
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Visit this website</Typography>
        <Typography color={medium}>mhan-mhan.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        repellat dolorem quia quos illo earum ipsam similique assumenda vitae
        dicta!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
