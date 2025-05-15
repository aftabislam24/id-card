let imageInput = document.getElementById("imageInput");
let studentImg = document.getElementById("student-img");
let previewImg = document.getElementById("preview");

imageInput.addEventListener('change',function(){
    const file = this.files[0];
    if(file){
        preview.src = URL.createObjectURL(file);
        studentImg.src = URL.createObjectURL(file);
        console.log(preview.src)
    }
})

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
    document.querySelector(`#idPrint`).style.display="none";
    document.querySelector(`#idCard`).style.width="50%";
    document.querySelector(`#idCard`).style.height="50%";
    document.querySelector(`#idCard`).style.border="2px solid black";
    window.print();
    
}

