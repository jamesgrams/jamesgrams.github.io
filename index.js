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
                "type": "subtitle",
                "name": "Highlights"
            },
            {
                "name": "Game 103",
                "link": "https://game103.net",
                "subtitles": ["https://game103.net"],
                "image": "./images/game103.png",
                "description": "A site that hosts family-friendly games, including over thirty-five that I've created, and entertainment. By far my largest project and ongoing since 2008."
            },
            {
                "name": "Making Do Recipes",
                "link": "https://makingdorecipes.com",
                "subtitles": ["https://makingdorecipes.com"],
                "image": "./images/makingdorecipes.png",
                "description": "A recipe sharing platform for people with restrictive allergies. Allows users to search for recipes by listing what ingredients they can or can not have."
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
            },
            {
                "type": "subtitle",
                "name": "All"
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
                "description": "\"Everything computers\" man for a small business. Worked on company website and developed several spinoff company sites. Developed internal project tracking software. Built various tools with Node.js to help with everything from creating displays of construction sites to finding optimal trade areas. Worked with employees on computer and phone problems. Managed Office365 for multiple tenants." 
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
                "name": "Mastered Computer Languages",
                "subtitles": [],
                "description": "HTML, CSS, JavaScript (Node.js), SQL"
            },
            {
                "name": "Known Computer Languages",
                "subtitles": [],
                "description": "HTML, CSS, JavaScript (jQuery, React), Java (Tomcat, Jersey), Perl, PHP, Python, Elasticsearch, ActionScript 2 & 3"
            },
            {
                "name": "Familiar Computer Languages",
                "subtitles": [],
                "description": "C++, C#, Angular (Ionic)"
            },
            {
                "name": "Networking",
                "subtitles": [],
                "description": "Understanding of the TCP/IP Model, Routing, Switches, DNS, DHCP, IPv6"
            },
            {
                "name": "Linux",
                "subtitles": [],
                "description": "Extensive use of Linux and Bash with a focus on Debian-based distributions"
            },
            {
                "name": "Office365",
                "subtitles": [],
                "description": "Experience setting up and managing Office365 tenants"
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
                "name": "Spending Time with My Wife, Son, and Daughter",
                "subtitles": [],
                "description": "My wife loves to go for runs, exercise, and play/compose music. My son loves to go for walks, play outside, crawl up stairs, have books read to him (especially books with pictures of children playing), play music instruments (especially maracas), be held by mom and dad, and play chase and peekaboo."
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

var timeouts = [];

window.addEventListener("load", function() {

    createResume();

    Promise.all([
        fetch("https://api.github.com/users/jamesgrams/repos").then( function(data) { return data.json() } ),
        fetch("https://api.github.com/orgs/game103/repos").then( function(data) { return data.json() } )
    ])
    .then( function(data) {
        data = data.flat();
        let items = [];
        for( let repo of data ) {
            if( repo.fork ) continue;
            items.push({
                "name": repo.name,
                "link": repo.html_url,
                "subtitles": [repo.html_url],
                "description": repo.description
            });
        }
        addItems( items, document.querySelector("#projects-info") );
    });

});

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

        category.onclick = function() {
            if( this.classList.contains("selected") ) return;
            
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

        }

        // create the info section
        var infoSection = document.createElement("div");
        infoSection.setAttribute("id", id + "-info");
        addItems( section.items, infoSection );
        infoBox.appendChild(infoSection);
        
    }

    document.querySelector("main").appendChild(resume);
    document.querySelector("#categories > li").onclick();

    setTimeout( function() {
        resume.classList.add("rendered");
        document.querySelector("#icons").classList.add("rendered");
    }, 0 ); // make sure this matches the css for signature time +  a little extra to distinguish from image
}

/**
 * Add items to an info section.
 * @param {Array<Object>} items - The items to add.
 * @param {HTMLElement} infoSection - The Info section.
 */
function addItems( items, infoSection ) {
    for( var j=0; j<items.length; j++ ) {
        var item = items[j];

        if( item.type === "subtitle" ) {
            var subtitleElement = document.createElement("h2");
            subtitleElement.innerText = item.name;
            infoSection.appendChild(subtitleElement);
            continue;
        }
        
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
}