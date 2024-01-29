// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/posts/1",
//   method: "GET",
//   success: function (data) {
//     console.log("SUCCESS: ");
//     console.log(data);
//     const { title, body } = data;
//     const headingHTML = `<h1>${title}</h1>`;
//     const bodyHTML = `<p>${body}</p>`;
//     $("#posts-holder").append(headingHTML);
//     $("#posts-holder").append(bodyHTML);
//   },
//   error: function (error) {
//     console.log("ERROR: ");
//     console.log(error);
//   },
// });

$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/1",
  method: "DELETE",
  success: function (data) {
    console.log("SUCCESS: ");
    console.log(data);
  },
  error: function (error) {
    console.log("ERROR: ");
    console.log(error);
  },
});
