$(document).ready(function () {
  $("#textForm").submit(function (event) {
    event.preventDefault();
    var wholeParagraph = $("input#sentence").val();

    var paragraphArrays = wholeParagraph.split(' ');
    var seenWords = [];


    paragraphArrays.forEach(function (paragraphArray) {
      if (seenWords.includes(paragraphArray) === false) {
        seenWords.push(paragraphArray);
      } else {
        //seenWords.
      }


    });
    alert(seenWords);

  });



});