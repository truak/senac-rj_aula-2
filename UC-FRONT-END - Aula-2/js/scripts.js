function calcularAreaCirculo() {

    let raio = parseFloat(prompt("Insira o raio do círculo em metros"));
    const area = Math.PI * Math.pow(raio, 2);
    alert(area.toFixed(2) + "m²");
    
}

function calcularAreaTriangulo() {

    let base = parseFloat(prompt("Insira a base do triângulo em metros"));
    let altura = parseFloat(prompt("Insira a altura do triângulo em metros"));
    
    area = base * altura / 2;
    
    alert(area.toFixed(2) + "m²");
    
}