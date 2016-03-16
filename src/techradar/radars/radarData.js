//This is the title for your window tab, and your Radar
document.title = "WotifGroup's Technology Radar (December 2014)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data2 = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            { name: 'Git flow / Pull Requests ^', pc: { r: 230, t: 133 }, movement: 'c' },
            {"name":"Incremental data warehousing", "pc":{"r":250,"t":165},"movement":"c"},
            {"name":"Events for messages - CQRS", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Measure Pipeline disruptions", "pc":{"r":280,"t":110},"movement":"c"},
            {"name":"Continuous Experimentation", "pc":{"r":230,"t":110},"movement":"c"},
            { name: 'Reduce iRules dependence ^', pc: { r: 280, t: 133 }, movement: 'c' },
            {"name":"SaaS for non-core systems", "pc":{"r":170,"t":150},"movement":"c"},
            {"name":"Pair Programming", "pc":{"r":130,"t":170},"movement":"c"},
            {"name":"iOS Accessibility", "pc":{"r":170,"t":110},"movement":"c"},
            {"name":"Single Page App", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
            {"name":"iOS Adaptivity", "pc":{"r":180,"t":105},"movement":"c"},
            {"name":"Build Pipelines", "pc":{"r":180,"t":100},"movement":"c"},
            {"name":"Data Informed Decion Making", "pc":{"r":130,"t":110},"movement":"c"},
            {"name":"Polygot Programming", "pc":{"r":180,"t":170},"movement":"c"},
            { name: 'internal load balancing off F5^', pc: { r: 180, t: 133 }, movement: 'c' },
            {"name":"Isolated dev envs", "pc":{"r":180,"t":125},"movement":"c"},
            {"name":"Edge Services", "pc":{"r":130,"t":160},"movement":"c"},
            {"name":"Clean Code", "pc":{"r":130,"t":120},"movement":"c"},
            {"name":"Wide and Thin Front-Ends", "pc":{"r":180,"t":160},"movement":"c"},
            {"name":"Zookeeper for App Config", "pc":{"r":130,"t":130},"movement":"c"},
            {"name":"Property based testing", "pc":{"r":130,"t":165},"movement":"c"},
            {"name":"Evolutionary architecture", "pc":{"r":120,"t":95},"movement":"c"},
            {"name":"Code Reviews", "pc":{"r":110,"t":110},"movement":"c"},
            {"name":"Valuable, cheap tests", "pc":{"r":130,"t":150},"movement":"c"},
            {"name":"Sacrificial Architecture", "pc":{"r":80,"t":100},"movement":"c"},
            {"name":"Sensible defaults", "pc":{"r":80,"t":150},"movement":"c"},
            {"name":"Dependency Injection", "pc":{"r":80,"t":130},"movement":"c"},
            {"name":"Coding architects", "pc":{"r":90,"t":170},"movement":"c"}

        ]
    }
];
//console.log('origdata', radar_data2);
