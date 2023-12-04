import styles from './load.module.css';

function Load({size}) {

    // Converter o tamanho em pixels para uma string
    const sizeInPx = `${size}px`;

    // Criar um objeto de estilo para definir a largura e altura
    const loaderStyle = {
        width: sizeInPx,
        height: sizeInPx,
    };

    return (
        <span className={styles.loader} style={loaderStyle} />
    );
}

export default Load;