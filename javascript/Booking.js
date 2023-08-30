function show()
{
	var fname = document.getElementById("sname").value; 
	var lname = document.getElementById("oname").value; 
	var age = document.getElementById("age").value;
	var address = document.getElementById("address").value; 
	var gender=document.getElementById("gender").value;
	
	confirm("You have entered:" + "\n Name : " + fname + " " + lname + "\n Age : " + age + "\n Address : "+ address + "\n Gender : "+ gender + "\n\n Do you want to confirm these details ?");
}

function changeColor(val)
{ 
	if((val.value=="")||(val.value==null))
	{
		val.style.background="pink";
	}
	else
	{
		val.style.background="#FFFFFF";
	}
}

function show_Window()
{
	var fname = document.getElementById("sname").value; 
	var lname = document.getElementById("oname").value;
    var age = document.getElementById("bdate").value;
	var email = document.getElementById("email").value; 
    var address = document.getElementById("Address").value; 
    var gender=document.getElementById("gender").value;
    var nation=document.getElementById("nation").value;
    var nation=document.getElementById("tour_name").value;
	
	popup_new = window.open('','newWin','width=600,height=400');

	popup_new.document.write("All information");
	
	popup_new.document.write("<br />Full Name : " + fname + " " + lname );

    popup_new.document.write("<br />Age : " + age + " "  );

    popup_new.document.write("<br />Email : " + email + " "  );

    popup_new.document.write("<br />Address : " + address + " "  );

    popup_new.document.write("<br />Gender : " + gender + " "  );

    popup_new.document.write("<br />Nation : " + nation + " "  );

    popup_new.document.write("<br />Tourname : " + tour_name + " "  );
    
	popup_new.document.write("<br /> <br /> <input id='button' type='button' value='Print'/> ");
	
	popup_new.document.write(" <br /> <br /> <br /> <INPUT id='button' type='button' value='Close'/> ");
}