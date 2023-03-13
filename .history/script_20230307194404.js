let m = (document.getElementById('date').value = new Date());
let xx = new Date();
console.log(m);

function clearDate() {
  document.getElementById('date').valueAsDate = null;
}

let commentsData = [];

function addComment() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let date = document.getElementById('date').value;
  let list = document.getElementById('commentList');
  console.log(date);

  let nameEl = document.createElement('h3');
  let commentEl = document.createElement('p');
  let dateEl = document.createElement('h4');
  let deleteEl = document.createElement('button');
  let container = document.createElement('div');

  nameEl.innerHTML = name;
  commentEl.innerHTML = comment;
  deleteEl.textContent = 'Удалить комментарий';

  if (date.toLocaleDateString() == new Date().toLocaleDateString()) {
    dateEl.innerHTML = `Сегодня в ${date.toLocaleTimeString()}`;
    container.append(nameEl, commentEl, dateEl, deleteEl);
  }
  list.append(container);
  //   list.append(listElem);

  //   commentsData.push({
  //     name,
  //     comment,
  //     date,
  //   });
  //  console.log(commentsData);
}
