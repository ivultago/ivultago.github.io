
$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("demo_ajax.json", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});

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

$(document).ready(function(){
//function getFingerprint(){
	 var client = new ClientJS();
	 var fingerprint = client.getFingerprint();
	 alert(fingerprint);

	 $.getJSON("demo_ajax.json", function(result){
            $.each(result, function(i, field){
                $("p").append(field + " ");
            });
        });
});

