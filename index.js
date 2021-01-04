var NEXT_IMAGE_INTERVAL_TIME = 5000;
var DRAW_TIME = 2000;
var TEXT_TRANSITION_TIME = 300;
var MOBILE_BREAKPOINT = 500;
var TABLET_BREAKPOINT = 850;
var IMAGE_FADE_TIME = 1000;
var SECTIONS = [
    {
        "name": "Projects",
        "items": [
            {
                "name": "Game 103",
                "link": "https://game103.net",
                "subtitles": ["https://game103.net"],
                "image": "./images/game103.png",
                "description": "A site that hosts family-friendly games, including over thirty-five that I've created, and entertainment. By far my largest project and ongoing since 2008."
            },
            {
                "name": "Shepherd Hotels",
                "link": "https://shepherdhotels.com",
                "subtitles": ["https://shepherdhotels.com"],
                "image": "./images/shepherdhotels.png",
                "description": "The pre-opening website for the Shepherd Hotel, a hotel that aims to hire individuals with disabilities."
            },
            {
                "name": "Delish Sisters",
                "link": "https://delishsisters.com",
                "subtitles": ["https://delishsisters.com"],
                "image": "./images/delishsisters.png",
                "description": "The website for the Delish Sisters, a restaurant to be located within the Shepherd Hotel."
            },
            {
                "name": "Making Do Recipes",
                "link": "https://makingdorecipes.com",
                "subtitles": ["https://makingdorecipes.com"],
                "image": "./images/makingdorecipes.png",
                "description": "A recipe sharing platform for people with restrictive allergies. Allows users to search for recipes by listing what ingredients they can or can not have."
            },
            {
                "name": "Christianbook Finder",
                "link": "https://www.christianbook.com/apps/finder?type=Homeschool",
                "subtitles": ["https://www.christianbook.com/apps/finder?type=Homeschool"],
                "image": "./images/christianbook.png",
                "description": "The finder application for Christianbook.com designed to allow for heavy customization of search. I reworked this application to be responsive."
            },
            {
                "name": "GuyStation",
                "link": "https://guystation.net",
                "subtitles": ["https://guystation.net"],
                "image": "./images/guystation.png",
                "description": "An emulator frontend for Ubuntu that lets you to stream your games to any device with a browser on your network. It also lets you to have multiple saves for a game, and it includes a media player and web browser."
            },
            {
                "name": "Racecourse",
                "link": "https://github.com/jamesgrams/racecourse",
                "subtitles": ["https://github.com/jamesgrams/racecouse"],
                "image": "./images/racecourse.png",
                "description": "A lightweight course manager that makes it very easy for teachers to get content to their students."
            },
            {
                "name": "Budgeteer",
                "link": "https://github.com/jamesgrams/budgeteer",
                "subtitles": ["https://github.com/jamesgrams/budgeteer"],
                "image": "./images/budgeteer.png",
                "description": "A themed budgeting application that automatically registers purchases and is designed to be run on a local network."
            },
            {
                "name": "Spokapi",
                "link": "https://github.com/jamesgrams/spokapi",
                "subtitles": ["https://github.com/jamesgrams/spokapi"],
                "image": "./images/spokapi.png",
                "description": "Easily watch TV through Puppeteer. This program allows you to easily watch live sports and shows that you have access to with your cable provider login."
            },
            {
                "name": "Grams Family Website",
                "link": "https://grams.family",
                "subtitles": ["https://grams.family"],
                "description": "The website of the Grams Family. Includes a family tree that generates programatically and a list of upcoming events."
            }
        ]
    },
    {
        "name": "Experience",
        "items": [
            {
                "name": "IT Systems Administrator",
                "link": "https://www.paviliondevelopment.com/",
                "subtitles": ["2020-", "Pavilion Development"],
                "image": "./images/pavilion.png",
                "description": "\"Everything computers\" man for a small business. Built a pre-opening website for the Shepherd Hotel. Built various tools with Node.js to help with everything from creating displays of construction sites to controlling Crestron devices and Mitel phones. Worked with employees on computer and phone problems." 
            },
            {
                "name": "Web Developer",
                "link": "https://www.christianbook.com",
                "subtitles": ["2017-2019", "Christianbook.com"],
                "image": "./images/christianbook.png",
                "description": "Worked on Full Stack projects in SQL/Perl/HTML/JavaScript (jQuery)/CSS: Implemented logging tools to detect fraud and took preventitive measures to stop it. Responsible for reworking the design of the mobile product detail page. Completely redesigned the email preferences system. Made several applications responsive. Created a feature to buy another item with one click after checkout. Additionally worked on Java Web Services: Migrated search from Endeca to Elasticsearch. Altered several applications to use the Jersey Framework." 
            },
            {
                "name": "Student IT Helpdesk Worker",
                "link": "https://www.gordon.edu",
                "subtitles": ["2013-2017", "Gordon College"],
                "image": "./images/gordon.png",
                "description": "Troubleshot faculty, staff, and students' computer and technology problems in person, via email, and over the phone. Managed equipment rentals. Developed School's computer inventory system. Promoted to Helpdesk Student Manager for my senior year." 
            },
            {
                "name": "CS Teaching Assistant",
                "link": "https://www.gordon.edu",
                "subtitles": ["2014-2016", "Gordon College"],
                "image": "./images/gordon.png",
                "description": "TA'd Object-Oriented Software Development, Data Structures and Algorithms, Introduction to Programming, and Software Systems. This involved helping students with weekly labs and providing help sessions for their major projects." 
            }
        ]
    },
    {
        "name": "Education",
        "items": [
            {
                "name": "Gordon College",
                "subtitles": ["Graduated 2017", "Summa Cum Laude", "Bachelor of Science in Computer Science"],
                "image": "./images/gordon.png",
                "description": "Revelant courses include Object-Oriented Software Development, Data Structures and Algorithms, Internet Programming, Mobile Computing, Parallel and High Performance Computing, Numerical Analysis, Models of Computation, and Database Systems."
            },
            {
                "name": "Ardrey Kell High School",
                "image": "./images/ak.png",
                "subtitles": ["Graduated 2013"]
            }
        ]
    },
    {
        "name": "Skills",
        "items": [
            {
                "name": "Known Computer Languages",
                "subtitles": [],
                "description": "HTML, CSS, JavaScript (Node.js, jQuery, React), Java (Tomcat, Jersey), Perl, PHP, Python, SQL, Elasticsearch, ActionScript 2 & 3"
            },
            {
                "name": "Familiar Computer Languages",
                "subtitles": [],
                "description": "C++, C#, Angular (Ionic)"
            }
        ]
    },
    {
        "name": "Hobbies",
        "items": [
            {
                "name": "Web Development",
                "subtitles": [],
                "description": "I've been running Game 103 since 2008. I love to learn about the web and put what I learn into practice."
            },
            {
                "name": "Game Development",
                "subtitles": [],
                "description": "I've been making games since I was ten years old. I have made games with Game Maker, Flash Professional, and HTML/JavaScript/CSS for web, Windows, iOS, and Android."
            },
            {
                "name": "Spending time with my Wife and Son",
                "subtitles": [],
                "description": "My wife loves to go for runs, exercise, and play/compose music. My son loves to go for walks, play outside, crawl up stairs, have books read to him (especially books with pictures of children playing), play music instruments (especially maracas), be held by mom and dad, and play chase and peekaboo."
            },
            {
                "name": "Playing Football",
                "subtitles": [],
                "description": "I played Defensive End in High School but now enjoy casually playing or just tossing the ball with a friend."
            },
            {
                "name": "Playing Video Games",
                "subtitles": [],
                "description": "My favorites include The Legend of Zelda, Pokémon, and Mario."
            }
        ]
    },
    {
        "name": "Places Lived",
        "items": [
            {
                "name": "Charlotte, NC, USA",
                "link": "https://www.google.com/maps/place/Charlotte, NC, USA",
                "image": "./images/charlotte.jpg",
                "subtitles": ["1995-1997"]
            },
            {
                "name": "Osijek, Croatia",
                "link": "https://www.google.com/maps/place/Osijek, Croatia",
                "image": "./images/osijek.jpg",
                "subtitles": ["1997-1999"]
            },
            {
                "name": "Bladon, England",
                "link": "https://www.google.com/maps/place/Bladon, England",
                "image": "./images/bladon.jpg",
                "subtitles": ["1999-2000"]
            },
            {
                "name": "Freeland, England",
                "link": "https://www.google.com/maps/place/Freeland, England",
                "image": "./images/freeland.jpg",
                "subtitles": ["2000-2005"]
            },
            {
                "name": "Charlotte, NC, USA",
                "link": "https://www.google.com/maps/place/Charlotte, NC, USA",
                "image": "./images/charlotte.jpg",
                "subtitles": ["2005-2013"]
            },
            {
                "name": "Wenham, MA, USA",
                "link": "https://www.google.com/maps/place/Wenham, MA, USA",
                "image": "./images/wenham.jpg",
                "subtitles": ["2013-2017"]
            },
            {
                "name": "Hamilton, MA, USA",
                "link": "https://www.google.com/maps/place/Hamilton, MA, USA",
                "image": "./images/hamilton.jpg",
                "subtitles": ["2017"]
            },
            {
                "name": "Merrimac, MA, USA",
                "link": "https://www.google.com/maps/place/Merrimac, MA, USA",
                "image": "./images/merrimac.jpg",
                "subtitles": ["2017"]
            },
            {
                "name": "Beverly, MA, USA",
                "link": "https://www.google.com/maps/place/Beverly, MA, USA",
                "image": "./images/beverly.jpg",
                "subtitles": ["2017-2018"]
            },
            {
                "name": "Merrimac, MA, USA",
                "link": "https://www.google.com/maps/place/Merrimac, MA, USA",
                "image": "./images/merrimac.jpg",
                "subtitles": ["2018-2020"]
            },
            {
                "name": "Charlotte, NC, USA",
                "link": "https://www.google.com/maps/place/Charlotte, NC, USA",
                "image": "./images/charlotte.jpg",
                "subtitles": ["2020-"]
            }
        ]
    }
];

