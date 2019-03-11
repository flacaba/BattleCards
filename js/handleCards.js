// var clone;
// var currentNode;
var countDraggables = 0;


var legendaryHabilities = habilities.filter(function (obj) {
  return obj.card === "legendary";
})

var epicHabilities = habilities.filter(function (obj) {
  return obj.card === "epic";
})

var normalHabilities = habilities.filter(function (obj) {
  return obj.card === "normal";
})

// function getNodePosition (node) {
//   var child = node;
//   var i = 0;
//   while( (child = child.previousSibling) != null ) 
//     i++;
//   return i;
// }


function dragStartHandler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dropEffect = "move";
  // clone = ev.target.cloneNode(true);
  // currentNode = getNodePosition(ev.target);
}

function dragHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move"
}

function dropHandler(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data));
  // hacer esto dinamico para poder utilizarlo cuando estemos en el tablero//
  // if (ev.target.parent)===  {}
  // characterParent.insertBefore(clone,characterParent.childNodes[currentNode]);
}

function makeItDraggable(parent) {
  // esto se deberia sacar fuera y deberia simplemente hacerlo con childs
  var childs = parent.querySelectorAll(".card-outer-border");
  for (var i = 0; i<childs.length;i++) {
    childs[i].setAttribute("id","drag" + countDraggables);
    childs[i].setAttribute("draggable","true");
    childs[i].setAttribute("ondragstart","dragStartHandler(event)");
    countDraggables++;
  }
}

function makeItUndraggable(parent) {
// esto se deberia sacar fuera y deberia simplemente hacerlo con childs
  var childs = parent.querySelectorAll(".card-outer-border");
  for (var i = 0; i<childs.length;i++) {
    childs[i].removeAttribute("id");
    childs[i].removeAttribute("draggable");
    childs[i].removeAttribute("ondragstart");
  }
}

function makeItDroppable (parent) {
  var childs = parent.querySelectorAll(".card-frame");
  for (var i = 0; i<childs.length;i++) {
    childs[i].setAttribute("ondrop","dropHandler(event)");
    childs[i].setAttribute("ondragover","dragHandler(event)");
  }
}

function makeItUndroppable (parent) {
  // esto se deberia sacar fuera y deberia simplemente hacerlo con childs
  var childs = parent.querySelectorAll(".card-frame");
  for (var i = 0; i<childs.length;i++) {
    childs[i].removeAttribute("ondrop");
    childs[i].removeAttribute("ondragover");
  }  

}


function generateCards (array, parent) {
  var card = '';
  array.forEach(function(obj) {
    card += `<div class="card-outer-border">
     <div class="card-inner-border ${obj.card}-inner-border-color">
       <div class="card-title ${obj.card}-title-color">${obj.name}</div>
       <div class="card-img" style="background: center/cover url(${obj.img}) no-repeat"></div>
       <div class="card-type ${obj.card}-type-color">${obj.type}</div>
       <div class="card-explanation ${obj.card}-explanation-color">${obj.explanation}</div>
     </div>
    </div>`
  });
  parent.innerHTML = card;
}

function getRandomCard () {
  var maxNumber = habilities.length;
  var i = Math.floor(Math.random()*maxNumber) ;
  return i;
}