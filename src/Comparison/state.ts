import { atom, selector } from "recoil";
import { asrApiCall } from "../api/asr";

export const fileState = atom<File | null>({
  key: "file",
  default: null,
});

export const vttUrlState = selector<string | null>({
  key: "vtt",
  get: async ({ get }) => {
    const file = get(fileState);
    if (!file) {
      return null;
    }
    const vttString = await asrApiCall(file);
    const vttBlob = new Blob([vttString]);
    const vttURL = URL.createObjectURL(vttBlob);
    return vttURL;
  },
});
