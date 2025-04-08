
// changing Cards
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
    container.setAttribute("class", "container flex-col flex items-center rounded-md justify-center  bg-white sm:w-[100%] p-3  gap-4 w-[100%] h-[100%]   ")
    home.appendChild(container)
    container.innerHTML = `
    <div class="flex-col justify-center items-center flex gap-1 py-2">
    <h1 class="text-2xl font-semibold  ">${value.name}</h1>
    <p class="text-lg ">${value.desc}</p>
    </div>

    <div class="w-full h-full rounded-md  flex flex-col  justify-center bg-neutral-600 border-2 border-neutral-600 ">
    <h1 class="px-3 p-1 text-yellow-400">Input</h1>
    <code class="bg-black  w-[100%] overflow-x-auto  p-4 text-white" >
    ${value.code}
    </code>
    </div>

    <div class="w-full h-full rounded-md flex flex-col  justify-center bg-neutral-600 border-2 border-neutral-600 object-cover  ">
    <h1 class="px-3 p-1 text-green-400">Output</h1>
    <div class="h-32 w-full flex justify-center items-center  bg-black">
    <textarea  class="bg-black w-full flex-col flex justify-center items-center   overflow-auto  h-full text-white focus:outline-none" >
    ${value.output}   
    </textarea>
  </div>
    </div>
    `
    
})

// 