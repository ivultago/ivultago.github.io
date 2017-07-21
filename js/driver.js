var filedata2 = "";

function myJsonCall(){
$.getJSON( "myfile.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
}


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

