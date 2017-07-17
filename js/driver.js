var filedata = "";

	function myFunction() {	
		var client = new XMLHttpRequest();
		client.open('GET', 'myfile.txt');
		client.onreadystatechange = function() {
  	  filedata = client.responseText;
		} 
		client.send();
	}	
	
alert(filedata);
