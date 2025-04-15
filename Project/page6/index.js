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
  
    query_name: "PL/SQL",
    query_desc: "PL/SQL (Procedural Language/Structured Query Language) is Oracle's procedural extension to SQL. It allows the creation of sophisticated and reusable code blocks, handling complex business logic with control structures like IF, LOOP, and EXCEPTION handling.",
    query_introduction: "PL/SQL enhances the power of SQL by adding procedural constructs such as loops, conditionals, and exception handling. It is widely used to write stored procedures, functions, triggers, and packages, enabling modular and efficient database programming."
  
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
    name: "DECLARE",
    desc: "Declares variables, constants, and cursors in PL/SQL blocks.",
    code: `
DECLARE 
  v_name VARCHAR2(50);
BEGIN 
  v_name := 'John';
  DBMS_OUTPUT.PUT_LINE(v_name);
END;`,
    output: `
John
    `.trim(),
    subhead: "Variable Declaration",
    main: "DECLARE Section",
    title: "Initializing Variables",
    example: "DECLARE v_sal NUMBER;",
    list: [
      "Used to define variables/constants before BEGIN.",
      "Data types include NUMBER, VARCHAR2, DATE, etc.",
      "Useful for temporary data manipulation.",
      "Variables can be initialized later in the BEGIN block."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "BEGIN END",
    desc: "Marks the start and end of a PL/SQL block.",
    code: `
BEGIN 
  DBMS_OUTPUT.PUT_LINE('Hello, PL/SQL!');
END;`,
    output: `
Hello, PL/SQL!
    `.trim(),
    subhead: "Executable Section",
    main: "BEGIN-END Block",
    title: "Code Execution Block",
    example: "BEGIN ... statements ... END;",
    list: [
      "Every PL/SQL block starts with BEGIN and ends with END.",
      "Contains executable SQL and PL/SQL statements.",
      "Can include nested blocks.",
      "Used for logical flow control and procedure logic."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "IF THEN ELSE",
    desc: "Conditional control in PL/SQL.",
    code: `
DECLARE 
  v_salary NUMBER := 3000;
BEGIN 
  IF v_salary > 2500 THEN
    DBMS_OUTPUT.PUT_LINE('High Salary');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Low Salary');
  END IF;
END;`,
    output: `
High Salary
    `.trim(),
    subhead: "Conditional Logic",
    main: "IF-THEN-ELSE",
    title: "Making Decisions",
    example: "IF condition THEN ... ELSE ... END IF;",
    list: [
      "Used to control flow based on conditions.",
      "Supports ELSE and ELSIF clauses.",
      "Condition must evaluate to TRUE or FALSE.",
      "Often used inside loops and procedures."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "LOOP",
    desc: "Executes a block of statements multiple times.",
    code: `
DECLARE 
  i NUMBER := 1;
BEGIN 
  LOOP 
    DBMS_OUTPUT.PUT_LINE(i);
    i := i + 1;
    EXIT WHEN i > 5;
  END LOOP;
END;`,
    output: `
1
2
3
4
5
    `.trim(),
    subhead: "Looping Through Code",
    main: "Basic LOOP",
    title: "Iterative Execution",
    example: "LOOP ... EXIT WHEN ... END LOOP;",
    list: [
      "Used for repeating execution.",
      "EXIT or EXIT WHEN is used to terminate.",
      "Can be replaced with FOR or WHILE.",
      "Useful for logic that requires repetition."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "EXCEPTION",
    desc: "Handles runtime errors in PL/SQL.",
    code: `
BEGIN 
  RAISE_APPLICATION_ERROR(-20001, 'Custom Error');
EXCEPTION 
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;`,
    output: `
ORA-20001: Custom Error
    `.trim(),
    subhead: "Error Handling",
    main: "EXCEPTION Block",
    title: "Catching Errors",
    example: "BEGIN ... EXCEPTION WHEN ... THEN ... END;",
    list: [
      "Used to catch and handle errors gracefully.",
      "WHEN OTHERS handles all unhandled exceptions.",
      "SQLERRM and SQLCODE provide error details.",
      "Important for robust programs."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "PROCEDURE",
    desc: "Defines a named PL/SQL block that performs an action.",
    code: `
CREATE OR REPLACE PROCEDURE greet_user IS
BEGIN 
  DBMS_OUTPUT.PUT_LINE('Welcome!');
END;`,
    output: `
Procedure created.
    `.trim(),
    subhead: "Reusable Code Block",
    main: "PROCEDURE Definition",
    title: "Defining Procedures",
    example: "CREATE OR REPLACE PROCEDURE name IS BEGIN ... END;",
    list: [
      "Procedures are stored in the database.",
      "Allow modular programming in PL/SQL.",
      "Can take IN, OUT, or IN OUT parameters.",
      "Called using EXEC or from other PL/SQL blocks."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "FUNCTION",
    desc: "Returns a value after execution.",
    code: `
CREATE OR REPLACE FUNCTION get_double (n NUMBER) RETURN NUMBER IS
BEGIN 
  RETURN n * 2;
END;`,
    output: `
Function created.
    `.trim(),
    subhead: "Returning Values",
    main: "FUNCTION Definition",
    title: "Writing Functions",
    example: "CREATE FUNCTION name RETURN datatype IS BEGIN ... END;",
    list: [
      "Functions return values and can be used in SQL.",
      "Can be stored or anonymous blocks.",
      "Used for calculations and data retrieval.",
      "Must include RETURN clause with data type."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  },
  {
    name: "TRIGGER",
    desc: "Automatically executes in response to certain events on a table or view.",
    code: `
  CREATE OR REPLACE TRIGGER before_insert_emp
  BEFORE INSERT ON employees
  FOR EACH ROW
  BEGIN
    :NEW.created_at := SYSDATE;
  END;`,
    output: `
  Trigger created.
    `.trim(),
    subhead: "Automated Execution",
    main: "BEFORE/AFTER TRIGGER",
    title: "Database Triggers",
    example: "CREATE TRIGGER name BEFORE INSERT ON table FOR EACH ROW ...",
    list: [
      "Triggers are invoked automatically by DML events.",
      "Types: BEFORE or AFTER INSERT/UPDATE/DELETE.",
      "FOR EACH ROW makes it row-level.",
      "Useful for auditing, validation, automation."
    ],
    mainColor:"blue-500",
    subColor: "gray-700",
    titleColor: "blue-400",
    listColor: "gray-700",
    bgColor: "white"
  }
  ,
  {
    name: "CURSOR",
    desc: "Used to fetch multiple rows from a SELECT query one at a time.",
    code: `
  DECLARE 
    CURSOR emp_cur IS 
      SELECT first_name FROM employees;
    v_name employees.first_name%TYPE;
  BEGIN 
    OPEN emp_cur;
    LOOP
      FETCH emp_cur INTO v_name;
      EXIT WHEN emp_cur%NOTFOUND;
      DBMS_OUTPUT.PUT_LINE(v_name);
    END LOOP;
    CLOSE emp_cur;
  END;`,
    output: `
  John
  Emily
  David
  ... (more names)
    `.trim(),
    subhead: "Row-by-Row Processing",
    main: "CURSOR Loop",
    title: "Handling Multiple Rows",
    example: "DECLARE CURSOR name IS SELECT ...;",
    list: [
      "Cursors allow row-by-row data processing.",
      "Explicit cursors are defined by the programmer.",
      "Must be opened, fetched, and closed manually.",
      "Useful when complex row handling is needed."
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