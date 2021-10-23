class PersonaView{
    mostrarPersona(elementPadre, data, callback){

        let html='';
        for(const alumno of data){
            let esfuerzo = ((alumno.zona * 100)/alumno.fcmax);
            let id = "";
            id = calcularEsfuerzo(esfuerzo);
            html += `<div class="personasClass" id="${id}">
            <h3>${alumno.dni}</h3>
            <h3>Nombre: ${alumno.nombre}</h3>
            <h3>Apellido: ${alumno.apellido}</h3>
            <h2>FcMax: ${alumno.fcmax}</h2>
            <h2>Zona: ${alumno.zona}</h2>
            <button class='quitarPersona' id="${alumno.dni}" value="${alumno.nombre}">Quitar</button></div>`;
            
        }
        $(elementPadre).html(html);
        $(".personasClass").animate({padding:'30px', right:'250px', opacity:'0.9'},"slow");
        $("#personasAgregadas").fadeIn("slow");
        $('.quitarPersona').click(callback);
        $('#tiposEf').fadeIn("slow");
    }
}

