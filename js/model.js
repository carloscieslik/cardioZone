
/*=======================CLASE PERSONA=======================*/
class Persona {
    constructor(persona){
        this.nombre = persona.nombre;
        this.apellido = persona.apellido;
        this.dni = persona.dni;
        this.edad = persona.edad;
        this.sexo = persona.sexo;
        this.fcReposo = persona.fcReposo;
        this.objetivo = persona.objetivo;
        this.fcmax = persona.fcmax;
        this.zona = persona.zona;
    }
    miFcMax(){
        const numHombre = 220;
        const numMujer = 226;
        let fcmax = 0;
        if (this.sexo == "Hombre"){
        
            fcmax = numHombre - this.edad;
          
        }else{
      
            fcmax = numMujer - this.edad;
      
         }
        return fcmax

    }
    miIntensidad(){
        let intensidad = ((this.fcmax-this.fcReposo) * (this.objetivo/100)) + this.fcReposo;
        return intensidad;
    }
}

class PersonaModelo{
    constructor(){
        let claves = Object.keys(localStorage);
        let personas = [];
        claves.forEach(clave => {
            let valor = JSON.parse(localStorage.getItem(parseInt(clave)));
            personas.push(valor);
        });
        this.personas = personas.map(persona => new Persona(persona));
    }
    
    guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor);
    }

    agregarPersona(persona){
        personas.push(new Persona(persona));
    }  
}

