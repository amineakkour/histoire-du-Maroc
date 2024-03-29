const timelineEl = document.querySelector("#time-line")
const timeCircles = document.querySelectorAll(".progress .circle")
const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")

const data = [
    ["Consolidation Alaouite",
    "Le Maroc était sous le règne des dynasties alaouites, consolidant son territoire et ses relations avec les puissances européennes.",
    1800],
    [" Début du Protectorat",
    "Le pays est placé sous le protectorat français et espagnol, marquant une période de colonisation et de résistance.",
    1912],
    ["Transition Économique",
    "Le Maroc connaît une transition économique avec l'ouverture progressive vers le marché mondial et des réformes politiques.",
    1990],
    ["Réformes Constitutionnelles",
    "Des réformes constitutionnelles sont adoptées en réponse aux manifestations du mouvement du 20 février, visant à accroître la démocratie et les droits de l'homme.",
    2015]
]

let timelinePersontage = 0
const timelineStep = 33.333

function editTimeLine(direction){
    // direction = 1 || -1
    timelinePersontage += timelineStep * direction
    updateTimeline()
}

function updateInfos(ind){
    const titleEl = document.querySelector("#title")
    const paragEl = document.querySelector("#parag")
    const dateEl = document.querySelector("#date")
    const posterEl = document.querySelector("#poster")

    titleEl.innerText = data[ind][0]
    paragEl.innerText = data[ind][1]
    dateEl.innerText = data[ind][2]
    posterEl.src = "pics/" + data[ind][2] + ".jpg"
}

function updatePoster(ind){
    const posterEl = document.querySelector("#poster")

    posterEl.src = `pics/poster-ep${ind +1}.jpg`
}

function updateTimeline(){
    timelineEl.style.width = timelinePersontage + "%"

    NumbOfActiveCyrcles = timelinePersontage / timelineStep

    // remove all active circles
    timeCircles.forEach(circle => {
        circle.classList.remove("active")
    });
    
    for(i = NumbOfActiveCyrcles; i >= 0 ;i--){
        timeCircles[i].classList.add("active")
    }

    if(timelinePersontage > 99.99){
        rightArrow.classList.add("disable-arrow")
    }else{
        rightArrow.classList.remove("disable-arrow")
    }

    if(timelinePersontage <= 0){
        leftArrow.classList.add("disable-arrow")
    }else{
        leftArrow.classList.remove("disable-arrow")
    }

    updateInfos(NumbOfActiveCyrcles)
}

function callDecreaseFunction(){
    if(timelinePersontage > 0){
        editTimeLine(-1)
    }
}

function callIncreaseFunction(){
    if(timelinePersontage < 99.99){
        editTimeLine(1)
    }
}



leftArrow.addEventListener("click", callDecreaseFunction)
addEventListener("keydown", (e) => {
    if(e.keyCode === 39){
        callIncreaseFunction()
    }
    else if(e.keyCode === 37){
        callDecreaseFunction()
    }
})




rightArrow.addEventListener("click", callIncreaseFunction)

updateTimeline()


