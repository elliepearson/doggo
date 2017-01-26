//printing the object
$("#submit").on("click", function() {
	var name = $("#name").val();
	var breed = $("#breed").val();
	var select = $("#select").val();
	
	var objForTransport = {
		name: name,
		breed: breed,
		select: select

	}

	console.log(objForTransport);

})

if (localStorage.getItem('submit') === null){
		 localStorage.setItem('name', 'Submit');
  }
  //sets the name of the button to local sotrage name
  document.getElementById("submit").innerHTML = localStorage.getItem('name');
 
  function setName(){ // runs on click to set a new name in local storage
    localStorage.setItem('name', document.getElementById("name").value  );
    document.getElementById("title").innerHTML = localStorage.getItem('name');
	}