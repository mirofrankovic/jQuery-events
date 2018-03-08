

$(document).ready(function(){
    $("div").animate({fontSize: '50px'}, "slow");
    

//Buttons?
    $("p").click(function(){ 
        $(this).slideToggle("slow");
   
});
});

document.getElementById("my-button").onclick = function() {
    alert(document.getElementById("my-input").value)
}

$("button").click(function(){
    $("h1").addClass("page-header");

});



//console.log(textPossition);

