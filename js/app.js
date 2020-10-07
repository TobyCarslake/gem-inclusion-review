const data = [
  {
    "no": 1,
    "pop": "Agbenyega 2015, Thailand",
    "link": "https://eric.ed.gov/?id=EJ1069532",
    "intervention": "inclusive",
    "outcomes": "early,attitude,pedagogical"
  },
  {
    "no": 2,
    "pop": "Cheng 2015, China",
    "link": "http://dx.doi.org/10.1177/1525740114544027",
    "intervention": "intellectual,sensory",
    "outcomes": "primary,secondary,attitude"
  },
  {
    "no": 3,
    "pop": "Eng 2015, Vietnam",
    "link": "https://eric.ed.gov/?id=EJ1094919",
    "intervention": "physical,intellectual,sensory",
    "outcomes": "special,pedagogical,managing,learning,behaviour"
  },
  {
    "no": 4,
    "pop": "Hai 2020, Vietnam",
    "link": "http://dx.doi.org/10.26822/iejee.2020358219",
    "intervention": "inclusive",
    "outcomes": "primary,attitude,pedagogical,learning,behaviour"
  },
  {
    "no": 5,
    "pop": "Hussein 2013, Pakistan",
    "link": "http://dx.doi.org/10.1080/13632752.2013.819254",
    "intervention": "intellectual",
    "outcomes": "primary,attitude,managing"
  },
  {
    "no": 6,
    "pop": "Kantavong 2010, Thailand",
    "link": "https://eric.ed.gov/?id=EJ872441",
    "intervention": "intellectual",
    "outcomes": "primary,attitude,pedagogical,learning"
  },
  {
    "no": 7,
    "pop": "Klibthong 2018, Thailand",
    "link": "http://dx.doi.org/10.14221/ajte.2018v43n3.7",
    "intervention": "inclusive",
    "outcomes": "early,attitude"
  },
  {
    "no": 8,
    "pop": "Locharoenrat 2019, Thailand",
    "link": "https://www.proquest.com/docview/2272840258",
    "intervention": "inclusive",
    "outcomes": "primary,secondary,managing"
  },
  {
    "no": 9,
    "pop": "Martin 2001, China",
    "link": "https://www.jstor.org/stable/44390116",
    "intervention": "sensory",
    "outcomes": "special,pedagogical,learning,behaviour"
  },
  {
    "no": 10,
    "pop": "McCabe 2008, China",
    "link": "http://dx.doi.org/10.1177/088840640803100204",
    "intervention": "intellectual",
    "outcomes": "special,attitude,pedagogical"
  },
  {
    "no": 11,
    "pop": "Opartkiattikul 2015, Thailand",
    "link": "http://dx.doi.org/10.1177/1053451215577471",
    "intervention": "inclusive",
    "outcomes": "primary,managing,behaviour"
  },
  {
    "no": 12,
    "pop": "Salim 2019, Indonesia",
    "link": "https://eric.ed.gov/?id=EJ1239168",
    "intervention": "inclusive",
    "outcomes": "primary,attitude"
  },
  {
    "no": 13,
    "pop": "Shah 2012, India",
    "link": "http://dx.doi.org/10.1007/s10597-011-9437-2",
    "intervention": "intellectual",
    "outcomes": "primary,attitude,pedagogical"
  },
  {
    "no": 14,
    "pop": "Simpson 2016, China",
    "link": "https://www.iase.org/JIASE_2016.pdf#page=111",
    "intervention": "intellectual",
    "outcomes": "special,pedagogical"
  },
  {
    "no": 15,
    "pop": "Srivastava 2015, India",
    "link": "http://dx.doi.org/10.1080/21683603.2015.1064841",
    "intervention": "inclusive",
    "outcomes": "primary,attitude,pedagogical"
  },
  {
    "no": 16,
    "pop": "Xie 2017, China",
    "link": "http://dx.doi.org/10.1177/0271121416659052",
    "intervention": "inclusive",
    "outcomes": "early,attitude"
  },
  {
    "no": 17,
    "pop": "Yusuf 2017, Malaysia",
    "link": "http://dx.doi.org/10.4324/9781315397702",
    "intervention": "inclusive",
    "outcomes": "primary,secondary,pedagogical"
  }
]

