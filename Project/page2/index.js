
// changing color of the website components

const colors = {
  text: "slate-100",
  back: "black",
  border: "slate-700",
  subtext: "slate-400",
  specialhead: "emerald-500",
  specialtext: "emerald-400",
  navhead: "slate-200",
  navlist: "slate-400",
  topicColor: "emerald-600",
  body: "#1A1F1D",
  windowhead: "slate-800",
  windowbg: "neutral-900",
  textareabg: "neutral-950",
  textareatext: "slate-100",
  input: "emerald-600",
  output: "emerald-400",
  pfimg: "https://i.pinimg.com/474x/dc/f2/4c/dcf24cd5a19f7184ff3fa6a34bc8e038.jpg",
  pfh3color: "emerald-300",
  pfh3: "Gaurav Kumar",
  query_name: "DML Command",
  iframe: "https://www.youtube.com/embed/_yog7h4BokQ?si=YiCNBO71H4hDsgUE",
  query_desc: "Used to manipulate data within existing database objects like inserting, updating, or deleting records.",
  query_introduction:
    "DML (Data Manipulation Language) commands in SQL are used to handle data stored in tables. These commands allow you to insert new records, update existing ones, and delete data from database tables without altering the structure.",
  cardcolor: "neutral-800"
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
section1.setAttribute("class", `bg-${colors.back} sm:h-[90%] h-[30vh]  sm:w-[70%] w-[100%] rounded-xl flex flex-col justify-center items-center gap-3 `)

// {section 1 } query

const query = document.querySelector(".query")
query.setAttribute("class",`w-[90%] sm:h-[25%] h-[0%] text-center flex items-center justify-center  hidden sm:flex text-${colors.pfh3color} rounded-xl text-6xl font-semibold`)
query.textContent = colors.query_name
const iframe=document.querySelector(".Iframe")
iframe.setAttribute("src",`${colors.iframe}`)
// {setting Section2 dont change this i you want to change the color }

const section2 = document.querySelector(".section2")
section2.setAttribute("class", `bg-${colors.back} text-${colors.text} sm:h-[90%] sm:block hidden   h-[30vh] w-[100%]   p-6 rounded-xl`)


// {Indroduction of section 2 dont change }

const Introduction = document.querySelector(".Introduction")
Introduction.setAttribute("class",`Introduction  text-3xl font-semibold text-${colors.text}`)
// {Paragragh of section 2 dont change }

const para = document.querySelector(".para")
para.setAttribute("class",`para border-2  border-${colors.border} text-${colors.subtext} rounded-md p-4`)
para.textContent=colors.query_introduction


// { Main 2 part  heading } 
const main2=document.querySelector(".main2")
const main2h = document.querySelector(".main2 h1")
main2h.setAttribute("class", `text-${colors.specialhead} text-5xl font-bold`)
main2h.textContent=colors.query_name

// Note: Main 2 part  paragraph
const main2p = document.querySelector(".main2 p")
main2p.setAttribute("class", `text-xl sm:w-[80%] w-[90%] text-${colors.subtext}`)
main2p.textContent=colors.query_desc

// IDea: Body Element is changing
const body = document.querySelector("body")
body.style.backgroundColor=colors.body






// Hack: Adding Cards
const home = document.querySelector(".Cards")


const commands = [
  // ... existing DDL commands

  // DML COMMANDS
  {
    name: "Insert Into",
    desc: "Adds new records into a table.",
    code: `INSERT INTO users (name, age) VALUES ('Alice', 25);`,
    output: `Query OK, 1 row affected`,
    subhead: "Adding Data",
    main: "INSERT INTO Command",
    title: "Inserting Records",
    list: [
      "Adds one or more new rows to a table.",
      "Column order must match values.",
      "Supports inserting multiple rows at once.",
      "Common for new user or transaction entries."
    ],
    mainColor: "emerald-400",
    subColor: "gray-400",
    titleColor: "emerald-300",
    listColor: "gray-300",
    bgColor: "gray-900",
    meta: {
      type: colors.query_name,
      description: colors.query_desc,
      intro: colors.query_introduction
    }
  },
  {
    name: "Update",
    desc: "Modifies existing records in a table.",
    code: `UPDATE users SET age = 26 WHERE name = 'Alice';`,
    output: `Query OK, 1 row affected`,
    subhead: "Modifying Data",
    main: "UPDATE Command",
    title: "Updating Records",
    list: [
      "Changes data in one or more rows.",
      "Requires WHERE clause to target rows.",
      "Can update multiple columns at once.",
      "Used to correct or change stored values."
    ],
    mainColor: "emerald-400",
    subColor: "gray-400",
    titleColor: "emerald-300",
    listColor: "gray-300",
    bgColor: "gray-900",
    meta: {
      type: colors.query_name,
      description: colors.query_desc,
      intro: colors.query_introduction
    }
  },
  {
    name: "Delete",
    desc: "Removes specific records from a table.",
    code: `DELETE FROM users WHERE name = 'Alice';`,
    output: `Query OK, 1 row affected`,
    subhead: "Removing Data",
    main: "DELETE Command",
    title: "Deleting Records",
    list: [
      "Removes rows based on a condition.",
      "Requires WHERE clause to prevent full deletion.",
      "Does not delete table structure.",
      "Often used for cleanup or correction."
    ],
    mainColor: "emerald-400",
    subColor: "gray-400",
    titleColor: "emerald-300",
    listColor: "gray-300",
    bgColor: "gray-900",
    meta: {
      type: colors.query_name,
      description: colors.query_desc,
      intro: colors.query_introduction
    }
  }
];






commands.forEach((value) => {
    const container = document.createElement("div")
    container.setAttribute("class", `container flex-col flex items-center rounded-md justify-center   sm:w-[100%] p-3 text-${colors.text}   gap-4 w-[100%] h-[100%]`)
    home.appendChild(container)
    container.innerHTML = `
    <div class="cont  p-6  rounded-2xl shadow-xl bg-${colors.back} w-full mx-auto">
    <!-- Heading -->
    <h1 class="cont-head my-2 text-3xl font-bold text-${value.mainColor} mb-2">${value.main}</h1>

    <!-- Subheading -->
    <h2 class="cont-subhead text-xl font-light text-${value.subColor} mb-1">${value.subhead}</h2>

    <!-- Title -->
    <h3 class="cont-title text-lg text-${value.titleColor} fonr-sans mb-4">${value.title}</h3>

    <!-- List -->
    <ul class="cont-list list-disc text-lg list-inside space-y-1 text-${value.listColor}">
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
    <div class="w-full h-full  rounded-md flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg}  object-cover  ">   
    <h1 class="px-3 p-1 text-${colors.output}">Output</h1>
    <div class="h-48  w-full flex justify-center items-center  bg-black">
    <textarea  class="bg-${colors.textareabg} text-${colors.textareatext}  w-full flex-col flex justify-center items-center  overflow-auto  h-full focus:outline-none px-4 h-[100%] max-h-full py-4" >
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
    h1: "DDL Commands",
    links: [
      {
        name: "CREATE TABLE",
        href: "#create-table-command-schema-definition"
      },
      {
        name: "DROP TABLE",
        href: "#drop-table-command-deleting-structure"
      },
      {
        name: "ALTER TABLE",
        href: "#alter-table-command-modifying-schema"
      },
      {
        name: "TRUNCATE TABLE",
        href: "#truncate-table-command-resetting-data"
      },
      {
        name: "RENAME TABLE",
        href: "#rename-table-command-renaming-schema-object"
      },
      {
        name: "CREATE INDEX",
        href: "#create-index-command-performance-optimization"
      },
      {
        name: "DROP INDEX",
        href: "#drop-index-command-removing-optimization"
      }
    ]
  }
  ,
  {
    h1: "DML Commands",
    links: [
      {
        name: "INSERT INTO",
        href: "#insert-into-command-adding-data"
      },
      {
        name: "UPDATE",
        href: "#update-command-modifying-data"
      },
      {
        name: "DELETE",
        href: "#delete-command-removing-data"
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
    `sm:py-2 text-${colors.specialhead} sm:text-2xl px-7 text-lg font-sans`
  );

  // Create list container
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    `list-outside px-9 text-left list-disc pr-4 text-${colors.navlist} gap-2 flex-col  text-sm font-light sm:flex hidden py-2  h-[90%] `
  );

  // Create and append list items
  val.links.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute("class"," w-[100%]")
    const link = document.createElement("a");
    link.textContent = item.name;
    link.setAttribute("href", item.href);
    link.setAttribute("class","text-center")
    link.setAttribute("target", "_blank");
    // to insert a tag in li 
    li.appendChild(link);
     // to insert a li in ul 
    ul.appendChild(li);
  });

  // Append to nav-list container
  navlist.appendChild(heading);
  navlist.appendChild(ul);
});
