
function analyse() {
    var x = document.getElementById("exPara").innerHTML;
    console.log(x);
    x1 = x.replace(/Lorem/gi, "<b> Lorem </b>");
    console.log(x1);
    document.getElementById("exPara").innerHTML = x1;
}

