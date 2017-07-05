$(document).ready(function() {
  $("button#cat").click(function(){
    alert("Bark!");
    $("ul.catSays").append("<li>Meow!!!</li>");
  });
  $("button#dog").click(function() {
    alert("Meow!");
    $("ul.dogSays").append("<li>Bark!!!</li>");
  });
  $(".clickable").click(function() {
    $(".hide_kitty").toggle();
      $("img").toggle();
  });
});

/*  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("li").css("background-color", "green");

  });
  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("li").css("background-color", "green");
  });
}); */
