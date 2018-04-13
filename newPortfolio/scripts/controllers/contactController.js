(function(module) {
  var contactController = {};

  contactController.reveal = function() {
    $('.tab-content').hide();
    $('#contact-page').fadeIn();
    $('.link a').css({color:'white'});
    $('#contact-link').css({color:'grey'});
    $('#title').fadeOut(function() {
      $('#title').text('Contact Mugsy').fadeIn();
    });
    $('#subtitle').fadeOut(function() {
      $('#subtitle').text('reach out').fadeIn();
    });
  };

  contactController.mortgageReveal = function(mortgageObj, isCurrent) {
    cityView.handleMortgage(mortgageObj, isCurrent);
  };

  contactController.incomeReveal = function(incomeObj) {
    cityView.handleIncome(incomeObj);
  };


  module.contactController = contactController;
})(window);
