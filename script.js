//How many <p> tags
function pGag(){
    var pag = document.getElementsByTagName('p').length;
    alert("There are " + pag + " elements")
}

function ohMeow(){
    var mag = document.getElementById("meow").getElementsByTagName('p').length;
    alert("There are " + mag + " elements in the first div")
}

function bowWow(){
    var dawg = document.getElementById("bark").getElementsByTagName('p').length;
    alert("There are " + dawg + " elements in the second div")
}
