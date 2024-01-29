$(function () {
  // Manipulating Classes
  // Add a new class "highlight" to the first title with class "title"
  // $('.title:first').addClass('highlight');

  // Remove the class "description" from the paragraph with id "paragraph"
  // $('#paragraph').removeClass('description');

  // Toggle the class "active" for the unordered list with data-type "list"
  // $('ul[data-type="list"]').toggleClass('active');

  // Manipulating Attributes
  // Get the "data-type" attribute value of the unordered list
  // const dataTypeValue = $('ul').attr('data-type');
  // console.log(dataTypeValue); // Outputs the value of data-type attribute

  // Set a new "title" attribute to the second title element
  // $('.title:eq(0)').attr('title', 'Second Title');

  // Get value of an attribute
  // $('a').attr('href', 'https://google.com');
  // console.log(
  //     $('a').attr('href')
  // );

  // Manipulating Boolean Properties
  // Set the "checked" property of a checkbox to true
  // $('#checkboxId').prop('checked', true);
  // console.log($('#checkboxId').prop('checked'));

  // Get the "selected" property of an option element
  // const isSelected = $('#optionId').prop('selected');
  // console.log(isSelected); // Outputs true if the option is selected, false otherwise

  // Getting Form Input Values
  // Get the value of the input field with class "username"
  // const usernameValue = $('.username').val();
  $('.username').val("New value");
  //console.log(usernameValue); // Outputs the value entered in the username input field
});
