let boton=document.querySelector("button");
let img=document.querySelectorAll("img")
let k=0;
let body=document.querySelector("body")
boton.addEventListener("click", function () {
    k++
    if (k%2==0) {
        body.classList.add("prim")
        body.classList.remove("fondo")
        img[0].classList.add("dos")
        img[2].classList.add("dos")
        img[4].classList.add("dos")
        img[6].classList.add("dos")
        img[0].classList.remove("cuatro")
        img[2].classList.remove("cuatro")
        img[4].classList.remove("cuatro")
        img[6].classList.remove("cuatro")
        img[1].classList.add("tres")
        img[3].classList.add("tres")
        img[5].classList.add("tres")
        img[7].classList.add("tres")
        img[1].classList.remove("cinco")
        img[3].classList.remove("cinco")
        img[5].classList.remove("cinco")
        img[7].classList.remove("cinco")
    } else {
        body.classList.remove("prim")
        body.classList.add("fondo")
        img[0].classList.remove("dos")
        img[2].classList.remove("dos")
        img[4].classList.remove("dos")
        img[6].classList.remove("dos")
        img[0].classList.add("cuatro")
        img[2].classList.add("cuatro")
        img[4].classList.add("cuatro")
        img[6].classList.add("cuatro")
        img[1].classList.remove("tres")
        img[3].classList.remove("tres")
        img[5].classList.remove("tres")
        img[7].classList.remove("tres")
        img[1].classList.add("cinco")
        img[3].classList.add("cinco")
        img[5].classList.add("cinco")
        img[7].classList.add("cinco")
    }
})
img[0].addEventListener("click", function () {
    alert(" Una persona que toma como costumbre almorzar, está aportando nutrientes a su cuerpo en un momento clave para que mantengamos nuestro organismo en forma.")
})
img[1].addEventListener("click", function () {
    alert("El almuerzo aporta la energía que el cuerpo necesita, para afrontar cualquier actividad. ")
})
img[2].addEventListener("click", function () {
    alert("La sopa ayuda a que aprovechemos los micronutrientes -vitaminas y minerales.")
})
img[3].addEventListener("click", function () {
    alert("Existen evidencias que la sopa procede de las cuevas de Les Eyzies, en el suroeste de Francia.")
})
img[4].addEventListener("click", function () {
    alert("Te mantiene despierto, concentrando y alerta.")
})
img[5].addEventListener("click", function () {
    alert("Algunos estudios incluso aseguran que puede mejorar la memoria y el funcionamiento del corazón.")
})
img[6].addEventListener("click", function () {
    alert("Contiene proteínas con alto valor biológico, por lo tanto es saludable para una dieta equilibrada.")
})
img[7].addEventListener("click", function () {
    alert("La carne de pollo aporta vitaminas principalmente del complejo B, destacando la Niacina o vitamina B3 que es fundamental para el metabolismo de las grasas y azúcares en el cuerpo, así como para mantener las células saludables.")
})