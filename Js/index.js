window.onload = inicializar;
var formLogin;

function inicializar(){
    formLogin = document.getElementById("form-auth");
    formLogin.addEventListener("submit", login, false);
    //window.history.forward();
}

function login(event){
    event.preventDefault();
    var user = event.target.email.value;
    var pass = event.target.password.value;

    if(user == "admin" && pass == "admin"){
      window.location.href = "./Pages/login-admin.html";
    }else{
      
      firebase.auth().signInWithEmailAndPassword(user, pass)
      .then(function(result){
        //alert("INICIO DE SESION CORRECTO!");  
        window.location.href = "./Pages/login.html";
      })
      .catch(function(error) {
        //alert("INICIO DE SESION INCORRECTO!");
        // Handle error here
        // Codigo jquery
        window.location.href = "./Pages/error.html";
      });
    }
}

// Login with Google
const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', e => {
  console.log('click')
  //e.preventDefault();
  //signInForm.reset();
  //$("#signinModal").modal("hide");

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result => {
      //console.log(result);
      console.log('google sign in')
      window.location.href = "./Pages/login.html";
    })
    .catch(err => {
      console.log(err)
      window.location.href = "./Pages/error.html";
    })
})

// Login with Facebook
const facebookButton = document.querySelector('#facebookLogin');
facebookButton.addEventListener('click', e => {
  console.log('click')
  //e.preventDefault();
  //signInForm.reset();
  //$("#signinModal").modal("hide");

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result => {
      //console.log(result);
      console.log('facebook sign in')
      window.location.href = "./Pages/login.html";
    })
    .catch(err => {
      console.log(err)
      window.location.href = "./Pages/error.html";
    })
})
