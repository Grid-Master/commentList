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
  let listElem = document.createElement('li');

  //   listElem.innerText(name);
  //   list.append(listElem);

  //   commentsData.push({
  //     name,
  //     comment,
  //     date,
  //   });
  //  console.log(commentsData);
}
