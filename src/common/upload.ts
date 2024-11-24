import {app2,firebaseConfig} from "./firebase";
import { uploadBytes, ref, getDownloadURL, getStorage } from "firebase/storage";

const storage = getStorage(app2);


export const upload = async (path, file) => {
  const storageRef = ref(storage, path);
  const data = await uploadBytes(storageRef,file)
  // console.log("> data", data)
  const url = await getDownloadURL(data.ref);
    // console.log("> url", url);
  return url;
};
