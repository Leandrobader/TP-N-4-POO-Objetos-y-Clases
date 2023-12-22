/**
 * 1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
 */

const auto = {
    marca: "Fiat",
    color: "Negro",
    modelo: "Argo",

    encender(){
        document.write("AUTO ENCENDIDO","<br>");
    },

    apagar(){
        document.write("AUTO APAGADO","<br>")
    }
}

auto.encender();
auto.apagar();