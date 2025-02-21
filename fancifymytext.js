function alertMessage(){
  alert("Hello, world");
}

function makeBigger(){
  document.getElementById("textArea").style.fontSize = "24pt";
  alert("Text is about to get bigger, brace yourself! :)");
}

function ifFancify(){
  if(document.getElementById("fancy").checked){
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
    alert("Get Fancified! Boom!");
  }
  else if(document.getElementById("boring").checked){
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
    alert("Yawn* Boring but okay fine!");
  }
}

function Moo(){
  alert("About to get MOOey in here!");
  document.getElementById("textArea").value = document.getElementById("textArea").value.toUpperCase();
  document.getElementById("textArea").value = document.getElementById("textArea").value.split(".").join("-Moo");

}

function specialAction(){
  alert("Special Action Incoming!");
  document.getElementById("textArea").value = document.getElementById("textArea").value.toUpperCase();
  document.getElementById("textArea").value = document.getElementById("textArea").value.split("").join("    ");
}