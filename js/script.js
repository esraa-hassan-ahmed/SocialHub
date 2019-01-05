$(document).ready(function(){

/***************************   Preloader ******************************/
    $(window).on("load", function() {
        $('.preloader').fadeOut(1000);
    });
    
/*************************** Charts ******************************/
    anychart.onDocumentLoad(function () {
        /*************************** (1) Pie Chart ******************************/
        // Pie Chart 
        var chart = anychart.pie();
        // Chart Data
        chart.data([
            {x: "Positive", value: 6, 
                legendItem: { iconType: "circle"},
                normal:  {fill: "#6AB04D"},
            },
            {x: "Netural", value: 2.5,  
                legendItem: {iconType: "circle"},
                normal:  {fill: "#F1C40F"},
                state:"selected"
            },
            {x: "Negative", value: 1.5, 
                legendItem: {iconType: "circle"},
                normal:  {fill: "#B7143F"},
                state:"selected"
            }
        ]);
        // Chart Container
        chart.container("pie");
        // Explode Size
        chart.explode("8%");
        // Labels Position
        chart.labels().position("outside");
        // Legend Options
        chart.legend().enabled(true);
        chart.legend().position("right");
        chart.legend().itemsLayout("vertical");
        chart.legend().align("bottom");
        chart.legend().positionMode("inside");
        // Remove Connector
        chart.connectorStroke({color: "transparent"});
        // Start Anle Of Chart
        chart.startAngle(-35);
        // Display Chart
        chart.draw();
        /*************************** (2) Donut Chart ******************************/
        var donut = anychart.pie();
        donut.data([
            {x: "Positive", value: 5, 
                legendItem: { iconType: "circle"},
                normal:  {fill: "#6AB04D"},
            },
            {x: "Netural", value: 3.5, 
                legendItem: { iconType: "circle"},
                normal:  {fill: "#F1C40F"},
            },
            {x: "Negative", value: 1.5, 
                legendItem: { iconType: "circle"},
                normal:  {fill: "#B7143F"},
            },
        ]);
        donut.innerRadius('70%');
        donut.container("donut");
        donut.labels().position("outside");
        donut.legend().enabled(true);
        donut.legend().position("right");
        donut.legend().itemsLayout("vertical");
        donut.legend().align("bottom");
        donut.legend().positionMode("inside");
        donut.connectorStroke({color: "transparent"});
        donut.draw();
        /*************************** (3) Line One Chart ******************************/
        // First Line Date
        var data = [
            ["Jan", 250],
            ["Feb", 900],
            ["Mar", 800],
            ["Apr", 700],
            ["May", 600],
            ["Jun", 500],
            ["Jul", 400],
            ["Aug", 100],
            ["Sep", 900],
            ["Oct", 500],
            ["Nov", 600],
            ["Dec", 700]
        ];
        // Second Line Date
        var data2 = [
            ["Jan", 400],
            ["Feb", 600],
            ["Mar", 400],
            ["Apr", 300],
            ["May", 200],
            ["Jun", 900],
            ["Jul", 600],
            ["Aug", 400],
            ["Sep", 100],
            ["Oct", 200],
            ["Nov", 300],
            ["Dec", 500]
        ];
        // Line Chart
        line = anychart.line();
        // Begin From Zero 
        line.xScale().mode('continuous');
        // Draw BG Grid 
        line.yGrid(true);
        line.xGrid(true);
        // Draw Axis Line 
        line.xAxis().enabled(true);
        line.xAxis().stroke("Black");
        line.yAxis().enabled(true);
        line.yAxis().stroke("Black");
        // Enable Legend
        line.legend().enabled(true);
        // Legend Options
        line.legend().position("right");
        line.legend().itemsLayout("vertical");
        line.legend().align("bottom");
        // Remove Labels
        line.xAxis().labels().enabled(false);
        line.yAxis().labels().enabled(false);
        // Space Between Legend And Chart
        var separator = line.legend().titleSeparator().orientation("left");
        separator.enabled(true);
        separator.height(15);
        separator.fill("none");
        // Create First Line Series 
        var series = line.line(data);
        series.markers(true);  
        series.stroke("2 #0B2561");
        series.name("Posts");
        series.legendItem().iconType("circle");  
         // Create Second Line Series 
        var series2 = line.line(data2);
        series2.markers(true);
        series2.stroke("2 #213795");
        series2.name("Comments");
        series2.legendItem().iconType("circle");    
        // Line Chart Container
        line.container("line");
        // Draw Line Chart
        line.draw();
        /*************************** (4) Line Two Chart ******************************/
        // First Line Date
        var data = [
            ["Jan", 300],
            ["Feb", 800],
            ["Mar", 700],
            ["Apr", 600],
            ["May", 500],
            ["Jun", 200],
            ["Jul", 550],
            ["Aug", 400],
            ["Sep", 300],
            ["Oct", 200],
            ["Nov", 350],
            ["Dec", 450]
        ];
        // Second Line Date
        var data2 = [
            ["Jan", 400],
            ["Feb", 500],
            ["Mar", 600],
            ["Apr", 700],
            ["May", 600],
            ["Jun", 500],
            ["Jul", 600],
            ["Aug", 400],
            ["Sep", 300],
            ["Oct", 150],
            ["Nov", 250],
            ["Dec", 400]
        ];
        // Third Line Date
        var data3 = [
            ["Jan", 200],
            ["Feb", 700],
            ["Mar", 600],
            ["Apr", 500],
            ["May", 200],
            ["Jun", 300],
            ["Jul", 250],
            ["Aug", 300],
            ["Sep", 400],
            ["Oct", 200],
            ["Nov", 300],
            ["Dec", 400]
        ];
        // Line Chart
        line2 = anychart.line();
        // Begin From Zero 
        line2.xScale().mode('continuous');
        // Draw BG Grid
        line2.yGrid(true);
        line2.xGrid(true);
        // Draw Axis Line 
        line2.xAxis().enabled(true);
        line2.xAxis().stroke("Black");
        line2.yAxis().enabled(true);
        line2.yAxis().stroke("Black");
        //Enable Legend
        line2.legend().enabled(true);
        // Legend Options
        line2.legend().position("right");
        line2.legend().itemsLayout("vertical");
        line2.legend().align("bottom");
        // Remove Labels
        line2.xAxis().labels().enabled(false);
        line2.yAxis().labels().enabled(false);
        // Space Between Legend And Chart
        var separator = line2.legend().titleSeparator().orientation("left");
        separator.enabled(true);
        separator.height(15);
        separator.fill("none");
        // Create First Line Series     
        var series = line2.line(data);
        series.markers(true);  
        series.stroke("2 #6AAF4A");
        series.name("Positive");
        series.legendItem().iconType("circle");
        // Create Second Line Series    
        var series2 = line2.line(data2);
        series2.markers(true);
        series2.stroke("2 #F2C509");
        series2.name("Netural");
        series2.legendItem().iconType("circle");  
        // Create Third Line Series  
        var series3 = line2.line(data3);
        series3.markers(true);
        series3.stroke("2 #B7163F");
        series3.name("Negative");
        series3.legendItem().iconType("circle");
        // Line Chart Container     
        line2.container("line2");
        // Draw Line Chart
        line2.draw();
    });
/*************************** Words Cloud ******************************/
    // Words And Weight
    var words = [
        {text: "#Ahmed_Zaki", weight: 15},
        {text: "#Cairo_Festival", weight: 13},
        {text: "#Egypt", weight: 8},
        {text: "#Adel_Emam", weight: 7.5},
        {text: "#Mona_Zaky", weight: 6},
        {text: "#Cinema", weight: 5},
        {text: "#Mahmoud_Abdel Aziz", weight: 3}
    ];
    // Initialize jQCloud Plugin 
    $('#cloud').jQCloud(words,{ 
        autoResize: true,
        colors:["#0D1D5B"],
        fontSize: {
            from: 0.05,
            to: 0.03
        }
    });
/*************************** Map Chart ******************************/
    // Create Map Instance
    var chart = am4core.create("map_chart", am4maps.MapChart);
    // Set Nap Definition
    chart.geodata = am4geodata_worldLow;
    // Set Projection
    chart.projection = new am4maps.projections.Miller();
    // Create Map Polygon Series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    // Make Map Load Polygon Data From GeoJSON (like country names)
    polygonSeries.useGeodata = true;
    // Configure Series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.fill = am4core.color("#CECECE");
    // Specific Country
    polygonSeries.data = [{
        "id": "RU",
        "name": "Russia",
        "value": 35,
        "fill": am4core.color("#1E379B")
    }, {
        "id": "CA",
        "name": "Canada",
        "value": 68,
        "fill": am4core.color("#1E379B")
    },
    {
        "id": "BR",
        "name": "Brazil",
        "value": 23,
        "fill": am4core.color("#1E379B")
    }];
    // Set Fill Color To Each Country In Data
    polygonTemplate.propertyFields.fill = "fill";
    // Create Hover State And Set Alternative Fill Color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#B38C32");
    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];
});






