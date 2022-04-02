function changeImage(current) {
	var imagesNumber = 5;

	for (i=1; i<=imagesNumber; i++) {
		if (i == current) {
			document.getElementById("normal" + current).style.display = "block";
		} else {
			document.getElementById("normal" + i).style.display = "none";
		}
	}
}


function bigImg(){


	var descr = document.getElementById('description');

	descr.style.display = 'block';

}

function bigImg2(){

	var descr = document.getElementById('description2');

	descr.style.display = 'block';

}

function bigImg3(){

	var descr = document.getElementById('description3');

	descr.style.display = 'block';

}

function bigImg4(){

	var descr = document.getElementById('description4');

	descr.style.display = 'block';

}

function bigImg5(){

	var descr = document.getElementById('description5');

	descr.style.display = 'block';

}

function bigImg6(){

	var descr = document.getElementById('description6');

	descr.style.display = 'block';

}

function bigImg7(){

	var descr = document.getElementById('description7');

	descr.style.display = 'block';

}

function bigImg8(){

	var descr = document.getElementById('description8');

	descr.style.display = 'block';

}

function bigImg9(){

	var descr = document.getElementById('description9');

	descr.style.display = 'block';

}

function bigImg10(){

	var descr = document.getElementById('description10');

	descr.style.display = 'block';

}

function bigImg11(){

	var descr = document.getElementById('description11');

	descr.style.display = 'block';

}

function bigImg12(){

	var descr = document.getElementById('description12');

	descr.style.display = 'block';

}

function bigImg13(){

	var descr = document.getElementById('description13');

	descr.style.display = 'block';

}

function bigImg14(){

	var descr = document.getElementById('description14');

	descr.style.display = 'block';

}

function bigImg15(){

	var descr = document.getElementById('description15');

	descr.style.display = 'block';

}

function bigImg16(){

	var descr = document.getElementById('description16');

	descr.style.display = 'block';

}

function bigImg17(){

	var descr = document.getElementById('description17');

	descr.style.display = 'block';

}


$(document).ready(function(){ 
          $(window).scroll(function(){ 
              if ($(this).scrollTop() > 100) { 
                $('#scroll').fadeIn(); 
             } else { 
                $('#scroll').fadeOut(); 
          } 
      }); 
      $('#scroll').click(function(){ 
          $("html, body").animate({ scrollTop: 0 }, 600); 
            return false; 
       }); 


       });

        
      
         $(".links").click(function() {
           $('html, body').animate({
           scrollTop: $("#bigimages").offset().top
           }, 2000);
          });


  function bigImgs(){

         	var one = document.getElementById('description');
         	one.style.display = 'none';
         


         	var three = document.getElementById('description2');
         	three.style.display = 'none';
         	var four = document.getElementById('description3');
         	four.style.display = 'none';
         	var five = document.getElementById('description4');
         	five.style.display = 'none';
         	var six = document.getElementById('description5');
         	six.style.display = 'none';
         	var seven = document.getElementById('description6');
         	seven.style.display = 'none';
         	var eight = document.getElementById('description7');
         	eight.style.display = 'none';
         	var nine = document.getElementById('description8');
         	nine.style.display = 'none';
         	var ten = document.getElementById('description9');
         	ten.style.display = 'none';
         	var eleven = document.getElementById('description10');
         	eleven.style.display = 'none';
         	var twelve = document.getElementById('description11');
         	twelve.style.display = 'none';
         	var thirteen = document.getElementById('description12');
         	thirteen.style.display = 'none';
         	var fourteen = document.getElementById('description13');
         	fourteen.style.display = 'none';
         	var fifteen = document.getElementById('description14');
         	fifteen.style.display = 'none';
         	var sixteen = document.getElementById('description15');
         	sixteen.style.display = 'none';
         	var seventeen = document.getElementById('description16');
         	seventeen.style.display = 'none';
         	var eighteen = document.getElementById('description17');
         	eighteen.style.display = 'none';

         	}





	

	

	








