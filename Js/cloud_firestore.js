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

var tabla = document.getElementById('datos');

  db.collection("Cloud").get().then((querySnapshot) => {
      tabla.innerHTML='';
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`);
          tabla.innerHTML +=`
              <tr>
                  <td>${doc.data().name}</td>
                  <td>${doc.data().apellido}</td>
                  <td>${doc.data().direccion}</td>
                  <td>${doc.data().telefono}</td>
                  <td>${doc.data().email}</td>
                  <td>${doc.data().Tipo_Vidrio}</td>
                  <td>${doc.data().Tamaño_Vidrio}</td>
                  <td>${doc.data().Color_Vidrio}</td>
                  <td>${doc.data().Tipo_Grosor}</td>
                  <td>${doc.data().Ciudad}</td>
                  <td>${doc.data().direccion_entrega}</td>
                  <td>${doc.data().descripcion}</td>
                  <td><img width="100"  height="60" class="img-thumbnail" src="${doc.data().imgb64}"/></td>
              </tr>
          `
      });
});
