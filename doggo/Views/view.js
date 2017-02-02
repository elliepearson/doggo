$(document).ready(function(){



//printing the object
$("#submit").on("click", function() {
	var name = $("#add_name").val();
	var breed = $("#breed").val();
	var select = $("#select").val();
	
	var objForTransport = {
		name: name,
		breed: breed,
		select: select

	}

localStorage.setItem('objForTransport', JSON.stringify(objForTransport));
objForTransport = JSON.parse(localStorage.getItem('objForTransport'));

})


})



	//////////////////////////////////////////////////////////////////////////////////////////////////////


	//  if (localStorage.getItem('submit') === null){ //set name if no name is set
	// 	 localStorage.setItem('submit', JSON.stringify('submit'));
 //  }
 //  //sets the name of the button to local storage name
 //  document.getElementById("title").innerHTML = localStorage.getItem('submit');
 
 //  function setName(){ // runs on click to set a new name in local storage
 //    localStorage.setItem('submit', document.getElementById("add_name").value);
 //    //set the title to be the name from local storage
 //    document.getElementById("title").innerHTML = localStorage.getItem('submit');
	// }

