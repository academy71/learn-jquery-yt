$(function() {
  // filter()
  const filteredTitles = $('h1').filter('.title');
  console.log('Filtered Titles:', filteredTitles);

  // not()
  const notTitle = $('h1').not('.title');
  console.log('Not Titles:', notTitle);

  // first()
  const firstTitle = $('h1.title').first();
  console.log('First Title:', firstTitle);

  // last()
  const lastListItem = $('[data-type="list"] li').last();
  console.log('Last List Item:', lastListItem);

  // eq()
  const secondTitle = $('[data-type="list"] li').eq(2); // Index starts from 0
  console.log('Second Title:', secondTitle);
});
