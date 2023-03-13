let nameReq = document.getElementById('nameReq');
let nameInput = document.getElementById('name');
document.getElementById('date').valueAsDate = new Date();

function clearDate() {
  document.getElementById('date').valueAsDate = null;
}

// nameReq.addEventListener('change', () => {
//     if(nameReq.value == '') {

//     }
// })

function addComment() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let date = document.getElementById('date').valueAsDate;
  let list = document.getElementById('commentList');

  let nameEl = document.createElement('h3');
  let commentEl = document.createElement('p');
  let dateEl = document.createElement('h4');
  let deleteEl = document.createElement('button');
  let container = document.createElement('div');

  nameEl.innerHTML = name;
  commentEl.innerHTML = comment;
  deleteEl.textContent = 'Удалить комментарий';

  deleteEl.addEventListener('click', () => {
    deleteEl.parentElement.remove();
  });

  if (date.toLocaleDateString() == new Date().toLocaleDateString()) {
    dateEl.innerHTML = `Сегодня в ${new Date().toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl);
  } else if (date.toLocaleDateString() == new Date(Date.now() - 86400000).toLocaleDateString()) {
    dateEl.innerHTML = `Вчера в ${new Date().toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl);
  } else {
    dateEl.innerHTML = `${date.toLocaleDateString()} в ${new Date().toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl);
  }
  list.append(container);

  nameInput.value = '';
  comment = '';
  date = null;
}
