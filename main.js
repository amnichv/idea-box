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
var ideaArray = [];

function Idea(title, body, id, quality) {
  this.id = id || Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

function displayIdea(aHa) {
  $('ideaArray').each(function(detailedCard) {
  });
  var displayHTML = '<div class="new-card">';
  displayHTML += '<h1 class="title">' + aHa.title + '<h1>';
  displayHTML += '<p class="body">' + aHa.body + '</p>';
  displayHTML += `<button class="delete image"></button>
                 <button class="up-vote image"></button>
                 <button class="down-vote image"></button>`;
  displayHTML += '<p class="quality">quality: ' + aHa.quality + '</p></div>';

$('.idea-card-container').prepend(displayHTML);
}


function upQuality (id) {
  id = parseInt(id);
  //fill in
  $('.up-vote').on('click', function () {
    if (this.quality === "swill") {
      this.quality = "plausible";
    }
    if (this.quality === "plausible") {
      this.quality = "genius";
    }
    console.log(this.quality);
  //if quality === swill
  //quality should upgrade to plausible
  //if quality === plausible
  //upgrade quality to genius
  })
}

function storeIdea() {
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
  console.log(localStorage);
}

function getIdeas() {
  var getArray = localStorage.getItem('ideaArray');
  console.log(JSON.parse(getArray), 'hoy!');
  var parsingArray = JSON.parse(getArray);
  console.log(parsingArray);
  displayIdea(parsingArray);
}
getIdeas();

function clearIt() {
  $('.title').val("");
  $('.body').val("");
}

$('.save-btn').on('click', function () {
  var $userTitle = $('.title').val();
  console.log($userTitle);
  var $userBody = $('.body').val();
  console.log($userBody);

  var aHa = new Idea($userTitle, $userBody);
  console.log(aHa);
  displayIdea(aHa);
  ideaArray.unshift(aHa);
  console.log(ideaArray);
  storeIdea();
  getIdeas();
  clearIt();
})

// $( document ).ready(function() {
//     console.log( "ready!" );
//     getIdeas();
// });
