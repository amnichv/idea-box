// var saveBtn = $('.save-btn')
// var titleInput = $('.title')
// console.log ('yay')
// var ideaInput = $('.idea')
// var newIdea = []

function Idea(id, title, body, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}

$('.save-btn').on('click', function () {
  
}

function printIdeaCard () {
  var $userTitle = $('.title').val();
  var $userIdea = $('.idea').val();
  $('.idea-card-container').prepend(
    `<div class="new-card"</div>
    <h1>title goes here</h1>${titleInput.val()}
    <p>${ideaInput.val()}</p>
    <button class="delete"></button>
    <button class="upVote"></button>
    <button class="downVote"></button>
    <p>quality</p>`
  )
}
