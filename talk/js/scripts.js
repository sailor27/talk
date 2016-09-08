$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why, hello :3</li>");

    $("ul#user").children("li").first().click(function() {
        (this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
        (this).remove();
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user</li>");

    $("ul#user").children("li").first().click(function() {
      (this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      (this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop Copying!</li>");
    $("ul#webpage").prepend("<li>won't stop copying</li>");

    $("ul#user").children("li").first().click(function() {
      (this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      (this).remove();
    });

  });

});
