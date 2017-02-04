var search = document.querySelector('.fa-search');
var input = document.getElementById('inputSearch');
input.style.display = "none";

search.addEventListener('click', function () {
    if(search.style.display != "none") {
        input.style.display = "block";
        search.style.display = "none";
    } else {
        input.style.display = "none";
    }
});