(function() {

  function parseTemplate(template, data){
     return template.replace(/%(\w*)%/g,function(m,key){return data.hasOwnProperty(key)?data[key]:"";});
  }

  function insertTemplate(path, data, id) {
    $.get( path, function( template ) {
      $( "#"+id ).append( parseTemplate(template, data)  );
    });
  }

  function calculateColor(percentage) {
    var r1 = 88;
    var g1 = 255;
    var b1 = 50;

    var r2 = 255;
    var g2 = 0;
    var b2 = 0;

    var r = Math.round((1 - percentage) * r1 + percentage * r2);
    var g = Math.round((1 - percentage) * g1 + percentage * g2);
    var b = Math.round((1 - percentage) * b1 + percentage * b2);

    return "rgb("+r+","+g+","+b+")";
  }

  function addHistoryEntry(entry) {
    var percentageAmount = Math.min(entry.amount/maxAmount, 1);
    insertTemplate("templates/history_entry.html", {day:entry.day, month:entry.month, year:entry.year, px:percentageAmount*720, value:entry.amount, id: entry.id}, "history_list");
  }

  function generateHistory(data) {
    for (var i = 0; i < data.length; ++i) {
      addHistoryEntry(data[i]);
    }
  }

  $(function () {
    generateHistory(entries);
  })
})();
