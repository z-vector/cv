/**
 * Created by z-vector.
 */
var Cv = (function() {
    var $thumbs = $('.grid figure'),
        $big_preview = $('.big_preview'),
        $big_preview_close_btn = $('.big_preview .close_btn');

    function init() {
        initEvents();
    }

    function hideBigPreview(){
        $big_preview.removeClass('show');
        $(document.body).removeClass('noscroll');
    };

    function showBigPreview(){
        $big_preview.addClass('show');
        $(document.body).addClass('noscroll');
    }

    function initEvents() {

        $(document).keydown(function(e){
            var code = e.keyCode ? e.keyCode : e.which;
            if(code == 27) hideBigPreview();
        });

        $big_preview_close_btn.on('click', function(){
            hideBigPreview();
        });

        $thumbs.each( function(index){
                var $thumb = $( this);
                console.log($(this).html());
                $(this).children().attr('src', works[index].preview);
                $(this).parent().find('.label').text(works[index].label);

                $thumb.on('click', function(){
                    var $h = $(this).parent().find('.label').text(),
                        pic_count   = works[index].images.length - 1,
                        cur_pic     = 0;

                    $big_preview.find('.prev').addClass('hide');
                    $big_preview.find('.next').removeClass('hide');


                    $big_preview.find('.next').on('click', function(){
                        if (cur_pic < pic_count) {
                            cur_pic++;
                            $big_preview.find('div.pic').css('background-image','url('+
                                works[index].images[cur_pic]
                            +')');
                        }
                        if (cur_pic == pic_count) {
                            $big_preview.find('.next').addClass('hide');
                            $big_preview.find('.prev').removeClass('hide');
                        }
                    });

                    $big_preview.find('.prev').on('click', function(){
                        if (cur_pic > 0) {
                            cur_pic--;
                            $big_preview.find('div.pic').css('background-image','url('+
                            works[index].images[cur_pic]
                            +')');
                        }
                        if (cur_pic == 0) {
                            $big_preview.find('.prev').addClass('hide');
                            $big_preview.find('.next').removeClass('hide');
                        }
                    });

                    if ($(this).hasClass('anim_01')) {
                        $(this).removeClass('anim_01');
                        $(this).parent().removeClass('anim_02');
                    }
                    else {
                        $(this).addClass('anim_01');
                        $(this).parent().addClass('anim_02');
                    }
                    $big_preview.find('h2').text($h);
                    $big_preview.find('.pic').css('background-image','url('+
                        works[index].images[cur_pic]
                    +')');
                    //showBigPreview();
                })
            }
        )
    }

    return { init : init };
})();