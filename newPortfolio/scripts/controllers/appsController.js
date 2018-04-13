(function(module) {
  var appsController = {};

  appsController.reveal = function() {
    $('.tab-content').hide();
    $('#apps-page').fadeIn();
    $('.link a').css({color:'white'});
    $('#apps-link').css({color:'grey'});
    $('#title').fadeOut(function() {
      $('#title').text('Web Apps').fadeIn();
    });
    $('#subtitle').fadeOut(function() {
      $('#subtitle').text('Mugsy\'s projects').fadeIn();
    });
  };

  appsController.revealProjects = function(projectsObj) {
    cityView.handleStateRental(stateObj);
  };

  module.appsController = appsController;
})(window);
