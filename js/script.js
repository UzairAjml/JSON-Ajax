// ={ } +  [ ]
$(document).ready(function () {
  let pageCounter = 1;
  $("#btn").click(function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let ourData = JSON.parse(xmlhttp.responseText);
        cFunction(ourData);
      }
    };
    xmlhttp.open(
      "GET",
      "https://learnwebcode.github.io/json-example/animals-" +
        pageCounter +
        ".json",
      true
    );
    xmlhttp.send();
    pageCounter++;
    if (pageCounter > 3) {
      $("#btn").hide();
    }
    const cFunction = function (data) {
      let htString = " ";
      for (let i = 0; i < data.length; i++) {
        htString +=
          "<p>" + data[i].name + " is a  " + data[i].species + "</p>" + "<hr>";
      }
      $("#demo").append(htString);
    };
  });
});
