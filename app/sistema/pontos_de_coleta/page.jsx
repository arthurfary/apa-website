'use client'

import styles from './page.module.css';

import { useEffect, useState } from 'react';

import SystemPage from '@/app/components/page_type/sistema';
import Load from '@/app/components/load/load';
import Card from './card/card';

import { salvarPonto } from '@/app/functions/salvarPonto';

function Atividades() {

    const [pontos, setPontos] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/obterPontos',{
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => setPontos(data.rows));
    }, [refresh]);

    function alteraCard() {
        setShowAddForm(!showAddForm);
    };

    async function salvarNovoPonto() {
        setLoading(true)
        const nome = document.querySelector('input[name="nome"]').value;
        const rua = document.querySelector('input[name="rua"]').value;
        const numero = document.querySelector('input[name="numero"]').value;
        const cidade = document.querySelector('input[name="cidade"]').value;
        const estado = document.querySelector('input[name="estado"]').value;
        let cep = document.querySelector('input[name="cep"]').value;
    
        if (!nome || !rua || !numero || !cidade || !estado || !cep) {
            alert('Preencha todos os campos!');
            setLoading(false)
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
    
        await salvarPonto(nome, rua, numero, cidade, estado, cep) // Chame a função salvarPonto
            .then( () => {
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
                    <h1>Pontos de Coleta</h1>
                </div>

                <section className={styles.cardGrid}>
                    {showAddForm ? (
                        <div className={styles.addCardForm}>
                            <div className={styles.cardTextInputPair}>
                                <p>Nome:</p>
                                <input className={styles.inputField} type="text" placeholder="Nome (Mercado X, Loja Y ...)" name='nome' />
                            </div>

                            <div className={styles.cardTextInputPair}>
                                <p>Endereço:</p>
                                <input className={styles.inputField} type="text" placeholder="Rua Arapongas" name='rua' />
                            </div>

                            <div className={styles.cardTextInputPair}>
                                <p>Número:</p>
                                <input className={styles.inputField} type="number" placeholder="001" name='numero' />
                            </div>

                            <div className={styles.cardTextInputPair}>
                                <p>Cidade:</p>
                                <input className={styles.inputField} type="text" placeholder="São Bento do Sul" name='cidade' />
                            </div>

                            <div className={styles.cardTextInputPair}>
                                <p>Estado:</p>
                                <input className={styles.inputField} type="text" placeholder="SC" name='estado' maxLength={2}/>
                            </div>

                            <div className={styles.cardTextInputPair}>
                                <p>CEP:</p>
                                <input className={styles.inputField} type="number" placeholder="89288385" name='cep' />
                            </div>

                            {loading === false && 
                                <div>
                                    <button className={`${styles.button} ${styles.salvar}`} onClick={salvarNovoPonto} >Salvar</button>
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

                    {pontos.map((ponto, index) => (
                        <Card 
                            id={ponto.id} 
                            nome={ponto.nome} 
                            rua={ponto.rua} 
                            numero={ponto.numero} 
                            cidade={ponto.cidade} 
                            estado={ponto.estado} 
                            cep={ponto.cep} 
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