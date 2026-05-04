function buscar(){
    rz = document.getElementById("rz").value 
    nfac = document.getElementById("nfac").value
    fecha = document.getElementById("fecha").value
    ide = document.getElementById("ide").value
    nom = document.getElementById("nom").value
    dir = document.getElementById("dir").value
    tel = document.getElementById("tel").value
    vu = document.getElementById("vu").value
    cant = document.getElementById("cant").value
    p = document.getElementById("p").value
    subtotal = vu * cant
    iva = subtotal * 0.19
    total = subtotal + iva

alert("\n razon social: " + rz +
        "\n # factura: "+ nfac + "fecha: " + fecha +
        "\n ********************************************* " +
        "\n ************** Datos del cliente ************ " +
        "\n ********************************************* " +
        "\n identificacion: " + ide +
        "\n cliente: " + nom +
        "\n direccion: " + dir +
        "\n telefono: " + tel +
        "\n ********************************************* " +
        "\n ************** Datos del producto *********** " +
        "\n ********************************************* " +
        "\n producto: " + p +
        "\n cantidad: " + cant +
        "\n valor unitario: $ " + vu +
        "\n valor iva: $ " + iva +
        "\n subtotal: $ " + subtotal +
        "\n ********************************************* " +
        "\n total: " + total + " pesos " +
        "\n ********************************************* ")
    }

