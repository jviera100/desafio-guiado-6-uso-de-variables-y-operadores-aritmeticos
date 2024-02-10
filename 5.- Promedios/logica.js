function calcular() {
    // Obtener los valores de cada campo de entrada y convertirlos a números.
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var num3 = parseFloat(document.getElementById('numero3').value);
    var num4 = parseFloat(document.getElementById('numero4').value);
    var num5 = parseFloat(document.getElementById('numero5').value);

    // Validar que todos los campos estén llenos y sean números con una única declaración if.
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert('Por favor, ingrese valores válidos en todos los campos.');
        return;
    }

    // Calcular la suma de los números.
    var suma = num1 + num2 + num3 + num4 + num5;

    // Calcular el promedio dividiendo la suma entre la cantidad de números.
    var promedio = suma / 5;

    // Mostrar los resultados en la página web.
    document.getElementById('suma').innerText = suma;
    document.getElementById('promedio').innerText = promedio.toFixed(2); // .toFixed(2) limita el resultado a 2 decimales.
}