// make sure these match the html
var svgViewboxWidth = 764;
var svgViewboxHeight = 650;
var svgWidth = 100;
var svgHeight = 80;

var circleDiameter;
var circleRadiusX;
var aspectRatio;
var circleOffset;
var circleRadiusY;
resetScreenDependentValues();

var totalImages = 15;
var currentImage = 1;
var imageInterval = null;
var curSizePositionStyle = "";

var timeouts = [];

window.addEventListener("load", function() {

    createName();
    createResume();
    createImage();

});

window.onresize = function() {
    resetScreenDependentValues();
    document.querySelector("svg").innerHTML = "";
    createName( true );
    var img = document.querySelector(".images");
    if( img ) createImage( img );
    setBorderHeight();
}

/**
 * Set the border height
 */
function setBorderHeight() {
    if( window.innerWidth <= MOBILE_BREAKPOINT ) {
        var visibleInfo = document.querySelector("#info .visible");
        var info = document.querySelector("#info");
        var height = document.querySelector("#resume").offsetTop + visibleInfo.offsetHeight + visibleInfo.offsetTop + 20;
        var altHeight = document.querySelector("#resume").offsetTop + info.offsetHeight + info.offsetTop + 100;
        height = Math.max(height, altHeight);
        document.querySelector("#fancy-border-bottom").setAttribute("style","top: calc("+height+"px - 20px);");
        document.querySelector("#fancy-border-left").setAttribute("style","width: "+height+"px;");
        document.querySelector("#fancy-border-right").setAttribute("style","width: "+height+"px;top: "+height+"px;");
    }
    else {
        document.querySelector("#fancy-border-bottom").removeAttribute("style");
        document.querySelector("#fancy-border-left").removeAttribute("style");
        document.querySelector("#fancy-border-right").removeAttribute("style");
    }
}

