
// changing color of the website components

const colors = {
    
        text: "gray-100",               // Primary text - bright on dark
        back: "black",                  // Deep dark background
        border: "gray-700",            // Dark but visible border
        subtext: "gray-500",           // Dimmer secondary text
        specialhead: "violet-500",     // Deep, glowing purple for headers
        specialtext: "violet-400",     // Slightly lighter special text
        navhead: "gray-200",           // Slightly brighter nav titles
        navlist: "gray-500",           // Dim nav list items
        topicColor: "violet-600",      // Strong highlight color
        body: "neutral-900",           // Dark body for contrast with cards
        windowhead: "neutral-800",     // Card header
        windowbg: "neutral-900",       // Card background
        textareabg: "gray-900",        // Text area background
        textareatext: "gray-100",      // Text in text area
        input: "violet-600",           // Input border/focus
        output: "violet-400",          // Output text color
        pfimg: "https://i.pinimg.com/474x/fd/17/e6/fd17e6aa8f2d5853c9193a6f698b6099.jpg", // Profile image
        pfh3color: "violet-400",       // Profile name color
    pfh3: "Gaurav Kumar",
    body:"#212121"
    // Profile name
      };
      


// { Setting Navbar in desktop }

const nav = document.querySelector(".nav")
const navh1 = document.querySelector(".nav h1")
const navh2 = document.querySelector(".nav h2")
const ul = document.querySelector(".ul")
navh1.setAttribute("class", `sm:p-8 text-${colors.navhead} sm:text-2xl p-4 text-2xl font-bold`)  

nav.setAttribute("class",`bg-${colors.back} justify-between flex-col flex `)


//  { setting profile  change the pfimg in the color object }

const profile = document.querySelector(".profile")
profile.setAttribute("class", `profile  flex gap-4 justify-center items-center h-[10%] w-full bottom-0 
`)
const pfimg = document.querySelector(".profile img")
pfimg.setAttribute("src", `${colors.pfimg}`)
const pfh3 = document.querySelector(".profile h3")
pfh3.setAttribute("class", `text-${colors.pfh3color} text-lg font-light`)
pfh3.textContent=colors.pfh3


// { setting Section1 dont change this i you want to change the color }

const section1 = document.querySelector(".section1")
section1.setAttribute("class", `bg-${colors.back} sm:h-[90%] h-[30vh]  sm:w-[50%] w-[100%] rounded-xl`)


// {setting Section2 dont change this i you want to change the color }

const section2 = document.querySelector(".section2")
section2.setAttribute("class", `bg-${colors.back} text-${colors.text} sm:h-[90%] sm:block hidden   h-[30vh] w-[100%]   p-6 rounded-xl`)


// {Indroduction of section 2 dont change }

const Introduction = document.querySelector(".Introduction")
Introduction.setAttribute("class",`Introduction  text-3xl font-semibold text-${colors.text}`)

// {Paragragh of section 2 dont change }

const para = document.querySelector(".para")
para.setAttribute("class",`para border-2  border-${colors.border} text-${colors.subtext} rounded-md p-4`)



// { Main 2 part  heading } 
const main2h = document.querySelector(".main2 h1")
main2h.setAttribute("class", `text-${colors.specialhead} text-5xl font-bold`)

// Note: Main 2 part  paragraph
const main2p = document.querySelector(".main2 p")
main2p.setAttribute("class", `text-xl sm:w-[80%] w-[90%] text-${colors.subtext}`)



// IDea: Body Element is changing
const body = document.querySelector("body")
body.style.backgroundColor=colors.body






// Hack: Adding Cards
const home = document.querySelector(".Cards")


const commands = [
    {
      name: "Select",
      desc: "The SELECT statement is used to fetch data from a database table.",
      code: "SELECT * FROM users WHERE age > 18;",
      output: `
  id   name   age
  1    John   25
  2    Doe    30
  `,
      subhead: "Basic Data Query",
      main: "SELECT Command",
      title: "Querying with Conditions",
      list: [
        "Used to retrieve records from a table.",
        "Supports filtering using WHERE clause.",
        "Returns selected rows and columns.",
        "Can be combined with ORDER BY and LIMIT."
      ],
      mainColor: "purple-400",
      subColor: "gray-400",
      titleColor: "purple-300",
      listColor: "gray-300"
    },
    {
      name: "Insert",
      desc: "The INSERT statement is used to add new rows to a table.",
      code: `INSERT INTO users (name, age) VALUES ('Alice', 22);`,
      output: `
  Query OK, 1 row affected
  
  id   name   age
  1    John   25
  2    Doe    30
  3    Alice  22
  `,
      subhead: "Adding Data",
      main: "INSERT Command",
      title: "Inserting a New Record",
      list: [
        "Adds new data to specified columns.",
        "VALUES must match column types and order.",
        "Can insert multiple rows with one command.",
        "Used in data population and migration."
      ],
      mainColor: "purple-400",
      subColor: "gray-400",
      titleColor: "purple-300",
      listColor: "gray-300"
    }
  ];
  



