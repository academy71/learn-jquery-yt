$(function () {
  // find() - to retrieve all descendant elements
  const allDescendants = $('.container').find('*');
  console.log('All descendants:');
  console.log(allDescendants);

  // children() - to retrieve only direct child elements
  const directChildren = $('.container').children('*');
  console.log('Direct children:');
  console.log(directChildren);

  // prev() - to retrieve the previous sibling element
  const prevSibling = $('#paragraph').prev();
  console.log('Previous sibling:');
  console.log(prevSibling);

  // next() - to retrieve the next sibling element
  const nextSibling = $('#paragraph').next();
  console.log('Next sibling:');
  console.log(nextSibling);

  // parent() - to retrieve the unique parent
  const uniqueParent = $('#paragraph').parent();
  console.log('Unique parent:');
  console.log(uniqueParent);

  // siblings() - to retrieve all sibling elements
  const allSiblings = $('#paragraph').siblings();
  console.log('All siblings of titles:');
  console.log(allSiblings);
});
