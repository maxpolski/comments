var commentsSection = document.getElementById('last-comments');
var addCommentBtn = document.getElementById('addCommentBtn');
var commentTextInput = document.getElementById('commentText');

addCommentBtn.onclick = addCommentHandler;

function addCommentHandler(e) {
	e.preventDefault();
	var commentText = commentTextInput.value;

	renderCommentBlock(commentText);

	commentTextInput.value = '';
}

function dateNow() {
  var date = new Date();

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth();
  switch(mm) {
  	case 0:
  		mm = 'январь';
  		break;
  	case 1:
  		mm = 'февраль';
  		break;
  	case 2:
  		mm = 'март';
  		break;
  	case 3:
  		mm = 'апрель';
  		break;
  	case 4:
  		mm = 'май';
  		break;
  	case 5:
  		mm = 'июнь';
  		break;
  	case 6:
  		mm = 'июль';
  		break;
  	case 7:
  		mm = 'август';
  		break;
  	case 8:
  		mm = 'сентябрь';
  		break;
  	case 9:
  		mm = 'октябрь';
  		break;
  	case 10:
  		mm = 'ноябрь';
  		break;
  	case 11:
  		mm = 'декабрь';
  		break;
  }

  var yy = date.getFullYear();

  return dd + ' ' + mm + ' ' + yy;
}


function renderCommentBlock(commentText) {
	var commentBlock = document.createElement('DIV');
		commentBlock.classList.add('comment-block');

	var commentName = document.createElement('H1');
		commentName.innerHTML = '%userName%';

	var commentDate = document.createElement('SPAN');
		commentDate.innerHTML = dateNow();

	var commentParagraph = document.createElement('P');
		commentParagraph.classList.add('comment');

	commentParagraph.innerHTML = commentText;

	commentsSection.appendChild(commentBlock);
	commentBlock.appendChild(commentName);
	commentBlock.appendChild(commentDate);
	commentBlock.appendChild(commentParagraph);
}


