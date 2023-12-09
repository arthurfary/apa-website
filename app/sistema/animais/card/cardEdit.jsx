import React, { useState, useEffect } from 'react';
import styles from './cardEdit.module.css';
import Load from '@/app/components/load/load';
import ImageUpload from '@/app/components/image_upload/image_upload';

function CardEdit({id,nome,raca,descricao,idade,foto,porte,setRefresh,refresh,setEdit,}) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomeEdit: nome,
    racaEdit: raca,
    descricaoEdit: descricao,
    idadeEdit: idade ? idade.toString() : '',
    unidadeTempoEdit: 'semanas',
    imageEdit: foto,
    porteEdit: porte,
  });

  const { nomeEdit, racaEdit, descricaoEdit, idadeEdit, unidadeTempoEdit, imageEdit, porteEdit } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleImageUpload (image){
    setFormData({
      ...formData,
      imageEdit: image,
    });
  };

  async function handleSubmit (e){
    e.preventDefault();
    setLoading(true);

    if (!nomeEdit || !racaEdit || !descricaoEdit || !idadeEdit || !imageEdit || !porteEdit) {
      alert('Preencha todos os campos obrigatórios!');
      setLoading(false);
      return;
    }

    // Converte a idade para dias apenas se a unidade de tempo for diferente de "semanas"
    const idadeDias = unidadeTempoEdit !== 'semanas' ? calcularIdadeEmDias(idadeEdit, unidadeTempoEdit) : idadeEdit;

    await fetch('/api/salvarPet', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        nome: nomeEdit,
        raca: racaEdit,
        descricao: descricaoEdit,
        idade: idadeDias,
        foto: imageEdit,
        porte: porteEdit,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRefresh(!refresh);
        setLoading(false);
        setEdit(false);
      });
  };

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
    <div className={styles.addCardForm}>
      <ImageUpload setImage={handleImageUpload} image={imageEdit} />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Nome"
        name="nomeEdit"
        value={nomeEdit}
        onChange={handleChange}
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Raça"
        name="racaEdit"
        value={racaEdit}
        onChange={handleChange}
      />
      <textarea
        className={styles.textArea}
        placeholder="Descrição (máximo de 100 caracteres)"
        maxLength={100}
        name="descricaoEdit"
        value={descricaoEdit}
        onChange={handleChange}
      />
      <input
        className={styles.inputField}
        type="number"
        placeholder="Idade"
        name="idadeEdit"
        value={idadeEdit}
        onChange={handleChange}
      />
      <select
        className={styles.selectUnidadeTempo}
        name="unidadeTempoEdit"
        value={unidadeTempoEdit}
        onChange={handleChange}
      >
        <option value="semanas">Semanas</option>
        <option value="meses">Meses</option>
        <option value="anos">Anos</option>
      </select>
      <select
        className={styles.selectPorte}
        name="porteEdit"
        value={porteEdit}
        onChange={handleChange}
      >
        <option value="pequeno">Pequeno</option>
        <option value="medio">Médio</option>
        <option value="grande">Grande</option>
      </select>
      {loading === false && (
        <div>
          <button className={`${styles.button} ${styles.salvar}`} onClick={handleSubmit}>
            Salvar
          </button>
          <button className={`${styles.button} ${styles.cancelar}`} onClick={() => setEdit(false)}>
            Cancelar
          </button>
        </div>
      )}
      {loading === true && (
        <div className={styles.loading}>
          <Load size={30} />
        </div>
      )}
    </div>
  );
}

export default CardEdit;