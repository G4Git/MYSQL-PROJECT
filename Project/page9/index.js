
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
  
  
  query_name: "SQL OPERATORS",
  query_desc: "SQL operators are used to specify conditions or modify the behavior of SQL commands. They help filter, combine, and manipulate the result sets in SQL queries. Common operators include AND, OR, NOT, BETWEEN, IN, LIKE, and IS NULL.",
  query_introduction: "SQL operators are used to refine the conditions of SQL queries. They allow you to combine multiple conditions, negate conditions, check for ranges, match patterns, and handle NULL values. Some of the most common operators are AND, OR, NOT, BETWEEN, IN, LIKE, and IS NULL."
  
  
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
    name: "AND Operator",
    desc: "The AND operator is used to combine multiple conditions in the WHERE clause. It returns true if all conditions are true.",
    code: `
SELECT * FROM employees
WHERE age > 30 AND department = 'Sales';
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 1  | John| 35         | Sales   |
| 2  | Jane| 40         | Sales   |
+----+-----+------------+---------+`,
    subhead: "Combining Conditions",
    main: "AND",
    title: "Ensuring Multiple Conditions are True",
    example: "WHERE age > 30 AND department = 'Sales'",
    list: [
      "Combines multiple conditions in the WHERE clause.",
      "Returns records only if all conditions are true.",
      "Can be combined with other logical operators."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "OR Operator",
    desc: "The OR operator is used to combine multiple conditions in the WHERE clause. It returns true if at least one of the conditions is true.",
    code: `
SELECT * FROM employees
WHERE department = 'Sales' OR department = 'Marketing';
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 1  | John| 30         | Sales   |
| 2  | Amy | 28         | Marketing|
| 3  | Bob | 35         | Sales   |
+----+-----+------------+---------+`,
    subhead: "Combining Conditions with OR",
    main: "OR",
    title: "True if Any Condition is Met",
    example: "WHERE department = 'Sales' OR department = 'Marketing'",
    list: [
      "Combines multiple conditions in the WHERE clause.",
      "Returns records if at least one condition is true.",
      "Can be used with AND and NOT for more complex conditions."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "NOT Operator",
    desc: "The NOT operator negates a condition. It is used to return records where the condition is not true.",
    code: `
SELECT * FROM employees
WHERE NOT department = 'Sales';
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 2  | Jane| 40         | HR      |
| 3  | Bob | 35         | Marketing|
+----+-----+------------+---------+`,
    subhead: "Negating Conditions",
    main: "NOT",
    title: "Excluding Certain Conditions",
    example: "WHERE NOT department = 'Sales'",
    list: [
      "Negates a condition in the WHERE clause.",
      "Returns records where the condition is false.",
      "Can be combined with AND or OR."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "BETWEEN Operator",
    desc: "The BETWEEN operator is used to filter records within a specified range. It can be used with numeric, date, and text values.",
    code: `
SELECT * FROM employees
WHERE age BETWEEN 25 AND 40;
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 1  | John| 35         | Sales   |
| 2  | Amy | 28         | Marketing|
+----+-----+------------+---------+`,
    subhead: "Range Filtering",
    main: "BETWEEN",
    title: "Filtering Records Within a Range",
    example: "WHERE age BETWEEN 25 AND 40",
    list: [
      "Filters records where values are within a specified range.",
      "Can be used with numeric, date, or text columns.",
      "Inclusive of both range values."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "IN Operator",
    desc: "The IN operator is used to filter records where the column's value is within a list of specified values.",
    code: `
SELECT * FROM employees
WHERE department IN ('Sales', 'Marketing');
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 1  | John| 30         | Sales   |
| 2  | Amy | 28         | Marketing|
+----+-----+------------+---------+`,
    subhead: "Checking for Multiple Values",
    main: "IN",
    title: "Matching Records Against a List of Values",
    example: "WHERE department IN ('Sales', 'Marketing')",
    list: [
      "Filters records where the value matches any value in the list.",
      "Can be used with both numeric and text columns.",
      "Often used with WHERE clause."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "LIKE Operator",
    desc: "The LIKE operator is used to filter records based on pattern matching. It is often used with wildcards like % and _.",
    code: `
SELECT * FROM employees
WHERE name LIKE 'J%';
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 1  | John| 30         | Sales   |
| 2  | Jane| 35         | Marketing|
+----+-----+------------+---------+`,
    subhead: "Pattern Matching",
    main: "LIKE",
    title: "Matching Patterns in Text Data",
    example: "WHERE name LIKE 'J%'",
    list: [
      "Filters records based on pattern matching.",
      "The % wildcard matches any number of characters.",
      "_ matches a single character.",
      "Used for partial string matches."
    ],
    mainColor: "blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "IS NULL Operator",
    desc: "The IS NULL operator is used to check if a column contains NULL values.",
    code: `
SELECT * FROM employees
WHERE department IS NULL;
`,
    output: `
+----+-----+------------+---------+
| ID | Name| Age        | Dept    |
+----+-----+------------+---------+
| 3  | Bob | 35         | NULL    |
+----+-----+------------+---------+`,
    subhead: "Handling NULL Values",
    main: "IS NULL",
    title: "Checking for NULL Values in Columns",
    example: "WHERE department IS NULL",
    list: [
      "Used to check for NULL values in a column.",
      "NULL is a special marker indicating missing or undefined data.",
      "Commonly used in WHERE clauses to filter out or find NULL values."
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
  <div class="w-full  h-full rounded-md  flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg} ">
  <h1 class="px-3 p-1 text-${colors.input}">Input</h1>
  <code class="bg-${colors.textareabg} whitespace-pre  w-[100%] overflow-x-auto  p-4 bg-${colors.textareabg}  text-${colors.textareatext}" >
  ${value.code}
  </code>
  </div>
<!-- Output Window -->
  <div class="w-full  h-full  rounded-md flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg}  object-cover  ">   
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
