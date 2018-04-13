(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about-page').fadeIn();
    $('.link a').css({color:'white'});
    $('#about-link').css({color:'grey'});
    $('#title').fadeOut(function() {
      $('#title').text('About Mugsy').fadeIn();
    });
    $('#subtitle').fadeOut(function() {
      $('#subtitle').text('developer bio').fadeIn();
    });
  };

  module.aboutController = aboutController;
})(window);
