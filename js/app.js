// Quality of evidence	
// Level 1 	Experimental Designs 
// Level 2	Quasi-experimental Designs
// Level 3	Observational – Analytic Designs 
// Level 4	Observational –Descriptive Studies 
// Level 5	Expert Opinion and Bench Research 



const data = [
  {
    "no": 1,
    "key": "L53YZDVV",
    "reference": "Agbenyega, J. S., & Klibthong, S. (2015).",
    "findings": "Enhanced preschool teachers’ understanding of inclusion.\nImproved learning potential for children with and without disabilities.",
    "Title": "Transforming Thai Preschool Teachers' Knowledge on Inclusive Practice: A Collaborative Inquiry",
    "Key": "L53YZDVV",
    "Year": 2015,
    "quality": "Level 3",
    "pop": "Agbenyega 2015, Thailand",
    "title": "Transforming Thai Preschool Teachers' Knowledge on Inclusive Practice: A Collaborative Inquiry",
    "link": "https://eric.ed.gov/?id=EJ1069532",
    "intervention": "Inclusive",
    "outcomes": "Early,Attitude,Pedagogical",
    "country": "Thailand"
  },
  {
    "no": 2,
    "key": "ASE6LY3N",
    "reference": "Cheng, L. R. L., Wallach, G. P., & Reed, V. A. (2015).",
    "findings": "Improved teachers’ understanding of principles behind assessment and intervention.\nTeachers improved knowledge on the importance of language and communication in understanding children’s learning challenges.\nTeachers improved ability to recognise the individuality of each child.",
    "Title": "ASHA SLPs in China Teach Teachers about Their Students with Disabilities",
    "Key": "ASE6LY3N",
    "Year": 2015,
    "quality": "Level 3",
    "pop": "Cheng 2015, China",
    "title": "ASHA SLPs in China Teach Teachers about Their Students with Disabilities",
    "link": "http://dx.doi.org/10.1177/1525740114544027",
    "intervention": "Intellectual,Sensory",
    "outcomes": "Primary,Secondary,Attitude",
    "country": "China"
  },
  {
    "no": 3,
    "key": "WAXG3EQU",
    "reference": "Eng, P. S. (2015).",
    "findings": "Greater staff awareness for students as individual with abilities and needs to acquire specified skills.",
    "Title": "IEP Documentation for Effective Systematic Facilitation",
    "Key": "WAXG3EQU",
    "Year": 2015,
    "quality": "Level 3",
    "pop": "Eng 2015, Vietnam",
    "title": "IEP Documentation for Effective Systematic Facilitation",
    "link": "https://eric.ed.gov/?id=EJ1094919",
    "intervention": "Physical,Intellectual,Sensory",
    "outcomes": "Special,Pedagogical,Managing,Learning,Behaviour",
    "country": "Vietnam"
  },
  {
    "no": 4,
    "key": "JQ6XUVUI",
    "reference": "Hai, N. X., Villa, R. A., Thousand, J. S., & Muc, P. M. (2020).",
    "findings": "Increased activity-based instruction and student-teacher interactions.\nStudents explored new ideas via cooperative learning.\nPositive changes in teacher and classmate attitudes and feelings about children with disabilities.\nIncreased perception that all children should be respected.",
    "Title": "Inclusion in Vietnam: More than a Quarter Century of Implementation.",
    "Key": "IN7M6QNL",
    "Year": 2020,
    "quality": "Level 3",
    "pop": "Hai 2020, Vietnam",
    "title": "Teacher Training Intervention for Early Identification of Common Child Mental Health Problems in Pakistan",
    "link": "http://dx.doi.org/10.26822/iejee.2020358219",
    "intervention": "Inclusive",
    "outcomes": "Primary,Attitude,Pedagogical,Learning,Behaviour",
    "country": "Vietnam"
  },
  {
    "no": 5,
    "key": "INW9G3QT",
    "reference": "Hussein, S. A., & Vostanis, P. (2013).",
    "findings": "Improved teachers’ knowledge and recognition of child mental health problems.",
    "Title": "Teacher Training Intervention for Early Identification of Common Child Mental Health Problems in Pakistan",
    "Key": "JQ6XUVUI",
    "Year": 2013,
    "quality": "Level 2",
    "pop": "Hussein 2013, Pakistan",
    "title": "A Professional Learning Program for Enhancing the Competency of Students with Special Needs",
    "link": "http://dx.doi.org/10.1080/13632752.2013.819254",
    "intervention": "Intellectual",
    "outcomes": "Primary,Attitude,Managing",
    "country": "Pakistan"
  },
  {
    "no": 6,
    "key": "JRB3EZB4",
    "reference": "Kantavong, P., & Sivabaedya, S. (2010).",
    "findings": "Improved teachers’ knowledge and understanding on helping students with special needs in inclusive classrooms.\nHigher student achievement scores in Math, reading and Spelling.",
    "Title": "A Professional Learning Program for Enhancing the Competency of Students with Special Needs",
    "Key": "INW9G3QT",
    "Year": 2010,
    "quality": "Level 2",
    "pop": "Kantavong 2010, Thailand",
    "title": "Exploring professional knowing, being and becoming through inclusive pedagogical approach in action (IPAA) framework",
    "link": "https://eric.ed.gov/?id=EJ872441",
    "intervention": "Intellectual",
    "outcomes": "Primary,Attitude,Pedagogical,Learning",
    "country": "Thailand"
  },
  {
    "no": 7,
    "key": "P4RM7X2J",
    "reference": "Klibthong, S., & Agbenyega, J. S. (2018).",
    "findings": "Deepened educators’ understanding of inclusive pedagogical knowledge about SEN.\nTransformed educators’ beliefs about teaching young children with SEN.",
    "Title": "Exploring professional knowing, being and becoming through inclusive pedagogical approach in action (IPAA) framework",
    "Key": "JRB3EZB4",
    "Year": 2018,
    "quality": "Level 3",
    "pop": "Klibthong 2018, Thailand",
    "title": "Examining the Effectiveness of a Basic Functional Behavior Assessment Training Package on Special Education Teachers in Thailand: A Replication Study",
    "link": "http://dx.doi.org/10.14221/ajte.2018v43n3.7",
    "intervention": "Inclusive",
    "outcomes": "Early,Attitude",
    "country": "Thailand"
  },
  {
    "no": 8,
    "key": "5CVH2LC4",
    "reference": "Locharoenrat, W. (2019).",
    "findings": "Teachers' acquired knowledge on FBA.\nImproved teachers’ understanding of the causes of behaviours and on dealing with problem behaviours.",
    "Title": "Examining the Effectiveness of a Basic Functional Behavior Assessment Training Package on Special Education Teachers in Thailand: A Replication Study",
    "Key": "P4RM7X2J",
    "Year": 2019,
    "quality": "Level 1",
    "pop": "Locharoenrat 2019, Thailand",
    "title": "The Impact of Cognitive Strategy Instruction on Deaf Learners: An International Comparative Study.",
    "link": "https://www.proquest.com/docview/2272840258",
    "intervention": "Inclusive",
    "outcomes": "Primary,Secondary,Managing",
    "country": "Thailand"
  },
  {
    "no": 9,
    "key": "S5I7CJFS",
    "reference": "Martin, D. S., Craft, A., & Sheng, Z. N. (2001).",
    "findings": "Gains in reasoning skills of children.\nImproved classroom- teaching techniques.",
    "Title": "The Impact of Cognitive Strategy Instruction on Deaf Learners: An International Comparative Study.",
    "Key": "5CVH2LC4",
    "Year": 2001,
    "quality": "Level 2",
    "pop": "Martin 2001, China",
    "title": "Effective Teacher Training at the Autism Institute in the People's Republic of China.",
    "link": "https://www.jstor.org/stable/44390116",
    "intervention": "Sensory",
    "outcomes": "Special,Pedagogical,Learning,Behaviour",
    "country": "China"
  },
  {
    "no": 10,
    "key": "IN7M6QNL",
    "reference": "McCabe, H. (2008).",
    "findings": "Teaching become more systematic.\nTeachers were more involved and knowledgeable.\nThe intervention encouraged mentoring and better relationships among the teachers and staff.",
    "Title": "Effective Teacher Training at the Autism Institute in the People's Republic of China.",
    "Key": "S5I7CJFS",
    "Year": 2008,
    "quality": "Level 3",
    "pop": "McCabe 2008, China",
    "title": "Inclusion in Vietnam: More than a Quarter Century of Implementation.",
    "link": "http://dx.doi.org/10.1177/088840640803100204",
    "intervention": "Intellectual",
    "outcomes": "Special,Attitude,Pedagogical",
    "country": "China"
  },
  {
    "no": 11,
    "key": "Add 016",
    "reference": "Muttiah, N., Drager, K. D., McNaughton, D., & Perera, N. (2018).",
    "findings": "Improved the number of evocative communication opportunities provided by teachers\nIncreased the number of communication turns taken by students.",
    "Title": "Evaluating an AAC training for special education teachers in Sri Lanka, a low-and middle-income country",
    "Key": "Add016",
    "Year": 2018,
    "quality": "Level 2",
    "pop": "Muttiah 2018, Sri Lanka",
    "title": "Evaluating an AAC training for special education teachers in Sri Lanka, a low-and middle-income country",
    "link": "https://doi.org/10.1080/07434618.2018.1512651",
    "intervention": "Inclusive",
    "outcomes": "Special,Attitude,Pedagogical,Behaviour",
    "country": "Sri Lanka"
  },
  {
    "no": 12,
    "key": "U5HSKNUR",
    "reference": "Opartkiattikul, W., Arthur-Kelly, M., & Dempsey, I. (2015).",
    "findings": "Teachers’ implemented the behaviour goals in their classrooms.\nStudents’ achieved target behaviours.",
    "Title": "Implementing Functional Behavior Assessment in Thailand",
    "Key": "U5HSKNUR",
    "Year": 2015,
    "quality": "Level 3",
    "pop": "Opartkiattikul 2015, Thailand",
    "title": "Implementing Functional Behavior Assessment in Thailand",
    "link": "http://dx.doi.org/10.1177/1053451215577471",
    "intervention": "Inclusive",
    "outcomes": "Primary,Managing,Behaviour",
    "country": "Thailand"
  },
  {
    "no": 13,
    "key": "FYAZRAB8",
    "reference": "Salim, A., Hidayatullah, M. F., & Nugraheni, P. P. (2019).",
    "findings": "Improved teachers' understanding of disability and inclusion.",
    "Title": "Investigating Effectiveness of Disability Friendly Education Training Modules in Indonesian Schools",
    "Key": "FYAZRAB8",
    "Year": 2019,
    "quality": "Level 2",
    "pop": "Salim 2019, Indonesia",
    "title": "Investigating Effectiveness of Disability Friendly Education Training Modules in Indonesian Schools",
    "link": "https://eric.ed.gov/?id=EJ1239168",
    "intervention": "Inclusive",
    "outcomes": "Primary,Attitude",
    "country": "Indonesia"
  },
  {
    "no": 14,
    "key": "2KTKTLFJ",
    "reference": "Shah, H., & Kumar, D. (2012).",
    "findings": "Enhanced school teachers’ awareness about positive mental health issues, and childhood emotional and behavioural difﬁculties to facilitate early identiﬁcation and intervention.",
    "Title": "Sensitizing the teachers towards school mental health issues: An indian experience",
    "Key": "2KTKTLFJ",
    "Year": 2012,
    "quality": "Level 3",
    "pop": "Shah 2012, India",
    "title": "Sensitizing the teachers towards school mental health issues: An indian experience",
    "link": "http://dx.doi.org/10.1007/s10597-011-9437-2",
    "intervention": "Intellectual",
    "outcomes": "Primary,Attitude,Pedagogical",
    "country": "India"
  },
  {
    "no": 15,
    "key": "TQDWRQJ8",
    "reference": "Simpson, L. A., Sharon, Q., Kan, H., & Qing Qing, T. (2016).",
    "findings": "Improved teachers’ instruction in the classroom.",
    "Title": "Distance Learning: A Viable Option for Professional Development for Teachers of Students with Autism Spectrum Disorder in China.",
    "Key": "TQDWRQJ8",
    "Year": 2016,
    "quality": "Level 3",
    "pop": "Simpson 2016, China",
    "title": "Distance Learning: A Viable Option for Professional Development for Teachers of Students with Autism Spectrum Disorder in China.",
    "link": "https://www.iase.org/JIASE_2016.pdf#page=111",
    "intervention": "Intellectual",
    "outcomes": "Special,Pedagogical",
    "country": "China"
  },
  {
    "no": 16,
    "key": "7GSTUJPG",
    "reference": "Srivastava, M., de Boer, A. A., & Pijl, S. J. (2015).",
    "findings": "Improved teacher attitudes toward inclusive education,\nEnhanced teachers’ knowledge about the four types of SEN, and about teaching methods.",
    "Title": "Know How to Teach Me… Evaluating the Effects of an In-Service Training Program for Regular School Teachers toward Inclusive Education",
    "Key": "7GSTUJPG",
    "Year": 2015,
    "quality": "Level 1",
    "pop": "Srivastava 2015, India",
    "title": "Know How to Teach Me… Evaluating the Effects of an In-Service Training Program for Regular School Teachers toward Inclusive Education",
    "link": "http://dx.doi.org/10.1080/21683603.2015.1064841",
    "intervention": "Inclusive",
    "outcomes": "Primary,Attitude,Pedagogical",
    "country": "India"
  },
  {
    "no": 17,
    "key": "9I9APPBY",
    "reference": "Xie, H., Chen, C. I., Chen, C. Y., Squires, J., Li, W., & Liu, T. (2017).",
    "findings": "Improved educators’ perception of their personal efficacy (e.g. abilities to offer beneficial services to children and families) and general efficacy (e.g., sense of the general effectiveness of family-centred early intervention).",
    "Title": "Developing a Home-Based Early Intervention Personnel Training Program in Southeast China",
    "Key": "9I9APPBY",
    "Year": 2017,
    "quality": "Level 2",
    "pop": "Xie 2017, China",
    "title": "Developing a Home-Based Early Intervention Personnel Training Program in Southeast China",
    "link": "http://dx.doi.org/10.1177/0271121416659052",
    "intervention": "Inclusive",
    "outcomes": "Early,Attitude",
    "country": "China"
  },
  {
    "no": 18,
    "key": "WU4TRMU9",
    "reference": "Yusuf, B. (2017).",
    "findings": "Teachers’ produced creative and innovative instructional approaches including ICT strategies for an inclusive classroom.\nThe teachers identified Google Docs as a transformative and collaborative peer-tutoring platform for inclusive activities.",
    "Title": "Essential technology skills for 21st-century teacher inclusive strategies",
    "Key": "WU4TRMU9",
    "Year": 2017,
    "quality": "Level 3",
    "pop": "Yusuf 2017, Malaysia",
    "title": "Essential technology skills for 21st-century teacher inclusive strategies",
    "link": "http://dx.doi.org/10.4324/9781315397702",
    "intervention": "Inclusive",
    "outcomes": "Primary,Secondary,Pedagogical",
    "country": "Malaysia"
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

//create array of country names from data country keys
const allCountries = data.map(({country}) => country);
console.log(allCountries);
// unique countries from 
const countrylist = [...new Set(allCountries)];
console.log(countrylist);


//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

//adds the second row of headRows divs to the end of the first row of hard coded headRows and then the intervention rows and then the grid cells.
//adds unique id from data intervention and outcome values and classes to each grid cell
const grid = document.getElementById("grid");

function makeGrid() {
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
// dimensions of grid including the html hard coded first headRow
makeGrid(6, 10);

//this selects all square elements and then creates an array
let allGrids = document.querySelectorAll(".square");
let allGridsArray = Array.from(allGrids);

//this generates tippys for the interventions as per the interventions array
for (x of interventions) {
    tippy("#" + x.short, {
        maxWidth: 500,
        content: x.desc,
        
        allowHTML: true,
        appendTo: document.body
    });
}

//this uses the array of elements with a class of square created above and thier first (intervention) and second (outcome) classes as values to use in the filter search
for (i=0; i < allGridsArray.length; i++) {
    let y = allGridsArray[i].classList[0];
    let z = allGridsArray[i].classList[1];
    //this filters the square element array and creates a new variable to calculate the length to use as the radius of the circle. same filter is used in the tippy generator below
    let pip = data.filter(it => it.intervention.toLowerCase().includes(y) && it.outcomes.toLowerCase().includes(z));
    allGridsArray[i].innerHTML += '<svg class="circle' + z + '" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100"> <circle r=' + pip.length * 7 + ' cx="50%" cy="50%" stroke="FF5F33" stroke-width="2" fill=""/></svg>';

    //this compares the values in the data to the class list on the square element and if they match it adds the link and author text to the tippy.
    let pop = "";
    for(var j = 0; j < data.length; j++){
        if(data[j].intervention.toLowerCase().includes(y) && data[j].outcomes.toLowerCase().includes(z))
            pop += "<a target=_blank" + ' href=' + data[j].link + '>' + data[j].pop +'</a>' + '<br>';

            //this just displays author - use this if there no url in the data file
            // else if(data[j].link === "" && data[j].intervention === y && data[j].outcome.includes(z))
            // pop += data[j].pop + '<br>';
    };
    
    if(pop.length > 0)
    tippy("#" + allGridsArray[i].id, {
    maxWidth: '',
    content: '<p>' + data.filter(it => it.intervention.toLowerCase().includes(y) && it.outcomes.toLowerCase().includes(z)).length + '</p>' + pop,
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

  // var pixelArea = geoGenerator.area(d);
  // var bounds = geoGenerator.bounds(d);
  // var centroid = geoGenerator.centroid(d);
  // var measure = geoGenerator.measure(d);

  d3.select('#content .info')
  //.text(d.properties.name + ' (path.area = ' + pixelArea.toFixed(1) + ' path.measure = ' + measure.toFixed(1) + ')');
  .text(d.properties.name);

  // d3.select('#content .bounding-box rect')
  //   .attr('x', bounds[0][0])
  //   .attr('y', bounds[0][1])
  //   .attr('width', bounds[1][0] - bounds[0][0])
  //   .attr('height', bounds[1][1] - bounds[0][1]);
  // d3.select('#content .centroid')
  //   .style('display', 'inline')
  //   .attr('transform', 'translate(' + centroid + ')');
    
}

function update(geojson) {
  var u = d3.select('#content g.map')
    .selectAll('path')
    .data(geojson.features);

  u.enter()
    .append('path')
    .attr("id",  d => d.properties.name_long.toLowerCase().replace(/\s+/g, ''))
    .attr("class", d => d.properties.name)
    .attr("name", d => d.properties.name_long)
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .classed(" land", true)
    .attr('d', geoGenerator)
    .on('mouseover', handleMouseover)
    .on('mouseover', );

let cpath = document.querySelectorAll(".land");
let cpathArray = Array.from(cpath);
console.log(cpathArray);



  for (t=0; t<countrylist.length; t++) {

  for (i=0; i<cpathArray.length; i++) {
      
  
    
    let y = countrylist[t].toLowerCase().replace(/\s+/g, '');


      //this filters the square element array and creates a new variable to calculate the length to use as the radius of the circle. same filter is used in the tippy generator below
      
      let pip = data.filter(it => it.country.toLowerCase().includes(y) && (cpathArray[i].id.includes(y)));
      console.log(pip);
      //this compares the values in the data to the class list on the square element and if they match it adds the link and author text to the tippy.
      let pop = "";
      for(var j = 0; j < data.length; j++){
          if(data[j].country.toLowerCase().replace(/\s+/g, '').includes(y) && (cpathArray[i].id.includes(y))) {
              //pop += "<a target=_blank" + ' href=' + data[j].link + '>' + data[j].pop +'</a>' + '<br>';
              
              pop += '<p><b>' + data[j].title + '</b>' + '<br>' + data[j].reference + '<br>' + "Key findings: " + data[j].findings + '<br>' + "<a target=_blank" + ' href=' + data[j].link + '>' + data[j].link +'</a>';
              cpathArray[i].classList.add("study");
          }
              //this just displays author - use this if there no url in the data file
              // else if(data[j].link === "" && data[j].intervention === y && data[j].outcome.includes(z))
              // pop += data[j].pop + '<br>';
      };

      if(!pop == "") {
          tippy("#" + cpathArray[i].id, {
          trigger:'click',
          interactiveBorder: 30,
          maxWidth: '900px',
          content: '<p><b>' + data.filter(it => it.country.toLowerCase().replace(/\s+/g, '').includes(y)).length + " " + cpathArray[i].__data__.properties.name_long + '</b></p>' + pop,
          //followCursor: true,
          allowHTML: true,
          theme: "white",
          //placement: "top",
          //arrow: "false",
          boundary: 'parent',
          sticky: 'true',
          appendTo: document.body,
          interactive: true
          });
      }
      pop = '';
  };
};
}

// REQUEST DATA
d3.json('countries.json', function(err, json) {
  update(json)
})

// hovers for outcomes descriptions
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