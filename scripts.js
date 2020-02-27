jQuery(document).ready(function()
{
/******************************************************************************************************************************************* 
 * Animation Script For the "What We DO" Section
 ********************************************************************************************************************************************/	
		jQuery(".wwd-design").mouseover(function(){
			$(".wwd-design").animate({
				opacity:'0.5'
			})
			$(".design").show();



		}).mouseout(function(){
			$(".wwd-design").animate({
				opacity:'1'
			})
			$(".design").hide();
		})
/****************************************************************************************************************************************** 
 Animation Script For the Portfolio Images	
********************************************************************************************************************************************/
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

		jQuery(".portfolio-image-2").mouseover(function(){

				$("#main2").animate({
					opacity:'0.5'
				})


		}).mouseout(function(){
			$("#main2").animate({
				opacity:'1'
			})
		})

		jQuery(".portfolio-image-3").mouseover(function(){

			$("#main3").animate({
				opacity:'0.5'
			})


		}).mouseout(function(){
		$("#main3").animate({
			opacity:'1'
		})
	})

		jQuery(".portfolio-image-4").mouseover(function(){

			$("#main4").animate({
				opacity:'0.5'
			})


			}).mouseout(function(){
			$("#main4").animate({
				opacity:'1'
			})
			})



		jQuery(".portfolio-image-5").mouseover(function(){

			$("#main5").animate({
				opacity:'0.5'
			})
	
	
			}).mouseout(function(){
				$("#main5").animate({
				opacity:'1'
				})
			})


		jQuery(".portfolio-image-6").mouseover(function(){

			$("#main6").animate({
				opacity:'0.5'
			})
	
	
			}).mouseout(function(){
				$("#main6").animate({
				opacity:'1'
				})
			})

		jQuery(".portfolio-image-7").mouseover(function(){

				$("#main7").animate({
					opacity:'0.5'
				})
		
		
				}).mouseout(function(){
					$("#main7").animate({
					opacity:'1'
					})
				})
				
		jQuery(".portfolio-image-8").mouseover(function(){

					$("#main8").animate({
						opacity:'0.5'
					})
			
			
					}).mouseout(function(){
						$("#main8").animate({
						opacity:'1'
						})
					})			
		
									
		
})