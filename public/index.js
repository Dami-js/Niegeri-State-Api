let mainState = document.getElementById("NgState");
let mainOutput = "";
let localGov = document.getElementById("locals");

//fetch the data from the json file
fetch("nigeria.json")
  .then(response => {
    //return the data as json
    return response.json();
  })
  .then(data => {
    mainOutput += '<option value="">Select a state</option>';
    //loop through the data
    data.forEach(element => {
      
      let states = element.state.name;
      mainOutput +=
        '<option value="' +
        states +
        '" id="name_of_state">' +
        states +
        "</option>";
      mainState.innerHTML = mainOutput;
    });
    
  });

function getlocals() {
  
  // fetch the json data
  fetch("nigeria.json")
  .then(response => {
    //return the response in json format
    return response.json();
  })
  .then(data => {
    //loop through the data
    for (var i in data) {
      let state_name = mainState.value;
      //check if the name of the state selected matches any of the looped state
      if (data[i].state.name == state_name) {
        let locals = data[i].state.locals;
        var localOutput = "";
        //loop through the local government of the specified state
        locals.forEach( (local) => {
          
          localOutput += `<option value="${local.name}">${local.name}</option>`;
        });
        localGov.innerHTML = localOutput;
        
      }
    }
    });
}

/**
 * Function to view the details
 * details => state and the local government
 */
function viewDetails() {
  let detailsElemnt = "";
  let stateValue = mainState.value;
  let localGovtValue = localGov.value;
  detailsElemnt += `<p><strong>State:</strong> ${stateValue}</p>
                    <p><strong>Local Government:</strong> ${localGovtValue}</p>`;
  document.getElementById('details').innerHTML = detailsElemnt;
}