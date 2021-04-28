$(document).ready(function(){
    $("#search-input").on("input", function(){
        search();
    });
});

function search() {
    let input = document.getElementById('search-input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].classList.add("hide");
        }
        else {
            x[i].style.display="item";                 
        }
    }
    if(document.getElementById('search-input').value.length == 0)
        {
            for (j = 0; j < x.length; j++) { 
                x[j].classList.remove("hide");
            }   
        }
}