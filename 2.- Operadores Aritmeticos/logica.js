
// Esta funcion realizar un calculo una vez el usuario ingresa 2 valores en los input a los cuales les asignamos una "id" valor1 y valor2
function calcular(operacion) {
    //creamos 2 variables y las parsiamos a floar en cado de que el usuario desea calcular con decimales
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    
    //variable en la cual guardaremos nuestros resultados de operaciones
    var resultado;

    // Validar ingreso de  valores no numericos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos en ambos campos.');
        return;
    }
   // Validar solo valores mayorees a 0
    if (num1==0 || num2==0) {
        alert('Por favor, ingrese números mayor a cero en ambos campos.');
        return;
    }


    // usamos un control switch para las diferentes operaciones del requerimiento
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2; 
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
          //  creamos una segunda validacion ya que no se puede validar por 0 pero con la condicion inicioal esto no es necesario
            // if (num2 === 0) {
            //     alert('No se puede dividir por cero.');
            //     return;
            // }
            resultado = num1 / num2;
            break;
        case 'modulo':
            resultado = num1 % num2;
            break;
        default:
            resultado = 'Operación no definida';
            break;
    }
    //mostramos en pantalla en nuestro resultados en nuestro span de "id" resultado
    document.getElementById('resultado').innerText = resultado;
}
