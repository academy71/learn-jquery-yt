$(function () {
  // KeyUp event example - document
  // $(document).keydown(function (event) {
  //   console.log(
  //     "KeyUp - Key Code: " +
  //       event.which +
  //       ", Key Value: " +
  //       String.fromCharCode(event.which),
  //   );
  // });

  const $input = $("#textInput");

  // KeyDown event example
  $input.keydown(function (event) {
    console.log(
      "KeyDown - Key Code: " +
        event.which +
        ", Key Value: " +
        String.fromCharCode(event.which),
    );

    // Check if the pressed key is 'Enter'
    if (event.which === 13) {
      console.log("Pressed key is Enter");
    }
  });

  // KeyUp event example
  $input.keyup(function (event) {
    console.log(
      "KeyUp - Key Code: " +
        event.which +
        ", Key Value: " +
        String.fromCharCode(event.which),
    );
  });
});
