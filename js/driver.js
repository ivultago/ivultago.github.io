var filedata2 = "";

	function myFunction() {	
		var client = new XMLHttpRequest();
		client.open('GET', 'myfile.txt');
		client.onreadystatechange = function() {
			if(client.readyState ===4) {
				if(client.status === 200 || client.status == 0) {
				filedata2 = client.responseText;
				alert(filedata2);
				}
			}
		}
		client.send(null);
	}	
	//alert("hello world");

