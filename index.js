const divScores = document.querySelector("div[class=ranks__scores]");
const arrColors = ["#fabfb7","#fdf9c4","#ffda9e","#c5c6c8","#b2e2f2"];

// const random = (max) => {
//     return Math.floor(Math.random() * (max));
// }

function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
  }


const addEachStudent = (student) => {
    const divEach = document.createElement("div");
    
    const pName = document.createElement("p");
    pName.setAttribute("name","name");
    pName.textContent = student.name;

    const pAge = document.createElement("p");
    pAge.setAttribute("name","age");
    pAge.textContent = student.age;

    const pScores = document.createElement("p");
    pScores.setAttribute("name","score");
    pScores.textContent = student.score;
    
    const addBtn = document.createElement("button");
    addBtn.textContent = "+"
    addBtn.classList.add("btn","btn-success");

    const subBtn = document.createElement("button");
    subBtn.textContent = "-"
    subBtn.classList.add("btn","btn-danger");
    
    pName.setAttribute("name","name");
    divEach.classList.add(
        "ranks__scores-each",
        "d-flex",
        "align-items-center",
        "justify-content-between",
        "p-3"
    );
    divEach.setAttribute("style","background-color: "+getColor());
    divEach.appendChild(pName);
    divEach.appendChild(pAge);
    divEach.appendChild(pScores);
    divEach.appendChild(subBtn);
    divEach.appendChild(addBtn);
    divScores.appendChild(divEach);
}

const compare = (a,b) => {
    if(a.score < b.score){
        return 1;
    }
    if(a.score > b.score){
        return -1;
    }
    return 0;
}

fetch("/students.json")
    .then(response => response.json())
    .then(data => {
        data.sort(compare);
        data.forEach(element => {

            addEachStudent(element);
        });
    })
    .catch(error => console.log(`El fichero no se ha podido leer: ${error}`));