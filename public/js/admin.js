// *********************************** Vista Admin cambio de parametros de empresa ********************************************

// function mostrarEmpresa(event) {
//     let url = window.location.href;
//     let urlFija = '/editarEmpresa/mostrarDatos?empresa='+event.target.name;//document.getElementsByName('empresa')[0].value;
//     let urlCompleta = url + urlFija;
//     let http = new XMLHttpRequest();
//     http.open("GET", urlCompleta, true);
//     http.send();
//
//
//     http.onreadystatechange = function () {
//         if (http.readyState === 4) {
//             // Se ha recibido la respuesta.
//             if (http.status === 200) {
//                 // Aquí escribiremos lo que queremos que
//                 // se ejecute tras recibir la respuesta
//                 let datosDoc = JSON.parse(http.responseText);
//                 document.getElementById('inputId').value = datosDoc[0]['id'];
//                 document.getElementById('inputNombre').value = datosDoc[0]['nombre'];
//                 document.getElementById('inputEmail').value = datosDoc[0]['email'];
//                 document.getElementById('inputTelefono').value = datosDoc[0]['telefono'];
//                 document.getElementById('inputNif').value = datosDoc[0]['nif'];
//             } else {
//                 // Ha ocurrido un error
//                 alert(
//                     "Error:" + http.statusText);
//             }
//         }
//     }
// }

function mostrarEmpresa(event){
    var empresa_id = event.target.name;
    $('#inputId').val(empresa_id);
    $('#inputNombre').val($('#'+empresa_id+'_nombre').text());
    $('#inputEmail').val($('#'+empresa_id+'_email').text());
    $('#inputTelefono').val($('#'+empresa_id+'_telefono').text());
    $('#inputNif').val($('#'+empresa_id+'_nif').text());
}

$( document ).ready( function() {
    $("#editarEmpresaReparto").submit(function (event) {
        event.preventDefault();

        let datosFormulario = $(this).serialize();
        let url = $(this).attr("action");

        $.post(url, datosFormulario, function (respuesta) {
            //recoger valores en formulario
            let id = $("[id='inputId']").val();
            let email = $("[id='inputEmail']").val();
            let telefono = $("[id='inputTelefono']").val();
            let nif = $("[id='inputNif']").val();

            //escribir valores en tabla
            $('#' + id + '_email').text(email);
            $('#' + id + '_telefono').text(telefono);
            $('#' + id + '_nif').text(nif);

            //cerrar modal
            $('#modalEditarEmpresa').modal('toggle');
        });
    });

});


// Validacion registrar empresa

function limpiar() {
   var error = document.getElementById("erroresRegisterEmpresa");
   error.removeChild(error.childNodes[0]);

}

function validateRegisterEmpresa(event) {

    var elementos = document.getElementById("formRegistroEmpresa").elements;
    var errores = "";

    for (var i=0;i<elementos.length;i++) {
        var eInput = elementos[i];
        if (eInput.name === "nombre") {
            if (eInput.value.length === 0) {
                errores += "<p>Debe introducir su Nombre</p>";
            }
        }
        if (eInput.name === "email") {
            if (eInput.value.length === 0) {
                errores += "<p>Debe introducir su Email</p>";
            }
        }
        if (eInput.name === "telefono") {
            if (eInput.value.length !== 9 ) {
                errores += "<p>Introduzca un teléfono de 9 caracteres</p>";
            }
        }
        if (eInput.name === "nif") {
            if (eInput.value.length !== 9 ) {
                errores += "<p>Introduzca un nif correcto</p>";
            }
        }
        if (eInput.name === "password") {
            if (eInput.value.length < 6 ) {
                errores += "<p>La contraseña debe tener mínimo 6 caracteres</p>";
            }
        }


        if(errores!=""){
            event.preventDefault();
            document.getElementById('erroresRegisterEmpresa').innerHTML="<div id='error' class='alert alert-danger'>"+errores+"</div>";
        }


    }

    
}



// *********************************** Vista Admin cambio de parametros de usuario ********************************************

// function editarUsuario(event) {
//     let url = window.location.href;
//     let urlFija = '/editarUsuario?id='+event.target.name;//document.getElementsByName('empresa')[0].value;
//     let urlCompleta = url + urlFija;
//     let http = new XMLHttpRequest();
//     http.open("GET", urlCompleta, true);
//     http.send();
//
//
//     http.onreadystatechange = function () {
//         if (http.readyState === 4) {
//             // Se ha recibido la respuesta.
//             if (http.status === 200) {
//                 // Aquí escribiremos lo que queremos que
//                 // se ejecute tras recibir la respuesta
//                 let datosUser = JSON.parse(http.responseText);
//                 console.log(datosUser);
//                 document.getElementById('userId').value = datosUser[0]['id'];
//                 document.getElementById('userNombre').value = datosUser[0]['name'];
//                 document.getElementById('userApellido').value = datosUser[0]['surname'];
//                 document.getElementById('userEmail').value = datosUser[0]['email'];
//                 let sex = document.getElementsByName('userSex');
//                 for (let i=0; i<sex.length;i++){
//                     if(sex[i].value.toLowerCase() == datosUser[0]['sex'].toLowerCase()){
//                         document.getElementById('user_'+sex[i].value.toLowerCase()).checked = true;
//                     }
//                 }
//                 let suscripciones = document.querySelectorAll('form #userSuscripcion option');
//                 for (let i=0; i<suscripciones.length;i++){
//                     if(suscripciones[i].value == datosUser[0]['suscripcion_id']){
//                         document.getElementById('userSuscripcion').value= suscripciones[i].value;
//                     }
//                 }
//
//
//             } else {
//                 // Ha ocurrido un error
//                 alert(
//                     "Error:" + http.statusText);
//             }
//         }
//     }
//
// } //ESTA SE SUSTITUYE POR mostrarUsuario() justo abajo

