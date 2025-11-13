import React from "react";
import './MainContainer.css';


function MainContainer({children}) { //promp especial (propriedade automática), representa tudo que coloca entrw as tags de abertura e fechamento.
    return(
        <div className="Main-container">
      
            <main className="content"> {children}</main>

           
            
        </div>
    );
}

export default MainContainer;