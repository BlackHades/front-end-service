

//  service provider fills form

$('#serviceProvider').click(function () {
  $('.pop-up').show();
  $('.pop-up-content p').html('You have successfully filled indicated interest to provide a service. ' +
      'We have sent an email to you, click on the <a href="../login/changepasword.html">link</a>to continue');
});

$('.pop-up').hide();


$('.submit-reg').click(function () {
  $('.pop-up').show();
});

$('.pop-up').hide();




//seleect all divs the class name class form-tabs

$('.form-tabs').hide();


$('.form-tab').hide();
$('.sms-tab').show();

$('.header1').show();


$('#sms-checkbox').change(function(){
  if(this.checked) {
    $('.sms-tab').show();

  }else {
    $('.sms-tab').hide();

  }
});

$('#ivr-checkbox').change(function(){
  if(this.checked) {
    $('.ivr-tab').show();
  }else {
    $('.ivr-tab').hide();
  }
});

$('#web-checkbox').change(function(){

  if(this.checked) {
    $('.web-tab').show();
  }else {
    $('.web-tab').hide();
  }
});

$('#ussd-checkbox').change(function(){
  if(this.checked) {
    $('.ussd-tab').show();
  }else {
    $('.ussd-tab').hide();
  }

});


//subscribers page
$('.subscriber-table tbody tr').click(function () {
    $(this).nextAll().toggle(); // hide all rows
    $(this).show(); // show th
    $('.subscription-list').toggle(300);
});

$('.service-card').click(function () {
    $('.service-table').hide();
    $('.service-detail').show(300);
});

$('.service-back').click(function () {
    $('.service-detail').hide();
    $('.service-table').show(300);
    $('.subscriber-table tbody tr').show();
});



//form handler (multi step form)
//
// $('.prev-form').hide();
//
// $('.next-form1').click(function () {
//   $(".form-tabs").fadeOut();
//   $(".form-two").fadeIn();
//   $(".form-header").hide();
//   $(".header2").show();
// });
//
// $('.next-form2').click(function () {
//   $(".form-tabs").fadeOut();
//   $(".form-three").fadeIn();
//   $(".form-header").hide();
//   $(".header3").show();
// });
// $('.next-form3').click(function () {
//   $(".form-tabs").fadeOut();
//   $(".form-four").fadeIn();
//   $(".form-header").hide();
//   $(".header4").show();
// });
//
// $('.next-form4').click(function () {
//   $(".form-tabs").fadeOut();
//   $(".form-five").fadeIn();
//   $(".form-header").hide();
//   $(".header5").show();
// });

$('#shared').change(function(){
  if(this.checked){
    $('.check-tab').hide();
    $('.check-tab-shared').show();
  }
});
$('#dedicated').change(function(){
  if(this.checked){
    $('.check-tab').hide();
    $('.check-tab-dedicated').show();
  }
});

$('#dedicated').change(function(){
  if(this.checked){
    $('.check-tab').hide();
    $('.check-tab-dedicated').show();
  }
});

$('#external-site').change(function(){
  if(this.checked){
    $('.external-site-tab').show();
  }
});

$('#cms').change(function(){
  if(this.checked){
    $('.external-site-tab').hide();
  }
});

$('.external-site-tab').hide();


$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn'),
        allHeaders = $('.form-header'),
        allPrevBtn = $('.prevBtn');

    allWells.hide();
    allHeaders.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-dark-blue').addClass('btn-muted');
            $item.addClass('btn-dark-blue');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allPrevBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

        prevStepWizard.removeAttr('disabled').trigger('click');
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        // $(".form-group").removeClass("has-error");
        // for(var i=0; i<curInputs.length; i++){
        //     if (!curInputs[i].validity.valid){
        //         isValid = false;
        //         $(curInputs[i]).closest(".form-group").addClass("has-error");
        //     }
        // }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');


    $('.header1').show();
    $('#step-1').show();
    $('.show-header2').click(function () {
        $('.form-header').hide();
        $('.header2').show();

    });
    $('.show-header1').click(function () {
        $('.form-header').hide();
        $('.header1').show();

    });

    $('.show-header3').click(function () {
        $('.form-header').hide();
        $('.header3').show();

    });

    $('.show-header4').click(function () {
        $('.form-header').hide();
        $('.header4').show();

    });

    $('.show-header5').click(function () {
        $('.form-header').hide();
        $('.header5').show();

    });

    $('.show-header6').click(function () {
        $('.form-header').hide();
        $('.header6').show();

    })
});


