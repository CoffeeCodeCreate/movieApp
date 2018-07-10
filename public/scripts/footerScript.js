var footer = document.getElementById("contactMe");

footer.addEventListener("click", function(){
    if(!footer.classList.contains("contactFooterActive"))
    {
        footer.classList.add("contactFooterActive");
        footer.classList.remove("contactFooterInactive");
    }
    else
    {
        footer.classList.add("contactFooterInactive");
        footer.classList.remove("contactFooterActive");
    }
});