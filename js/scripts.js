var commentsSection = document.getElementById('last-comments');
var addCommentBtn = document.getElementById('addCommentBtn');
var commentTextInput = document.getElementById('commentText');

addCommentBtn.onclick = addCommentHandler;

document.body.onkeydown = function(e) {
  if (e.ctrlKey && e.keyCode === 13) {
    addCommentHandler(e);
  }
};

function addCommentHandler(e) {
	e.preventDefault();

  var commentText = commentTextInput.value;

	renderCommentBlock(commentText);
	commentTextInput.value = '';
}

function getDate() {
  var monthes = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ];
  var date = new Date();

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  var mm = monthes[date.getMonth()];
  var yy = date.getFullYear();

  return dd + ' ' + mm + ' ' + yy;
}

function renderCommentBlock(commentText) {
	var commentBlock = document.createElement('DIV');
		commentBlock.classList.add('comment-block');

	var commentName = document.createElement('H1');
		commentName.innerHTML = '%userName%';

	var commentDate = document.createElement('SPAN');
		commentDate.innerHTML = getDate();

	var commentParagraph = document.createElement('P');
		commentParagraph.classList.add('comment');

	commentParagraph.innerHTML = commentText;

	commentsSection.appendChild(commentBlock);
	commentBlock.appendChild(commentName);
	commentBlock.appendChild(commentDate);
	commentBlock.appendChild(commentParagraph);
}
