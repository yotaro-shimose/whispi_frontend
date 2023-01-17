import { Box, Typography } from "@mui/material";
import imgUrl from "./assets/Top.png";
import { lineSep } from "./util/linesep";
const catchCopy = `Auto Generate Subtitles.
Super-Fast,
Super-Accurate.
`;

const CatchCopyHeader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "50vh",
      }}
    >
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: 1,
          height: 1,
        }}
        alt="CatchCopyComesHere"
        src={imgUrl}
      />
      <Typography
        color="white"
        sx={{
          position: "absolute",
          top: "20%",
          left: "12%",
          fontFamily: "Epilogue",
          fontWeight: "bold",
          lineHeight: 1.2,
          fontSize: 75,
        }}
      >
        {lineSep(catchCopy)}
      </Typography>
    </Box>
  );
};

export default CatchCopyHeader;
