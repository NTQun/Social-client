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
        <Typography color={dark} variant="h5" fontWeight="500">
          NEWS
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/new.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Tinanime</Typography>
        <Typography color={medium}>tinanime.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Netflix đã thông báo rằng Baki Hanma,
       bộ anime chuyển thể từ manga Hanma Baki - Son of Ogre của Keisuke Itagaki, 
       sẽ có mùa thứ hai. Phần phim lần này sẽ tập trung vào chiến binh mới - Pickle,
        một chiến binh từ thời nguyên thủy.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
