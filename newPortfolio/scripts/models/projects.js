//IIFE here
(function(module) {
  // contructor function to make object out of API response data

  let Projects = {};

  Projects.getProjects =()=>{
    // get the projects asynchronously
    $.ajax({
      method: 'GET',
      url: '../data/projects.json',
      timeout: 2000,
      success: function(data, status, xhr) {
        // loop through the json data, turn it into a RentalData object
        if (isCurrent) {
          RentalData.currentStateData = RentalData.loadData(data);
        } else {
          RentalData.destinationStateData = RentalData.loadData(data);
        }

        var stateData = isCurrent ? RentalData.currentStateData : RentalData.destinationStateData;
        // grab only the RentalData obj you need:
        for (var i=0; i < stateData.length; i++) {
          if (stateData[i]['State'] == stateChoiceName) {
            var stateObj = stateData[i];
            break;
          }
        }
        if (isCurrent ) {
          Data.home['state_rent'] = stateObj.Avg;
          Data.storeData(Data.home, isCurrent);
        } else {
          Data.away['state_rent'] = stateObj.Avg;
          Data.storeData(Data.away, isCurrent);
        }
        // pass the selected RentalData state object off to the controller
        appsController.revealState(stateObj, isCurrent);
      },

      error: function(xhr, settings, error) {
        var message = 'Server returned a '
          + '<b>' + jqXHR.status + ' ' + thrownError + '</b>'
          + ' error message. <br />Please try again later.</div>';
        console.log(message);
      }
    });
  };

  Projects.storeData = function(obj, isCurrent){
    for (key in obj){
      localStorage.setItem(tag+key, obj[key]);
    }
  };

  module.Projects = Projects;
})(window);
