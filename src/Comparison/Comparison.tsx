import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { ReactNode, Suspense } from "react";
import ReactPlayer from "react-player";
import { useRecoilState, useRecoilValue } from "recoil";
import { lineSep } from "../util/linesep";
import { fileState, vttUrlState } from "./state";
const Comparison = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#CED3DB",
        width: "100vw",
        height: "50vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "31%",
          height: "48vh",
          top: "10%",
          left: "12%",
        }}
      >
        <LeftBox />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "47%",
          height: "100%",
          // paddingTop: "56.25%" /* 720 / 1280 = 0.5625 */,
        }}
      >
        <RightBox />
      </Box>
    </Box>
  );
};

const headerText = `Generate subtitles
right in the browser.`;
const mainText = `With modern technology, online subtitle insertion is not a fantasy anymore. No one needs to annotate your speech videos. State-of-the-art AI will do the job for you.`;
const LeftBox = () => {
  return (
    <Stack justifyContent="space-around" spacing={5}>
      <Typography
        sx={{
          fontFamily: "Epilogue",
          fontWeight: "Bold",
          color: "black",
          fontSize: 32,
        }}
      >
        {lineSep(headerText)}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Epilogue",
          wordWrap: "break-word",
          fontSize: 20,
        }}
      >
        {lineSep(mainText)}
      </Typography>
      <Button
        sx={{
          position: "relative",
          fontFamily: "Epilogue",
          bgcolor: "#3485FF",
          borderRadius: 15,
          fontSize: 20,
          width: 0.8,
          height: "3em",
        }}
      >
        <FileIO
          sx={{
            position: "absolute",
            height: 1,
            width: 1,
            opacity: 0,
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontWeight: "Bold",
          }}
        >
          Upload Your Movie
        </Typography>
      </Button>
    </Stack>
  );
};

const RightBox = () => {
  return (
    <Suspense fallback={<Typography>"Loading..."</Typography>}>
      <SinglePlayer useVtt />
    </Suspense>
  );
};

const FileIO = (props: { sx?: SxProps<Theme>; children?: ReactNode }) => {
  const [file, setFile] = useRecoilState(fileState);
  return (
    <MuiFileInput
      sx={props.sx}
      value={file}
      onChange={setFile}
      variant="outlined"
    />
  );
};
export const SinglePlayer = (props: { useVtt?: boolean }) => {
  const scale = 0.6;
  const file = useRecoilValue(fileState);
  const fileUrl = file ? URL.createObjectURL(file) : null;
  const vttUrl = useRecoilValue(vttUrlState);
  const show = Boolean(fileUrl) && (!Boolean(props.useVtt) || Boolean(vttUrl));
  const config =
    fileUrl && vttUrl && props.useVtt
      ? {
          file: {
            tracks: [
              {
                kind: "captions",
                src: vttUrl,
                srcLang: "ja",
                label: "whisper-subtitle",
                default: true,
              },
            ],
          },
        }
      : undefined;
  if (show) {
    return (
      <ReactPlayer
        playing
        controls
        url={URL.createObjectURL(file as File)}
        config={config}
        width={1280 * scale}
        height={720 * scale}
      />
    );
  } else {
    return null;
  }
};
export default Comparison;
