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
    $('.urChoice').append("<div id='blue' class='color center-block'></div>");
    attachEvents();
    $('.choose').css('display', 'none');
    $('.chooseO').css('display', 'inline-block');
    $('.obButton').css('display', 'none');
  });
  
  $('.rButton').on('click', function(){
    console.log('heeeeere');
    var $rBut = $(this);
    $('.urChoice').append("<div id='red' class='color center-block'></div>");
    attachEvents();
    $('.choose').css('display', 'none');
    $('.chooseO').css('display', 'inline-block');
    $('.orButton').css('display', 'none');
  });

  $('.oButton').on('click', function(){
    console.log('heeeeere');
    var $oBut = $(this);
    $('.urChoice').append("<div id='orange' class='color center-block'></div>");
    attachEvents();
    $('.choose').css('display', 'none');
    $('.chooseO').css('display', 'inline-block');
    $('.ooButton').css('display', 'none');
  });

  //opponent

  $('.obButton').on('click', function(){
    console.log('heeeeere');
    var $bBut = $(this);
    $('.urOChoice').append("<div id='blue' class='color center-block'></div>");
    attachEvents();
    $('.chooseO').css('display', 'none');
    $('.click').css('display', 'inline-block');
  });
  
  $('.orButton').on('click', function(){
    console.log('heeeeere');
    var $rBut = $(this);
    $('.urOChoice').append("<div id='red' class='color center-block'></div>");
    attachEvents();
    $('.chooseO').css('display', 'none');
    $('.click').css('display', 'inline-block');
  });

  $('.ooButton').on('click', function(){
    console.log('heeeeere');
    var $oBut = $(this);
    $('.urOChoice').append("<div id='orange' class='color center-block'></div>");
    attachEvents();
   $('.chooseO').css('display', 'none');
   $('.click').css('display', 'inline-block');
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
      colorState.opacity = colorState.opacity / 1.8;
    } else if (this.id === 'blue') {
      colorState.opacity = colorState.opacity / 1.9;
    } else if (this.id === 'orange') {
      colorState.opacity = colorState.opacity / 2;
    }
    if (colorState.opacity < 0.08 ) {
    	alert(this.id + " loses!");
    	reset();
    }
    console.log(colorState);
    $el.css('opacity', colorState.opacity);
  });
}

function reset(){
	$('.choose').css('display', 'initial');
	$('.urChoice').find('div').remove();
	$('.urOChoice').find('div').remove();
	$('.oButton').css('display', 'initial');
	$('.bButton').css('display', 'initial');
	$('.rButton').css('display', 'initial');
	$('.ooButton').css('display', 'initial');
	$('.obButton').css('display', 'initial');
	$('.orButton').css('display', 'initial');
	$('.click').css('display', 'none');
	colors.blue.opacity = 1;
	colors.red.opacity = 1;
	colors.orange.opacity = 1;

	
}

// I want all of the characters to be colors and to have life points and when their life points run out they get erased (fade out) and everytime they lose points they go down a shade