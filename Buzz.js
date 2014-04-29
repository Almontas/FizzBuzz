$(document).ready(function() {
	
	
var get_Value = function (i){ 
					   if (i % 3 === 0 & i % 5 ===0)
					  {
					      return "FizzBuzz";
					  }
					   else if (i % 3 === 0)
					  {
					      return "Fizz";
					  }
					  else if (i % 5 === 0)
					  {
					      return "Buzz";
					  }  
					  else
					  {
					    return i;
					  }
			}	
}



$('.getNumber').click(function(){
		var numInput = $('#numInput').val();
		var value = get_Value(numInput);
		$('.Buzz ul').append('<li>' + get_Value(i) + '</li>');
		numInput.val('').focus();

	});


});


});