function mostrarUsuario(event){
    let usuario_id= event.target.name;
    $('#userId').val(usuario_id);
    $('#userNombre').val($("#usuario_"+usuario_id+"_nombre").text());
    $('#userApellido').val($("#usuario_"+usuario_id+"_apellido").text());
    $('#userNombre').val($("#usuario_"+usuario_id+"_nombre").text());
    $('#userEmail').val($("#usuario_"+usuario_id+"_email").text());
    $('#userTelefono').val($("#usuario_"+usuario_id+"_telefono").text());
    let sexo_opciones = document.getElementsByName('userSex');
    let sexo = $("#usuario_"+usuario_id+"_sexo").text();
    for (let i=0;i<sexo_opciones.length; i++){
        if (sexo_opciones[i].value.toLowerCase() == sexo.toLowerCase()){
            document.getElementById('user_'+sexo_opciones[i].value.toLowerCase()).checked = true;
        }
    }
    let suscripciones = $('form #userSuscripcion option');
    for (let i=0; i<suscripciones.length; i++){
        if (suscripciones[i].textContent == $("#usuario_"+usuario_id+"_suscripcion").text()){
            $('#userSuscripcion').val(suscripciones[i].value);
        }
    }
}

$( document ).ready( function() {
    $("#editarUsuario form").submit(function (event) {
        event.preventDefault();

        let datosFormulario = $(this).serialize();

        let url = $(this).attr("action");

        $.post(url, datosFormulario, function (respuesta) {
            //recoger valores en formulario
            let id = $("#userId").val();
            let nombre = $("#userNombre").val();
            let apellido = $("#userApellido").val();
            let email = $("#userEmail").val();
            let telefono = $("#userTelefono").val();
            let sexo = $("input[name='userSex']:checked").val();
            let suscripcion = $("#userSuscripcion").val();
            let suscripcionTxt;
            switch(suscripcion) {
                case "1":
                    suscripcionTxt = "Gratis";
                    break;
                case "2":
                    suscripcionTxt = "Básico";
                    break;
                case "3":
                    suscripcionTxt = "Premium";
                    break;
                case "4":
                    suscripcionTxt = "Empresa";
                    break;
            }

            //escribir valores en tabla
            $('#usuario_' + id + '_nombre').text(nombre);
            $('#usuario_' + id + '_apellido').text(apellido);
            $('#usuario_' + id + '_email').text(email);
            $('#usuario_' + id + '_telefono').text(telefono);
            $('#usuario_' + id + '_sexo').text(sexo);
            $('#usuario_' + id + '_suscripcion').text(suscripcionTxt);

            //cerrar modal
            $('#editarUsuario').modal('toggle');
        });
    });
});

// *********************************** Vista Admin cambio de estado en la taquilla ********************************************

function estadoTaquilla(event, id){
    //event.target.value;

    let url = window.location.href;
    let urlFija = "/editarEstado?ids="+id+"&event="+event.target.value;//document.getElementsByName('empresa')[0].value;
    let urlCompleta = url + urlFija;
    let http = new XMLHttpRequest();
    http.open("GET", urlCompleta, true);
    http.send();


    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            // Se ha recibido la respuesta.
            if (http.status === 200) {
                $.notify("El estado de la taquilla ha sido cambiado satisfactoriamente", "success");
            } else {
                // Ha ocurrido un error
                alert(
                    "Error:" + http.statusText);
            }
        }
    }

}



// *********************************** Vista Admin cambio de parametros oficina********************************************

function mostrarOficina(event){
    var oficina_id = event.target.name;
    $('#oficinaId').val(oficina_id);
    $('#oficinaCiudad').val($("#oficina_"+oficina_id+"_ciudad").text());
    $('#oficinaCalle').val($("#oficina_"+oficina_id+"_calle").text());
    $('#oficinaNum').val($("#oficina_"+oficina_id+"_num").text());
}


$( document ).ready(function(){
    $("#editarOficina").on("submit", function(event){
        event.preventDefault();
        let datosFormulario = $(this).serialize();

        let url = $(this).attr("action");

        $.post(url, datosFormulario, function (respuesta) {
            //recoger valores en formulario
            let id = $("#oficinaId").val();
            let ciudad = $("#oficinaCiudad").val();
            let calle = $("#oficinaCalle").val();
            let numero = $("#oficinaNum").val();

            //escribir valores en tabla
            $('#oficina_' + id + '_ciudad').text(ciudad);
            $('#oficina_' + id + '_calle').text(calle);
            $('#oficina_' + id + '_num').text(numero);

            //cerrar modal
            $('#editarOficinaDiv').modal('toggle');
        });
    })
});



// *********************************** Sweet Alert********************************************

function sweetAlertSimple(titulo, texto, icono) {
    swal({
        title: titulo,
        text: texto,
        type: icono
    });
}



// var activable = $(".activable");
// activable.on("click", function(event){
//     $("li[name="+event.target.name+"]").addClass("active");
//
// });

// $(document).ready(function () {
//     $('.sidebar-menu li a').click(function(e) {
//
//         $('.sidebar-menu li.active').removeClass('active');
//
//         var $parent = $(this).parent();
//         $parent.addClass('active');
//         //e.preventDefault();
//     });
// });

