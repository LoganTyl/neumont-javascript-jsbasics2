var openModalBtn = document.getElementsByClassName("mdl_open")[0];
var modal = document.getElementsByClassName("mdl")[0];
var closeModalBtn = document.getElementsByClassName("mdl_close")[0];

function openModal() {
    console.log("function received")
    modal.style.display = "block";
    console.log("modal opened")
}

function closeModal() {
    closeModalBtn.parentElement.parentElement.style.display = "none";
}

openModalBtn.onclick = openModal;
closeModalBtn.onclick = closeModal;