var prevScrollTop = document.documentElement.scrollTop;
document.body.onscroll = function() {
    if( (document.documentElement.scrollTop + window.innerHeight) < document.documentElement.scrollHeight ) {
        if( document.documentElement.scrollTop < prevScrollTop ) {
            setInfoMinHeight();
        } 
    }
    prevScrollTop = document.documentElement.scrollTop;    
}

/**
 * Reset values dependent on the screen size.
 */
function resetScreenDependentValues() {
    aspectRatio = window.innerWidth/document.documentElement.clientHeight;
    circleDiameter = window.innerWidth <= MOBILE_BREAKPOINT ? svgViewboxWidth/2 : window.innerWidth <= TABLET_BREAKPOINT ? svgViewboxWidth/4 : svgViewboxWidth/5; // If svgWidth is not 100, this might change
    circleRadiusX = circleDiameter/2;
    circleOffset = 35 * aspectRatio/2; // 35 when the aspect ratio is 2
    circleRadiusY = circleDiameter/2 * aspectRatio / (svgViewboxWidth/svgViewboxHeight) * (svgWidth/svgHeight); // window aspect ratio, viewbox aspect ratio, and width/height paremeters
}

/**
 * Create the signature.
 * @param {boolean} noAnimation - True if there shouldn't be animation when drawing the signature.
 */
