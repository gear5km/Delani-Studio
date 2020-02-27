function UserDetailsInit()
    {
        var userName= document.getElementById("NameInput").value;
        var userEmail= document.getElementById("EmailInput").value;
        var userFeedback= document.getElementById("UserFeedBack").value;
        
        if (userName==="")
            {
                alert("Please enter a Name");
            }
        if (userEmail==="")
            {
                alert("We cannot get hold of you If we dont have and email, Please enter one!");
            }
        if (userFeedback==="")
            {
                alert("Please enter a message");

            }

        else
            {
                alert("Thank You "+ userName + " We will get back to you on: " + userEmail);


            }

    }