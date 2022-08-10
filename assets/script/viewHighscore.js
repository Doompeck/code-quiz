var scoreEl = document.getElementById("scores-list");
var scores = JSON.parse(localStorage.getItem("score-and-initials"));
var docFrag = document.createDocumentFragment();
console.log(JSON.parse(localStorage.getItem("score-and-initials")));
console.log(scores);

for (var i = 0; i < scores.length; i++) {
  var divEl = document.createElement("div");

  template = `<ul>
    <span>${scores[i].initials}</span> <span>${scores[i].score}</span>
    </ul>`;

  divEl.innerHTML = template;
  docFrag.append(divEl);
  scoreEl.append(docFrag);
}

// document.getElementById("scores-list").innerHTML = template
