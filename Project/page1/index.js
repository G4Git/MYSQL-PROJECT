
// changing Cards
const home = document.querySelector(".Cards")
const commands = [
    {
    name: "Select",
    desc:"Select is a Dql Cmd"
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
    container.setAttribute("class", "container flex-col flex items-center rounded-md justify-center  bg-white sm:w-[100%] p-3  gap-2 w-[100%] sm:h-[80%] h-48 ")
    home.appendChild(container)
    container.innerHTML = `<h1 class="text-2xl font-semibold  ">${value.name}</h1>
    <p class="text-lg ">${value.desc}</p>
    `
    
})

// 