function createName( noAnimation ) {
    var name = document.createElementNS("http://www.w3.org/2000/svg", "path");

    var signature = "m50.5,152.953125c0,0 9.20311,-2.471588 28,-10c30.351692,-12.156265 61.050842,-30.934875 79,-45c19.054214,-14.931061 32,-29 39,-36c9,-9 10.558197,-12.519283 14,-15c1.813995,-1.307453 3.471863,-1.881676 3,-1c-1.701309,3.178925 -5.788437,5.216652 -15,14c-10.758987,10.25885 -29.607178,28.497406 -56,61c-25.597954,31.523712 -50.985504,69.381668 -67,96c-17.074696,28.380539 -23.695934,42.159393 -28,50c-2.805908,5.11145 -4,8 -4,8c0,-1 0.55439,-8.877106 18,-36c16.664894,-25.909088 32.893166,-46.05957 54,-67c18.098969,-17.956268 36.726944,-30.029129 50,-33c13.800659,-3.088959 24.03894,-2.2117 32,-3c5.074203,-0.502441 10.080246,-1.310745 13,-2c2.176254,-0.513748 4,-1 4,-2c0,-1 -2,0 -4,2c-4,4 -6,7 -7,10c-1,3 -0.961258,4.480545 2,4c3.121445,-0.506546 5.519287,-2.558197 8,-6c1.307449,-1.813995 1,-3 2,-3c0,0 1,0 1,0c1,0 1,0 1,0c0,1 -0.306564,1.458801 1,2c0.923874,0.38269 3,0 6,-1c3,-1 4.693436,-3.458801 6,-4c0.923874,-0.38269 1,0 1,0c0,1 0,2 1,3c0,0 1,1 3,1c2,0 5,-2 7,-4c1,-1 2.292892,-1.707108 3,-1c0.707108,0.707108 0,3 0,4c0,0 1.10701,0.919006 5,0c2.176254,-0.513748 5.823761,-3.486252 8,-4c0.973236,-0.229752 2,0 2,1c0,3 0,4 1,5c0,0 2,1 4,1c2,0 4.228363,1.148056 7,0c1.306549,-0.541199 2.881531,-2.190277 6,-4c1.93399,-1.122345 3,-3 4,-4c1,-1 1.541199,-1.306564 1,0c-0.38269,0.923874 -2.486267,2.823746 -3,5c-0.459503,1.946503 -0.176239,3.486252 2,4c1.946503,0.459503 6.228851,-1.729614 11,-6c4.215088,-3.772675 6.723999,-7.222733 10,-11c1.85318,-2.136749 3,-3 4,-4c0,0 0,0 0,2c0,3 0.459503,6.053497 0,8c-0.513733,2.176254 -1,3 -1,5c0,1 -1.692535,3.186005 -3,5c-0.826904,1.147263 -1.136719,0.766006 9,-5c12.833832,-7.300186 36.950867,-23.060699 53,-36c19.93924,-16.075638 35.240997,-30.74115 46,-41c6.141052,-5.855568 9.21167,-8.714119 12,-11c1.093658,-0.896595 2,-2 3,-2c1,0 1.160187,1.012913 1,2c-1.519623,9.364334 -8.249176,22.38916 -22,48c-21.826691,40.65213 -35,64 -49,92c-8,16 -16.587006,35.762741 -22,50c-2.24762,5.911697 -4.415894,11.761078 -6,15c-1.389343,2.840729 -1,4 -2,5c0,0 -1.234009,-0.272217 2,-12c6.565613,-23.809509 21.539978,-54.239868 41,-91c17.586975,-33.221947 29.968933,-57.395966 47,-80c8.095886,-10.745064 17.342743,-20.994823 26,-26c6.59317,-3.811829 19.017395,-3.559238 28,-3c8.046692,0.500969 14.158966,4.35128 16,9c3.334259,8.419189 0.305542,19.107849 -16,37c-19.533691,21.434418 -37.394714,35.944199 -51,44c-11.544464,6.835571 -18,7 -21,7c-2,0 -2.292908,-0.707108 -3,0c-0.707092,0.707108 0,3 0,11c0,12 0,27 0,49c0,14 -0.040344,39.188553 3,53c2.244507,10.196198 4.467194,16.294006 11,19c7.391022,3.061462 19.096222,-0.671936 36,-18c13.965759,-14.31633 29.494934,-38.705429 46,-67c14.437408,-24.749985 31.602905,-58.19072 38,-71c6.596802,-13.209183 11.428223,-21.423347 16,-27c2.689758,-3.281013 7,-5 9,-7c1,-1 2,-1 2,-1c0,1 -6.466248,10.75634 -11,20c-6.707275,13.67524 -9.903625,23.017967 -12,34c-1.912231,10.017151 -2.800903,18.06456 -2,23c0.506531,3.121445 5.145142,6.067734 9,5c5.619385,-1.556473 11.796631,-13.093155 16,-22c2.862976,-6.066574 4.486267,-8.823746 5,-11c0.229736,-0.973251 0,-1 0,-1c1,0 2.026733,-0.770248 3,-1c2.17627,-0.513748 4,-1 6,-1c4,0 5,0 5,0c0,1 0,5 0,7c0,2 -0.707092,2.292892 0,3c0.707092,0.707108 2.186035,-0.692551 4,-2c4.58905,-3.307617 7.809021,-6.321442 11,-8c4.765991,-2.50705 7,-2 9,-2c3,0 6,0 9,0c2,0 4,0 4,0c1,0 -1,1 -2,2c-1,1 -1,1 -1,2c0,0 -0.707092,0.292892 0,1c0.707092,0.707108 2.186035,0.307449 4,-1c1.147278,-0.826904 2,-3 3,-4c0,0 1,0 1,0c0,2 0.69342,3.458801 2,4c1.847778,0.765366 5,0 9,-2c2,-1 5.076111,-2.61731 6,-3c1.30658,-0.541199 2,-1 2,-1c1,2 1.458801,2.693436 2,4c0.38269,0.923874 2.053528,1.459503 4,1c4.352478,-1.027481 6.186035,-2.692551 8,-4c1.147278,-0.826904 2,-1 2,-1c1,0 0.292908,0.292892 1,1c0.707092,0.707108 1,1 2,1c2,0 3,0 4,0c1,0 1.292908,0.292892 2,1c1.414185,1.414215 3,0 5,0c2,0 6.056641,-1.917526 9,-4c4.081726,-2.887863 7,-4 8,-5c1,-1 1,-1 1,0c0,1 1.544189,6.866936 3,14c1.612183,7.899414 2.945068,16.005646 4,26c0.950562,9.005356 1.506592,16.044006 3,30";
    
    var d=[];
    var extension = 10*(circleDiameter/180); // it's a little better than just 10
    d.push("c "+extension+",100 "+extension+",200 2,300"); // this is the line down to the circle

    d.push("a "+circleRadiusX+","+circleRadiusY+" 180 0,1 -"+circleDiameter+",-"+circleOffset);
    d.push("a "+circleRadiusX+","+circleRadiusY+" 180 0,1 "+circleDiameter+","+circleOffset);

    name.setAttribute("d", signature + d.join(" "));

    name.setAttribute("style","stroke-dasharray: " + name.getTotalLength() + ";stroke-dashoffset: " + name.getTotalLength());

    if( noAnimation ) name.setAttribute("style", name.getAttribute("style") + ";animation:none;stroke-dashoffset: 0");

    document.querySelector("svg").appendChild(name);
}

