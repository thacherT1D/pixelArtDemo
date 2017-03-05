(function(){
  'use strict';

  var body = document.getElementsByTagName('body')[0];
  var wrapper = document.createElement('section');
  body.appendChild(wrapper);
  var heightWidth = '10%';

  var createCanvas = function() {
    for (var i = 0; i < 5; i++) {
      var row = document.createElement('div');
      wrapper.appendChild(row);
      row.style.clear = 'both';
      for (var j = 0; j < 5; j++) {
        var square = document.createElement('div');
        row.appendChild(square);
        square.style.height = heightWidth;
        square.style.width = heightWidth;
        square.style.float = 'left';
        square.style.paddingTop = '10%';
        square.style.margin = '0.5% 0.5% 0px 0px';
        square.style.border = '1px solid black';
        square.style.boxSizing = 'border-box';
      }
    }
  }

  var createPalette = function() {
    var palette = document.createElement('section');
    body.appendChild(palette);
    palette.style.clear = 'both';

    var colors = ['#1a472a', '#2a623d', '#5d5d5d', '#aaaaaa', '#000000']

    function getColorFromPalette(pickEvent) {
      currentColor = pickEvent.target.style.backgroundColor;
    }

    for (var i = 0; i < 1; i++) {
      for (var j = 0; j < 5; j++) {
        var paletteSquare = document.createElement('div');
        document.getElementsByTagName('section')[1].appendChild(paletteSquare);
        paletteSquare.style.height = heightWidth;
        paletteSquare.style.width = heightWidth;
        paletteSquare.style.paddingTop = '10%';
        paletteSquare.style.margin = '0.5% 0.5% 0px 0px';
        paletteSquare.style.border = '1px solid white';
        paletteSquare.style.boxSizing = 'border-box';
        paletteSquare.style.float = 'left';
        paletteSquare.style.backgroundColor = colors[j];
        paletteSquare.addEventListener('click', getColorFromPalette);
      }
    }
  }

  var clickSquare = document.querySelector('section');
  var currentColor = '#ffffff';

  function applyColor (event) {
      event.target.style.background = currentColor;
  }

  clickSquare.addEventListener('click', applyColor);

  createCanvas();
  createPalette();
})();
