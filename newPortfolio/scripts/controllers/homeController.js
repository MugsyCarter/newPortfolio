(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('.tab-content').hide();
    $('#threeColumnHome').fadeIn();
    $('.link a').css({color:'white'});
    $('#home-link').css({color:'grey'});
    $('#title').fadeOut(function() {
      $('#title').text('Mugsy Carter').fadeIn();
    });
    $('#subtitle').fadeOut(function() {
      $('#subtitle').text('Developer Portfolio').fadeIn();
    });
  };

  module.homeController = homeController;
})(window);
