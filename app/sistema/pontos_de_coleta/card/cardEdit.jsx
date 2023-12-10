'use client'

import styles from './cardEdit.module.css';

import { useState } from 'react';

import Load from '@/app/components/load/load';

import { salvarPonto } from '@/app/functions/salvarPonto';

function CardEdit({ id, nome, rua, numero, cidade, estado, cep, setRefresh, refresh, setEdit }) {

    const [loading, setLoading] = useState(false);
    const [nomeEdit, setNomeEdit] = useState(nome);
    const [ruaEdit, setRuaEdit] = useState(rua);
    const [numeroEdit, setNumeroEdit] = useState(numero);
    const [cidadeEdit, setCidadeEdit] = useState(cidade);
    const [estadoEdit, setEstadoEdit] = useState(estado);
    const [cepEdit, setCepEdit] = useState(cep);

    function salvarAlteracao() {
        setLoading(true)

        if (!nomeEdit || !ruaEdit || !numeroEdit || !cidadeEdit || !estadoEdit || !cepEdit) {
            alert('Preencha todos os campos!');
            setLoading(false);
            return;
        }

        if (typeof estado !== 'string' || estado.length > 2) {
            alert('O estado deve ser a sigla UF (SC, PR, SP...) com no máximo 2 caracteres.')
            setLoading(false)
            return
        }
        
        cep = cep.replace(/[-. ]/g, ""); // Remove '-', '.', e ' ' do CEP
        if (!Number.isInteger(parseInt(cep)) || cep.length !== 8) {
            alert('O CEP deve ser um número positivo válido')
            setLoading(false)
            return
        }

        salvarPonto(nomeEdit, ruaEdit, numeroEdit, cidadeEdit, estadoEdit, cepEdit, id)
        .then(() => {
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
            <input 
                className={styles.inputField} 
                type="text" 
                placeholder="Rua" 
                name='rua' 
                onChange={(e) => setRuaEdit(e.target.value)}  
                value={ruaEdit}
            />
            <input 
                className={styles.inputField} 
                type="number" 
                placeholder="Número" 
                name='numero' 
                onChange={(e) => setNumeroEdit(e.target.value)}  
                value={numeroEdit}
            />
            <input 
                className={styles.inputField} 
                type="text" 
                placeholder="Cidade" 
                name='cidade' 
                onChange={(e) => setCidadeEdit(e.target.value)}  
                value={cidadeEdit}
            />
            <input 
                className={styles.inputField} 
                type="text" 
                placeholder="Estado" 
                name='estado' 
                onChange={(e) => setEstadoEdit(e.target.value)}  
                value={estadoEdit}
            />
            <input 
                className={styles.inputField} 
                type="number" 
                placeholder="CEP" 
                name='cep' 
                onChange={(e) => setCepEdit(e.target.value)}  
                value={cepEdit}
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

