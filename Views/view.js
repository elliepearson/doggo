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