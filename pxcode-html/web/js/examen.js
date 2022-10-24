class Platillo{
    constructor(nombre, tipo, precio){ 
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
    getNombre(){
        return this.nombre;
    }
    getTipo(){
        return this.tipo;
    }
    getPrecio(){
        return this.precio;
    }
    setTipo(tipo){
        this.tipo = tipo;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    setPos(pos){
        this.pos = pos;
    }
}
class Menu {
    // métodos de clase
    constructor(platillos, contador){ 
        this.platillos = platillos;
        this.contador = contador;
    }
    getPlatillo(pos) {
        for (let i = 0; i < this.platillos.length; i++) {
            if(i == pos){
                var element = this.platillos[i];
                break;
            }
        }
        return element;
    }
    setPlatillo(platillo){
        this.platillos.push(platillo);
        this.contador++;
    }
    eliminarPlatillo(nombre){
        for (let i = 0; i < this.platillos.length; i++) {
            console.log(nombre);
            console.log(nombre == this.platillos[i].getNombre());
            if(nombre == this.platillos[i].getNombre()){
                var pos = i;
                break;
            }
        }
        this.platillos.splice(pos, 1);
        this.contador--;
        console.log(this.platillos);
        
        return pos ;
    }
    getContador(){
        return this.contador;
    }
}
var dineroGanado = 0;
var dineroCuenta = 0;
var platillos = [];
var contador = 0, contadorPlatCuenta = 0;
var menu = new Menu(platillos, contador);
function Añadir() {
    var nombre = document.getElementById("nombre").value;
    var tipo = document.getElementById("tipoPlatillo").value;
    var precio = document.getElementById("precio").value;
    var platillo = new Platillo(nombre, tipo, parseInt(precio));
    menu.setPlatillo(platillo);
    document.getElementById("p"+String(menu.getContador())).innerHTML = nombre;
}
function Eliminar() {
    var nombre = document.getElementById("nombre").value;
    var cont = 0;
    var pos = menu.eliminarPlatillo(nombre);
    for(var i = pos; i < menu.getContador(); i++) {
        document.getElementById("p"+String(i+1)).innerHTML = menu.getPlatillo(i).getNombre();
        cont = i;
    }
    document.getElementById("p"+String(cont + 2)).innerHTML = " ";
}
function Modificar() {
    var nombre = document.getElementById("nombre").value;
    var tipo = document.getElementById("tipoPlatillo").value;
    var precio = document.getElementById("precio").value;
    for (let i = 0; i < this.platillos.length; i++) {
        if(nombre == menu.getPlatillo(i).getNombre()){
            menu.getPlatillo(i).setPrecio(parseInt(precio));
            menu.getPlatillo(i).setTipo(tipo)
            break;
        }
    }
}
function Mostrar(id) {
    var i = id.replace(/p/g, ''); 
    document.getElementById("nombreP").value = menu.getPlatillo(i-1).getNombre();
    document.getElementById("tipoP").value = menu.getPlatillo(i-1).getTipo();
    document.getElementById("precioP").value = menu.getPlatillo(i-1).getPrecio();
}
function Ordenar() {
    var nombre = document.getElementById("nombreP").value;
    var precio = document.getElementById("precioP").value;
    dineroCuenta = dineroCuenta + parseInt(precio);
    contadorPlatCuenta++;
    document.getElementById("c"+String(contadorPlatCuenta)).innerHTML = nombre;
    document.getElementById("totalCuenta").innerHTML = String(dineroCuenta)+"$";
}
function Comprar() {
    dineroGanado = dineroGanado + dineroCuenta;
    dineroCuenta = 0;
    contadorPlatCuenta = 0;
    for (let i = 0; i < 10; i++) {
        document.getElementById("c"+String(i+1)).innerHTML = "";
    }
    document.getElementById("totalCuenta").innerHTML = "";
    localStorage.setItem("Dinero", dineroGanado);
}
function Calcular() {
    var dinG = localStorage.getItem("Dinero");
    document.getElementById("final").innerHTML = String(dinG) + "$";
}
function Registrar() {
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("nickname").value;
    var edad = document.getElementById("age").value;

    sessionStorage.setItem("Nombre", nombre);
    sessionStorage.setItem("Apellido", apellido);
    sessionStorage.setItem("Edad", edad);
}
function Visualizar() {
    var nombre = sessionStorage.getItem("Nombre");
    var apellido = sessionStorage.getItem("Apellido");
    var edad = sessionStorage.getItem("Edad");
    document.getElementById("name").value = nombre;
    document.getElementById("nickname").value = apellido;
    document.getElementById("age").value =edad;
}