(function() {
  var entries = [
    {id: 1, amount: 15, date: "21.10.2015"}, {id: 2, amount: 23, date: "22.10.2015"}, {id: 3, amount: 43, date: "23.10.2015"},
    {id: 4, amount: 55, date: "24.10.2015"}, {id: 5, amount: 10, date: "25.10.2015"}, {id: 6, amount: 50, date: "26.10.2015"},
    {id: 7, amount: 48, date: "27.10.2015"}, {id: 8, amount: 18, date: "28.10.2015"}, {id: 9, amount: 34, date: "29.10.2015"},
    {id: 10, amount: 70, date: "30.10.2015"}, {id: 11, amount: 23, date: "31.10.2015"}, {id: 12, amount: 34, date: "1.11.2015"},
    {id: 13, amount: 32, date: "2.11.2015"}, {id: 14, amount: 43, date: "3.11.2015"}, {id: 15, amount: 12, date: "4.11.2015"},
    {id: 16, amount: 34, date: "5.11.2015"}, {id: 17, amount: 23, date: "6.11.2015"}, {id: 18, amount: 76, date: "7.11.2015"}
  ];

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
    var maxAmount = 50;
    var percentageAmount = Math.min(entry.amount/maxAmount, 1);
    insertTemplate("templates/history_entry.html", {date:entry.date, color:calculateColor(percentageAmount), value:entry.amount, progress: percentageAmount * 100, id: entry.id}, "history_list");
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
