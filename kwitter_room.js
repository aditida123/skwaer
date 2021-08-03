var firebaseConfig = {
  apiKey: "AIzaSyD0L0zoqlYZUkXDlHUZDyBHlqh3WCSwYz8",
  authDomain: "kwitter-47ea0.firebaseapp.com",
  databaseURL: "https://kwitter-47ea0-default-rtdb.firebaseio.com",
  projectId: "kwitter-47ea0",
  storageBucket: "kwitter-47ea0.appspot.com",
  messagingSenderId: "87206338092",
  appId: "1:87206338092:web:10295b4fc2ed4361023b89",
  measurementId: "G-BLJRED19L7"
};
// Initialize Firebase
firebase.initializeA
pp(firebaseConfig);
firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";



}
