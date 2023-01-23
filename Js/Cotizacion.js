//Cloud Firestore Cotizacion
firebase.initializeApp({
    apiKey: "AIzaSyC94F8Q6S_kdFbbRCAN1m6ZDpGGbzUZAZE",
    authDomain: "proyecto1prueba-60473.firebaseapp.com",
    databaseURL: "http://proyecto1prueba-60473.firebaseapp.com",
    projectId: "proyecto1prueba-60473"
    
});
  
var db = firebase.firestore();
  
////////////////////// base64 //////////////////////////////
	// Convert Base64 to Image
	$(document).ready(function() {
		$("#BaseToImage").click(function() {
			//alert($("#response").val());
			document.getElementById('preview').setAttribute('src', $("#image").val());
			$("#preview").show();
		});
	});
	//Convert Image to Base64
	$(document).ready(function() {
		$("#inputFileToLoad").change(function() {
			var filesSelected = document.getElementById("inputFileToLoad").files;
			if (filesSelected.length > 0) {
				var fileToLoad = filesSelected[0];
				var fileReader = new FileReader();
				fileReader.onload = function(fileLoadedEvent) {
					var base64value = fileLoadedEvent.target.result;
					console.log(base64value);
					$("#response").val(base64value);
				};
				fileReader.readAsDataURL(fileToLoad);
			}
		});
	});
///////////////////////////////////////////////////////////

  function crearuser(){
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var Tipo_Vidrio = document.getElementById('Tipo_Vidrio').value;
    var Tamaño_Vidrio = document.getElementById('Tamaño_Vidrio').value;
    var Color_Vidrio = document.getElementById('Color_Vidrio').value;
    var Tipo_Grosor = document.getElementById('Tipo_Grosor').value;
    var Ciudad = document.getElementById('Ciudad').value;
    var direccion_entrega = document.getElementById('direccion_entrega').value;
    var descripcion = document.getElementById('descripcion').value;
    var imagen = document.getElementById('response').value;
  
  
    if(nombre == ''){
  
      alert("El Campo Nombre está vacío");
    }else if(apellido == ''){
      
      alert("El Campo Apellido está vacío");
    }else if(direccion == ''){
  
      alert("El Campo Dirección  esta vacio");
    }else if(telefono == ''){
  
      alert("El Campo Telefono está vacío");
    }else if(email == ''){
  
      alert("El Campo Email está vacío");
    }else if(Tipo_Vidrio == ''){
      alert("Seleccione un Tipo de Vidrio");

    }else if(Tamaño_Vidrio == ''){
      alert("Seleccione el Tamaño de Vidrio");

    }else if(Color_Vidrio == ''){
      
      alert("Seleccione un Color del Vidrio");
    }else if(Tipo_Grosor == ''){
  
      alert("Seleccione un tipo de Grosor");
    }else if(Ciudad == ''){
  
      alert("Seleccione una Ciudad!");
    }else if(direccion_entrega == ''){
  
      alert("El Campo Dirección de Entrega está vacío");
    }else if(descripcion == ''){
  
      alert("El Campo Descripción está vacío");

    }else if(response == ''){
        alert("Suba una Muestra del Vidrio!");

    }else{
  
        db.collection("Cloud").add({
                
            name: nombre,
            apellido: apellido,
            direccion: direccion,
            telefono: telefono,
            email: email,
            Tipo_Vidrio: Tipo_Vidrio,
            Tamaño_Vidrio: Tamaño_Vidrio,
            Color_Vidrio: Color_Vidrio,
            Tipo_Grosor: Tipo_Grosor,
            Ciudad: Ciudad,
            direccion_entrega: direccion_entrega,
            descripcion: descripcion,
            imgb64: imagen
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Información registrada Correctamente", docRef.id);
            
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('direccion').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('email').value = '';
            document.getElementById('Tipo_Vidrio').value = '';
            document.getElementById('Tamaño_Vidrio').value = '';
            document.getElementById('Color_Vidrio').value = '';
            document.getElementById('Tipo_Grosor').value = '';
            document.getElementById('Ciudad').value = '';
            document.getElementById('direccion_entrega').value = '';
            document.getElementById('descripcion').value='';
            document.getElementById('response').value='';

          })
          .catch((error) => {
      
            console.error("Error adding document: ", error);
          });
  
    }
  
  }

function cerrar(){
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert("Sesión terminada");
      window.location.href = "../index.html";
    }).catch((error) => {
      // An error happened.
    });
    //[END auth_sign_out]
}


