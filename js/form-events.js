$(function () {
  // Input focus event example
  // $("input, select").focus(function () {
  //   console.log("Input field focused:", $(this).attr("id"));
  // });

  // Input blur event example
  // $("input, select").blur(function () {
  //   console.log("Input field blurred:", $(this).attr("id"));
  // });

  // Select change event example
  // $("#country").change(function () {
  //   console.log("Selected country:", $(this).val());
  // });

  // Checkbox change event example
  // $("#subscribe").change(function () {
  //   console.log("Subscribe checkbox changed. Checked:", $(this).is(":checked"));
  // });

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Input change event example for email validation
  $("#email").on("input", function () {
    const email = $(this).val();

    if (!isValidEmail(email)) {
      $("#emailError").text("Invalid email address");
    } else {
      $("#emailError").text("");
    }
  });

  // Form submit event example
  $("#exampleForm").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      country: $("#country").val(),
      subscribe: $("#subscribe").is(":checked"),
    };

    // Perform any desired actions with the form data
    console.log("Form Data:", formData);

    // You can also make an AJAX request here to submit the form data to a server
    // For example: $.post('submit.php', formData, function(response) { console.log(response); });
  });
});
