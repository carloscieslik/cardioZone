/*================FUNCIONES================*/
function tomarValores(){
    //Se asignan los valores de los inputs y select a las variables
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let dni = $("#dni").val();
    let edad = $("#edad").val();
    let sexo = $("#sexo").val();
    let fcReposo = parseInt($("#fcReposo").val());
    let objetivo = parseInt($("#objetivo").val());
    let persona = {nombre, apellido, dni, edad, sexo, fcReposo, objetivo};
    return persona;
}

function calcularFrecuenciayZona(persona){
    let miFrecuencia = Math.round(persona.miFcMax());
    persona.fcmax = miFrecuencia;
    let miZona = Math.round(persona.miIntensidad());
    persona.zona = miZona;
}

function calcularEsfuerzo(esfuerzo){
    switch(true){
        case (esfuerzo >=0 && esfuerzo < 30):
            id = "low";
            return id;
           
        case (esfuerzo >= 30 && esfuerzo < 50):
            id = "normal";
            return id;
            
        case (esfuerzo >= 50 && esfuerzo < 70):
            id = "medium";
            return id;
             
        case (esfuerzo >= 70 && esfuerzo <= 100):
            id = "high";
            return id; 
    }
}

function botonQuitar(e){
    let personaQuitada = e.target;
    console.log(`Quitaste a ${personaQuitada.value}`);
    $(e.target).parent().fadeOut("slow");
    let dniQuitado = $(e.target).attr('id'); 
    quitarPersona(dniQuitado);
    //Si no quedan personas en el array, se deja de mostrar el boton "Quitar todos"
    if (totalPersonas == 0){
        $("#btnQuitarTodos").hide();
        $('#btnVerAlumnos').show();
        $('#tiposEf').fadeOut("slow");
    }
}

function cargarTotal(){
    $("#totalPersonas").html(`<h2>Cantidad Alumnos: ${totalPersonas}</h2>`);
}

function quitarPersona(dniQuitado){
    let almacenados = JSON.parse(localStorage.getItem(dniQuitado));

    if (almacenados != null){
        
        localStorage.removeItem(dniQuitado);
        let i = 0;
        for (const persona of personas){
            if (persona.dni == dniQuitado){
                personas.splice([i], 1);
                totalPersonas = totalPersonas - 1;
                cargarTotal();
            }
            i += 1;
        }
             
    }else{
        totalPersonas = totalPersonas - 1;
        cargarTotal();
    }

}

function limpiarFormulario() {
    $("#myForm")[0].reset();
  }

function quitarTodos(){
    personas = [];
    localStorage.clear();
    $("#personasAgregadas").fadeOut("slow");
    $('#tiposEf').fadeOut("slow");
    totalPersonas = 0;
    cargarTotal();
    $("#btnQuitarTodos").hide();
    $('#btnVerAlumnos').show();
}

//Funcion que verifica que los inputs esten cargados 
function check() {
    let inputs = $("input");
    let filled = true;
    for (var i = 0; i < inputs.length; i++) { 
        if (!inputs[i].value) { 
            filled = false;
        }
    }
    if (filled) {
        return true;
       
    } else {
       return false;
       
    }
}





