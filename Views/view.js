$("#submit").on("click", function() {
	var name = $("#name").val();
	var breed = $("#breed").val();
	
	var objForTransport = {
		name: name,
		breed: breed

	}

	console.log(objForTransport.name);

})