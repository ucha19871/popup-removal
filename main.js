(function( $ ) {

    var ads = ['forads','parent_popup','ad_overlay','toPopup','modFBpopup'];

    setTimeout( function() {
        $.each(ads, function( index, value ) {
            var id = "#"+value;
            if ($(id).length){
                $(id).remove();
            }

        });

    },200);

})( jQuery );
