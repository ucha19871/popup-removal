(function( $ ) {
    $.ajax({
        url: 'https://raw.githubusercontent.com/ucha19871/popup-removal/master/param.json',
        dataType:'json',
        type:'get',
        success: function (data) {
            var ads = data.ads;
            setTimeout( function() {
                $.each(ads, function( index, value ) {
                    var id = "[id^='"+value+"']";
                    //console.log($(id).length);
                    if ($(id).length){
                        $(id).remove();
                    }
                });
            },100);
        }
    });
})( jQuery );
