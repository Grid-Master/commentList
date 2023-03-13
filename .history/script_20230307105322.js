document.getElementById('date').valueAsDate = new Date();

function clearDate() {
  document.getElementById('date').valueAsDate = null;
}

let commentsData = [];

function addComment() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let date = document.getElementById('date').valueAsDate;
  let list = document.getElementById('commentList');

  let nameEl = document.createElement('h3');
  let commentEl = document.createElement('p');

  //   nameEl.innerText(name);
  //   commentEl.innerText(comment);

  list.append('<p>ss</p>');
  //   list.append(listElem);

  //   commentsData.push({
  //     name,
  //     comment,
  //     date,
  //   });
  //  console.log(commentsData);
}
