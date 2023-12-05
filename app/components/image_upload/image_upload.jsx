"use client"

import styles from './imgUpload.module.css'

import Dropzone from 'react-dropzone';

function ImageUpload({setImage, image, size}) {

  function handleDrop(acceptedFiles){

    const file = acceptedFiles[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };

  };

  // Converter o tamanho em pixels para uma string
  const sizeInPx = `${size}px`;

  // Criar um objeto de estilo para definir a largura
  const imgSize = {
      width: sizeInPx,
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
          <img src={image} alt="Capa do Livro" style={imgSize} className={styles.image}/>
        </div>
      }

    </div>
  );
}

export default ImageUpload;