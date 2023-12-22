/**
 * 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
 */

class Cuenta{
    constructor(nombre){
        this.titular = nombre;
        this.saldo = 0
    };

    ingresar(monto){
        this.saldo = monto;
        console.log("Se ingreso $",monto," Correctamente");
    }

    extraer(monto){
        if(monto > this.saldo){
            alert("El monto que intenta extraer es mayor al saldo disponible")
        }else{
            this.saldo = this.saldo - monto;
        }
    }

    informar(){
        document.write("El titular de la cuenta es: " + this.titular + "<br>"," El saldo disponible en la cuenta es de: $" + this.saldo,"<br>");
    }
}

const alex = new Cuenta("Alex");
console.log(alex);

alex.informar();
alex.ingresar(200000);
alex.informar()
alex.extraer(150000);
alex.informar();