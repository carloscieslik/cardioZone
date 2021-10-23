class PersonaController{
    constructor(personaModel, personaView){
        this.personaModel = personaModel;
        this.personaView = personaView;
        let url = "../datos.json";

        $.get(url, function (respuesta, estado){
            for(const alumno of respuesta){
                personaModel.agregarPersona(alumno);
                personaModel.guardarLocal(alumno.dni, JSON.stringify(alumno));
                totalPersonas = totalPersonas + 1;
            }
            personaView.mostrarPersona("#personasAgregadas", personas,()=>{
                console.log("Se quitó una persona");
            } );
            cargarTotal();
            if (totalPersonas > 0){
                $("#btnQuitarTodos").show();
                $('#tiposEf').show();
            }
            
            $('.quitarPersona').on('click', (e) =>{
                botonQuitar(e);
            })
            limpiarFormulario();
        })
    }
}




class NewPersonaController{
    constructor(personaModel, personaView){
        this.personaModel = personaModel;
        this.personaView = personaView;

        //Se crea el objeto alumno y se llama al método "agregarPersona" del Modelo
        let alumno = tomarValores();
        personaModel.agregarPersona(alumno);
        
        //Se toma la última persona agregada y se llama a los métodos para calcular fcMax y Zona.
        let persona = personas[personas.length-1];
        calcularFrecuenciayZona(persona);
         
        personaModel.guardarLocal(persona.dni, JSON.stringify(persona));
        
        //Se muestra la cantidad de personas
        totalPersonas = totalPersonas + 1;
        cargarTotal();

        //Se muestra/habilita el boton quitar todos(Personas)
        $("#btnQuitarTodos").show();
            
        personaView.mostrarPersona("#personasAgregadas", personas,()=>{
            console.log("Se quitó una persona");
        } );
        
        $('.quitarPersona').on('click', (e) =>{
            botonQuitar(e);
        })
    }
}

