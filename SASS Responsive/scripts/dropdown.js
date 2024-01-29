const dropElement = document.querySelectorAll("li.dropdown");

const toggleElementList = () => {
    if(dropElement.classList.contains('show')){
        dropElement.classList.remove('show');
    }
    else{
        dropElement.classList.toggle('show');
    }
};

dropElement.addEventListener('click', toggleElementList);