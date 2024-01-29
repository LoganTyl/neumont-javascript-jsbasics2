const pizza = document.getElementById('pizza');
pizza.innerHTML = content;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

page1.style.display = "block";

btn1.addEventListener("click", evt => {
    page1.style.display = "block";
    page2.style.display = "none";
})

btn2.addEventListener("click", evt => {
    page1.style.display = "none";
    page2.style.display = "block";
})