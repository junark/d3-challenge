// const w = 500;
// const h = 500;

// cons svg = d3.select("body")
//             .append("svg")
//             .attr("widgth", w)
//             .attr("height", h);

// svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle");

d3.csv("data.csv").then(function(poverty){console.log(poverty);})

var margin = {
     top: 20,
     right: 20,
     bottom: 30,
     left: 40
}

width = 700 - margin.left - margin.right;
height = 500 - margin.top - margin.bottom;

var x = d3.scaleState().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Scale the range of the data
x.domain(d3.extent(data, function (d) {
     return d.state;
}));
y.domain([0, d3.max(data, function (d) {
     return d.poverty;
})]);

var valueline = d3.line()
     .x(function (d) {
          return x(d.state);
     })
     .y(function (d) {
          return y(d.poverty);
     });

var svg = d3.select("#scatter").append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
     .append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");