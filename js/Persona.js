class Persona {

    //Atributos
    //Constructores

    constructor(id,nombre,email,clave,rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.rol = rol;
    }

    //Metodos

    creaObjeto() {
        const idH = document.getElementById("cc").value;
        const nombresH = document.getElementById("nombresApellidos").value;
        const emailH = document.getElementById("email").value;
        const passwordH = document.getElementById("pwd").value;
        const rolH = document.getElementById("roles").value;

        persona.id = idH;
        persona.nombre = nombresH;
        persona.email = emailH;
        persona.clave = passwordH;
        persona.rol = rolH;
        persona.leeObjeto();
    }

    leeObjeto() {
        const tabla = document.getElementById("tableD");
        if(esta(tabla, persona.id)) {
            alert("El documento ya existe");
        } else {
            tabla.innerHTML+="<tr><td>"+persona.id+"</td><td>"+persona.nombre+"</td><td>"+
            persona.email+"</td><td>"+persona.clave+"</td><td>"+persona.rol+"</td></tr>";
        }
        
    }



    esta(tabla, id) {
    
        for (var i = 0; i < tabla.rows.length; i++) {
            if(tabla.rows[i].cells[0].innerText == cc) {
                return true;
            }
            
        }
    
        return false;
    }
}