$(document).ready(function(){
	$("body").keyup(function(event){
		if(event.keyCode==13)
		{
			eql();
		}
	})


})

function insert(num)
{
	$("#input").val($("#input").val()+num); //current value in box

}
function eql()
{
	$("#input").val(eval($("#input").val()));
}
function clr()
{
	$("#input").val("");
}
 function back()
 {
	var input = $("input").val();

	var input = $("input").val(input.substring(0,input.length-1));
 }

 