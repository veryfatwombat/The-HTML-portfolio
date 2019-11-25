$(function () {
  $('.book').click(function (){
    $('#modal').addClass('show');
  });
  $('.modal2__overlay').click(function(){
    $('#modal').removeClass('show')
  });
});
