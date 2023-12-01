'use client'

import styles from './cardEdit.module.css';

import Load from '@/app/components/load/load';
import ImageUpload from '@/app/components/image_upload/image_upload';

import { useState } from 'react';

function CardEdit({id, nome, especie, adotado, foto, setRefresh, refresh, setEdit}){

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(foto);
    const [nomeEdit, setNomeEdit] = useState(nome);
    const [especieEdit, setEspecieEdit] = useState(especie);

    function salvarAlteracao(){
        setLoading(true)

        if (!nomeEdit || !especieEdit || !image) {
            alert('Preencha todos os campos!');
            setLoading(false)
            return;
        }

        fetch('/api/salvarPet', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                nome: nomeEdit,
                especie: especieEdit,
                foto: image
            })
        })
            .then(response => response.json())
            .then(data => {
                setRefresh(!refresh);
                setLoading(false)
                setEdit(false)
            });
    }

  return (
    <div className={styles.addCardForm}>
        <input className={styles.inputField} type="text" placeholder="Nome" name='nome' onChange={(e) => setNomeEdit(e.target.value)}  value={nomeEdit}/>
        <input className={styles.inputField} type="text" placeholder="Espécie" name='especie' onChange={(e) => setEspecieEdit(e.target.value)} value={especieEdit} />
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