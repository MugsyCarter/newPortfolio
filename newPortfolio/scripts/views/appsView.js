/* This script holds all of the logic for rendering the various parts of the
apps page 
 */


var appsView = {};

appsView.showProjects = function(projectsObj) {
  console.log('appsview.showprojects.  showing ', projectsObj);
  //$('#projects').hide().html(projectsObj.createProjectsHTML()).fadeIn('slow');
  // $('#projects').hide();
  //for (let i = 0; i < projectsObj.projects.length; i++){
  //var i = 0;
  //console.log(projectsObj.projects[i]);
  var source   = document.getElementById('projects-template').innerHTML;
  var template = Handlebars.compile(source);
  // var context = {title: projectsObj.projects[i].title, body: projectsObj.projects[i].description};
  var context = {title: 'fart', body: 'boobs'};
  var html = template(context);
  //}
  //$('#projects').fadeIn('slow');

};

appsView.handleIncomeNeededData = function() {
  $('#income_needed_median').html('Equivalent Income: <b>$' + Census.incNeeded + '</b>');
  $('#housing-diff-percent').html('House Price Change: <b>' + Census.housingDiffPercent + '%</b>');
  $('#dest-income_to_mortgage').html('Equivalent Income: <b>$' + Census.incNeededHomePrice + '</b>');
  $('#curr_state_rent_percent').html('Rent as % of Current Income: <b>' + Census.stateCurRentPercent + '%</b>');
  $('#dest_state_rent_percent').html('Expected Rent as % of Income: <b>' + Census.stateDestRentPercent + '%</b>');
};

appsView.handleIncome = function(incomeObj) {
  $('#user_income').html('Your Income: <b>$' + incomeObj + '</b>').fadeIn('slow');
};


appsView.handleMortgage = function(mortgageObj, isCurrent) {
  if(isCurrent) {
    $('#mortgage-data').hide().html(mortgageObj.createCurrentMortgageHtml()).fadeIn('slow');
  } else {
    $('#destination-mortgage-data').hide().html(mortgageObj.createDestinationMortgageHtml()).fadeIn('slow');
  }
};

appsView.handleStateRental = function(stateObj, isCurrent) {
  if(isCurrent) {
    $('#rental-data').hide().html(stateObj.createCurrentStateHtml()).fadeIn('slow');
  } else{
    $('#destination-rental-data').hide().html(stateObj.createDestinationStateHtml()).fadeIn('slow');
  }
};

appsView.handleCityMedianRental = function(cityMedianObj, isCurrent) {
  // If the city they selected doesn't have rental info, clear the html, otherwise update the right side
  if (cityMedianObj && isCurrent) {
    $('#curr_city_median_1bdrm').html('<p>In the city of <b>' + cityMedianObj.City + '</b>:</p>' +
      '<p>Median price (1 bdrm apartment): <b>' + cityMedianObj.Median_1_BR_price + '</b></p>').fadeIn('slow');
    $('#curr_city_median_2bdrm').html('<p>Median price (2 bdrm apartment): <b>' + cityMedianObj.Median_2_BR_price + '</b></p>').fadeIn('slow');
  } else if (cityMedianObj && !isCurrent) {
    $('#dest_city_median_1bdrm').html('<p>In the city of <b>' + cityMedianObj.City + '</b>:</p>' +
      '<p>Median price (1 bdrm apartment): <b>' + cityMedianObj.Median_1_BR_price + '</b></p>').fadeIn('slow');
    $('#dest_city_median_2bdrm').html('<p>Median price (2 bdrm apartment): <b>' + cityMedianObj.Median_2_BR_price + '</b></p>').fadeIn('slow');
  } else if (!cityMedianObj && isCurrent) {
    $('#curr_city_median_1bdrm').html('<p></p>');
  } else if (!cityMedianObj && !isCurrent) {
    $('#dest_city_median_1bdrm').html('<p></p>');
  }
};

appsView.handleCityMeanRental = function(cityMeanObj, isCurrent) {
  // If the city they selected doesn't have rental info, clear the html, otherwise update the right side
  if (cityMeanObj && isCurrent) {
    $('#curr_city_mean_1bdrm').html('<p>Mean price (1 bdrm apartment): <b>' + cityMeanObj.Mean_1_Bdrm_Price + '</b></p>').fadeIn('slow');
  } else if (cityMeanObj && !isCurrent) {
    $('#dest_city_mean_1bdrm').html('<p>Mean price (1 bdrm apartment): <b>' + cityMeanObj.Mean_1_Bdrm_Price + '</b></p>').fadeIn('slow');
  } else if (!cityMeanObj && isCurrent) {
    $('#curr_city_mean_1bdrm').html('<p></p>');
  } else if (!cityMeanObj && !isCurrent) {
    $('#dest_city_mean_1bdrm').html('<p></p>');
  }
};

