var filedata2 = "";

	function myFunction() {	
		var client = new XMLHttpRequest();
		client.open('GET', 'myfile.txt');
		client.onreadystatechange = function() {
  	  filedata2 = client.responseText;
		} 
		client.send();
	}	
	//alert("hello world");
alert(filedata2);
