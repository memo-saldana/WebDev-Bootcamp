
//Crossout todos when clicked
$("ul").on("click","li",function() {
	$(this).toggleClass("done");
});

// Delete todos with X
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500,function() {
			$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		var newTodo = $(this).val();
		$(this).val("");
		//create new li inside ul
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + newTodo +"</li>");
	}
})

$("h1 span").click(function() {
	$("input[type='text']").fadeToggle();
})