/**
 * Create the image section
 * @param {HTMLElement} img - The div for images if there is one.
 */
function createImage( img ) {
    var elementAlreadyExists = img ? true : false;
    if( !img ) {
        img = document.createElement("div");
        img.classList.add("images");
    }

    // Get the last point on the graph. This will help up know where to put the image.
    var lastPoint = document.querySelector("path").getPointAtLength(document.querySelector("path").getTotalLength());

    // calculate and set the necessary sizes and position for the image to be in the loop under the signature
    var svgWidth = document.querySelector("svg").clientWidth;
    var widthConverter = svgWidth/svgViewboxWidth;

    var svgHeight = document.querySelector("svg").clientHeight;
    var heightConverter = svgHeight/svgViewboxHeight;

    var lastPointAbsoluteX = widthConverter * lastPoint.x;
    var lastPointAbsoluteY = heightConverter * lastPoint.y;

    var diameter = circleDiameter * widthConverter;

    curSizePositionStyle = "width: " + diameter + "px;height: " + diameter + "px;left:" + (lastPointAbsoluteX - circleRadiusX*2*widthConverter) + "px;" + "top:" + (lastPointAbsoluteY - circleRadiusY*heightConverter -circleOffset/2*heightConverter) + "px";

    // Set the image style
    img.setAttribute("style", "background-image:url('./images/james"+currentImage+".jpg');" + curSizePositionStyle);

    // Don't fade in until the signature is done
    if( !elementAlreadyExists ) {
        document.querySelector("header").appendChild(img);
        setTimeout( function() {
            img.classList.add("rendered");
            img.onclick = clickNextImg;
        }, DRAW_TIME ); // make sure this matches the css for signature time
    }
    else {
        img.classList.add("rendered");
        document.querySelector("#resume").classList.add("rendered");
        document.querySelector("#icons").classList.add("rendered");
        img.onclick = clickNextImg;
    }

    clearInterval(imageInterval);

    setTimeout( function() {
        // update the image
        imageInterval = setInterval( nextImg, NEXT_IMAGE_INTERVAL_TIME );
    }, elementAlreadyExists ? 0 : DRAW_TIME );
}

