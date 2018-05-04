  $(function() {
   $('#iam').selectric();
   $('#iam-mobile').selectric();
  });

  var postForm = function (event) {

    var email = $('#email').val();
    var name = $('#name').val();
    var iam = $('#iam').val();
  
    if($.trim($('#email').val()) == ''){
    var email = $('#email-mobile').val();
    var name = $('#name-mobile').val();
    var iam = $('#iam-mobile').val();

     
   }
      $('form').submit(function(e){
       e.preventDefault();
         $.ajax({
           url: '/',
           method: "POST",
          data: {
          email: email,
          fname: name.split(' ')[0],
          lname: name.split(' ')[1],
          iam: iam,
        },
           success:function(data){
             
            
           },
           complete:function(){
             if($(window).width() > 1200) {

              $('#cta-new').addClass('cta-success');
              $('#cta-new').show();

                $('.success-exit').click(function (event) {
                $('#form').trigger('reset');
                $('#iam').selectric('refresh');
                $("#cta-new").animate({ "left": "-2500px" }, "slow" );
                $("#form")[0].reset();
                setTimeout(function(){ location.reload();}, 3000);

                 })



              }else{

                $('#cta-new-mobile').addClass('cta-success-mobile');
                $('#cta-new-mobile').show();


                $('.success-exit-mobile').click(function (event) {
                $('#form2').trigger('reset');
                $('#iam-mobile').selectric('refresh');
                $("#cta-new-mobile").animate({ "left": "-2500px" }, "slow" );
                $("#form2")[0].reset();
                setTimeout(function(){ location.reload();}, 3000);



              })
           };


          }
       });
    });
  };

function validateEmail(email) {
  var email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_re.test(email);
}


$('#signup-btn').click(function (event) {
   $("#result").text("");
   var email = $("#email").val();
   if (validateEmail(email)) {
   postForm(event);
   } else {
    $("#result").text(email + " is not valid. Please enter a valid email address.");
    $("#result").css("color", "red");
    return false;
  }
 
 });

 $('#signup-btn-mobile').on('touchstart click', function (event) {
   $("#result-mobile").text("");
   var email = $("#email-mobile").val();
   if (validateEmail(email)) {
   postForm(event);
   } else {
    $("#result-mobile").text("Email is not valid. Please enter a valid email address.");
    $("#result-mobile").css("color", "red");
    return false;
  }
 });






$("#signupmobilebutton").on('touchstart click',function( event )  {
    $('html, body').animate({
        scrollTop: $("#signup").offset().top
    }, 2000);
});

$("#arrow-mobile").on('touchstart click',function( event )  {
    $('html, body').animate({
        scrollTop: $("#signup").offset().top
    }, 2000);
});