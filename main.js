var ideaArray = [];
// var getArray ='' localStorage.getItem('')

function Idea(title, body, id, quality) {
  this.id = id || Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

function displayIdea (aHa) {
  $('ideaArray').each(function(detailedCard) {
  });
  var displayHTML = '<div class="new-card" id="' + aHa.id + '">';
  displayHTML += '<h2 class="title">' + aHa.title + '</h2>';
  displayHTML += '<p class="body-text">' + aHa.body + '</p>';
  displayHTML += `<button class="delete image"></button>
                 <button class="up-vote image"></button>
                 <button class="down-vote image"></button>`;
  displayHTML += '<p class="quality">quality:<span class="level">' + aHa.quality + '</span></p></div>';
  console.log(displayHTML);

$('.idea-card-container').prepend(displayHTML);
}

  $('.idea-card-container').on('click', '.up-vote', function (e) {
    var $parentDiv = $(this).parent();
    var ideaId = $parentDiv.attr('id');
    var clickedIdea = ideaArray.find(function(a) {
      return a.id == ideaId;
    });

    if (clickedIdea.quality === "swill") {
      clickedIdea.quality = "plausible";
      $parentDiv.find('span').text("plausible");
    }
    else if (clickedIdea.quality === "plausible") {
      clickedIdea.quality = "genius";
      $parentDiv.find('span').text("genius");
    }});

  $('.idea-card-container').on('click', '.down-vote', function (e) {
    var $parentDiv = $(this).parent();
    var ideaId = $parentDiv.attr('id');
    var clickedIdea = ideaArray.find(function(a) {
      return a.id == ideaId;
    });

    if (clickedIdea.quality === "genius") {
      clickedIdea.quality = "plausible";
      $parentDiv.find('span').text("plausible");
    }
    else if (clickedIdea.quality === "plausible") {
      clickedIdea.quality = "swill";
      $parentDiv.find('span').text("swill");
    }
  });


  $('.idea-card-container').on('click', '.delete', function () {
    $(this).parent().remove();
    //need to remove from ideaArray
  })

function storeIdea() {
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
  console.log(localStorage);
}

function getIdeas() {
  var getArray = localStorage.getItem('ideaArray');
  console.log(JSON.parse(getArray));
  return JSON.parse(getArray);
}

function clearTitle() {
  $('.title').val('');
}

function clearBody() {
  $('.body').val('');
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
  clearTitle();
  clearBody();
})

$( document ).ready(function() {
    console.log( "ready!" );
    getIdeas();
});
