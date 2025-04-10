
// changing color of the website components

const colors = {
  text: "black",
  back: "neutral-300",
  border: "gray-700",
  subtext: "gray-700",
  specialhead: "blue-500",
  specialtext: "black",
  navhead: "black",
  navlist: "gray-700",
  topicColor: "blue-500",
  body: "#1000", // keeping this main
  windowhead: "",
  windowbg: "blue-500",
  textareabg: "white",
  textareatext: "black",
  input: "gray-700",
  output: "gray-700",
  pfimg: "https://i.pinimg.com/474x/dc/f2/4c/dcf24cd5a19f7184ff3fa6a34bc8e038.jpg",
  pfh3color: "gray-700",
  pfh3: "Gobind Singh",

  // Updated for DQL
  

  cardcolor: "neutral-200",
  iframe: "https://www.youtube.com/embed/_yog7h4BokQ?si=YiCNBO71H4hDsgUE",
  
  
query_name: "Aggregate Functions",
query_desc: "Aggregate functions are used to perform calculations on a set of values and return a single result. They help summarize or aggregate data. Common aggregate functions include COUNT, SUM, AVG, MIN, and MAX.",
query_introduction: "Aggregate functions are used to perform calculations on multiple rows of data and return a single value. They allow you to summarize data or calculate statistical values such as averages, totals, minimums, and maximums. Some of the most common aggregate functions are COUNT, SUM, AVG, MIN, and MAX."

  
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
main2p.setAttribute("class", `text-xl sm:w-[90%] w-[90%] text-${colors.subtext}`)
main2p.textContent=colors.query_desc

// IDea: Body Element is changing
const body = document.querySelector("body")
body.style.backgroundColor=colors.body






// Hack: Adding Cards
const home = document.querySelector(".Cards")


// DQL COMMANDS
const commands = [
  {
    name: "COUNT",
    desc: "The COUNT function is used to count the number of rows that match a specified condition. It can count all rows or rows that meet a specific criterion.",
    code: `
SELECT COUNT(*) FROM employees;

`,
    output: `
+-------+
| COUNT |
+-------+
|   100 |
+-------+`,
    subhead: "Counting Rows",
    main: "COUNT",
    title: "Counting the Number of Rows",
    example: "COUNT(*), COUNT(department)",
    list: [
      "Counts all rows in a table when no condition is specified.",
      "Can be used with WHERE to count rows that meet a specific condition.",
      "Useful for finding the total number of records in a table or meeting a condition."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SUM",
    desc: "The SUM function adds up the values in a column, typically used with numerical data. It is commonly used to calculate totals.",
    code: `
SELECT SUM(salary) FROM employees;

`,
    output: `
+------------+
| SUM(salary)|
+------------+
|      50000 |
+------------+`,
    subhead: "Summing Numeric Values",
    main: "SUM",
    title: "Calculating Total Values",
    example: "SUM(salary), SUM(price)",
    list: [
      "Adds up all the values in a specified column.",
      "Can be used with WHERE to sum values based on a condition.",
      "Helpful for calculating totals such as salaries, revenue, or costs."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "AVG",
    desc: "The AVG function calculates the average (mean) value of a numeric column.",
    code: `
SELECT AVG(salary) FROM employees;

`,
    output: `
+-------------+
| AVG(salary) |
+-------------+
|      4500   |
+-------------+`,
    subhead: "Calculating Averages",
    main: "AVG",
    title: "Finding the Average Value",
    example: "AVG(salary), AVG(price)",
    list: [
      "Calculates the mean of values in a numeric column.",
      "Can be used with WHERE to calculate averages based on a condition.",
      "Useful for determining averages like salaries, prices, and quantities."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "MIN",
    desc: "The MIN function returns the smallest value in a specified column.",
    code: `
SELECT MIN(salary) FROM employees;

`,
    output: `
+-------------+
| MIN(salary) |
+-------------+
|      2500   |
+-------------+`,
    subhead: "Finding the Minimum Value",
    main: "MIN",
    title: "Getting the Smallest Value",
    example: "MIN(salary), MIN(price)",
    list: [
      "Finds the minimum (smallest) value in a numeric column.",
      "Can be used with WHERE to find the smallest value based on a condition.",
      "Useful for determining the least value, like the lowest salary or price."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "MAX",
    desc: "The MAX function returns the largest value in a specified column.",
    code: `
SELECT MAX(salary) FROM employees;

`,
    output: `
+-------------+
| MAX(salary) |
+-------------+
|     12000   |
+-------------+`,
    subhead: "Finding the Maximum Value",
    main: "MAX",
    title: "Getting the Largest Value",
    example: "MAX(salary), MAX(price)",
    list: [
      "Finds the maximum (largest) value in a numeric column.",
      "Can be used with WHERE to find the largest value based on a condition.",
      "Useful for determining the highest value, such as the top salary or maximum price."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  }
];















commands.forEach((value,index) => {
    const container = document.createElement("div")
  container.setAttribute("class", `container flex-col bg-${colors.cardcolor} flex items-center rounded-md justify-center   sm:w-[100%] p-3 text-${colors.text}   gap-4 w-[100%] h-[100%]`)
  container.setAttribute("id",`container${index + 1}`)
    home.appendChild(container)
    container.innerHTML = `
    <div class="cont  p-6  rounded-2xl  w-full mx-auto">
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

  <!-- Example -->
  <div class="cont-example p-2 rounded-2xl flex justify-start gap-4 items-center w-full  my-4">
  <h1 class="text-2xl font-bold font-sans  text-${colors.specialhead}">Example - </h1>
  <h1 class="text-${colors.subtext} text-xl  font-sans "> ${value.example}</h1>
  </div>
  
 <!-- Input Window -->
    <div class="w-full h-full rounded-md  flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg} ">
    <h1 class="px-3 p-1 text-${colors.input}">Input</h1>
    <code class="bg-${colors.textareabg} whitespace-pre  w-[100%] overflow-x-auto  p-4 bg-${colors.textareabg}  text-${colors.textareatext}" >
    ${value.code}
    </code>
    </div>
  <!-- Output Window -->
    <div class="w-full h-full  rounded-md flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg}  object-cover  ">   
    <h1 class="px-3 p-1 text-${colors.output}">Output</h1>
    <div class="h-48  w-full flex justify-center items-center  bg-black">
    <textarea  
  class="bg-${colors.textareabg} 
         text-${colors.textareatext} 
         w-full 
         h-full 
         max-h-full 
         px-4 
         py-4 
         font-mono 
         whitespace-pre 
         resize-none 
         overflow-auto 
         focus:outline-none">
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
      { name: "CREATE TABLE", href: "#drop-table-command-deleting-structure" },
      { name: "DROP TABLE", href: "#drop-table-command-deleting-structure" },
      { name: "ALTER TABLE", href: "#alter-table-command-modifying-schema" },
      { name: "TRUNCATE TABLE", href: "#truncate-table-command-resetting-data" },
      { name: "RENAME TABLE", href: "#rename-table-command-renaming-schema-object" },
      { name: "CREATE INDEX", href: "#create-index-command-performance-optimization" },
      { name: "DROP INDEX", href: "#drop-index-command-removing-optimization" },
      { name: "CREATE VIEW", href: "#create-view-command-virtual-tables" },
      { name: "DROP VIEW", href: "#drop-view-command-remove-views" }
    ]
  },
  {
    h1: "DML Commands",
    links: [
      { name: "INSERT INTO", href: "#insert-into-command-adding-data" },
      { name: "INSERT INTO SELECT", href: "#insert-into-select-command-copying-data" },
      { name: "UPDATE", href: "#update-command-modifying-data" },
      { name: "DELETE", href: "#delete-command-removing-data" },
      { name: "MERGE", href: "#merge-command-upsert-data" }
    ]
  },
  {
    h1: "DCL Commands",
    links: [
      { name: "GRANT", href: "#grant-command-user-privileges" },
      { name: "REVOKE", href: "#revoke-command-remove-privileges" }
    ]
  },
  {
    h1: "TCL Commands",
    links: [
      { name: "COMMIT", href: "#commit-command-save-transactions" },
      { name: "ROLLBACK", href: "#rollback-command-undo-transactions" },
      { name: "SAVEPOINT", href: "#savepoint-command-set-transaction-point" },
      { name: "SET TRANSACTION", href: "#set-transaction-command-set-isolation-level" }
    ]
  },
  {
    h1: "DQL Commands",
    links: [
      { name: "SELECT", href: "#select-command-data-retrieval" },
      { name: "SELECT DISTINCT", href: "#select-distinct-command-unique-records" },
      { name: "SELECT WHERE", href: "#select-where-command-conditional-retrieval" },
      { name: "SELECT ORDER BY", href: "#select-order-by-command-sorting-results" },
      { name: "SELECT GROUP BY", href: "#select-group-by-command-grouping-results" },
      { name: "SELECT HAVING", href: "#select-having-command-filtering-groups" },
      { name: "SELECT JOIN", href: "#select-join-command-combining-tables" }
    ]
  },
  {
    h1: "PL/SQL",
    links: [
      { name: "DECLARE Section", href: "#trigger-command-automated-execution" },
      { name:  "BEGIN-END Block", href: "#cursor-explicit-command-row-by-row-processing" },
      { name:   "IF-THEN-ELSE", href: "#cursor-implicit-command-automatic-processing" }, // No match in commands array
      { name: "Basic LOOP", href: "#exception-handling-command-error-management" },
      { name:  "EXCEPTION Block", href: "#procedure-command-reusable-block" },
      { name: "PROCEDURE Definition", href: "#function-command-return-result" },
      { name: "BEFORE/AFTER TRIGGER", href: "#package-command-grouping-code" } ,
      { name: "CURSOR Loop", href: "#package-command-grouping-code" }, 
      
      //  No match in commands array
    ]
  }
  ,
  {
    h1: "Constraints",
    links: [
      { name: "PRIMARY KEY", href: "#primary-key" },
      { name: "NOT NULL", href: "#not-null" },
      { name: "UNIQUE", href: "#unique" },
      { name: "CHECK", href: "#check" },
      { name: "DEFAULT", href: "#default" },
      { name: "FOREIGN KEY", href: "#foreign-key" }
    ]
  },
  {
    h1: "Clauses",
    links: [
      { name: "WHERE", href: "#where-clause-filtering-records" },
      { name: "GROUP BY", href: "#group-by-clause-grouping-records" },
      { name: "HAVING", href: "#having-clause-filtering-groups" },
      { name: "ORDER BY", href: "#order-by-clause-sorting-results" },
      { name: "JOIN", href: "#order-by-clause-sorting-results" },
    ]
  },
  {
    h1: "Operators",
    links: [
      { name: "AND", href: "#and-operator-logical-combination" },
      { name: "OR", href: "#or-operator-logical-alternative" },
      { name: "NOT", href: "#not-operator-negation" },
      { name: "BETWEEN", href: "#between-operator-range-filtering" },
      { name: "IN", href: "#in-operator-matching-multiple-values" },
      { name: "LIKE", href: "#like-operator-pattern-matching" },
      { name: "IS NULL", href: "#is-null-operator-checking-null" },
    ]
  },
  {
    h1: "Aggregate Functions",
    links: [
      { name: "COUNT", href: `.Cards .container1`},
      { name: "SUM", href: `.container2` },
      { name: "AVG", href: `.container3` },
      { name: "MIN", href: "#min-function-find-smallest-value" },
      { name: "MAX", href: "#max-function-find-largest-value" }
    ]
  },
  
  
  
];

navelemts.forEach((val,index) => {
  // Create heading
  const heading = document.createElement("a");
  heading.textContent = val.h1;
  heading.setAttribute(
    "class",
    `sm:py-2 text-${colors.specialhead} sm:text-2xl px-7 text-lg font-sans`
  )
  const lo =`/Project/page${index + 1}/index.html`
    
    heading.setAttribute("href",`${lo}` )
    ;

  // Create list container
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    `list-outside px-9 text-left list-disc pr-4 text-${colors.navlist} gap-2 flex-col  text-sm font-light sm:flex hidden py-2  h-[90%] `
  );

  // Create and append list items
  val.links.forEach((item,index) => {
    const li = document.createElement("li");
    li.setAttribute("class"," w-[100%]")
    const link = document.createElement("a");
    link.textContent = item.name;
    link.setAttribute("href",`${lo}#container${index+1}`)
    link.setAttribute("class","text-center")
    link.setAttribute("target", "_self");
    // to insert a tag in li 
    li.appendChild(link);
     // to insert a li in ul 
    ul.appendChild(li);
  });

  // Append to nav-list container
  navlist.appendChild(heading);
  navlist.appendChild(ul);
});
