function calcularDeterminante() {
    // Obtener valores de la matriz
    let A11 = parseFloat(document.getElementById("A11").value);
    let A12 = parseFloat(document.getElementById("A12").value);
    let A13 = parseFloat(document.getElementById("A13").value);

    let A21 = parseFloat(document.getElementById("A21").value);
    let A22 = parseFloat(document.getElementById("A22").value);
    let A23 = parseFloat(document.getElementById("A23").value);

    let A31 = parseFloat(document.getElementById("A31").value);
    let A32 = parseFloat(document.getElementById("A32").value);
    let A33 = parseFloat(document.getElementById("A33").value);

    // Fórmula del determinante
    let determinante =
        A11 * (A22 * A33 - A23 * A32) -
        A12 * (A21 * A33 - A23 * A31) +
        A13 * (A21 * A32 - A22 * A31);

    // Mostrar resultado
    document.getElementById("resultado").innerText =
        "Determinante = " + determinante;
}
