let date = document.querySelector("input#date");
date.onfocus = function() {
    date.type='date';
  };

let guests = document.querySelector("input#guests");
guests.onfocus = function() {
    guests.type='number';
  };