$(function() {
  // Manipulating CSS
  // Change the background color of the first title with class "title"
  $('.title:first').css('background-color', 'blue');

  // Set multiple CSS properties for the paragraph with id "paragraph"
  // $('#paragraph').css({
  //   'font-size': '26px',
  //   'color': 'green',
  //   'border': '1px solid black',
  //   'padding': '25px 0'
  // });

  // Retrieving Dimensions
  // Get the height of the container div
  const containerHeight = $('.container').height();
  console.log(containerHeight); // Outputs the height of the container div

  // Get the inner height of the container div (excluding padding)
  const containerInnerHeight = $('.container').innerHeight();
  console.log(containerInnerHeight); // Outputs the inner height of the container div

  // Get the width of the first title with class "title"
  const titleWidth = $('.title:first').width();
  console.log(titleWidth); // Outputs the width of the first title


  // Get the inner width of the first title with class "title" (excluding padding)
  const titleInnerWidth = $('.title:first').innerWidth();
  console.log(titleInnerWidth); // Outputs the inner width of the first title

  // Retrieving Scroll Positions
  // Get the vertical scroll position of the window
  const scrollTopValue = $(window).scrollTop();
  console.log(scrollTopValue); // Outputs the vertical scroll position

  // Retrieving Position and Offset
  // Get the position of the first title with class "title" relative to its offset parent
  const titlePosition = $('.title:first').position();
  console.log(titlePosition); // Outputs the position object { top: ..., left: ... }

  // Get the offset of the paragraph with id "paragraph" relative to the document
  const paragraphOffset = $('#paragraph').offset();
  console.log(paragraphOffset); // Outputs the offset object { top: ..., left: ... }
});
