function setCurrentAmount(amount) {
  percentage = Math.min(amount/maxAmount,1);
  var px = Math.round(452-452*percentage);
  $('#dragon-overlay').css('clip', 'rect(0px,504px,'+px+'px,0px)');
}
