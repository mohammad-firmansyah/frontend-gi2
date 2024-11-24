import { fireStorage } from "./firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";

export const removeFile = async (path) => {
  // Create a reference to the file to delete
  const desertRef = ref(fireStorage, path);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      return true;
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      return false;
    });
};
