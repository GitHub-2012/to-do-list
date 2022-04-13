// Make a "close" button
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

// Click on a close button
var xOut = document.getElementsByClassName("close");
var i;
for (i = 0; i < xOut.length; i++) {
  xOut[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Make a "done" symbol
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Add a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputVal = document.getElementById("myInput").value;
  var t = document.createTextNode(inputVal);
  li.appendChild(t);
  if (inputVal === '') {
    alert("Please write something to make add an event!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
 var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < xOut.length; i++) {
    xOut[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
