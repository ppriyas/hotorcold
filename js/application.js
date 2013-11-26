$(document).ready(function() {
	
	var previous_guess = 0;
	var generated_number=Math.floor((Math.random()* 10)+1);			
	console.log("generated_number is: "+generated_number);
	
	$("#guess_number").change(function (event) {
						
		var number_entered = $(this).val();
		//var generated_number = $("#number_choice").val();
		var message = '';
		if (number_entered == generated_number)	
		{
			message = "Congrats, you correctly guessed the number!";		
		}
		else
		{
		 if(number_entered < generated_number && number_entered > previous_guess)		
		 {
             message = "Getting hotter";
		 }
         else if (number_entered < generated_number && number_entered < previous_guess)
		 {
		    message = "Getting colder";
		 }
          else if (number_entered > generated_number && number_entered < previous_guess)
		  {
		    message = "Getting hotter";
		  }
          else if (number_entered > generated_number && number_entered > previous_guess)
		  {
		    message = "Getting colder";
		  }
          else
		  {
			message = "Try again";			
		  }
		}  
		  $("#message").text(message);
		  console.log(message);
		
		previous_guess = number_entered;
		
	  });
	
});