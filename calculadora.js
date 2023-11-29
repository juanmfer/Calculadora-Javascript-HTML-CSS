// Juan Manuel Fernandez
// https://github.com/juanmfer/
// calculadora en javascript // javascript calculator
const salida = document.getElementById('salida');
// limpia la salida al presionar C // clear output to press C
const limpiarSalida = () => salida.textContent = '';
// inserta el numero en la salida // insert number in output
const insertarSalida = num => salida.textContent += num;
// elimina el ultimo numero de la salida // delete last number from output
const eliminarNum = () => salida.textContent = salida.textContent.substring(0, salida.textContent.length - 1);
// calcula el resultado de la salida // calculate result of output
const resultado = () => {
    if (salida.textContent === '.') {
      return;
    }
    try {
      salida.textContent = eval(salida.textContent);
    } catch (error) {
      //console.error('Error:', error);
      salida.textContent = 'Error';
    }
};