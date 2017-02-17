var ideaArray = [];



function Idea(title, body, id, quality) {
  this.id = id || Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

// New Card to display idea

function displayIdea(aHa) {
  $('.idea-card-container').append(
  `<div class="new-card" contenteditable="true" id=${aHa.id}>
      <button class="delete image"></button>
      <h1 class="title display-title">${aHa.title}</h1>
      <p class="body-text">${aHa.body}</p>
      <button class="up-vote image"></button>
      <button class="down-vote image"></button>
      <p class="quality">quality: <span class="level">${aHa.quality}</span>
      </p>
    </div>`
  );
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
    }
    storeIdea()
  });


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
    }});


  $('.idea-card-container').on('click', '.delete', function () {
    var $parentDiv = $(this).parent();
    var ideaId = $parentDiv.attr('id');
    $parentDiv.remove();
    var tempArray = [];
    for(var i=0; i < ideaArray.length; i++){
      if(ideaArray[i].id != ideaId)
        tempArray.push(ideaArray[i]);
    }
    ideaArray = tempArray;
    storeIdea();
  });


function storeIdea() {
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
}


function getIdeas() {
  let parsingArray = JSON.parse(localStorage.getItem('ideaArray') || '[]');

  for (var i = 0; i < parsingArray.length; i++) {
    console.log(parsingArray[i].title, parsingArray[i].body, parsingArray[i].id, parsingArray[i].quality);
    parsingArray[i].id = parseInt(parsingArray[i].id);
    ideaArray.push(parsingArray[i]);
    displayIdea(parsingArray[i]);
  }
}

$('.search').on('keyup', function(){
  var lookFor = $(this).val().toLowerCase()
  console.log(lookFor);
  $('.new-card').each(function(index, element) {
    var text = $(element).children().text().toLowerCase();
    var match = !!text.match(lookFor);
    $(element).toggle(match);
  })
})

function clearIt() {
  $('.title').val("");
  $('.body').val("");
}

$('.save-btn').on('click', function () {
  var $userTitle = $('.title').val();
  var $userBody = $('.body').val();
  var aHa = new Idea($userTitle, $userBody);
  ideaArray.unshift(aHa);
  displayIdea(aHa);
  storeIdea();
  clearIt();
})

getIdeas();
