/**
 * 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulo {
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    };

    mostrar(){
        document.write("El alto del rectangulo es: "+this.alto+"cm"+"<br>"," y el ancho es de: "+this.ancho,"cm","<br>");
    }

    modificar(nuevoAlto,nuevoAncho){
        this.alto=nuevoAlto;
        this.ancho=nuevoAncho;
        document.write("Se modifico satisfactoriamente","<br>");
        this.mostrar();
    }

    perimetro(){
        let perimetro=(this.alto+this.ancho)*2;
        document.write("El perimetro del rectangulo es de: ", perimetro, "cm","<br>");
    }

    area(){
        let area = this.alto*this.ancho;
        document.write("El area del rectangulo es de: ",area,"cm","<br>");
    }
}


const rectangulo = new Rectangulo(10,20);
rectangulo.mostrar();
rectangulo.modificar(5,10);
rectangulo.perimetro();
rectangulo.area();