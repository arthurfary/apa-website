'use client'

import styles from './cardEdit.module.css';

import Load from '@/app/components/load/load';
import ImageUpload from '@/app/components/image_upload/image_upload';

import { useState } from 'react';

function CardEdit({id, nome, especie, adotado, foto, setRefresh, refresh, setEdit}){

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(foto);

    function salvarAlteracao(){
        setLoading(true)
        const nome = document.querySelector('input[name="nome"]').value;
        const especie = document.querySelector('input[name="especie"]').value;
        const foto = image;

        if (!nome || !especie || !foto) {
            alert('Preencha todos os campos!');
            setLoading(false)
            return;
        }

        fetch('/api/salvarPet', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                nome: nome,
                especie: especie,
                foto: foto
            })
        })
            .then(response => response.json())
            .then(data => {
                setRefresh(!refresh);
                setLoading(false)
            });
    }

  return (
    <div className={styles.addCardForm}>
        <input className={styles.inputField} type="text" placeholder="Nome" name='nome' />
        <input className={styles.inputField} type="text" placeholder="Espécie" name='especie' />
        <ImageUpload setImage={setImage} image={image} />
        {loading === false && 
            <div>
                <button className={`${styles.button} ${styles.salvar}`} onClick={salvarAlteracao} >Salvar</button>
                <button className={`${styles.button} ${styles.cancelar}`} onClick={() => setEdit(false)} >Cancelar</button>
            </div>
        }
        {loading === true &&
            <div className={styles.loading}>
                <Load size={30}/>
            </div>
        }
    </div>
  );
};

export default CardEdit;