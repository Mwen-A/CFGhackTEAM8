
function analyse() {
    var x = document.getElementById("exPara").innerHTML;
    var element = document.getElementById("suggests");
    x1 = x.replace(/Lorem/gi, "<b> Lorem </b>");
    document.getElementById("exPara").innerHTML = x1;

    
    element.classList.remove("noDisplay");
}

