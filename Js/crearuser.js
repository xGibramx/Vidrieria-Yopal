//Cloud Firestore
firebase.initializeApp({
  apiKey: "AIzaSyC94F8Q6S_kdFbbRCAN1m6ZDpGGbzUZAZE",
  authDomain: "proyecto1prueba-60473.firebaseapp.com",
  databaseURL: "http://proyecto1prueba-60473.firebaseapp.com",
  projectId: "proyecto1prueba-60473"
});

var db = firebase.firestore();

function crearuser(){

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var tipId = document.getElementById('Tipo_Documento').value;
  var numId = document.getElementById('numId').value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  var tipGen = document.getElementById('Tipo_Genero').value;
  var tipSan = document.getElementById('Tipo_Sangre').value;
  var email = document.getElementById('email').value;
  var email2 = document.getElementById('email2').value;
  var pass = document.getElementById('password').value;
  var pass2 = document.getElementById('password2').value;


  if(nombre == ''){

    alert("El Campo Nombre está vacío");
  }else if(apellido == ''){
    
    alert("El Campo Apellido está vacío");
  }else if(tipId == ''){

    alert("No ha selecionado Tipo de Documento");
  }else if(numId == ''){

    alert("El Campo Identificación está vacío");
  }else if(direccion == ''){

    alert("El Campo Dirección está vacío");
  }else if(telefono == ''){

    alert("El Campo Telefono está vacío");
  }else if(tipGen == ''){
    
    alert("No ha selecionado Tipo de Genero");
  }else if(tipSan == ''){

    alert("No ha selecionado Tipo de Sangre");
  }else if(email == ''){

    alert("El Campo Email está vacío");
  }else if(email2 == ''){

    alert("El Campo Confirmar Email está vacío");
  }else if(pass == ''){

    alert("El Campo Contraseña está vacío");
  }else if(pass2 == ''){

    alert("El Campo Confirmar Contraseña está vacío");
  }else{

    if(email == email2){

      if(pass == pass2){
        //Authentication
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) =>{
          //Signed in
          var user = userCredential.user;
          //...

          //Cloud Firestore
          db.collection("Cloud-Usuarios").add({
        
            name: nombre,
            lastname: apellido,
            tipId: tipId,
            numId: numId,
            direccion: direccion,
            telefono: telefono,
            tipGen: tipGen,
            tipSan: tipSan,
            email: email,
            pass: pass
          })
          .then((docRef) => {

            console.log("Document written with ID: ", docRef.id);
            alert("Información registrada Correctamente", docRef.id);
        
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('Tipo_Documento').value = '';
            document.getElementById('numId').value = '';
            document.getElementById('direccion').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('Tipo_Genero').value = '';
            document.getElementById('Tipo_Sangre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('email2').value = '';
            document.getElementById('password').value = '';
            document.getElementById('password2').value = '';
      
          })
          .catch((error) => {
  
            console.error("Error adding document: ", error);
          });
  
        })
        .catch((error) => {
      
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode == 'auth/weak-password'){
          
            alert("The password is too weak!");
          }else{

            alert(errorMessage);
          }

          console.log(error);
      //..
        });
      }else{
              
        alert("LAS CONTRASEÑAS NO SON IGUALES!!!!");
      }
 
    }else{
      
      alert("LOS CORREOS NO SON IGUALES!!!!");   
    }

  }

}

