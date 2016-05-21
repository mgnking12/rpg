var colors = {
	"blue" : {
		opacity: 1
	},
	"red": {
		opacity: 1
	},
	"orange" : {
		opacity: 1
	},
}


$(document).ready(function(){

	/* Theme music files */
	var themeMusic = new Audio("assets/mp3/ColdplayYellow.mp3");
	themeMusic.play(); /* start music on page load. */

	$('.bButton').on('click', function(){
    console.log('heeeeere');
    var $bBut = $(this);
    $('.urChoice').append("<div id='blue' class='color'></div>");
    attachEvents();
    $bBut.css('display', 'none');
    $('.rButton').css('display', 'none');
    $('.oButton').css('display', 'none');
  });
  
  $('.rButton').on('click', function(){
    console.log('heeeeere');
    var $rBut = $(this);
    $('.urChoice').append("<div id='red' class='color'></div>");
    attachEvents();
    $rBut.css('display', 'none');
    $('.bButton').css('display', 'none');
    $('.oButton').css('display', 'none');
  });

  $('.oButton').on('click', function(){
    console.log('heeeeere');
    var $oBut = $(this);
    $('.urChoice').append("<div id='orange' class='color'></div>");
    attachEvents();
    $oBut.css('display', 'none');
    $('.rButton').css('display', 'none');
    $('.bButton').css('display', 'none');
  });

  $('.obButton').on('click', function(){
    console.log('heeeeere');
    var $bBut = $(this);
    $('.urOChoice').append("<div id='blue' class='color'></div>");
    attachEvents();
    $bBut.css('display', 'none');
    $('.orButton').css('display', 'none');
    $('.ooButton').css('display', 'none');
  });
  
  $('.orButton').on('click', function(){
    console.log('heeeeere');
    var $rBut = $(this);
    $('.urOChoice').append("<div id='red' class='color'></div>");
    attachEvents();
    $rBut.css('display', 'none');
    $('.obButton').css('display', 'none');
    $('.oButton').css('display', 'none');
  });

  $('.ooButton').on('click', function(){
    console.log('heeeeere');
    var $oBut = $(this);
    $('.urOChoice').append("<div id='orange' class='color'></div>");
    attachEvents();
    $oBut.css('display', 'none');
    $('.orButton').css('display', 'none');
    $('.obButton').css('display', 'none');
  });
  
  attachEvents();
  
  /*$('.color').on('click', function () {
    console.log('here');
    var $el = $(this);
    // this is set to the elment
    var colorState = colors[this.id];
    if (this.id === 'red') {
      colorState.opacity = colorState.opacity / 2;
    } else {
      colorState.opacity = colorState.opacity / 4;
    }

    console.log(colorState);
    $el.css('opacity', colorState.opacity);
  });*/
});

function attachEvents(){
	$('.color').on('click', function () {
    console.log(this);
    var $el = $(this); // why is this the .color function instead of the window?
    // this is set to the elment
    var colorState = colors[this.id];
    if (this.id === 'red') {
      colorState.opacity = colorState.opacity / 2;
    } else if (this.id === 'blue') {
      colorState.opacity = colorState.opacity / 2.5;
    } else if (this.id === 'orange') {
      colorState.opacity = colorState.opacity / 1.5;
    }
    if (colorState.opacity < 0.03) {
    	alert("you lose!");
    	reset();
    }
    console.log(colorState);
    $el.css('opacity', colorState.opacity);
  });
}

function reset(){
	$('.rButton').css('display', 'initial');
	$('.bButton').css('display', 'initial');
	$('.oButton').css('display', 'initial');
	$('.urChoice').find('div').remove();
}

// I want all of the characters to be colors and to have life points and when their life points run out they get erased (fade out) and everytime they lose points they go down a shade