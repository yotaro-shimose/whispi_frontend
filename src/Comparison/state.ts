import { atom, selector } from "recoil";
import { asrApiCall } from "../api/asr";

export const fileState = atom<File | null>({
  key: "file",
  default: null,
});

export const vttUrlState = selector<string | null>({
  key: "vtt",
  get: async ({ get }) => {
    console.log("get");
    const file = get(fileState);
    if (!file) {
      console.log("vtt is null");
      return null;
    }
    const vttString = await asrApiCall(file);
    const vttBlob = new Blob([vttString]);
    const vttURL = URL.createObjectURL(vttBlob);
    console.log(`vtt is here: ${vttURL}`);
    return vttURL;
  },
});
