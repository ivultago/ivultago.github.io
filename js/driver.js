
$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("peoples.json", function(result){
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

	 $.getJSON("peoples.json", function(result){
            $.each(result, function(i){
				$("p").append("list of TAMGON GROUP drivers:");
				if (result[i].driver === "1") then 
                $("p").append(result[i].fname);
				$("p").append(" token:");
				$("p").append(result[i].fingerprint);
				
            });
        });
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}