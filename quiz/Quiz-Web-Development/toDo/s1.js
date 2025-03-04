// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Tambahkan elemen input pencarian ke dalam index.html
var searchBox = document.createElement("input");
searchBox.setAttribute("type", "text");
searchBox.setAttribute("id", "searchInput");
searchBox.setAttribute("placeholder", "Search to-do...");
searchBox.style.width = "100%";
searchBox.style.marginBottom = "10px";
searchBox.style.padding = "10px";
searchBox.style.fontSize = "16px";

// Sisipkan input pencarian sebelum daftar to-do
var header = document.querySelector(".header");
header.appendChild(searchBox);

// Tambahkan event listener untuk mencari item to-do
document.getElementById("searchInput").addEventListener("keyup", function () {
    var filter = this.value.toLowerCase();
    var items = document.querySelectorAll("ul li");
    
    items.forEach(function (item) {
        var text = item.textContent || item.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
