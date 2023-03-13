document.getElementById('date').valueAsDate = new Date();
let xx = new Date();
console.log(xx.toDateString);

function clearDate() {
  document.getElementById('date').valueAsDate = null;
}

let commentsData = [];

function addComment() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let date = document.getElementById('date').valueAsDate;
  let list = document.getElementById('commentList');
  console.log(date);

  let nameEl = document.createElement('h3');
  let commentEl = document.createElement('p');
  let dateEl = document.createElement('h4');
  let deleteEl = document.createElement('button');
  let container = document.createElement('div');

  nameEl.innerHTML = name;
  commentEl.innerHTML = comment;
  dateEl.innerHTML = date;
  deleteEl.textContent = 'Удалить комментарий';

  //if(date.getDate())
  container.append(nameEl, commentEl, dateEl, deleteEl);
  list.append(container);
  //   list.append(listElem);

  //   commentsData.push({
  //     name,
  //     comment,
  //     date,
  //   });
  //  console.log(commentsData);
}
