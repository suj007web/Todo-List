const title = document.getElementById("title")
const description = document.getElementById("description")  
const form = document.querySelector("form")
const container = document.querySelector(".container")

const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) : []
showAllTasks()

function showAllTasks(){
    tasks.forEach((value, index)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "task")

        const innerDiv = document.createElement("div")
        div.append(innerDiv)

        const p = document.createElement("p")
        p.innerText = value.todo
        innerDiv.append(p)

        const span = document.createElement("span")
        span.innerText = value.description
        innerDiv.append(span)

        const btn = document.createElement("button")
        btn.innerText = "-"
        div.append(btn)

        btn.addEventListener("click", ()=>{
            removeAllTasks()
            tasks.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            showAllTasks()
        })

        container.append(div)
    })
}

function removeAllTasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task")
        div.remove()
    })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    removeAllTasks()
    tasks.push({
        todo : title.value,
        description : description.value
    })
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    showAllTasks()
})