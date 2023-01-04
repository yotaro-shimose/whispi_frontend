import { Box, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import ReactPlayer from "react-player";
import { useRecoilValue } from "recoil";
import { fileState, vttUrlState } from "./state";

const DualPlayer = () => {
  return (
    <Stack direction="row">
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Suspense fallback={<Typography>"Loading..."</Typography>}>
          <SinglePlayer />
        </Suspense>
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Suspense fallback={<Typography>"Loading..."</Typography>}>
          <SinglePlayer useVtt />
        </Suspense>
      </Box>
    </Stack>
  );
};

const SinglePlayer = (props: { useVtt?: boolean }) => {
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
                kind: "subtitles",
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
      />
    );
  } else {
    return null;
  }
};

export default DualPlayer;
