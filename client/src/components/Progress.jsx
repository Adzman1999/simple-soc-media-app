import { Box, CircularProgress, useTheme } from '@mui/material';
import React from 'react'

const Progress = () => {
    const { theme } = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <CircularProgress
          disableShrink
        //   sx={{
        //     backgroundColor: theme.primary.main,
        //     color: theme.background.alt,
        //     fontSize: 45,
        //   }}
        />
      </Box>
    </>
  );
}

export default Progress