$(document).ready(function(){
    setTimeout(function() {
        $('#loading').fadeOut();
    }, 1000);
});

window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1BqvQQPeIJfEijK8ZprRzVLiePkxHlGGzfkr2mfYDnl8/edit?usp=sharing';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<div/>');
      tr.append("<div class='card'><h5 class='Name'>"+data[i].Name+"</h5>" + "<p class='city'>" + data[i].City + "</p>" + "<p class='phn'>" + data[i].PhoneNo + "</p>" + "<p class='emailID'>" + data[i].EmailAddress + "</p> </div>");
      $('.cards').append(tr);
    }
    //console.log(data);
  }