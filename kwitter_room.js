
var firebaseConfig = {
      apiKey: "AIzaSyDyPAdu2m7k_ODS2lbJOjopGoCgucggTGs",
      authDomain: "kwitter-app-409dc.firebaseapp.com",
      databaseURL: "https://kwitter-app-409dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-409dc",
      storageBucket: "kwitter-app-409dc.appspot.com",
      messagingSenderId: "369900090796",
      appId: "1:369900090796:web:673ba7b10c60fac453f609",
      measurementId: "G-B4H3CBHCQJ"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name+"!";
function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}