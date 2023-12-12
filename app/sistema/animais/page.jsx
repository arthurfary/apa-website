'use client'

import React, { useEffect, useState } from 'react';
import SystemPage from '@/app/components/page_type/sistema';
import Load from '@/app/components/load/load';
import Card from './card/card';
import ImageUpload from '@/app/components/image_upload/image_upload';

import styles from './page.module.css'; // Substitua pelo caminho correto do seu arquivo de estilos

function Animais() {
    const [animais, setAnimais] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [image, setImage] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idade, setIdade] = useState('');
    const [unidadeTempo, setUnidadeTempo] = useState('semanas');
    const [porte, setPorte] = useState('pequeno'); // Novo estado para o porte

    useEffect(() => {
        fetch('/api/obterPets', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => setAnimais(data.rows));
    }, [refresh]);

    // Função para alternar entre a exibição do formulário e o botão de adição
    function alteraCard() {
        setShowAddForm(!showAddForm);
        setImage(null);
        setNome('');
        setRaca('');
        setDescricao('');
        setIdade('');
        setUnidadeTempo('anos');
        setPorte('pequeno'); // Defina o porte de volta para o valor padrão 'pequeno'
    }

    async function salvarNovo(e) {
        e.preventDefault()
        setLoading(true);

        if (!nome || !raca || !descricao || !image || !porte) {
            alert('Preencha todos os campos obrigatórios!');
            setLoading(false);
            return;
        }

        const idadeDias = idade ? calcularIdadeEmDias(idade, unidadeTempo) : null;

        await fetch('/api/salvarPet', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                raca,
                descricao,
                idade: idadeDias,
                foto: image,
                porte
            })
        })
        .then(response => response.json())
        .then(data => {
            setRefresh(!refresh);
            alteraCard();
            setLoading(false);
        })
        .catch(error => {
            console.error('Erro ao salvar:', error);
            setLoading(false);
        });
    }

    function calcularIdadeEmDias(idade, unidadeTempo) {
        const idadeNumero = parseFloat(idade);
        let multiplicador = 1;

        if (unidadeTempo === 'meses') {
            multiplicador = 30;
        } else if (unidadeTempo === 'anos') {
            multiplicador = 365;
        }

        return idadeNumero * multiplicador;
    }

    return (
        <SystemPage>
            <main className={styles.main}>
                <div>
                    <h1>Animais para Adoção</h1>
                </div>

                <section className={styles.cardGrid}>
                    {showAddForm ? (
                        <div className={styles.addCard}>
                        <form className={styles.addCardForm}>
                            <ImageUpload setImage={setImage} image={image} />
                            <div>
                                <input
                                    className={styles.inputField}
                                    type="text"
                                    placeholder="Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <input
                                    className={styles.inputField}
                                    type="text"
                                    placeholder="Raça"
                                    value={raca}
                                    onChange={(e) => setRaca(e.target.value)}
                                />
                                <textarea
                                    className={styles.textArea}
                                    placeholder="Descrição (máximo de 100 caracteres)"
                                    maxLength={100}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.inputField}
                                        type="number"
                                        placeholder="Idade"
                                        value={idade}
                                        onChange={(e) => setIdade(e.target.value)}
                                        max={9999}
                                        maxLength={4}
                                    />
                                    <select
                                        className={styles.selectUnidadeTempo}
                                        value={unidadeTempo}
                                        onChange={(e) => setUnidadeTempo(e.target.value)}
                                    >
                                        <option value="semanas">Semanas</option>
                                        <option value="meses">Meses</option>
                                        <option value="anos">Anos</option>
                                    </select>
                                </div>
                                <select
                                    className={styles.selectPorte}
                                    value={porte}
                                    onChange={(e) => setPorte(e.target.value)}
                                >
                                    <option value="Pequeno">Pequeno</option>
                                    <option value="Medio">Médio</option>
                                    <option value="Grande">Grande</option>
                                </select>
                            </div>
                            {loading === false && (
                                <div>
                                    <button className={`${styles.button} ${styles.salvar}`} onClick={salvarNovo}>
                                        Salvar
                                    </button>
                                    <button className={`${styles.button} ${styles.cancelar}`} onClick={alteraCard}>
                                        Cancelar
                                    </button>
                                </div>
                            )}
                            {loading === true && (
                                <div className={styles.loading}>
                                    <Load size={30} />
                                </div>
                            )}
                        </form>
                    </div>
                    ) : (
                        <div className={styles.cardAdd} onClick={alteraCard}>
                            <span>+</span>
                        </div>
                    )}

                    {animais.map((animal, index) => (
                        <Card
                            key={index}
                            id={animal.id}
                            nome={animal.nome}
                            raca={animal.raca}
                            descricao={animal.descricao}
                            idade={animal.idade}
                            foto={animal.foto}
                            porte={animal.porte}
                            setRefresh={setRefresh}
                            refresh={refresh}
                        />
                    ))}
                    
                </section>
            </main>
        </SystemPage>
    );
}

export default Animais;