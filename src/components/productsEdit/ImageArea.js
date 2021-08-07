import { makeStyles, IconButton } from "@material-ui/core";
import React, { useCallback } from "react";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { storage } from "../../firebase";
import ImagePrevew from "./ImagePrevew";

const useStyle = makeStyles(() => ({
  ImageArea: {
    marginLeft: "8px",
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  noneInput: {
    display: "none",
  },
  imageContainer: {
    marginTop: "16px",
  },
}));

const ImageArea = ({ setImages, images }) => {
  const classes = useStyle();

  const uploadImage = useCallback(
    (event) => {
      const file = event.target.files;
      let blob = new Blob(file, { type: "image/jpeg" });

      // ランダムな16文字のファイル名を生成
      const S = "qwertyuioplkjhgfdsazxcvbnmAQWERTYUIOPLKJHGFDSAZXCVBNM";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");

      // firebaseに画像ファイルを送信する
      const uploadRef = storage.ref("images").child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          setImages((prevState) => [...prevState, newImage]);
        });
      });
    },
    [setImages]
  );

  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm("この画像を削除しますか？");
      if (!ret) {
        return false;
      } else {
        const newImages = images.filter((image) => image.id !== id);
        setImages(newImages);
        return storage.ref("images").child(id).delete();
      }
    },
    [images]
  );
  return (
    <>
      <div className={classes.ImageArea}>
        <p>画像を登録</p>
        <IconButton className={classes.IconButton}>
          <label>
            <ImageSearchIcon />
            <input
              className={classes.noneInput}
              type="file"
              id="image"
              onChange={(event) => {
                uploadImage(event);
              }}
            />
          </label>
        </IconButton>
      </div>
      <div className={classes.imageContainer}>
        {images.length > 0 &&
          images.map((image) => (
            <ImagePrevew
              id={image.id}
              path={image.path}
              key={image.id}
              deletes={deleteImage}
            />
          ))}
      </div>
    </>
  );
};

export default ImageArea;
