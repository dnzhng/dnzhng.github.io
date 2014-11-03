---
layout: post
title: "Responsive data visualizations with D3.js"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Mobile first development has become so important as so much of the world begins to browse on smart phones. Unfortunately, visualizations built with D3 are not responsive right out of the box. 

An easy way to enable basic responsiveness in visualizations is to use the preserveAspectRatio aspect of SVG, and taking advantage of the viewbox. 

Rather than defining a strict width and height, the width is determined based on the width of the window, and the height is calculated using a pre-defined aspect ratio. 

A basic implementation that I have used in several of my project is seen below: 

{% raw %}
	d3.json(“/data.json", function(error, json) {
	  if (error) return console.warn(error);
	  visualize(json);
	});


	function visualize (data) {
	  var margin = {top: 20, right: 20, bottom: 80, left: 40},
	    width = 1200 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom
	    aspect = 500/1200;


	  var svg = d3.select(“#container").append("svg")
	    .attr("preserveAspectRatio", "xMidYMid")
	    .attr("viewBox", "0,0,1200,500")
	    .attr("class", “class")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", (width + margin.top + margin.bottom)*aspect)
	    .append("g")
	      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



	  resize();
	  d3.select(window).on('resize.class', resize);

	   function resize() {
	     width = parseInt(d3.select(“#container").style("width"), 10);
	     width = width - margin.left - margin.right;
	     d3.select(“svg.class").attr("width", width + margin.left + margin.right);
	     d3.select(“svg.class").attr("height", (width + margin.top + margin.bottom) * aspect);
	   }
	}

{% endraw %}

This implementation uses a resize function that calculates the dimensions of the visualize upon page load, as well as whenever the window is resized. 