'use client'

import SystemPage from '@/app/components/page_type/sistema';
import styles from '@/app/sistema/atividades/page.module.css';
import { useEffect, useState } from 'react';

import Load from '@/app/components/load/load';
import Card from './card/card';

function Atividades() {

    const [atividades, setAtividades] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/obterAtividades')
            .then(response => response.json())
            .then(data => setAtividades(data.rows));
    }, [refresh]);

    function alteraCard() {
        setShowAddForm(!showAddForm);
    };

    async function salvarNovaAtividade() {
        setLoading(true)
        const nome = document.querySelector('input[name="titulo"]').value;
        const descricao = document.querySelector('input[name="descricao"]').value;
        const data = document.querySelector('input[name="data"]').value;

        if (!nome || !descricao || !data) {
            alert('Preencha todos os campos!');
            setLoading(false)
            return;
        }

        await fetch('/api/salvarAtividade', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
                data: data
            })
        })
            .then(response => response.json())
            .then(data => {
                setRefresh(!refresh);
                alteraCard();
                setLoading(false)
            });
        setLoading(false)
    }

    return (
        <SystemPage>
            <main className={styles.main}>
                <div>
                    <h1>Atividades</h1>
                </div>

                <section className={styles.cardGrid}>
                    {showAddForm ? (
                        <div className={styles.addCardForm}>
                            <input className={styles.inputField} type="text" placeholder="Título" name='titulo' />
                            <textarea className={styles.textareaField} placeholder="Descrição" name='descricao' ></textarea>
                            <input className={styles.inputField} type="date" name='data' />
                            {loading === false && 
                                <div>
                                    <button className={`${styles.button} ${styles.salvar}`} onClick={salvarNovaAtividade} >Salvar</button>
                                    <button className={`${styles.button} ${styles.cancelar}`} onClick={alteraCard} >Cancelar</button>
                                </div>
                            }
                            {loading === true &&
                                <div className={styles.loading}>
                                    <Load size={30}/>
                                </div>
                            }
                        </div>
                    ) : (
                        <div className={`${styles.cardCommon} ${styles.addCard}`} onClick={alteraCard}>
                            +
                        </div>
                    )}

                    {atividades.map((atividade, index) => (
                        <Card 
                            id={atividade.id} 
                            nome={atividade.nome} 
                            descricao={atividade.descricao} 
                            data={atividade.data} 
                            setRefresh={setRefresh} 
                            refresh={refresh} 
                        />
                    ))}
                </section>
            </main>
        </SystemPage>
    );
}

export default Atividades;