
// changing color of the website components

const colors = {
    text: "green-300",
    back: "neutral-800",
    border: "neutral-600",
    subtext: "neutral-200",
    specialhead: "yellow-200",
    specialtext: "yellow-100",
    navhead: "white",
    navlist: "neutral-400",
    topicColor: "yellow-500",
    body: "black",
    windowhead: "",
    windowbg: "neutral-600",
    textareabg: "black",
    textareatext: "white",
    input: "yellow-400",
    output: "green-400",
    // profile image
    pfimg: "https://i.pinimg.com/474x/fd/17/e6/fd17e6aa8f2d5853c9193a6f698b6099.jpg",
    pfh3color: "neutral-400",
    // prfile name 
    pfh3:"Gaurav kumar"
}

// { Setting Navbar in desktop }

const nav = document.querySelector(".nav")
const navh1 = document.querySelector(".nav h1")
const navh2 = document.querySelector(".nav h2")
const ul = document.querySelector(".ul")
navh1.setAttribute("class", `sm:p-8 text-${colors.navhead} sm:text-2xl p-4 text-2xl font-bold`)  
navh2.setAttribute("class",`sm:py-5 text-${colors.topicColor} sm:text-2xl px-10 text-lg font-sans`) 
ul.setAttribute("class", ` text-${colors.navlist} list-none gap-2  flex-col px-12  gap-5 text-lg font-sans  sm:flex hidden py-4`)
nav.setAttribute("class", `bg-${colors.back} justify-between flex-col flex `)


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




// Hack: Adding links in the List

const links = [{
    name: "Link23",
    href:"https://www.youtube.com/watch?v=yHWPO9DDnsk&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&index=4"
},

]

links.forEach((val) => {
    const list = document.createElement("li")
    const link = document.createElement("a")
    
    link.textContent = val.name
    link.setAttribute("href", `${val.href} `)

    list.appendChild(link)
    
    ul.appendChild(list)
})


// Hack: Adding Cards
const home = document.querySelector(".Cards")
const commands = [
    {
        name: "Select",
        desc: "Select is a Dql Cmd",
        code: "SELECT * FROM users WHERE age > 18;",
        output:`
           id	name	age
            1	John	25
            2	Doe	    30
            3	Max	    17
        `
    },
    {
        name: "Query",
        desc:"Select is a Dql Cmd"
    },
    {
        name: "Select",
        desc:"Select is a Dql Cmd"
        },
        {
            name: "Sel",
            desc:"Select is a Dql Cmd"
    },
    {
        name: "Select",
        desc:"Select is a Dql Cmd"
        },
        {
            name: "Sel",
            desc:"Select is a Dql Cmd"
        }
]




commands.forEach((value) => {
    const container = document.createElement("div")
    container.setAttribute("class", `container flex-col flex items-center rounded-md justify-center  bg-${colors.back} sm:w-[100%] p-3 text-${colors.text}  gap-8 w-[100%] h-[100%]`)
    home.appendChild(container)
    container.innerHTML = `
    <div class="flex-col justify-center items-center flex gap-1 py-2">
    <h1 class="text-2xl font-semibold  ">${value.name}</h1>
    <p class="text-lg text-${colors.subtext} ">${value.desc}</p>
    </div>

    <div class="w-full h-full rounded-md  flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg} ">
    <h1 class="px-3 p-1 text-${colors.input}">Input</h1>
    <code class="bg-black  w-[100%] overflow-x-auto  p-4 text-${colors.textareatext}" >
    ${value.code}
    </code>
    </div>

    <div class="w-full h-full rounded-md flex flex-col  justify-center bg-${colors.windowbg} border-2 border-${colors.windowbg}  object-cover  ">
    <h1 class="px-3 p-1 text-${colors.output}">Output</h1>
    <div class="h-32 w-full flex justify-center items-center  bg-black">
    <textarea  class="bg-${colors.textareabg} text-${colors.textareatext}  w-full flex-col flex justify-center items-center   overflow-auto  h-full focus:outline-none" >
    ${value.output}   
    </textarea>
  </div>
    </div>
    `
})







