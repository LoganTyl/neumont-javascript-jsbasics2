const closeButton = document.getElementsByClassName("alert_close")[0];

const closeAlert = () => {
    closeButton.parentElement.style.display = "none";
}

closeButton.addEventListener('click', closeAlert);