/**
 * Occurs upon clicking the image to move to the next one.
 */
function clickNextImg() {
    this.onclick = function() { return null };
    clearInterval(imageInterval);
    nextImg();
}

/**
 * Play the next image.
 */
function nextImg() {
    var img = document.querySelector(".images");
    img.onclick = function() { return null };

    currentImage ++;
    if( currentImage > totalImages ) currentImage = 1;

    clearInterval(imageInterval);

    var preloader = document.createElement("img");
    preloader.src = './images/james'+currentImage+'.jpg';
    preloader.onload = function() {
        imageInterval = setInterval(nextImg, NEXT_IMAGE_INTERVAL_TIME);

        img.classList.add("hidden");
        var newImg = document.createElement("div");
        newImg.classList.add("images");
        newImg.classList.add("rendered");
        newImg.setAttribute("style", "animation-delay: 0s;background-image:url('./images/james"+currentImage+".jpg');" + curSizePositionStyle);
        document.querySelector("header").appendChild(newImg);

        setTimeout( function() {
            img.parentNode.removeChild(img);
            newImg.onclick = clickNextImg;
        }, IMAGE_FADE_TIME ); // make sure this matches the css for transition time
    }
}

/**
 * Create the Resume.
 */
function createResume() {
    var resume = document.createElement("div");
    resume.setAttribute("id", "resume");

    // create the category buttons
    var categories = document.createElement("ul");
    categories.setAttribute("id", "categories");
    resume.appendChild(categories);

    // create the info box
    var infoBox = document.createElement("div");
    infoBox.setAttribute("id", "info");
    resume.appendChild(infoBox);

    // Iterate through all the sections
    for( var i=0; i<SECTIONS.length; i++) {
        var section = SECTIONS[i];

        var id = section.name.toLowerCase().replace(/\s/,"");

        // create the category
        var category = document.createElement("li");
        category.setAttribute("id", id);
        category.innerText = section.name;
        categories.appendChild(category);

        category.onmouseover = function() {
            if( this.classList.contains("selected") ) return;
            setInfoMinHeight();
            
            for( var j=0; j<timeouts.length; j++ ) clearTimeout(timeouts[j]);
            timeouts = [];
            var otherElements = document.querySelectorAll("#categories li:not(#" + this.getAttribute("id") + ")");
            for( var j=0; j<otherElements.length; j++ ) {
                var otherElementsInfo = document.querySelector("#" + otherElements[j].getAttribute("id") + "-info");
                otherElementsInfo.classList.remove("visible");
                otherElements[j].classList.remove("selected");
                timeouts.push( setTimeout(function(oE) { return function() {
                    oE.classList.remove("block");
                } }(otherElementsInfo), TEXT_TRANSITION_TIME) );
            }
            var infoElement = document.querySelector("#" + this.getAttribute("id") + "-info");
            infoElement.classList.add("block");
            timeouts.push( setTimeout( function() {
                infoElement.classList.add("visible");
            }, 10 ) );
            this.classList.add("selected");

            if( window.innerWidth > MOBILE_BREAKPOINT ) {
                document.querySelector("#info").scrollTo({ top: 0, behavior: 'smooth' });
            }

            setTimeout( setInfoMinHeight, 100 );
        }

        // create the info section
        var infoSection = document.createElement("div");
        infoSection.setAttribute("id", id + "-info");
        for( var j=0; j<section.items.length; j++ ) {
            var item = section.items[j];
            
            var itemElement = document.createElement(item.link ? "a" : "div");
            if( item.link ) {
                itemElement.setAttribute("href", item.link);
                itemElement.setAttribute("target", "_blank");
                itemElement.setAttribute("rel", "noopener");
            }
            itemElement.classList.add("item");

            if( item.image ) {
                var itemImage = document.createElement("img");
                itemImage.src = item.image;
                itemImage.setAttribute("alt",item.name);
                itemElement.appendChild(itemImage);
            }

            var itemTitle = document.createElement("div");
            itemTitle.classList.add("item-title");
            itemTitle.innerText = item.name;
            itemElement.appendChild(itemTitle);

            for( var k=0; k<item.subtitles.length; k++ ) {
                var itemSubtitle = document.createElement("div");
                itemSubtitle.classList.add("item-subtitle");
                itemSubtitle.innerText = item.subtitles[k];
                itemElement.appendChild(itemSubtitle);
            }

            if( item.description ) {
                var itemDescription = document.createElement("div");
                itemDescription.classList.add("item-description");
                itemDescription.innerHTML = item.description;
                itemElement.appendChild(itemDescription);
            }

            infoSection.appendChild(itemElement);
        }
        infoBox.appendChild(infoSection);
        
    }

    document.querySelector("main").appendChild(resume);
    document.querySelector("#categories > li").onmouseover();

    setTimeout( function() {
        resume.classList.add("rendered");
        document.querySelector("#icons").classList.add("rendered");
        setBorderHeight();
    }, 2250 ); // make sure this matches the css for signature time +  a little extra to distinguish from image
}

/**
 * Try not to jump around the info when items get too short.
 * Set this to run when changing categories, or when scrolling UP.
 * @param {number} height - The height to use in this situation.
 */
function setInfoMinHeight() {
    var info = document.querySelector("#info");
    if( window.innerWidth <= MOBILE_BREAKPOINT ) {
        // innerheight prevents scroll when calling this function when switching categories
        var minHeight = window.innerHeight - info.getBoundingClientRect().top - 100; // same as css
        info.setAttribute("style","min-height:" + minHeight.toString() + "px");
        try {
            setBorderHeight();
        }
        catch(err) {

        }
    }
    else {
        info.removeAttribute("style");
    }
}
