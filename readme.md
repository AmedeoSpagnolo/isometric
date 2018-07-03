### Isometric Js

Simple isometric shapes and animation for the web

#### install

		bower install https://github.com/AmedeoSpagnolo/isometric.git --save
		bower install jquery --save

#### include in the project

		<script type="text/javascript" src="bower_components/isometric/lib/isometric.js"></script>

#### example

		<!-- head -->
		<link rel="stylesheet" type="text/css" href="bower_components/isometric/style/cube.css">

		<!-- body -->
		<div id="wrapper"></div>

	  <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
	  <script type="text/javascript" src="bower_components/isometric/lib/isometric.js"></script>

	  <script type="text/javascript">
	    $(document).ready(function(){
	      isometric.cube('#wrapper', {"perspective": 400})
	    })
	  </script>




https://codepen.io/jordizle/pen/haIdo/
