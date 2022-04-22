function fase1() {
    var vidas = 0;
    while (true) {
        var option = (prompt("Digite a opção correta:").toUpperCase());

        if (option == 'C') {
            alert('Resposta correta!!! Parabéns!!!');
            location.assign("./fase2.html")
            break;
        } else if (option == 'A' || option == 'B') {
            if(vidas >= 1){
                location.assign("./gameover1.html")
                break;
            }else{
            alert('Se errar novamente você vai tomar uma facada no pescoço do tigre.');
            vidas++;
            }

        } else {
            alert("Digite apenas A, B ou C")
        }
    }
}

function fase2() {
    var vidas = 0;
    while (true) {
        var option = (prompt("Digite a opção correta:").toUpperCase());

        if (option == 'C') {
            alert('Resposta correta!!! Parabéns!!!');
            location.assign("./fase3.html")
            break;
        } else if (option == 'A' || option == 'B') {
            if(vidas >= 1){
                location.assign("./gameover1.html")
                break;
            }else{
            alert('Se errar novamente você vai tomar uma facada no pescoço do tigre.');
            vidas++;
            }

        } else {
            alert("Digite apenas A, B ou C")
        }
    }
}

function fase3() {
    var vidas = 0;
    while (true) {
        var option = (prompt("Resposta correta!!! Parabéns!!!").toUpperCase());

        if (option == 'C') {
            alert('Resposta correta!!! Parabéns!!!');
            location.assign("./gamewin1.html")
            break;
        } else if (option == 'A' || option == 'B') {
            if(vidas >= 1){
                location.assign("./gameover1.html")
                break;
            }else{
            alert('Se errar novamente você vai tomar uma facada no pescoço do tigre.');
            vidas++;
            }

        } else {
            alert("Digite apenas A, B ou C")
        }
    }
}



