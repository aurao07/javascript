//alert('My project is going to be awesome!');
$("#noShow").hide();
$("h1").html("The Best Jokes Ever!");
$("#Jokes").append("<p>Q. What do you call a fake noodle? <br />A. An impasta</p>");
$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});
$("#toggleJokes").click(function(){
    $("#Jokes").toggle();
  });

$("#image").css({
    "border-radius": "50%",
    "border": "2px solid black",
})