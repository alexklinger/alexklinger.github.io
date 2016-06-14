$(document).keydown(function(e){
    if (e.keyCode == 81) { 
	document.getElementById('sound1').pause();
	document.getElementById('sound1').currentTime = 0;
       document.getElementById('sound1').play();
       $('#img1').addClass('shadow');
      
       return false;
    }

     if (e.keyCode == 87) { 
       document.getElementById('sound2').pause();
	   document.getElementById('sound2').currentTime = 0;
       document.getElementById('sound2').play();
       $('#img2').addClass('shadow');
       return false;
    }

     if (e.keyCode == 69) { 
        document.getElementById('sound3').pause();
	   document.getElementById('sound3').currentTime = 0;	
       document.getElementById('sound3').play();
       $('#img3').addClass('shadow');
       return false;
    }

     if (e.keyCode == 65) { 
     	 document.getElementById('sound4').pause();
	   document.getElementById('sound4').currentTime = 0;
       document.getElementById('sound4').play();
       $('#img4').addClass('shadow');
       return false;
    }

     if (e.keyCode == 83) { 
     	 document.getElementById('sound5').pause();
	   document.getElementById('sound5').currentTime = 0;
       document.getElementById('sound5').play();
       $('#img5').addClass('shadow');
       return false;
    }

     if (e.keyCode == 68) { 
     	 document.getElementById('sound6').pause();
	   document.getElementById('sound6').currentTime = 0;
       document.getElementById('sound6').play();
       $('#img6').addClass('shadow');
       return false;
    }

     if (e.keyCode == 90) { 
     	 document.getElementById('sound7').pause();
	   document.getElementById('sound7').currentTime = 0;
       document.getElementById('sound7').play();
       $('#img7').addClass('shadow');
       return false;
    }

     if (e.keyCode == 88) { 
     	 document.getElementById('sound8').pause();
	   document.getElementById('sound8').currentTime = 0;
       document.getElementById('sound8').play();
       $('#img8').addClass('shadow');
       return false;
    }

     if (e.keyCode == 67) { 
     	 document.getElementById('sound9').pause();
	   document.getElementById('sound9').currentTime = 0;
       document.getElementById('sound9').play();
       $('#img9').addClass('shadow');
       return false;
    }


});

$(document).keyup(function(e){
    if (e.keyCode == 81) { 
     
       $('#img1').removeClass('shadow');

    }
        if (e.keyCode == 87) { 
     
       $('#img2').removeClass('shadow');
            
    }
    if (e.keyCode == 69) { 
     
       $('#img3').removeClass('shadow');
            
    }

if (e.keyCode == 65) { 
     
       $('#img4').removeClass('shadow');

    }
        if (e.keyCode == 83) { 
     
       $('#img5').removeClass('shadow');
            
    }
    if (e.keyCode == 68) { 
     
       $('#img6').removeClass('shadow');
            
    }

    if (e.keyCode == 90) { 
     
       $('#img7').removeClass('shadow');

    }
        if (e.keyCode == 88) { 
     
       $('#img8').removeClass('shadow');
            
    }
    if (e.keyCode == 67) { 
     
       $('#img9').removeClass('shadow');
            
    }


    });
    
    $(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });
});

