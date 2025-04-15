// loader

const loader = document.querySelector('.loader')
const loaderfill=document.querySelector(".loader-fill")
let  i=0


gsap.to(loaderfill, {
    width: "100%",
    duration: 3, 
    ease: "power4.out", 
    onComplete: () => {
      gsap.to(loader, {
          opacity: 0,
        overflow:"hidden",
        duration: 0.5,
        ease: "expo.inOut",
        onComplete: () => {
          loader.classList.add("hidden");
        }
      });
    }
  });



// {changing color of the website components}
const colors = {
  
  textareabg: "white",
  textareatext: "black",
 
  
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

nav.setAttribute("class",` justify-between flex-col flex `)




// { Main 2 part  heading } 
const main2=document.querySelector(".main2")
const main2h = document.querySelector(".main2 h1")
main2h.setAttribute("class", `text-black font-mono  sm:text-6xl text-5xl font-bold`)
main2h.textContent=colors.query_name

// Note: Main 2 part  paragraph
const main2p = document.querySelector(".main2 p")
main2p.setAttribute("class", `sm:text-xl text-lg py-2 sm:w-[90%] bg-[#ae] w-[100%] text-black flex item-center justify-between gap-4 font-light`)
const content=main2p.textContent=colors.query_desc
main2p.innerHTML=`<i style="
                       
                          text-shadow:
                            
                             1.5px 2.5px 2.5px  black,
                            1.5px 2.5px 2.5px  black,
                            1.5px 2.5px 2.5px  black,
                             1.5px  2.5px 2.5px  black;
                       " class="fa-solid fa-lightbulb text-yellow-300  text-4xl am:px-2 px-4"></i> ${content} `







// Hack: Adding Cards
const home = document.querySelector(".Cards")


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
  container.setAttribute("class", `container flex-col bg-white border-2 border-black flex items-center rounded-md justify-center my-3 pb-6  sm:w-[100%] sm:px-3 text-${colors.text}   gap-4 w-full h-auto`)
  container.setAttribute("style", `box-shadow: 4px 3px 0 rgba(0, 0, 0, 0.808);`)
container.setAttribute("id",`container${index + 1}`)
  home.appendChild(container)
  container.innerHTML = `
  <div class="cont  p-6  rounded-2xl  w-full mx-auto">
  <!-- Heading -->
  <h1 class="cont-head mt-2 border-b-2 border-black py-4 sm:text-3xl font-bold text-black font-mono py-1 px-4 text-2xl">${value.main}</h1>

  

  <!-- Title -->
  <h3 class="cont-title sm:text-xl text-lg text-${value.titleColor}  mb-4 px-5 pt-4 ">${value.title}</h3>

  <!-- List -->
  <ul class="cont-list list-disc text-lg list-inside space-y-1 px-4 text-${value.listColor}">
    ${value.list.map((val) => {
      return `
        <li>${val}</li>
      `
    }).join("")}
  </ul>
</div>    

<!-- Example -->
<div class="cont-example rounded-2xl flex justify-start gap-4 items-center w-full  mb-2 px-8 py-4">
<h1 class="text-2xl font-bold font-sans  ">Example - </h1>
<h1 class="text-${colors.subtext} text-xl  font-sans "> ${value.example}</h1>
</div>

<!-- Input Window -->
  <div style="box-shadow: 2px 1px 0 rgba(0, 0, 0, 0.808);" class="sm:w-[95%] w-full  h-full rounded-sm  flex flex-col  justify-center bg-[#60a2fa] border-2 border-black ">
  <h1 class="px-5 py-1 text-xl font-bold font-mono text-black">Input</h1>
  <code class="bg-${colors.textareabg} border-2 border-black  whitespace-pre sm:mx-2 sm:w-[99%] w-full my-2 overflow-x-auto  sm:p-4 bg-${colors.textareabg} text-lg  text-${colors.textareatext}" >
  ${value.code}
  </code>
  </div>
<!-- Output Window -->
  <div style="box-shadow: 2px 1px 0 rgba(0, 0, 0, 0.808);" class="sm:w-[95%] w-full  h-full  rounded-sm flex flex-col  justify-center bg-[#f1c137] border-2 border-black  object-cover  my-4">   
  <h1 class="px-5 text-xl font-bold py-1 text-lg font-mono text-black">Output</h1>
  <div class="h-48 my-2  whitespace-pre sm:mx-2 sm:w-[99%] my-2 border-2 border-black w-full flex justify-center items-center ">
  <textarea  
class="bg-${colors.textareabg} 
       text-${colors.textareatext} 
       w-full 
       h-full 
        text-lg
       max-h-full 
       sm:px-4 
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


/// Hack: Adding links in the List

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
    `sm:py-2 text-black sm:text-2xl px-4 text-lg font-sans`
  )
  const lo =`/Project/page${index + 1}/index.html`
    
    heading.setAttribute("href",`${lo}` )
    ;

  // Create list container
  const ul = document.createElement("ul");
  ul.setAttribute(
    "class",
    `list-outside px-9 text-left list-disc pr-4 text-black gap-2 flex-col  text-sm font-light sm:flex hidden py-2  h-[90%] `
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