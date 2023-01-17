import axios from "axios";
interface ASRResponse {
  vtt: string;
}
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

export const asrApiCall = async (file: File) => {
  const form = new FormData();
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  form.append("video", file);
  const url = `${BACKEND_URL}/vtt`;
  const ret = await axios.postForm<ASRResponse>(url, form, headers);
  const vttString = ret.data.vtt;

  return vttString;
};
