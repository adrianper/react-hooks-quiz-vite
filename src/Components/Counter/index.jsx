/*
    El componente Counter es un contador de clics, aumenta en uno cuando se hace clic en el boton + 
        y disminuye uno cuando se clickea el boton -, el boton "reset" es para regresar el valor a 0

    *Realiza las funciones necesarias para hacer funcionar el componente como se describe
    *Crea un componente igual que el que se describe haciendo uso de Redux
    *Crea un componente igual que el que se describe haciendo uso de useReducer
    *Utiliza diferentes rutas para los tres componentes
*/

import React from 'react'


const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: '0.25em'
    },
    resetButton: {
        gridColumnEnd: 'span 3'
    },
    count: {
        alignSelf: 'center',
        justifySelf: 'center'
    }
}

const Counter = () => {

    return (
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter</h3>

            <button>+</button>
            <span style={styles.count}>0</span>
            <button>-</button>

            <button style={styles.resetButton}>Reset</button>
        </div>
    )
}

export default Counter;