$(document).ready(function (){

    $('.banner-numb__nb').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    $('body').delegate('.form__input-effect, .form__textarea-effect', 'focusout', function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    });


    $(function() {
        $('.form').livequery(function() {
            var $context = $(this);
            var $form = $('form', $context);

            var $inputs = $('[data-fieldname]', $context);
            $inputs.each(function() {
                var $input = $(this);
                var $field = $input.closest('.form__cell_phone');
                if ($input.val() !== '') {
                    $input.addClass('is-dirty');
                } else {
                    $input.addClass('is-empty');
                    $field.addClass('is-empty');
                }
                $input.on('blur', function() {
                    if ($input.val() === '') {
                        $input.addClass('is-empty');
                        $field.addClass('is-empty');
                    } else {
                        $input.removeClass('is-empty');
                        $field.removeClass('is-empty');
                    }
                    $field.removeClass('is-focus');
                });
                $input.on('focus', function() {
                    $field.addClass('is-focus');
                });
                $input.on('change', function() {
                    $input.addClass('is-dirty');
                });
            });

        });
    });



    $(".header__menu, .footer__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });





    $('.js-toggler').on('click', function(){
      $('.header').toggleClass('open').removeClass('cl');
      $('body').toggleClass('overfl');
    });

    $('.header__menu ul li a').on('click', function(){
        $('.header').addClass('cl').removeClass('open');
        $('body').removeClass('overfl');
    });

    $(function() {
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }

        $(".mail__drop span").on("click", function() {
            copyToClipboard("#text");
        });
    });


    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('.js-reviews-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.js-reviews-nav'
    });
    $('.js-reviews-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-reviews-for',
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    variableWidth: true,
                    centerMode: false
                }
            }
        ]
    });

    $('.js-gallery').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        swipe: 'false',
        swipeToSlide: 'false',
        touchMove: 'false',
        draggable: 'false',
        accessibility: 'false',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    variableWidth: true,
                    arrows: false,
                    dots: false,
                    swipe: 'true',
                    swipeToSlide: 'true',
                    touchMove: 'true',
                    draggable: 'true',
                    accessibility: 'true'
                }
            }
        ]
    });




    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function() {
        initMasks();
        initListeners();
    });

    function initMasks() {
        $('input[name="phone-number"]').mask("+7 (000) 000-00-00");
    }

    function initListeners() {
        $("#phone").on("blur", validatePhone);
        $("#name").on("blur", validateName);

        $("#phone2").on("blur", validatePhone2);
        $("#name2").on("blur", validateName2);

        $("#phone3").on("blur", validatePhone3);
        $("#name3").on("blur", validateName3);

        $(".submitBtn").on("click", validateForm);
        $(".submitBtn2").on("click", validateForm2);
        $(".submitBtn3").on("click", validateForm3);
    }



    function validatePhone() {
        var isValid = false;
        var length = $("#phone").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $("#phone").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone2() {
        var isValid = false;
        var length = $("#phone2").val().length;
        if (length == 18) {
            $(".phoneValidationImg2").html( '').parent().parent().removeClass('er');
            $("#phone2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg2").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone3() {
        var isValid = false;
        var length = $("#phone3").val().length;
        if (length == 18) {
            $(".phoneValidationImg3").html( '').parent().parent().removeClass('er');
            $("#phone3").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg3").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }



    function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html( '').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName2() {
        var isValid = false;
        var length = $("#name2").val().length;
        if (length > 1) {
            $(".nameValidationImg2").html( '').parent().parent().removeClass('er');
            $("#name2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg2").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName3() {
        var isValid = false;
        var length = $("#name3").val().length;
        if (length > 1) {
            $(".nameValidationImg3").html( '').parent().parent().removeClass('er');
            $("#name3").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg3").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }


    function validateForm() {
        var formIsValid = true;

        if (!validatePhone()) {
            $("#phone").addClass("invalid");
            formIsValid = false;
        } else {
            $("#phone").removeClass("invalid");
        }


        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }
    }
    function validateForm2() {
        var formIsValid2 = true;

        if (!validatePhone2()) {
            $("#phone2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#phone2").removeClass("invalid");
        }


        if (!validateName2()) {
            $("#name2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#name2").removeClass("invalid");
        }
    }
    function validateForm3() {
        var formIsValid = true;

        if (!validatePhone3()) {
            $("#phone3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#phone3").removeClass("invalid");
        }


        if (!validateName3()) {
            $("#name3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#name3").removeClass("invalid");
        }
    }


    const dt = new DataTransfer();

    $(".attachment").on('change', function(e){
        for(var i = 0; i < this.files.length; i++){
            let fileBloc = $('<span/>', {class: 'file-block'}),
                fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
            fileBloc.append('<span class="file-delete"><img src="images/svg/close.svg" alt=""></span>')
                .append(fileName);
            $(".filesList > .files-names").append(fileBloc).parent().parent().parent().addClass('open');
        };
        for (let file of this.files) {
            dt.items.add(file);
        }
        this.files = dt.files;
        $('.file-delete').click(function(){
            $(".form__file").removeClass('open');
            let name = $(this).next('.names').text();
            $(this).parent().remove();
            for(let i = 0; i < dt.items.length; i++){
                if(name === dt.items[i].getAsFile().name){
                    dt.items.remove(i);
                    continue;
                }
            }
            document.getElementsByClassName('attachment').files = dt.files;
        });
    });

    $("#attachment2").on('change', function(e){
        for(var i = 0; i < this.files.length; i++){
            let fileBloc = $('<span/>', {class: 'file-block'}),
                fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
            fileBloc.append('<span class="file-delete2"><img src="images/svg/close.svg" alt=""></span>')
                .append(fileName);
            $(".filesList2 > .files-names2").append(fileBloc).parent().parent().parent().addClass('open');
        };
        for (let file of this.files) {
            dt.items.add(file);
        }
        this.files = dt.files;

        $('.file-delete2').click(function(){
            $(".form__file").removeClass('open');
            let name = $(this).next('.names2').text();
            $(this).parent().remove();
            for(let i = 0; i < dt.items.length; i++){
                if(name === dt.items[i].getAsFile().name){
                    dt.items.remove(i);
                    continue;
                }
            }
            document.getElementsByClassName('attachment2').files = dt.files;
        });
    });


});




// Livequery
$(function($){
    var cash = [];
    $.fn.livequery = function (callback) {
        function checkBlocks() {
            var $context = $(this);
            var _tmp;
            var length = cash.length;

            for(var i = 0; i < cash.length;i++) {
                _tmp = $context.find(cash[i].selector);

                if(_tmp.length > 0 && !_tmp.data('live-checker')) {
                    _tmp.each(function() {
                        cash[i].callback.apply(this)
                        $(this).data('live-checker', true);
                    });
                }
            }

        }

        if(callback != null) {
            cash.push({
                selector: this.selector,
                callback: callback
            });

            return this.each(function () {
                var $elem = $(this);

                callback.apply(this);
                $elem.data('live-checker', true);
            });
        } else {
            return this.each(checkBlocks);
        }
    }
});

