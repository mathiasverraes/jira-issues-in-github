
$(document).ready(function() {

	//Restore
	if(localStorage["jira"]) {
		$('#jira').val(localStorage["jira"]);
	}

	//Save 
	$('#save_button').click(function() {
		localStorage["jira"] = $('#jira').val();

		$('#status').html("Options Saved");
		setTimeout(function() {
			$('#status').html('');
		}, 3000);
	});
});