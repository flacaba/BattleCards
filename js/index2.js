var characterParent = document.getElementById("characters-display");

function generateCards (array,parent) {
  var card = "";
  array.forEach(function(obj) {
    card += '<div class="card-outer-border">'
    card += ' <div class ="card-inner-border ' + obj.card +'-inner-border-color">';
    card += '   <div class="card-title ' + obj.card + '-title-color">' + obj.name + '</div>';
    card += '   <div class="card-img" style = "background: center/cover url(images/main_characters/' + obj.img +') no-repeat"></div>';
    card += '   <div class="card-type ' + obj.card + '-title-color">' + obj.type + '</div>';
    card += '   <div class="card-explanation ' + obj.card +'-explanation-color">' + obj.explanation + '</div>';
    card += ' </div>';
    card += '</div>';
  })
  parent.innerHTML = card;
}





window.onload = function() {
  generateCards (characters,characterParent);
  



}