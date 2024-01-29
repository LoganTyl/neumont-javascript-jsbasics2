const toolTip = document.getElementsByClassName("tooltip")[0];
const toolTipText = document.getElementsByClassName("tooltipContent")[0];

const showTooltip = () => {
    toolTipText.style.visibility = "visible";
    toolTipText.style.opacity = 1;
}

const removeTooltip = () => {
    toolTipText.style.visibility = "hidden";
}

toolTip.addEventListener("mouseover", showTooltip);
toolTip.addEventListener("mouseout", removeTooltip);