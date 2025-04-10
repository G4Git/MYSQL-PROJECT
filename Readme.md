# MYSQL-PROJECT

This project demonstrates the use of SQL commands categorized into different types such as DDL, DML, DCL, TCL, and DQL. Each page in the project represents a specific category of SQL commands, and the content is dynamically generated using JavaScript.


## Customizing the Theme and Content

### 1. **Changing the Theme**
The theme of the project can be customized by modifying the `colors` object in the respective `index.js` files for each page. The `colors` object contains properties that define the colors and styles for various components of the page.

#### Example `colors` Object:
```javascript
const colors = {
  text: "slate-100", // Text color
  back: "black", // Background color
  border: "slate-700", // Border color
  subtext: "slate-400", // Subtext color
  specialhead: "emerald-500", // Special heading color
  specialtext: "emerald-400", // Special text color
  navhead: "slate-200", // Navbar heading color
  navlist: "slate-400", // Navbar list color
  topicColor: "emerald-600", // Topic color
  body: "#1A1F1D", // Body background color
  windowhead: "slate-800", // Window heading color
  windowbg: "neutral-900", // Window background color
  textareabg: "neutral-950", // Textarea background color
  textareatext: "slate-100", // Textarea text color
  input: "emerald-600", // Input label color
  output: "emerald-400", // Output label color
  pfimg: "https://example.com/profile.jpg", // Profile image URL
  pfh3color: "emerald-300", // Profile heading color
  pfh3: "Your Name", // Profile heading text
};
```

### 2. **Adding SQL Commands**
The project allows you to add SQL commands dynamically by defining them in the `commands` array. Each command object contains details such as the name, description, example code, output, and styling options.

#### Example `commands` Array:
```javascript
const commands = [
  {
    name: "SELECT",
    desc: "Retrieves data from one or more tables.",
    code: [SELECT name, age FROM users WHERE age > 18;](http://_vscodecontentref_/1),
    output: `+--------+-----+\n| name   | age |\n+--------+-----+\n| Alice  | 25  |\n+--------+-----+`,
    subhead: "Fetching Data",
    main: "SELECT Command",
    title: "Querying Records",
    list: [
      "Used to fetch data from one or more tables.",
      "Supports conditions using WHERE clause.",
      "Can be combined with ORDER BY, GROUP BY, and JOINs.",
      "Most commonly used SQL command for data analysis."
    ],
    mainColor:"blue-500""blue-500", "emerald-400",
    subColor: "gray-400",
    titleColor: "emerald-300",
    listColor: "gray-300",
    bgColor: "gray-900",
  },
];
```

### 3. **Adding Navigation Elements**
The project allows you to define navigation elements dynamically by using the `navelemts` array. Each navigation element object contains details such as the heading and links.

#### Example `navelemts` Array:
```javascript
const navelemts = [
  {
    h1: "New Section",
    links: [
      { name: "New Command 1", href: "#new-command-1" },
      { name: "New Command 2", href: "#new-command-2" },
    ],
  },
];
```