// array  that contains the interventions and details. short is used to populate the grid cells
const interventions = [
    {
        "type": "Physical disability",
        "desc": "Includes studies aimed at supporting students with mobility, spinal-cord disability, head injuries, and/ or long term-illness.",
        "short": "physical",
    },
    {
        "type": "Sensory disability",
        "desc": "Includes studies aimed at supporting students with vision, hearing, speech or communication disabilities.",
        "short": "sensory",
    },
    {
        "type": "Mental and intellectual",
        "desc": "Includes studies aimed at supporting students with affect, cognition and learning disabilities.",
        "short": "intellectual",
    },
    {
        "type": "Inclusive",
        "desc": "Includes studies aimed at supporting students with all types of disabilities.",
        "short": "inclusive",
    },
];

// array values are used to populate grid cells by searching data array with these values.
const outcomes = ["early","primary","secondary","special","attitude","pedagogical","managing","learning","behaviour"];

//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

//adds the second row of headRows divs to the end of the first row of hard coded headRows and then the intervention rows and then the grid cells.
//adds unique id from data intervention and outcome values and classes to each grid cell
const grid = document.getElementById("grid");

function makeGrid(rows, cols) {
    for (a=0; a<interventions.length; a++) {
        let cell = document.createElement("div");
        cell.innerText = interventions[a].type;
        grid.appendChild(cell).id = interventions[a].short;
        grid.appendChild(cell).className = "intervention headRow";
        

        for (b = 0; b < outcomes.length; b++) {
            let cell = document.createElement("div");
            grid.appendChild(cell).id = interventions[a].short + outcomes[b];
            grid.appendChild(cell).className = interventions[a].short + " " + outcomes[b] + " square";
        };
    };
};
// dimensions of grid including the hard coded first headRow
makeGrid(6, 10);


let allGrids = document.querySelectorAll(".square");
let allGridsArray = Array.from(allGrids);

for (x of interventions) {
    tippy("#" + x.short, {
        maxWidth: 500,
        content: x.desc,
        
        allowHTML: true,
        appendTo: document.body
    });
}

for (i=0; i < allGridsArray.length; i++) {
    let y = allGridsArray[i].classList[0];
    let z = allGridsArray[i].classList[1];
    let pip = data.filter(it => it.intervention.includes(y) && it.outcomes.includes(z));

    allGridsArray[i].innerHTML += '<svg class="circle' + z + '" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100"> <circle r=' + pip.length * 8 + ' cx="50%" cy="50%" stroke="FF5F33" stroke-width="2" fill=""/></svg>';

    let pop = "";
    for(var j = 0; j < data.length; j++){
        if(data[j].intervention.includes(y) && data[j].outcomes.includes(z))
            pop += "<a target=_blank" + ' href=' + data[j].link + '>' + data[j].pop +'</a>' + '<br>';
            // else if(data[j].link === "" && data[j].intervention === y && data[j].outcome.includes(z))
            // pop += data[j].pop + '<br>';
    };
    
    if(pop.length > 0)
    tippy("#" + allGridsArray[i].id, {
    maxWidth: '',
    content: '<p>' + data.filter(it => it.intervention.includes(y) && it.outcomes.includes(z)).length + '</p>' + pop,
    allowHTML: true,
    placement: "right",
    boundary: 'parent',
    appendTo: document.body,
    interactive: true
    });
    pop = '';
};
// set variables for grids in each outcome area
let settingGrids = document.querySelectorAll(".setting,.early,.primary,.secondary,.special");
let teacherGrids = document.querySelectorAll(".attitude,.pedagogical,.managing");
let studentGrids = document.querySelectorAll(".learning,.behaviour");
// add classes for show hide outcomes for smaller screens
for (var x = 0; x < settingGrids.length; x++) {
    settingGrids[x].className += ' setting ';
}
for (var x = 0; x < teacherGrids.length; x++) {
    teacherGrids[x].className += ' teacher ';
}
for (var x = 0; x < studentGrids.length; x++) {
    studentGrids[x].className += ' student ';
}
// function to show grids with teacher class and hide others
function showTeacher() {
    document.getElementById("grid").style.gridTemplateColumns = "repeat(4, 20vmin)";
    document.getElementById("teacheroutcomes").style.gridColumn = "2/5";
    Array.from(document.querySelectorAll(".setting,.student"))
    .forEach(function(val) {
        val.style.display = 'none';
    });
    Array.from(document.querySelectorAll(".teacher"))
    .forEach(function(val) {
        val.style.display = 'grid';
    });
}
// function to show grids with student class and hide others
function showStudent() {
    document.getElementById("grid").style.gridTemplateColumns = "repeat(3, 20vmin)";
    document.getElementById("studentoutcomes").style.gridColumn = "2/4";
    Array.from(document.querySelectorAll(".setting,.teacher"))
    .forEach(function(val) {
        val.style.display = 'none';
    });
    Array.from(document.querySelectorAll(".student"))
    .forEach(function(val) {
        val.style.display = 'grid';
    });
}
// function to show grids with setting class and hide others
function showSetting() {
    document.getElementById("grid").style.gridTemplateColumns = "repeat(5, 20vmin)";
    document.getElementById("setting").style.gridColumn = "2/6";
    Array.from(document.querySelectorAll(".setting"))
    .forEach(function(val) {
        val.style.display = 'grid';
    });
    Array.from(document.querySelectorAll(".teacher,.student"))
    .forEach(function(val) {
        val.style.display = 'none';
    });
}

