import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { lineSep } from "../util/linesep";
import DualPlayer from "./DualPlayer";
import { fileState } from "./state";

const Comparison = () => {
  return <Box
    sx={{
      position: "relative",
      bgcolor: "#CED3DB",
      width: "100vw",
      height: "60vh",
    }}>
    <LeftBox />
  </Box>
  //   <Stack direction="row">
  //     <FileIO />
  //     <DualPlayer />
  //   </Stack>
  // );
};

const headerText = `Generate subtitles
right in the browser.`;
const mainText = `With modern technology, online subtitle insertion is not a fantasy anymore. No one needs to annotate your speech videos. State-of-the-art AI will do the job for you.`
const LeftBox = () => {
  return (
    <Box sx={{
      position: "relative",
      width: "31%",
      height: "48vh",
      top: "10%",
      left: "7%",
    }}>
      <Stack justifyContent="space-around" spacing={5}>
        <Typography sx={{
          fontFamily: "Epilogue",
          fontWeight: "Bold",
          color: "black",
          fontSize: 32
        }}>{lineSep(headerText)}</Typography>
        <Typography sx={{
          fontFamily: "Epilogue",
          wordWrap: "break-word",
          fontSize: 20
        }}>{lineSep(mainText)}</Typography>
        <Button sx={{
          position: "relative",
          fontFamily: "Epilogue",
          bgcolor: "#3485FF",
          borderRadius: 15,
          fontSize: 20,
          width: 0.8,
          height: "3em",
        }}>
          <FileIO sx={{
            position: "absolute",
            height: 1,
            width: 1,
            opacity: 0
          }} />
          <Typography sx={{
            color: "white",
            fontWeight: "Bold",
          }}>
            Upload Your Movie
          </Typography>
        </Button>
      </Stack>



    </Box >
  )
}

const FileIO = (props: { sx?: SxProps<Theme>, children?: ReactNode }) => {
  const [file, setFile] = useRecoilState(fileState);
  return (
    <MuiFileInput sx={props.sx} value={file} onChange={setFile} variant="outlined" />
  );
};

export default Comparison;
