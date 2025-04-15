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
  
  query_name: "DQL Command",
  query_desc: "Used to fetch data from a database based on specific criteria. It mainly involves the SELECT statement and is essential for data analysis, reporting, and viewing records without modifying them. DQL helps extract meaningful insights from large datasets."
,
  query_introduction:
    "DQL (Data Query Language) focuses on querying the database. It is primarily used to retrieve data using the SELECT statement and helps in analyzing and viewing data stored in tables.",
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


// DCL COMMANDS
const commands = [
  {
    name: "SELECT",
    desc: "Retrieves data from one or more tables.",
    code: `SELECT FirstName, LastName FROM Employees WHERE HireDate > '2023-01-01';`,
    output: `
| FirstName | LastName |
|-----------|----------|
| Alice     | Johnson  |
| Aaron     | Davis    |
    `.trim(),
    subhead: "Retrieving Data",
    main: "SELECT Statement",
    title: "Fetching Records",
    example: "SELECT * FROM Employees;",
    list: [
      "Used to query data from a database. Example: SELECT Name FROM Students;",
      "Can retrieve specific columns or all (*) columns. Example: SELECT * FROM Products;",
      "Supports conditions using WHERE, filtering, ordering, and grouping. Example: SELECT Name FROM Users WHERE Age > 25;",
      "Fundamental for reading and analyzing data in SQL. Example: SELECT COUNT(*) FROM Sales;"
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SELECT DISTINCT",
    desc: "Retrieves unique values from a column.",
    code: `SELECT DISTINCT Department FROM Employees;`,
    output: `
| Department |
|------------|
| HR         |
| IT         |
| Finance    |
    `.trim(),
    subhead: "Removing Duplicates",
    main: "SELECT DISTINCT Statement",
    title: "Unique Record Retrieval",
    example: "SELECT DISTINCT column_name FROM table_name;",
    list: [
      "Returns only distinct (different) values. Example: SELECT DISTINCT Country FROM Customers;",
      "Helps avoid duplication in query results. Example: SELECT DISTINCT ProductName FROM Orders;",
      "Useful in data analysis and filtering. Example: SELECT DISTINCT Category FROM Products;"
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SELECT WHERE",
    desc: "Filters records that fulfill a specified condition.",
    code: `SELECT * FROM Employees WHERE Department = 'HR';`,
    output: `
| ID | FirstName | LastName | Department | HireDate   |
|----|-----------|----------|------------|------------|
| 2  | Jane      | Smith    | HR         | 2021-03-15 |
| 5  | Aaron     | Davis    | HR         | 2023-01-10 |
    `.trim(),
    subhead: "Conditional Filtering",
    main: "WHERE Clause in SELECT",
    title: "Filtered Results",
    example: "SELECT * FROM Employees WHERE condition;",
    list: [
      "Filters records based on criteria. Example: SELECT * FROM Customers WHERE Country = 'USA';",
      "Used with =, <, >, LIKE, BETWEEN, etc. Example: SELECT * FROM Orders WHERE Price BETWEEN 10 AND 20;",
      "Makes SELECT queries more precise. Example: SELECT * FROM Students WHERE Grade = 'A';"
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SELECT ORDER BY",
    desc: "Sorts the result set in ascending or descending order.",
    code: `SELECT * FROM Employees ORDER BY HireDate DESC;`,
    output: `
| ID | FirstName | LastName | Department | HireDate   |
|----|-----------|----------|------------|------------|
| 5  | Aaron     | Davis    | HR         | 2023-01-10 |
| 3  | Alice     | Johnson  | IT         | 2022-11-05 |
| 2  | Jane      | Smith    | HR         | 2021-03-15 |
| 1  | John      | Doe      | IT         | 2019-06-01 |
    `.trim(),
    subhead: "Sorting Results",
    main: "ORDER BY Clause",
    title: "Ordering Data",
    example: "SELECT * FROM table_name ORDER BY column_name ASC|DESC;",
    list: [
      "Used to sort results. Example: SELECT * FROM Products ORDER BY Price ASC;",
      "Default sorting order is ascending. Example: SELECT Name FROM Students ORDER BY Name;",
      "DESC is used for descending. Example: SELECT * FROM Sales ORDER BY Date DESC;"
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SELECT GROUP BY",
    desc: "Groups rows that have the same values into summary rows.",
    code: `SELECT Department, COUNT(*) FROM Employees GROUP BY Department;`,
    output: `
| Department | COUNT(*) |
|------------|----------|
| HR         | 2        |
| IT         | 2        |
| Finance    | 1        |
    `.trim(),
    subhead: "Aggregating Data",
    main: "GROUP BY Clause",
    title: "Grouped Results",
    example: "SELECT column, COUNT(*) FROM table GROUP BY column;",
    list: [
      "Used with aggregate functions. Example: SELECT City, AVG(Salary) FROM Employees GROUP BY City;",
      "Groups rows sharing same value. Example: SELECT Category, SUM(Sales) FROM Products GROUP BY Category;",
      "Helpful in summaries and reports. Example: SELECT Department, COUNT(*) FROM Staff GROUP BY Department;"
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SELECT HAVING",
    desc: "Filters group results based on aggregate function conditions.",
    code: `SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 1;`,
    output: `
| Department | COUNT(*) |
|------------|----------|
| HR         | 2        |
| IT         | 2        |
    `.trim(),
    subhead: "Filtering Grouped Data",
    main: "HAVING Clause",
    title: "Group-Level Filtering",
    example: "SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > number;",
    list: [
      "Like WHERE but for groups. Example: SELECT Dept, SUM(Salary) FROM Staff GROUP BY Dept HAVING SUM(Salary) > 50000;",
      "Used after GROUP BY. Example: SELECT Role, COUNT(*) FROM Users GROUP BY Role HAVING COUNT(*) > 3;",
      "Essential for analysis. Example: SELECT Product, AVG(Rating) FROM Reviews GROUP BY Product HAVING AVG(Rating) >= 4;"
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "SELECT JOIN",
    desc: "Combines rows from two or more tables based on a related column.",
    code: `SELECT Employees.FirstName, Departments.DepartmentName 
  FROM Employees 
  JOIN Departments ON Employees.DepartmentID = Departments.ID;`,
    output: `
  +------------+------------------+
  | FirstName  | DepartmentName   |
  +------------+------------------+
  | John       | HR               |
  | Alice      | Finance          |
  | Robert     | IT               |
  +------------+------------------+
  `,
    subhead: "Combining Tables",
    main: "JOIN Clause",
    title: "Data from Multiple Tables",
    example: `SELECT a.col1, b.col2 FROM tableA a JOIN tableB b ON a.id = b.a_id;`,
    list: [
      "JOIN is used to combine rows from two or more tables based on a related column.",
      "Common JOIN types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.",
      "Helps retrieve meaningful information spread across tables.",
      "Example (INNER JOIN): SELECT Orders.OrderID, Customers.Name FROM Orders JOIN Customers ON Orders.CustomerID = Customers.ID;"
    ],
    mainColor:"blue-500",
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