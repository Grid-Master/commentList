document.getElementById('date').valueAsDate = new Date();

function clearDate() {
  document.getElementById('date').valueAsDate = null;
}

let commentsData = [];

function addComment() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let date = document.getElementById('date').valueAsDate;

  commentsData.push({
    name,
    comment,
    date,
  });

  console.log(commentsData);
}
