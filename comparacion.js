let infectar = (contagio, temperatura) => {
    if (contagio === 2 && temperatura === 3) {
        let probalidad = 25;
        let infeccion = Math.floor(Math.random() * 100)

        if (infeccion === true) {
            console.log("infectado")
        } else if (infeccion === false) {
            console.log("no infectado")
        }
        console.log(infeccion)
    }
}
