var ideaArray = [];

function Idea(title, body, id, quality) {
  this.id = id || Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

function displayIdea(aHa) {
    $('.idea-card-container').append(
    `<div class="new-card" id=${aHa.id}>
         <h1 class="title">  ${aHa.title}  </h1>
         <p class="body">  ${aHa.body}  </p>
         <button class="delete image"></button>
                       <button class="up-vote image"></button>
                       <button class="down-vote image"></button>
         <p class="quality">
           quality: <span class="level">  ${aHa.quality}  </span>
         </p>
         </div>`
    );
    console.log('aHa', aHa);
  //});
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
    // push all local storage items into the ideaArray
    // grab the id attribute of the parent
    // find the id inside of the ideaArray
    // remove the Object that contains the matching id
    console.log($(this).parent(id));
    //need to remove from ideaArray
  })

function storeIdea() {
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
  console.log(localStorage);
}

function getIdeas() {
  ideaArray = JSON.parse(localStorage.getItem('ideaArray'));
  console.log('parsingArray', parsingArray);

  for (var i = 0; i < parsingArray.length; i++) {
    console.log(parsingArray[i].title, parsingArray[i].body, parsingArray[i].id, parsingArray[i].quality)
    displayIdea(parsingArray[i]);
  }
  // parsingArray.forEach((value, index, array) => {
  //   console.log('value: ' + value, 'index: ' + index, 'array: ' +  array);
  // })
  console.log('ideaArray', ideaArray)
}

getIdeas();
//displayIdea();


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
  ideaArray.unshift(aHa);
  displayIdea(aHa);
  console.log(ideaArray);
  storeIdea();
  getIdeas();
  clearIt();
})

// $( document ).ready(function() {
//     console.log( "ready!" );
//     getIdeas();
// });
