//Enviar datos
function enviardatos() {
    var cc = document.getElementById("cc").value;
    var nombres = document.getElementById("nombresApellidos").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var rol = document.getElementById("roles").value;
    
    var tabla = document.getElementById("tableD");

    if(esta(tabla, cc)) {
        alert("El documento ya existe");
    } else {
        document.getElementById("tableD").innerHTML+="<tr><td>"+cc+"</td><td>"+
        nombres+"</td><td>"+email+"</td><td>"+password+"</td><td>"+rol+"</td></tr>";
        datos.push(cc);
    }

}

function esta(tabla, cc) {
    
    for (var i = 0; i < tabla.rows.length; i++) {
        if(tabla.rows[i].cells[0].innerText == cc) {
            return true;
        }
        
    }

    return false;
}