function activarTab(unTab) {
    try {
        //Los elementos div de todas las pestañas están todos juntos en una
        //única celda de la segunda fila de la tabla de estructura de pestañas.
        //Hemos de buscar la seleccionada, ponerle display block y al resto
        //ponerle display none.
        var id = unTab.id;
        if (id) {
            var tr = unTab.parentNode || unTab.parentElement;
            var tbody = tr.parentNode || tr.parentElement;
            var table = tbody.parentNode || tbody.parentElement;
            //Pestañas en varias filas
            if (table.getAttribute("data-filas") != null) {
                var filas = tbody.getElementsByTagName("tr");
                var filaDiv = filas[filas.length - 1];
                tbody.insertBefore(tr, filaDiv);
            }
            //Para compatibilizar con la versión anterior, si la tabla no tiene los
            //atributos data-min y data-max le ponemos los valores que tenían antes del
            //cambio de versión.
            var desde = table.getAttribute("data-min");
            if (desde == null)
                desde = 0;
            var hasta = table.getAttribute("data-max");
            if (hasta == null)
                hasta = MAXTABS;
            var idTab = id.split("tabck-");
            var numTab = parseInt(idTab[1]);
            //Las "tabdiv" son los bloques interiores mientras que los "tabck"
            //son las pestañas.
            var esteTabDiv = document.getElementById("tabdiv-" + numTab);
            for (var i = desde; i <= hasta; i++) {
                var tabdiv = document.getElementById("tabdiv-" + i);
                if (tabdiv) {
                    var tabck = document.getElementById("tabck-" + i);
                    if (tabdiv.id == esteTabDiv.id) {
                        tabdiv.style.display = "block";
                        tabck.style.color = "slategrey";
                        tabck.style.backgroundColor = "rgb(235, 235, 225)";
                        tabck.style.borderBottomColor = "rgb(235, 235, 225)";
                    } else {
                        tabdiv.style.display = "none";
                        tabck.style.color = "white";
                        tabck.style.backgroundColor = "gray";
                        tabck.style.borderBottomColor = "gray";
                    }
                }
            }
        }
    } catch (e) {
        alert("Error al activar una pestaña, detalle técnico: " + e.message);
    }
}
function eliminar(id) {
    var elDiv = document.getElementById(id); //se define la variable "elDiv" igual a nuestro div
    elDiv.style.display = 'none';
    //window.open("/home/ignacio/Escritorio/ProyectoUno/public_html/DashBoard.html");
    //window.close();

}
function oculta(id) {
    var elDiv = document.getElementById(id); //se define la variable "elDiv" igual a nuestro div
    elDiv.style.display = 'none'; //damos un atributo display:none que oculta el div     
}
function confirmacion()
{
    var txt;
    var r = confirm("¿Realmente desea eliminar el registro seleccionado?");
    if (r == true) {
        txt = "Registro eliminado con éxito!";
        alert(txt);
    }
    return txt;
}
function ocultaTodo()
{
    var elDiv = document.getElementById('mensajecarreraeliminad');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('mensajecarreraagregada');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('mensajecarreramodificada');
    elDiv.style.display = 'none';


    var elDiv = document.getElementById('pestannaDos');
    elDiv.style.display = 'none';
    ///////////////
    var elDiv = document.getElementById('pestannaTres');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('pestannaCuatro');
    elDiv.style.display = 'none';
    //////////////

    var elDiv = document.getElementById('mensajemodificado');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('mensajeeliminado');
    elDiv.style.display = 'none';


    var elDiv = document.getElementById('editarusuario');
    elDiv.style.display = 'none';
    ///////////////
    var elDiv = document.getElementById('agregarusuario');
    elDiv.style.display = 'none';
    /////////////
    var elDiv = document.getElementById('exitoagregadoestudiante');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('editarcarrera');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('agregarcarrera');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('exitoeliminadoestudiante');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('exitomodificadoestudiante');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('agregarestudiante');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('editarEstudiante');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('detallesestudiante');
    elDiv.style.display = 'none';

    var elDiv = document.getElementById('mensajeagregado');
    elDiv.style.display = 'none';
}
function logear() {
    window.open("C:/ProyectoUno/public_html/DashBoard.html");
    window.close();
}
function muestra(id) {
    var elDiv = document.getElementById(id); //se define la variable "elDiv" igual a nuestro div
    elDiv.style.display = 'block'; //damos un atributo display:block que  el div     
}
function nombreBoton(esto)
{
}
function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
            if (i == 2 && j == 1) {
                break
            } else {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}
function resultado()
{
    window.open("C:/ProyectoUno/public_html/SearchResult.html");
    window.close();
}
function retroceder()
{
    window.open("C:/ProyectoUno/public_html/WebPublic.html");
    window.close();
}