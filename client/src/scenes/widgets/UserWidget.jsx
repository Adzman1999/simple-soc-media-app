import {
  LocationOnOutlined,
  RecommendOutlined,
  QrCodeRounded,
  RemoveRedEyeOutlined,
  BorderColorOutlined,
  ApartmentRounded,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { InstagramLogo, TiktokLogo, YoutubeLogo } from "phosphor-react";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`/users/${userId}`, config);

    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap='0.5rem'
        pb='1.1rem'
        onClick={() => navigate(`/profile/${userId}`)}>
        <FlexBetween gap='1rem'>
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant='h4'
              color={dark}
              fontWeight='500'
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}>
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <QrCodeRounded />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p='1rem 0'>
        <Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'>
          <LocationOnOutlined sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display='flex' alignItems='center' gap='1rem'>
          <ApartmentRounded sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p='1rem 0'>
        <FlexBetween mb='0.5rem'>
          <RemoveRedEyeOutlined />
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography color={main} fontWeight='500'>
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <RecommendOutlined />
          <Typography color={medium}>Your most liked post</Typography>
          <Typography color={main} fontWeight='500'>
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p='1rem 0'>
        <Typography fontSize='1rem' color={main} fontWeight='500' mb='1rem'>
          Other Social Profiles
        </Typography>

        <FlexBetween gap='1rem' mb='0.5rem'>
          <FlexBetween gap='1rem'>
            <InstagramLogo style={{ fontSize: 32 }} />
            <Box>
              <Typography color={main} fontWeight='500'>
                Instagram
              </Typography>
              <Typography color={medium}>Social Media</Typography>
            </Box>
          </FlexBetween>
          <BorderColorOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap='1rem' mb='0.5rem'>
          <FlexBetween gap='1rem'>
            <TiktokLogo style={{ fontSize: 32 }} />
            <Box>
              <Typography color={main} fontWeight='500'>
                Tiktok
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <BorderColorOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap='1rem'>
          <FlexBetween gap='1rem'>
            <YoutubeLogo style={{ fontSize: 32 }} />
            <Box>
              <Typography color={main} fontWeight='500'>
                YouTube
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <BorderColorOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
