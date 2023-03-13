let nameReq = document.getElementById('nameReq');
let commentReq = document.getElementById('commentReq');
let nameInput = document.getElementById('name');
let commentInput = document.getElementById('comment');
let dateInput = document.getElementById('date');
document.getElementById('date').valueAsDate = new Date();

function clearDate() {
  document.getElementById('date').valueAsDate = null;
}

nameInput.addEventListener('change', () => {
  if (nameInput.value == '') {
    nameReq.innerText = 'Введите имя!';
  } else {
    nameReq.innerText = '';
  }
});

commentInput.addEventListener('change', () => {
  if (commentInput.value == '') {
    commentReq.innerText = 'Введите комментарий!';
  } else {
    commentReq.innerText = '';
  }
});

function addComment() {
  let name = nameInput.value;
  let comment = commentInput.value;
  let date = dateInput.valueAsDate;
  let list = document.getElementById('commentList');

  let nameEl = document.createElement('h3');
  let commentEl = document.createElement('p');
  let dateEl = document.createElement('h4');
  let deleteEl = document.createElement('button');
  let likeEl = document.createElement('div');
  let container = document.createElement('div');

  nameEl.innerHTML = name;
  commentEl.innerHTML = comment;
  deleteEl.textContent = 'Удалить комментарий';
  likeEl.clientWidth = '100';
  likeEl.clientHeight = '100';
  likeEl.className = 'unliked';

  deleteEl.addEventListener('click', () => {
    deleteEl.parentElement.remove();
  });

  //   likeEl.ontoggle(() => {});

  if (date.toLocaleDateString() == new Date().toLocaleDateString()) {
    dateEl.innerHTML = `Сегодня в ${new Date().toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl, likeEl);
  } else if (date.toLocaleDateString() == new Date(Date.now() - 86400000).toLocaleDateString()) {
    dateEl.innerHTML = `Вчера в ${new Date().toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl, likeEl);
  } else {
    dateEl.innerHTML = `${date.toLocaleDateString()} в ${new Date().toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl, likeEl);
  }
  list.append(container);

  nameInput.value = '';
  commentInput.value = '';
  dateInput.value = null;
}
