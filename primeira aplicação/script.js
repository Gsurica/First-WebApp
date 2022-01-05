function calcularMelhorPreço(){
    //Validar campos
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if (precoAlcool != ''){
       if (precoGasolina != ''){

            let resultado = precoAlcool / precoGasolina
            if (resultado >= 0.7){
                //alert('Melhor Utilizar Gasolina')
                document.getElementById('resultado').innerHTML = "Melhor Utilizar Gasolina"
            }else {
                //alert('Melhor Utilzar Alcool')
                document.getElementById('resultado').innerHTML = "Melhor Utilizar Alcool"
            }

       }else{
           alert("Preencha o preço da gasolina...")
       }
    }else{
        alert("Preencha o preço do alcool...")
    }

}
