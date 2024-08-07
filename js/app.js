/*var semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

semana.push("Nuevo día");

console.log(semana);


semana.pop();

console.log(semana);

semana.unshift("Nuevo día 1", "Nuevo día 2");

console.log(semana);

console.log(semana.length);
*/

let etiqueta = document.getElementsByTagName("a");
console.log(etiqueta);

console.log(Array.isArray(etiqueta));

let etiqueta_a = Array.from(document.getElementsByTagName("a"));
console.log(Array.isArray(etiqueta_a));

for(let i in etiqueta_a){
    console.log(etiqueta_a[i]);
}

const elemento = document.createElement("DIV");
elemento.classList.add("container");
elemento.textContent = "Hola Mundo";
document.body.appendChild(elemento);

const elemento2 = document.createElement("P");
elemento2.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus dignissimos, eveniet minus unde libero, quo amet soluta error rerum totam fuga alias temporibus, facilis sunt pariatur labore magni. Quis!";
document.body.appendChild(elemento2);
elemento2.style.color = "white";
elemento2.style.fontSize = "20px";

elemento.attributes.id = "id_container";
elemento2.setAttribute("id", "id_p");
elemento.removeAttribute("id");

elemento2.innerHTML = "<strong>Texto en negrita</strong>";

const newElement = document.getElementById("contenedor");
const parrafoNuevo = document.createElement("P");
parrafoNuevo.textContent = "Martín Lorenzo, Desarrollador Web Freelance";
parrafoNuevo.style.color = "darkgreen";
parrafoNuevo.style.fontSize = "50px";
parrafoNuevo.style.fontFamily = "Arial";
parrafoNuevo.style.textAlign = "center";
parrafoNuevo.style.backgroundColor = "lightgrey";
newElement.appendChild(parrafoNuevo);















