$(document).ready(function()	{
	

var totalSum = [551987, 541242, 614424, 602157, 636940, 690073, 745367, 772785, 722358, 796598, 808676];

d3.select("#timelineBar").selectAll("rect")
    .data(totalSum)
    .enter().append("rect")
    	  .attr("id", function(d,i){return "bar"+i;})
          .attr("height", function(d, i) {return (d/15000)})
          .attr("width","20")
          .attr("fill", "#2c2c2c")
          .attr("fill-opacity", "0.5")
          .attr("x", function(d, i) {return (i * 47) + 50 - 10})
          .attr("y", function(d, i) {return 70 - d/15000;});
          
          for(var i=2005; i<2016; i++){
          	d3.select("#timelineBar")
          	.append("text")
          	.text(i)
          	.attr("id", 'year'+i)
          	.attr("font-family", "'Libre Baskerville', serif")
			.attr("x", ((i-2005)* 47) + 50)
			.attr("y", 80)
			.attr("text-anchor", "middle")
			.attr("fill", "#2c2c2c")
			.attr("fill-opacity", "0.5")
			.attr("font-size", "10px");
          }

	
	var width = window.innerWidth*8/12;
    var height = window.innerHeight*4/6;


		
		
	// D3 Projection
var projection = d3.geo.albersUsa()
				   .translate([width/2, height/2])    // translate to center of screen
				   .scale([width]);          // scale things down so see entire US
        
// Define path generator
var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
		  	 .projection(projection);  // tell path generator to use albersUsa projection

		
// // Define linear scale for output
// var color = d3.scale.linear()
// 			  .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"]);

// var legendText = ["Cities Lived", "States Lived", "States Visited", "Nada"];

var dateFormat = d3.time.format("%Y");	
		

	var svg = d3.select("#map")
		.append("svg")
		    .attr("width", width)
			.attr("height", height);

    // Append Div for tooltip to SVG
        var div = d3.select("#tooltip")
        		    .append("div")   
            		.attr("class", "tooltip")               
            		.style("opacity", 0);

d3.csv("perCapitaRegistrationsFinal.csv", function(data) {
// color.domain([0,1,2,3]); // setting the range of the input data

// Load GeoJSON data and merge with states data
d3.json("us-states.json", function(json) {

// Loop through each state data value in the .csv file
// for (var i = 0; i < data.length; i++) {

// 	// Grab State Name
// 	var dataState = data[i].stateName;
// }
		
// color every state region with gray color		
svg.selectAll("path")
	.data(json.features)
	.enter()
	.append("path")
	.attr("d", path)
	.attr("class", "grayPath")
	.style("stroke", "#e5e5e5")
	.style("stroke-width", "1")
	.style("fill", "#f9f9f9");

createTimeline();

function createTimeline(){

$("#play").show();
$("#slider").show();
$("#range").show();
	
// show per capita sex offenders for year 2005 on page load 
svg.selectAll(".dot")
	.data(data)
	.enter()
	.append("circle")
	.attr("class", "dot")
	.attr("cx", function(d) {return projection([d.lon, d.lat])[0];})
	.attr("cy", function(d) {return projection([d.lon, d.lat])[1];})
	.attr("r", function(d) {return Math.sqrt(d.y2005) * 4;})
	.style("fill", "#e82c51")	
	.style("opacity", 0.7)	
	.on("mouseover", function(d) {      
    	div.transition()        
      	   .duration(500)      
           .style("opacity", .9);      
        div.text(d.StateName)
          .style("left", projection([d.lon, d.lat])[0] + "px")     
          .style("top", projection([d.lon, d.lat])[1] + "px");    
	})   

    // fade out tooltip on mouse out               
    .on("mouseout", function(d) {       
        div.transition()        
          .duration(500)      
          .style("opacity", 0);   
    });
    
    
        var running = false;
		var timer;
		
		$("#play").on("click", function() {
		
			var duration = 250,
				maxstep = 2015,
				minstep = 2005;
			
			if (running == true) {
			
				$("#play").html("Play");
				running = false;
				clearInterval(timer);
				
			} 
			/*
else if (running == true && $("#slider").val() == maxstep) {
				 running = true;
				 $("button").html("Play1");
				 
			
			} 
*/
			else if (running == false) {
			
				$("#play").html("PAUSE");
				
				sliderValue = $("#slider").val();
				
				timer = setInterval( function(){
						if (sliderValue < maxstep){
							sliderValue++;
							$("#slider").val(sliderValue);
							$('#range').html(sliderValue);
						}
						$("#slider").val(sliderValue);
						update();
					
				}, duration);
				running = true;
				
				
			}

		});
	
		$("#slider").on("change", function(){
			update();
			$("#range").html($("#slider").val());
			clearInterval(timer);
			$("#play").html("PLAY");
		});
	
		update = function() {
		
			d3.selectAll(".dot")
				.transition()
				.duration(600)
				.attr("r", function(d) {
			
					switch ($("#slider").val()) {
						case "2005":
							d3.selectAll("#year2005").attr("fill-opacity", "1");
							d3.selectAll("#bar0").attr("fill-opacity", "1");
							return Math.sqrt(d.y2005) * 4.5;
							break;
						case "2006":
							d3.selectAll("#year2006").attr("fill-opacity", "1");
							d3.selectAll("#bar1").attr("fill-opacity", "1");
							return Math.sqrt(d.y2006) * 4.5;
							break;
						case "2007":
							d3.selectAll("#year2007").attr("fill-opacity", "1");
							d3.selectAll("#bar2").attr("fill-opacity", "1");
							return Math.sqrt(d.y2007) * 4.5;
							break;
						case "2008":
							d3.selectAll("#year2008").attr("fill-opacity", "1");
							d3.selectAll("#bar3").attr("fill-opacity", "1");
							return Math.sqrt(d.y2008) * 4.5;
							break;
						case "2009":
							d3.selectAll("#year2009").attr("fill-opacity", "1");
							d3.selectAll("#bar4").attr("fill-opacity", "1");
							return Math.sqrt(d.y2009) * 4.5;
							break;
						case "2010":
							d3.selectAll("#year2010").attr("fill-opacity", "1");
							d3.selectAll("#bar5").attr("fill-opacity", "1");
							return Math.sqrt(d.y2010) * 4.5;
							break;
						case "2011":
							d3.selectAll("#year2011").attr("fill-opacity", "1");
							d3.selectAll("#bar6").attr("fill-opacity", "1");
							return Math.sqrt(d.y2011) * 4.5;
							break;
						case "2012":
							d3.selectAll("#year2012").attr("fill-opacity", "1");
							d3.selectAll("#bar7").attr("fill-opacity", "1");
							return Math.sqrt(d.y2012) * 4.5;
							break;
						case "2013":
							d3.selectAll("#year2013").attr("fill-opacity", "1");
							d3.selectAll("#bar8").attr("fill-opacity", "1");
							return Math.sqrt(d.y2013) * 4.5;
							break;
						case "2014":
							d3.selectAll("#year2014").attr("fill-opacity", "1");
							d3.selectAll("#bar9").attr("fill-opacity", "1");
							return Math.sqrt(d.y2014) * 4.5;
							break;
						case "2015":
							d3.selectAll("#year2015").attr("fill-opacity", "1");
							d3.selectAll("#bar10").attr("fill-opacity", "1");
							return Math.sqrt(d.y2015) * 4.5;
							break;
					}
				});
				
		};
    
};
 

$("#timeline").on("click", function(){createTimeline(); } );    

$("#minDuration").on("click", function() { 


d3.selectAll(".grayPath").remove();
d3.selectAll(".dot").remove();
$("#play").hide();
$("#slider").hide();
$("#range").hide();

// $("p").html("Hello <b>world!</b>");



// d3.select("#nlBottomBar").remove();

for (var i = 0; i < data.length; i++) {

	// Grab State Name
	var dataState = data[i].StateName;

	// Grab data value 
	var dataValue = data[i].minDuration;
	// console.log(dataValue);

	// Find the corresponding state inside the GeoJSON
	for (var j = 0; j < json.features.length; j++)  {
		var jsonState = json.features[j].properties.name;

		if (dataState == jsonState) {
		// console.log(dataState);
		// Copy the data value into the JSON
		json.features[j].properties.minDuration = dataValue; 
		// console.log(json.features[j].properties.minDuration);

		// Stop looking through the JSON
		break;
		}
	}
}
		
// Bind the data to the SVG and create one path per GeoJSON feature
svg.selectAll("path2")
	.data(json.features)
	.enter()
	.append("path")
	.attr("d", path)
	.style("stroke", "#fff")
	.style("stroke-width", "1")
	.style("fill", function(d) {
			var value = d.properties.minDuration;
			console.log(value);
		
			if (value <= 5) { console.log("yes"); return "#dddbe2"; } 
			else if (value == 10){ console.log("yes"); return "#efedf5";}
			else if (value == 15){ console.log("yes"); return "#bcbddc";}
			else if (value == 20){ console.log("yes"); return "#756bb1";}
			else{ console.log("yes"); return "#54278f";} }); 
		})
	.on("mouseover", function(d) {
		console.log(d.StateName);
		console.log(d.minDuration);
    	// div.transition()        
     // 	   .duration(500)      
     //      .style("opacity", .9);      
     //   div.text(d.StateName)
     //     .style("left", projection([d.lon, d.lat])[0] + "px")     
     //     .style("top", projection([d.lon, d.lat])[1] + "px");    
	})
        
        
// Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
// var legend = d3.select("body").append("svg")
//       			.attr("class", "legend")
//      			.attr("width", 140)
//     			.attr("height", 200)
//   				.selectAll("g")
//   				.data(color.domain().slice().reverse())
//   				.enter()
//   				.append("g")
//      			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

//   	legend.append("rect")
//   		  .attr("width", 18)
//   		  .attr("height", 18)
//   		  .style("fill", color);

//   	legend.append("text")
//   		  .data(legendText)
//       	  .attr("x", 24)
//       	  .attr("y", 9)
//       	  .attr("dy", ".35em")
//       	  .text(function(d) { return d; });
      	  
	});

});

});