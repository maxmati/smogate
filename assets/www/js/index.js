$(function () {
  setCurrentAmount(0);
})
function setCurrentAmount(amount) {
  percentage = Math.min(amount/maxAmount,1);
  var px = Math.round(452-452*percentage);
  $('#dragon-overlay').css('clip', 'rect(0px,504px,'+px+'px,0px)');


  $('#amount_scale').css('color', calculateColor(percentage));
  var min = 444;
  var max = -22;
  px = max + (1 - percentage) * (min-max);
  $('#amount_scale').css('top', px + 'px');
  $('#amount_scale').html(amount + 'µg');

  if(amount > maxAmount)
    $("#dragon-warning").css('opacity','1');
}
function calculateColor(percentage) {
  if(percentage < 0.2)
    return "#0da0c9";
  else if (percentage < 0.5) {
    return "#b5dd60";
  }else if (percentage < 0.75) {
    return "#ddab2f";
  }else {
    return "#d63b38";
  }
}
