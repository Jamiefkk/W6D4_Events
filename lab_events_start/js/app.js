document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const titleInput = document.querySelector('#title')
  // titleInput.addEventListener('input', handleTitleInput);

  // const authorInput = document.querySelector('#author');
  // categoryInput.addEventListener('input', handleAuthorInput)

  // const categoryInput = document.querySelector('#category');
  // categoryInput.addEventListener('change', handleCategoryInput)

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const deleteItem = document.querySelector('#delete-button');
  deleteItem.addEventListener('click', handleDeleteForm);


});


const handleForm = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  const submitValue = document.createElement('li');
  submitValue.textContent = `${title} | ${author} | ${category}`
  const list = document.querySelector('#reading-list')
  list.appendChild(submitValue);
  const form = document.querySelector('#new-item-form');
  form.reset();
};

const handleDeleteForm = function() {
  console.log('delete')
  myList = document.querySelector('#reading-list');
  myList.innerHTML = '';
}





// myList = document.getElementById('myList');
// myList.innerHTML



// const newItem = document.createElement('li');
// newItem.textContent = "Purple";
// newItem.classList.add('purple');

// const list = document.querySelector('ul');
// list.appendChild(newItem);


// const list = document.querySelector('ul');
// list.appendChild(newItem);

// const handleTitleInput = function (event){
//   event.preventDefault();
//   console.log('title input')
// };

// const handleAuthorInput = function (event){
//   event.preventDefault();
//   console.log('Author input')
// };

// const handleCategoryInput = function (event){
//   event.preventDefault();
//   console.log('Category input')
// };


