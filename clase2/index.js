class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
    }
    addMascotas(nombre) {
        this.mascotas.push(nombre);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        this.libros.push({ nombre, autor });
    }

    getBookNames() {
        console.log(
            this.libros.forEach((element) => {
                console.log(element.nombre);
            })
        );
    }
}

const usuario = new Usuario(
    "Facundo",
    "Wertmuller",
    [{ nombre: "The perks of being a walflower", autor: "Stephen Chbosky" }],

    ["Perro", "Gato"]
);
usuario.addMascotas("Tortuga");
usuario.addBook("The Fault in Our Stars", "John Green");
usuario.countMascotas();
usuario.getBookNames();
console.log(usuario);
