$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',

        // you have to get this from: https://codeofaninja.com/tools/find-instagram-user-id
        userId: '2189835851',
        limit: 100,
        resolution: 'standard_resolution',

        // you have to get this (Generate from somwhere look it up :P)
        accessToken: '2189835851.1677ed0.160637b028d44ba38636a98d67bfc4ce',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});