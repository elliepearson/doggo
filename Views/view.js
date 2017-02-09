$(document).ready(function(){

//printing the object
$("#submit").on("click", function() {
	var name = $("#add_name").val();
	var breed = $("#breed").val();
	var select = $("#select").val();
	
	var objectSubmit = {
		name: name,
		breed: breed,
		select: select

	}

console.log(objectSubmit);

localStorage.setItem('objectSubmit', JSON.stringify(objectSubmit));
objectSubmit = JSON.parse(localStorage.getItem('objectSubmit'));
$("#nameSubmit").text(objectSubmit.name);
$("#breedSubmit").text(objectSubmit.breed);
$("#selectSubmit").text(objectSubmit.select);


})
// if (localStorage.getItem('objectSubmit') === null){ //set name if no name is set
// 	localStorage.setItem('objectSubmit', JSON.stringify('objectSubmit'));
// }


objectSubmit = JSON.parse(localStorage.getItem('objectSubmit'));
$("#nameSubmit").text(objectSubmit.name);
$("#breedSubmit").text(objectSubmit.breed);
$("#selectSubmit").text(objectSubmit.select);


})

 



