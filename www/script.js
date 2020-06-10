$(function() {

  // 入力のためのモーダルウィンドウ（閉じないと進めない）

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });

});

// 入力の送信おしたあと

function func1() {
  var input_message = document.getElementById("input_message").value;
  input_message = "内容は" + input_message + "です。";
  document.getElementById("output_message").innerHTML = input_message;
}


function func2() {
  var input_message = document.getElementById("input_message2").value;
  input_message = "内容は" + input_message + "です。";
  document.getElementById("output_message2").innerHTML = input_message;
}
