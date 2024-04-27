const stiklas = document.getElementById('stiklas');

function appendToStiklas(input){
    stiklas.value += input;
}
function trinti(){
    stiklas.value = "";
}
function skaiciuoti(){
    try{
        stiklas.value = eval(stiklas.value);
    }
    catch(e){
        alert("Ne taip suvedete skaičiavimą");
    }
}
