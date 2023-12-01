'use client'

import styles from './cardEdit.module.css';
import Load from '@/app/components/load/load';
import { useState } from 'react';

function CardEdit({ id, nome, descricao, data, setRefresh, refresh, setEdit }) {

    const [loading, setLoading] = useState(false);
    const [nomeEdit, setNomeEdit] = useState(nome);
    const [descricaoEdit, setDescricaoEdit] = useState(descricao);
    const [dataEdit, setDataEdit] = useState(new Date(data).toISOString().split('T')[0]);

    function salvarAlteracao() {
        setLoading(true)

        if (!nomeEdit || !descricaoEdit || !dataEdit) {
            alert('Preencha todos os campos!');
            setLoading(false);
            return;
        }

        fetch('/api/salvarAtividade', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                nome: nomeEdit,
                descricao: descricaoEdit,
                date: dataEdit
            })
        })
        .then(response => response.json())
        .then(data => {
            setRefresh(!refresh);
            setLoading(false);
            setEdit(false);
        });
    }

    return (
        <div className={styles.addCardForm}>
            <input 
                className={styles.inputField} 
                type="text" 
                placeholder="Nome" 
                name='nome' 
                onChange={(e) => setNomeEdit(e.target.value)}  
                value={nomeEdit}
            />
            <textarea 
                className={styles.textareaField} 
                placeholder="Descrição" 
                name='descricao' 
                onChange={(e) => setDescricaoEdit(e.target.value)} 
                value={descricaoEdit}
            ></textarea>
            <input 
                className={styles.inputField} 
                type="date" 
                name='data' 
                onChange={(e) => setDataEdit(e.target.value)} 
                value={dataEdit}
            />
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
