// var saveBtn = $('.save-btn')
// var titleInput = $('.title')
// console.log ('yay')
// var ideaInput = $('.idea')
// var newIdea = []

// function Idea(id, title, body, quality) {
//   this.id = id;
//   this.title = title;
//   this.body = body;
//   this.quality = quality;
// }

function Idea(title, body, id, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

function displayIdea (aHa) {
  var displayHTML = '<div class="new-card">';
  displayHTML += '<h2 class="title">' + aHa.title + '<h2>';
  displayHTML += '<p class="body">' + aHa.body + '</p>';
  displayHTML += `<button class="delete"></button>
                 <button class="up-vote"></button>
                 <button class="down-vote"></button>`;
  displayHTML += '<p class="quality">quality: ' + aHa.quality + '</p></div>';

$('.idea-card-container').prepend(displayHTML);
}

function upQuality () {
  //fill in
  $('.up-vote').on('click', function () {
  //if quality === swill
  //quality should upgrade to plausible
  //if quality === plausible
  //upgrade quality to genius
  })
}




$('.save-btn').on('click', function () {
  var $userTitle = $('.title').val();
  console.log($userTitle);
  var $userBody = $('.body').val();
  console.log($userBody);

  var aHa = new Idea($userTitle, $userBody);
  console.log(aHa);
  displayIdea(aHa);
})
