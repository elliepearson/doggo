//printing the object
// $("#submit").on("click", function() {
// 	var name = $("#name").val();
// 	var breed = $("#breed").val();
// 	var select = $("#select").val();
	
// 	var objForTransport = {
// 		name: name,
// 		breed: breed,
// 		select: select

// 	}

// 	console.log(objForTransport);

// })
$('.clockpicker').clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done'
});

function setName(){
	document.getElementById("submit").innerHTML = "name";
}