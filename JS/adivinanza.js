const btnComenzar = document.getElementById('btnComenzar');
const btnEnviar = document.getElementById('btnEnviar');
const btnReiniciar = document.getElementById('btnReiniciar');

const _txtA = document.getElementById('txtA');
const feedback = document.getElementById('feedback');
let _numero = 0; 

function generarNumeroRandom() {
    _numero = Math.floor(Math.random() * 100) + 1;
    console.log('Número generado:', _numero); 
    feedback.textContent = ''; 
}

function validarEntrada(valor) {
    const numero = parseInt(valor, 10);
    if (numero >= 1 && numero <= 100) {
        return numero;
    } else {
        return 'Error: Ingrese un número válido entre 1 y 100';
    }
}

btnComenzar.addEventListener('click', () => {
    generarNumeroRandom();
});

btnEnviar.addEventListener('click', () => {
    const valorEntrada = _txtA.value;
    const validacion = validarEntrada(valorEntrada);
    if (typeof validacion === 'number') {
        if (validacion === _numero) {
            feedback.textContent = '¡Felicidades! Adivinaste el número.';
        } else if (Math.abs(validacion - _numero) <= 10) {
            feedback.textContent = '¡Muy cerca! Intenta de nuevo.';
        } else if (Math.abs(validacion - _numero) <= 20) {
            feedback.textContent = 'Cerca. Sigue intentando.';
        } else {
            feedback.textContent = 'Lejos. Prueba con otro número.';
        }
    } else {
        feedback.textContent = validacion;
    }
});

btnReiniciar.addEventListener('click', () => {
    _txtA.value = '';
    _numero = 0;
    feedback.textContent = 'Juego reiniciado. Presiona "Comenzar" para generar un nuevo número.';
});
