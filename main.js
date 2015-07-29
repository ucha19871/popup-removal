(function( $ ) {

    var ads = ['forads','parent_popup','ad_overlay'];

    setTimeout( function() {
        $.each(ads, function( index, value ) {
            var id = "#"+value;
            if ($(id).length){
                $(id).remove();
            }

        });

    },200);

})( jQuery );

