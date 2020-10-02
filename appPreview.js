
function analyse() {
    var items = ["competitive", "young", "salesman", "he/she", "recent", "degree", "Maternity pay", "champagne", "salary"];
    items.forEach(bold);
    
    function bold(item){
        var x = document.getElementById("exPara").innerHTML;
        x1 = x.replace(item, "<b>" + item +"</b>");
        console.log(item);
        document.getElementById("exPara").innerHTML = x1;
    };
    
    var element = document.getElementById("suggests");
    element.classList.remove("noDisplay");
}

