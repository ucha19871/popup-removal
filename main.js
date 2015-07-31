(function( $ ) {

    var ads = [
        'forads','parent_popup','ad_overlay','toPopup','modFBpopup','colorbox','cbox','hstp_',
        'liderbet','modFB','popup','banner','fancybox','ads','fanback'
    ];

    setTimeout( function() {
        $.each(ads, function( index, value ) {
            //var id = "#"+value;
            var id = "[id^='"+value+"']";
            if ($(id).length){
                $(id).remove();
            }

        });

    },200);

})( jQuery );
