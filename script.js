function doClear(){
    document.getElementById("schoolName").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("year").value = "";
    document.getElementById("roll.no").value = "";
    document.getElementById("contact.no").value = "";
}
function getIdCard(){
    document.getElementById("fill-form").classList.add("hide");
    document.getElementById("idCard").style.display="block";
    document.getElementById("idNav").innerText = document.getElementById("schoolName").value;
    document.getElementById("studentNameVal").innerText = document.getElementById("studentName").value;
    document.getElementById("yearVal").innerText = document.getElementById("year").value;
    document.getElementById("rollNoVal").innerText = document.getElementById("roll.no").value;
    document.getElementById("contactNoVal").innerText = document.getElementById("contact.no").value;

    
}

function printId(){
    window.print();
}