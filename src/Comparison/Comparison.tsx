import { Button, Stack } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import DualPlayer from "./DualPlayer";
import { fileState, vttUrlState } from "./state";

const Comparison = () => {
  return (
    <Stack direction="column">
      <FileIO />
      <DualPlayer />
    </Stack>
  );
};

const FileIO = () => {
  const [file, setFile] = useRecoilState(fileState);
  const refresh = useRecoilRefresher_UNSTABLE(vttUrlState);
  const onSubmit = () => {
    console.log("submit");
    refresh();
  };
  return (
    <Stack direction="row">
      <MuiFileInput value={file} onChange={setFile} variant="outlined" />
      <Button disabled={!Boolean(file)} onClick={onSubmit}>
        Submit
      </Button>
    </Stack>
  );
};

export default Comparison;
