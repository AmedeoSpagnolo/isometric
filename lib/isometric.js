"use strict";

(function (global) {
  "use strict";

  var isometric = {
    cube: function (wrap_id) {

      // general
      var el = $(wrap_id)
      var w  = el.width()
      var h  = el.height()
      var l  = 80;

      // svg
      var svg = d3.select(wrap_id)
        .append("svg")
        .attr("class", "isometric_cube")
        .attr("width", w)
        .attr("height", h);
      var c = svg.append("g")
        .attr("transform", "translate("+w/2+","+h/2+")")
        .append("g");


      // faces
      var face_top = c.append("g")
        .attr("class", "face_top")
        .attr("transform", "translate(0,"+l/2+")")
        .append("rect")
        .attr("x", -l/2)
        .attr("y", -l/2)
        .attr("width", l)
        .attr("height", l)
        .attr("fill", "red")
        // .style("transform", "rotate3d(1,0,0,70deg)");

      // var face_bottom = c.append("g")
      //   .attr("class", "face_bottom")
      //   .attr("transform", "translate(0,"+-(l/2)+")")
      //   .append("rect")
      //   .attr("x", -l/2)
      //   .attr("y", -l/2)
      //   .attr("width", l)
      //   .attr("height", l)
      //   .attr("fill", "red")
      //   // .style("transform", "rotate3d(1,0,0,70deg)");
      //
      // var face_left = c.append("g")
      //   .attr("class", "face_left")
      //   .attr("transform", "translate("+l/2+",0)")
      //   .append("rect")
      //   .attr("x", -l/2)
      //   .attr("y", -l/2)
      //   .attr("width", l)
      //   .attr("height", l)
      //   .attr("fill", "red")
      //   // .style("transform", "rotate3d(0,1,0,70deg)");
      //
      // var face_rigth = c.append("g")
      //   .attr("class", "face_rigth")
      //   .attr("transform", "translate("+-(l/2)+",0)")
      //   .append("rect")
      //   .attr("x", -l/2)
      //   .attr("y", -l/2)
      //   .attr("width", l)
      //   .attr("height", l)
      //   .attr("fill", "red")
      //   // .style("transform", "rotate3d(0,1,0,70deg)");

      var scale_x = d3.scaleLinear()
        .domain([0, w])
        .range([0, 90]);

      var scale_y = d3.scaleLinear()
        .domain([0, h])
        .range([0, 90]);

      svg.on('touchmove mousemove', function () {
        var x = d3.mouse(this)[0];
        var y = d3.mouse(this)[1];
          // c.style("transform", "rotate3d(1,1,1,"+scale_x(x)+"deg)");
           face_top.style("transform", "rotate3d(1,0,0,"+scale_x(x)+"deg) translate(0px,"+-(l/2)+"px)");
        face_bottom.style("transform", "translate(0,"+-(l/2)+") rotate3d(1,0,0,"+scale_x(x)+"deg)");
          face_left.style("transform", "translate("+l/2+",0) rotate3d(0,1,0,"+scale_x(x)+"deg)");
         face_rigth.style("transform", "translate("+-(l/2)+",0) rotate3d(0,0,0,"+scale_x(x)+"deg)");
      })

    },
    name:  "iso"
  }

  function isometric(p){	//[x,y,z] -> [x,y]
    var x = (p[0]-p[2]) * Math.cos(Math.PI/8);
    var y = -p[1] + (p[0]+p[2]) * Math.sin(Math.PI/8);
    return [x,y];
  }

  global.isometric = isometric

 })(typeof window !== "undefined" ? window : global);
