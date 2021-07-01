/* .js files add interaction to your website */

var displayName=document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text+ ", did you know that greenhouse gases keep heat close to the earth's surface making it livable for humans and animals."
}
