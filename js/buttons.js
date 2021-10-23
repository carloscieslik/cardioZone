//Array donde se almacenan las personas que se van agregando
let personas = [];
//Variable que va contando el total de personas mostradas en pantalla
let totalPersonas = 0;

$(document).ready(function() {
    $('#tiposEf').hide();
  });

//Boton que agrega nuevos alumnos
$("#btnAgregar").on("click", () => {
    let verificar = check();
    if (verificar){
        const newVista = new PersonaView();
        const newModelo = new PersonaModelo();
        const newlistaPersonas = new NewPersonaController(newModelo, newVista);
        limpiarFormulario();
    }else{
        alert("Debe primero ingresar todos los datos");
    }
})

//Boton que agrega alumnos cargados en la base de datos
$("#btnVerAlumnos").on("click", () => {
    const modelo = new PersonaModelo();
    const vista = new PersonaView();
    const listaPersonas = new PersonaController(modelo, vista);
    $('#btnVerAlumnos').hide();
})

//Boton que elimina todos los alumnos cargados en pantalla
$("#btnQuitarTodos").on("click", () => {
    quitarTodos();
})

//Boton que limpia todo el formulario
$("#btnLimpiarForm").on("click", () => {
    limpiarFormulario();
})
