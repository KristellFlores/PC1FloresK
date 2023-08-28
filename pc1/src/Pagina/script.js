function calcularPago() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const categoria = document.getElementById("categoria").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const equipos = document.querySelectorAll('input[name="equipo"]:checked');
    const temporadas = parseInt(document.getElementById("temporadas").value);
    const faltas = document.getElementById("faltas").value; 

    let totalEquipos = 0;
    equipos.forEach((equipo) => {
        totalEquipos += 300;
    });

    const impuesto = totalEquipos * 0.19;
    const totalPagar = (totalEquipos + impuesto) * temporadas;

    const resultado = `
        Jugador: ${nombre}<br>
        Edad: ${edad}<br>
        Categoría: ${categoria}<br>
        Género: ${genero}<br>
        Equipos: ${Array.from(equipos).map((equipo) => equipo.value).join(", ")}<br>
        Temporadas: ${temporadas}<br>
        ¿Ha tenido faltas?: ${faltas}<br>
        Total a pagar: ${totalPagar.toFixed(2)} soles
    `;

    document.getElementById("resultado").innerHTML = resultado;
}