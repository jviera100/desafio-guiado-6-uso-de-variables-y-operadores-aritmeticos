function convertirDias() {
    var diasTotales = parseInt(document.getElementById('dias').value);
    //condición para verificar si el valor ingresado es un número válido y mayor a 0
    if (isNaN(diasTotales) || diasTotales < 1) {
        alert('Por favor, ingrese un número válido mayor a 0.');
        return;
    }


    // Calcula el número total de años dividiendo el total de días por 365.
    // 'Math.floor' se usa para obtener solo la parte entera del resultado,
    // descartando cualquier fracción, lo que representa los años completos

    var años = Math.floor(diasTotales / 365);

    // Calcula los días restantes después de extraer los años completos.
    // Esto se hace utilizando el operador módulo ('%'), que devuelve el resto de la división.

    var diasRestantes = diasTotales % 365;

    // Calcula el número de semanas enteras en los días restantes, nuevamente utilizando 'Math.floor'
    // para obtener solo la parte entera de la división de los días restantes por 7.
    var semanas = Math.floor(diasRestantes / 7);

    // Calcula los días restantes después de extraer las semanas completas,
    // utilizando nuevamente el operador módulo con 7.
    diasRestantes %= 7;

    // Concatenamos una cadena de texto para el resultado, incluyendo años, semanas y días restantes,
    // y se asigna a la variable 'resultado'.
    var resultado = años + " año(s), " + semanas + " semana(s) y " + diasRestantes + " día(s).";
    
    // Esta línea muestra el resultado en el elemento HTML con id 'resultado'.
    document.getElementById('resultado').innerText = resultado;
}
