$( function() {
  $('#color-changer').click( function() {
    $(this).css("color", getRandomColor());
  } );
}
);

function getRandomColor() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
