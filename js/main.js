$(document).ready(function(){

   $('.pizzaItem').click(function(){

      $(".pasta").fadeOut(500);
      $(".salad").fadeOut(500);
      $(".desert").fadeOut(500);
      $(".drinks").fadeOut(500);
      $(".pizza").fadeOut(100);
      $(".pizza").fadeIn(1000);
      $('.pizzaItem').addClass("activeBtn");
      $(".saladItem").removeClass("activeBtn");
      $('.desrtItem').removeClass("activeBtn");
      $(".drinksItem").removeClass("activeBtn");
      $(".pastaItem").removeClass("activeBtn");
      $(".all").removeClass("activeBtn");
   });

   $('.pastaItem').click(function(){

      $(".pizza").fadeOut(500);
      $(".salad").fadeOut(500);
      $(".desert").fadeOut(500);
      $(".drinks").fadeOut(500);
      $(".pasta").fadeIn(1000);
      $('.pastaItem').addClass("activeBtn");
      $(".saladItem").removeClass("activeBtn");
      $('.desrtItem').removeClass("activeBtn");
      $(".drinksItem").removeClass("activeBtn");
      $(".pizzaItem").removeClass("activeBtn");
      $(".all").removeClass("activeBtn");
   });

   $('.saladItem').click(function(){

      $(".pizza").fadeOut(500);
      $(".pasta").fadeOut(500);
      $(".desert").fadeOut(500);
      $(".drinks").fadeOut(500);
      $(".salad").fadeIn(1000);
      $('.saladItem').addClass("activeBtn");
      $(".pizzaItem").removeClass("activeBtn");
      $('.desrtItem').removeClass("activeBtn");
      $(".drinksItem").removeClass("activeBtn");
      $(".pastaItem").removeClass("activeBtn");
      $(".all").removeClass("activeBtn");

   });

   $('.desrtItem').click(function(){

      $(".pizza").fadeOut(500);
      $(".salad").fadeOut(500);
      $(".pasta").fadeOut(500);
      $(".drinks").fadeOut(500);
      $(".desert").fadeIn(1000);
      $('.desrtItem').addClass("activeBtn");
      $(".saladItem").removeClass("activeBtn");
      $(".pizzaItem").removeClass("activeBtn");
      $(".drinksItem").removeClass("activeBtn");
      $(".pastaItem").removeClass("activeBtn");
      $(".all").removeClass("activeBtn");
   });

   $('.drinksItem').click(function(){

      $(".pizza").fadeOut(500);
      $(".salad").fadeOut(500);
      $(".desert").fadeOut(500);
      $(".pasta").fadeOut(500);
      $(".drinks").fadeIn(1000);
      $('.drinksItem').addClass("activeBtn");
      $(".saladItem").removeClass("activeBtn");
      $('.desrtItem').removeClass("activeBtn");
      $(".pizzaItem").removeClass("activeBtn");
      $(".pastaItem").removeClass("activeBtn");
      $(".all").removeClass("activeBtn");
   });
   $('.all').click(function(){

      $(".pizza").fadeOut(50);
      $(".salad").fadeOut(50);
      $(".desert").fadeOut(50);
      $(".pasta").fadeOut(50);
      $(".drinks").fadeOut(50);
      $(".pizza").fadeIn(1500);
      $(".pasta").fadeIn(1500);
      $(".drinks").fadeIn(1500);
      $(".salad").fadeIn(1500);
      $(".desert").fadeIn(1500);
      $('.all').addClass("activeBtn");
      $(".saladItem").removeClass("activeBtn");
      $('.desrtItem').removeClass("activeBtn");
      $(".drinksItem").removeClass("activeBtn");
      $(".pastaItem").removeClass("activeBtn");
      $(".pizzaItem").removeClass("activeBtn");
   });
   $('button').click(function(){
      $(this).css({"border":"none !important","outline":"none !important"});
   });
});
//    *****************************    pizza price    *********************************
$('.carousel').carousel({
   interval: 4000
 })
// *******************************counter********************
let numberCounter = document.getElementById('number');
window.onscroll = function() {

   let numberOffsetTop = numberCounter.offsetTop;
   let numberOffsetHeight = numberCounter.offsetHeight;
   let windowHeight = this.innerHeight;
   let windowScrollTop = this.pageYOffset;
   if(windowScrollTop >(numberOffsetTop +numberOffsetHeight-windowHeight)) {
         
      var counter = document.querySelectorAll('.counter'),
      speed =200;

      counter.forEach(counter=>{

      var newCounter = () =>{

      var target = counter.getAttribute('data-target'),

            cnt= counter.innerText;

            cnt= parseInt(cnt);

            target = parseInt(target)

            const inc = target / speed;

      if(cnt < target) {

            counter.innerText = Math.ceil(cnt + inc);
            
            setTimeout(newCounter,1);
      }
      else {
            cnt.innerText = target;
      }
   
   }
   newCounter();
})
   }  
}
// Form validation

function validateForm() {
   var fName = document.forms["myForm"]["fName"].value,
      lName = document.forms["myForm"]["lName"].value,
      errorMessage= document.getElementById('error_messag'),
      text;
   if (fName == "" || fName.length <5) {
      text="please enter a valid first name";
      errorMessage.innerHTML=text;
      errorMessage.style.display = "block";
     return false;
   }
   if (lName == "" || lName.length <5) {
      text="please enter a valid last name";
      errorMessage.innerHTML=text;
      errorMessage.style.display = "block";
     return false;
   }
   
 }
