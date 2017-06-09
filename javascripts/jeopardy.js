(function() {

  $(function() {

    var question = $("#question");
    var category = $("#category");
    var value = $("#value");
    var answer = $("#answer");
    var submitguess = $("#submitguess");
    var submitanswer = $('#submitanswer');
    var makeguess = $('#makeguess');
    var totalpoints = 0;
    var correctanswer;

    $.get("http://jservice.io/api/random", function(data) { // data is an arbitrary word, but is used below as well... word should match


      question.html(data[0].question);
      category.html(data[0].category.title);
      value.html(data[0].value);
      answer.html(data[0].answer);
      correctanswer = data[0].answer;
      console.log(correctanswer);//checking correct answer

    })

    makeguess.on("click", function() {
      // console.log(submitanswer.val()); //checking answer submitted
      // console.log(correctanswer);
      // console.log(question.text()); //checking question displays correctly
      // console.log(parseInt(value.html())); //checking the value of the question shows correctly
      if (submitanswer.val() == (correctanswer)) {

        //simple alert to inform contestant how many points they received
        alert("Correct!  You earned " + parseInt(value.html()) + " points!");
        totalpoints = totalpoints + parseInt(value.html());
        $('#totalpoints').html(totalpoints);
        $('#submitanswer').val('');


        $.get("http://jservice.io/api/random", function(data) { // data is an arbitrary word, but is used below as well... word should match

          question.html(data[0].question);
          category.html(data[0].category.title);
          value.html(data[0].value);
          answer.html(data[0].answer);
          correctanswer = data[0].answer;
          console.log(correctanswer);//checking correct answer


        })
      } else {
        //simple alert to inform contestant they answered incorrectly
        alert("Incorrect.  You did not earn any points.");
        $('#submitanswer').val('');
        $.get("http://jservice.io/api/random", function(data) { // data is an arbitrary word, but is used below as well... word should match
          question.html(data[0].question);
          category.html(data[0].category.title);
          value.html(data[0].value);
          answer.html(data[0].answer);
          console.log(correctanswer);//checking correct answer


        })
      }
      // console.log(parseInt(totalpoints));

    });

  });

})();
