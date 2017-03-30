<html lang="en">
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <title>Jaime Trucking</title>
 <link rel="stylesheet" href="css/style.css"/>
 <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 <link href='http://fonts.googleapis.com/css?family=Wellfleet' rel='stylesheet' type='text/css'>
 <link href='http://fonts.googleapis.com/css?family=Wellfleet' rel='stylesheet' type='text/css'>
 <link href='http://fonts.googleapis.com/css?family=Arvo:400,700,400italic,700italic' rel='stylesheet' type='text/css'> 
 <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
 <link href='http://fonts.googleapis.com/css?family=Goudy+Bookletter+1911' rel='stylesheet' type='text/css'>
 - <script>
-<!----- JQUERY FOR SLIDING NAVIGATION --->   
-$(document).ready(function() {
-  $('a[href*=#]').each(function() {
-    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
-    && location.hostname == this.hostname
-    && this.hash.replace(/#/,'') ) {
-      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
-      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
-       if ($target) {
-         var targetOffset = $target.offset().top;
-
-<!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV--->   
-         $(this).click(function() {
-            $("#nav li a").removeClass("active");
-            $(this).addClass('active');
-           $('html, body').animate({scrollTop: targetOffset}, 1000);
-           return false;
-         });
-      }
-    }
-  });
-
-});
- </script>
</head>

<body>

<!-- HEADER START-->
<header id="header">
<div class="content">

<div id="logo"><a href=""> Jaime Trucking Inc.</a></div>
<nav id="nav">
 <ul>
 <li><a href="#slide1" class="active" title="Next Section" >Home</a></li>
 <li><a href="#slide2" title="Next Section">About</a></li>
 <li><a href="#slide3" title="Next Section">Service</a></li>
 <li><a href="#slide4" title="Next Section">Contact Us</a></li>
 <li><a href="#slide5" title="Next Section">Other</a></li>
 </ul>
</nav>
</div>

</header>

<header id="headersocial">
<div class="social">
<nav id="navsocial">
 <ul>
 
 <li><a href="http://www.facebook.com"> <img src="img/fb.png"></a></li>
 <li><a href="http://www.facebook.com"> <img src="img/fb.png"></a></li>
 </ul>
</nav>
</div>
</header>

<!-- SLIDES START --> 
 <div id="slide1">

 <div class="content">
 <div id="christmas_tree"> </div>
 <div id="snowflakes1"></div>
 <div id="snowflakes2"></div>
 <div id="divider"> </div>
 <h2>JAIME TRUCKING</h2>

 <h1></h1>
 
 <h3>INC </h3>
 <div id="ribbon"></div>
 <div id="new_year"> </div>
 </div> 
 </div> 
 
 <div id="slide2">
 <div class="content" >
 <div class="quotes_container">
 <h3 class="quotes">“SOMETHING WILL GO HERE”</h3>
 <img src="img/jaime1.png" align="left"/> <h4 class="author_name_black">BUCKET </h4>
 </div> 
 </div> 
 </div> 
 <div id="slide3">
 <div class="content">
 <div class="quotes_container">
 <h3 class="quotes">“SOMETHING WILL GO HERE” </h3>
 <img src="img/jaime2.png" align="left"/> <h4 class="author_name_black">BUCKET </h4>
 </div> 
 </div> 
 </div> 
 <div id="slide4">
 <div class="content">
 <div class="quotes_container">
 <h3 class="quotes">“SOMETHING WILL GO HERE” </h3>
 <img src="img/jaime2.png" align="left"/> <h4 class="author_name_white">BUCKET </h4>
 </div> 
 </div> 
 </div> 
 <div id="slide5">
 <div class="content">
 <div class="quotes_container">
 <h3 class="quotes">“MSOMETHING WILL GO HERE” </h3>
 <img src="img/jaime2.png" align="left"/> <h4 class="author_name_black">BUCKET </h4>
 </div> 
 
 </div> 
 </div> 
 <!--- SLIDES END -->
</body>
</html>

