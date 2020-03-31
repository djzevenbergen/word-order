$(document).ready(function () {
  $("#textForm").submit(function (event) {
    event.preventDefault();
    var wholeParagraph = $("input#sentence").val();

    var paragraphArrays = wholeParagraph.split(' ');
    var seenWords = [];
    var counts = [];

    paragraphArrays.forEach(function (paragraphArray) {
      if (seenWords.includes(paragraphArray) === false) {
        seenWords.push(paragraphArray);
      }
    });

    seenWords.forEach(function (seenWord) {
      var count = 0;
      for (let i = 0; i <= paragraphArrays.length; i++) {

        if (seenWord === paragraphArrays[i]) {
          count += 1;

        };

      };

      counts.push(seenWord, ": ", + count)


    });
    alert(counts);


  });



});