// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
	});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
		event.stopPropagation();
	});
});

// Show input as new todo in list when user clicks enter
$("input[type = 'text']").keypress(function(event) {
	if(event.which === 13) {
		// grab new todo text from value
		var todoText = $(this).val();
		// create a new li and add to ul. appending
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
		// clear todoText from input
		$(this).val("");
	}
});

// Toggle input when click on pencil icon
$(".fa-pencil-square-o").on("click", function() {
	$("input[type='text']").fadeToggle();
});