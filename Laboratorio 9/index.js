

function nuevoComentario(){

    var textoIntroducido = document.getElementById("new-comment").value;    
    var caseComments = document.getElementById("comments");
    
    caseComments.setAttribute("class", "contenedor2");

    caseComments.innerHTML += `

    <section class="sub-contenedor2" id="sub-container2">

        <div class="case-cont">
            <div class="user-img">
            <img src="./images/capibara icon.svg" alt="">
    
            </div>
            <div class="text-section" id ="textid">

                <p>${textoIntroducido}</p>
            

            </div>
    
                
        </div>
            
    </section>   

    
    `    
    
}