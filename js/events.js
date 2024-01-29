$(function () {
  // Click event on elements with class 'title'
  $(".title").on("click", function () {
    alert("Title clicked!");
  });

  // Click event on links
  $("a").click(function (e) {
    e.preventDefault();
  });

  // Hover event on elements with class 'title'
  $(".title").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      $(this).css("color", "black");
    },
  );

  const description = $(".description");

  // Mouseenter event on elements with class 'description'
  description.mouseenter(function () {
    $(this).css("color", "purple");
  });

  // Mouseleave event on elements with class 'description'
  description.mouseleave(function () {
    $(this).css("color", "green");
  });

  // !!** DOES NOT WORK **!!
  // Click event on dynamically added list items
  // $('ul[data-type="list"] li').click(function () {
  //   // Change the color of the clicked item
  //   $(this).css("color", "red");
  // });

  // Use 'on' method to delegate click event to the ul element
  $('ul[data-type="list"]').on("click", "li", function () {
    // Change the color of the clicked item
    $(this).css("color", "red");
  });

  // Dynamically add 5 list items
  for (let i = 1; i <= 5; i++) {
    $('ul[data-type="list"]').append("<li>List item " + i + "</li>");
  }

  // Cleaner / modular event handler
  $("a").click(runSomeCode);
  $("a").click({ key: "value" }, runSomeCode);

  function runSomeCode(e) {
    console.log(e.data);
    console.log("Clicked link");
  }
});
