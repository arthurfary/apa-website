"use client"

import styles from './imgUpload.module.css'

import Dropzone from 'react-dropzone';

function ImageUpload({setImage,image}) {

  function handleDrop(acceptedFiles){

    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };

  };

  return (
    <div className={styles.uploadImageComponent}>

      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={styles.button}>
            <input {...getInputProps()} />
            <p className={styles.textUploadButton}>Upload Capa</p>
          </div>
        )}
      </Dropzone>

    </div>
  );
}

export default ImageUpload;