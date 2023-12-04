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

      {!image &&
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className={styles.button}>
              <input {...getInputProps()} />
              <p className={styles.textUploadButton}>Selecionar Foto</p>
            </div>
          )}
        </Dropzone>
      }

      {image &&
        <div className={styles.imageContainer}>
          <button className={styles.buttonX} onClick={() => setImage(false)}>X</button>
          <img src={image} alt="Capa do Livro" className={styles.image}/>
        </div>
      }

    </div>
  );
}

export default ImageUpload;