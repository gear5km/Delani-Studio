jQuery(document).ready(function()
{	
           
      alert("JQuery is running");
      
      jQuery(".col-sm-3").mouseover(function(){
            
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
