function crear(){
    let num=parseInt(document.getElementById("numero").value);
    let tr="";

    if (num >=0 && num <=9) {
        setTimeout(() => {
            for(let i=0; i<=num;i++){
            tr+=`<tr><td>${num}</td><td>*</td><td>${i}</td><td>=</td><td>${i*num}</td></tr>`;    
            }
        document.querySelector("table").innerHTML+=tr;
        }, 3000);
    } else {
        document.querySelector("span").innerHTML="ERROR"
        document.querySelector("table").innerHTML="";     
    }    
}




/*window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        let numero = parseInt(document.getElementById("numero").value);
        
        if (numero>=0 && numero<=9){
            setTimeout(() => {
            
                for (let i = 0; i<=numero; i++) {
                    tr+=`<tr><td>${i}</td><td>*</td><td>${i}</td><td>=</td><td>${i*num}</td></tr>`;   
                }
                //tr es igual  todo lo que hemos metido en la variable table en hasta el nummero numero veces
                document.querySelector("table").innerHTML=tr;
                }, 3000);
            } else {
                document.querySelector("span").innerHTML="ERROR";
            }
                
            document.querySelector("error").innerHTML="error";
            document.querySelector("table").innerHTML="";
         }        
    });
 });*/
 

    

