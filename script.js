
let is_dark = false;

function ChangeMode(){
    var button = document.getElementById("ChangeMode_button");
    if (is_dark){
        button.innerText = "☀️";
        is_dark = false;
    }
    else{
        button.innerText = "🌙";
        is_dark = true;
    }
}