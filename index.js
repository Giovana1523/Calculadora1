function Calcular(){
    var Q = document.getElementById("Q").value;
    var M = document.getElementById("M").value;
    var L = document.getElementById("L").value;
    document.getElementById('Q').value='';
    document.getElementById('M').value='';
    document.getElementById('L').value='';
    //se todas as variaveis estiverem vazias
    if (Q === "" && M==="" && L=== ""){
        $("#resultado").html("TODOS OS CAMPOS ESTAO VAZIOS");
    }//se todos os campos estiverem preenchidos
    else if( Q !== "" && M !=="" && L !== "" ){
        $("#resultado").html("Todos os campos estao preenchidos");
    }
    if (Q !== "" && M==="" && L=== ""){
     $("#resultado").html("VOCE NAO PODE PREENCHER SÓ UM CAMPO");
    }
    if (Q === "" && M !=="" && L=== ""){
        $("#resultado").html("VOCE NAO PODE PREENCHER SÓ UM CAMPO");
       }
       if (Q === "" && M==="" && L!== ""){
        $("#resultado").html("VOCE NAO PODE PREENCHER SÓ UM CAMPO");
       }
    else if(Q === "" && M !=="" && L !==""){
            A = parseFloat(M);
            B = parseFloat(L);
            var resultado = 0;
            resultado = A * B;
            $("#resultado").html(resultado);


    }
    else if(M === "" && Q !=="" && L !==""){
        A = parseFloat(Q);
        B = parseFloat(L );
        var resultado = 0;
        resultado = A / B;
        $("#resultado").html(resultado);
        console.log("hgk");


}
else if(L === "" && M !=="" && Q !==""){
    A = parseFloat(Q);
    B = parseFloat(M);
    var resultado = 0;
    resultado = A / B;
    $("#resultado").html(resultado);
    console.log("hgk");


}
    

}