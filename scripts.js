jQuery(document).ready(function()
{	
		alert("JQuery is running");
		//Use the "jQuery("[DOM name]").mouseover(function(){})" to create a task when the mouse goes over an element
		jQuery(".portfolio-image-1").mouseover(function(){
			//Use the "".animate({})"" to create an animation for a specified element such as making an image opaque or moving its location
			//The "#"" in "#main1" tells jQuery to look for an element ID with the name 'main1' to modify
			$("#main1").animate({
				opacity:'0.5'

			});

			
		//Use the .mouseout() to create a task when the users mouse leaves an element it once hovered over						
		}).mouseout(function(){
			$("#main1").animate({
				opacity:'1'
			})
		})


		
		
									
		
		
	})
