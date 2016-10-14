function calculate(){
	// var apple = document.getElementById("products").value;
	var apple = $("#products").val();

	var quan = parseFloat(document.getElementById("quantity").value);
if(quan>0){
	var price;
	switch(apple){
		case "100":
		price = 100;
		break;
		case "200":
		price = 200;
		break;
		case "300":
		price = 300;
		break;
		case "500":
		price = 500;
		break;
		case  "1000":
		price = 1000;
		break;
	}
}
else{
	alert("Please enter positive quantity value!!")
}
	var total = price * quan;
	document.getElementById("orgprice").value=total;
	// $("#orgprice") = total;
	var discountPrice = total*0.5;
	document.getElementById("dsctprice").value=discountPrice;
	// $("#dsctprice") = discountPrice;
	}

window.onload = function(){
document.getElementById("rev").onclick =calculate;
}
document.getElementById("hobbies").innerHTML="Educational Details:"
$("#first").html(Hobbies);