// this is the d3 map https://gist.run/?id=3ccd770923a61f26f55156657e2f51e8 https://bl.ocks.org/d3indepth/raw/3ccd770923a61f26f55156657e2f51e8/
// this is for globe display
// var projection = d3.geoOrthographic()
// .scale(280)
//   .translate([300, 310])
//   .center([0, 5])
//   .rotate([-100,0,0]);

//this is for flat map display
var projection = d3.geoMercator()
.scale(280)
  .translate([80, 310])
  .center([0, 5]);

var geoGenerator = d3.geoPath()
  .projection(projection);


function handleMouseover(d) {

  var pixelArea = geoGenerator.area(d);
  var bounds = geoGenerator.bounds(d);
  var centroid = geoGenerator.centroid(d);
  var measure = geoGenerator.measure(d);

  d3.select('#content .info')
  .text(d.properties.name + ' (path.area = ' + pixelArea.toFixed(1) + ' path.measure = ' + measure.toFixed(1) + ')');

  d3.select('#content .bounding-box rect')
    .attr('x', bounds[0][0])
    .attr('y', bounds[0][1])
    .attr('width', bounds[1][0] - bounds[0][0])
    .attr('height', bounds[1][1] - bounds[0][1]);
  

  d3.select('#content .centroid')
    .style('display', 'inline')
    .attr('transform', 'translate(' + centroid + ')');
}

function update(geojson) {
  var u = d3.select('#content g.map')
    .selectAll('path')
    .data(geojson.features);

  u.enter()
    .append('path')
    .attr('d', geoGenerator)
    .on('mouseover', handleMouseover)
    .on('mouseover', );

  //omg add land class to each path in the map!!!!!
  d3.select('#content g.map').selectAll('path').attr("class","land");
}

// REQUEST DATA
d3.json('countries.json', function(err, json) {
  update(json)
})


// hovers for descriptions
tippy("#teacherattitudes", {
  maxWidth: 500,
  content: "Relates to teachers’ attitudes (acceptance, confidence, and self- efficacy) towards children with disabilities and knowledge about and understanding of inclusive practices.",
  allowHTML: true,
  appendTo: document.body
});
tippy("#teacherpedagogical", {
  maxWidth: 500,
  content: "Focuses on teachers’ gaining skills to improve pedagogical practice for the purpose of improving inclusive practices and educational outcomes for children with disabilities.",
  allowHTML: true,
  appendTo: document.body
});
tippy("#teachermanaging", {
  maxWidth: 500,
  content: "Enables teachers to develop strategies to more effectively manage behaviour issues among children with disabilities.",
  allowHTML: true,
  appendTo: document.body
});
tippy("#studentlearning", {
  maxWidth: 500,
  content: "Results in positive learning and achievement outcomes for children with disabilities.",
  allowHTML: true,
  appendTo: document.body
});
tippy("#studentbehaviour", {
  maxWidth: 500,
  content: "Improves the behaviour and engagement of children with disabilities.",
  allowHTML: true,
  appendTo: document.body
});
