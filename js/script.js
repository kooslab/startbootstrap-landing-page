$(document).ready(function() {
  $('.js-btn-submit').click(function(e) {
    e.preventDefault();
    console.log('hello world');
    var $email = $('#email');
    var $inquiry = $('#inquiry');

    var url = 'https://hooks.slack.com/services/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';
    var data = {
      "text": "This is a line of text.\nAnd this is another one."
    };

      $.ajax({
        url: url,
        type:"POST",
        data: 'payload=' + JSON.stringify({
          "text": "email: " + $email.val() + "\ninquiry: " + $inquiry.val()
        }),
        dataType:"json",
        success: function(result){
          console.log('result', result)
          $email.val('');
          $inquiry.val('');
        },
        error: function(err) {
          console.log('err', err);
          $email.val('');
          $inquiry.val('');
        }
      })
  });

});
