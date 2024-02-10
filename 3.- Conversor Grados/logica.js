function convertirTemperaturas() {
    //variable obtenida del imput donde el usuario ingresa un valor
    var celsius = parseFloat(document.getElementById('celsius').value);
    
    //validamos que se ingrese un valor valido
    if (isNaN(celsius)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    //FORMULAS de conversion
    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9/5) + 32;

    //Mostramois los resultados  
    document.getElementById('kelvin').innerText = kelvin.toFixed(2) + ' K';
    document.getElementById('fahrenheit').innerText = fahrenheit.toFixed(2) + ' °F';
}