commands.forEach((value) => {
    const container = document.createElement("div")
    container.setAttribute("class", `container flex-col flex items-center rounded-md justify-center  bg-${colors.back} sm:w-[100%] p-3 text-${colors.text}  gap-8 w-[100%] h-[100%]`)
    home.appendChild(container)
    container.innerHTML = `
    <div class="cont  p-6 rounded-2xl shadow-lg w-full mx-auto">
    <!-- Heading -->
    <h1 class="cont-head text-3xl font-bold text-${value.mainColor} mb-2">${value.main}</h1>

    <!-- Subheading -->
    <h2 class="cont-subhead text-xl text-${value.subColor} mb-1">${value.subhead}</h2>

    <!-- Title -->
    <h3 class="cont-title text-lg text-${value.titleColor} font-semibold mb-4">${value.title}</h3>

    <!-- List -->
    <ul class="cont-list list-disc list-inside space-y-1 text-${value.listColor}">
      ${value.list.map((val) => {
        return `
          <li>${val}</li>
        `
      }).join("")}
    </ul>
  </div>    

      
  
 <!-- Input Window -->
    <div class="w-full h-full rounded-md  flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg} ">
    <h1 class="px-3 p-1 text-${colors.input}">Input</h1>
    <code class="bg-${colors.textareabg} w-[100%] overflow-x-auto  p-4 bg-${colors.textareabg}  text-${colors.textareatext}" >
    ${value.code}
    </code>
    </div>
  <!-- Output Window -->
    <div class="w-full h-full rounded-md flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg}  object-cover  ">   
    <h1 class="px-3 p-1 text-${colors.output}">Output</h1>
    <div class="h-32 w-full flex justify-center items-center  bg-black">
    <textarea  class="bg-${colors.textareabg} text-${colors.textareatext}  w-full flex-col flex justify-center items-center   overflow-auto  h-full focus:outline-none px-4" >
    ${value.output}   
    </textarea>
  </div>
    </div>
    `
})



// Hack: Adding links in the List

const navlist = document.querySelector(".nav-list");

const navelemts = [
  {
    h1: "Select",
    links: [
      {
        name: "Basic SELECT",
        href: "https://www.youtube.com/watch?v=1"
      },
      {
        name: "SELECT with WHERE",
        href: "https://www.youtube.com/watch?v=2"
      }
    ]
  },
  {
    h1: "Insert",
    links: [
      {
        name: "Basic INSERT",
        href: "https://www.youtube.com/watch?v=3"
      },
      {
        name: "INSERT Multiple Rows",
        href: "https://www.youtube.com/watch?v=4"
      }
    ]
    },
    {
        h1: "Select",
        links: [
          {
            name: "Basic SELECT",
            href: "https://www.youtube.com/watch?v=1"
          },
          {
            name: "SELECT with WHERE",
            href: "https://www.youtube.com/watch?v=2"
          }
        ]
      },
      {
        h1: "Insert",
        links: [
          {
            name: "Basic INSERT",
            href: "https://www.youtube.com/watch?v=3"
          },
          {
            name: "INSERT Multiple Rows",
            href: "https://www.youtube.com/watch?v=4"
          }
        ]
    },
    {
        h1: "Select",
        links: [
          {
            name: "Basic SELECT",
            href: "https://www.youtube.com/watch?v=1"
          },
          {
            name: "SELECT with WHERE",
            href: "https://www.youtube.com/watch?v=2"
          }
        ]
      },
      {
        h1: "Insert",
        links: [
          {
            name: "Basic INSERT",
            href: "https://www.youtube.com/watch?v=3"
          },
          {
            name: "INSERT Multiple Rows",
            href: "https://www.youtube.com/watch?v=4"
          }
        ]
      }
];

navelemts.forEach((val) => {
  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = val.h1;
  heading.setAttribute(
    "class",
    `sm:py-2 text-${colors.specialhead} sm:text-2xl px-10 text-lg font-sans`
  );

  // Create list container
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    `list-inside list-disc text-${colors.navlist} gap-2 flex-col px-10 text-lg font-sans sm:flex hidden py-2  h-[90%]`
  );

  // Create and append list items
  val.links.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = item.name;
    link.setAttribute("href", item.href);
    link.setAttribute("target", "_blank");

    li.appendChild(link);
    ul.appendChild(li);
  });

  // Append to nav-list container
  navlist.appendChild(heading);
  navlist.appendChild(ul);
});
