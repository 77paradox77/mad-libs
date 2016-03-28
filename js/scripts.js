$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});


// OLD WAY below, looping above!
// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     var person1Input = $("input#person1").val();
//     // var wordInput = $("input#word").val();
//     var person2Input = $("input#person2").val();
//     var animalInput = $("input#animal").val();
//     var exclamationInput = $("input#exclamation").val();
//     var verbInput = $("input#verb").val();
//     var nounInput = $("input#noun").val();
//
//     $(".person1").append(person1Input);
//     // $(".word").append(wordInput);
//     $(".person2").append(person2Input);
//     $(".animal").append(animalInput);
//     $(".exclamation").append(exclamationInput);
//     $(".verb").append(verbInput);
//     $(".noun").append(nounInput);
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });
