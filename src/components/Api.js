//API//////////////////////////////////////////
    ////////Variáves e seleção de elementos
                    
                  //esse é o verdadeiro codigo//
                    /*
                    const apikey = "b010373e88270644072cbde6d83da496";
                    const apiCountryURL = "https://countryflagsapi.com/png/";

        
                    const cityInput = document.querySelector("#city-input");
                    const searchBtn = document.querySelector("#search");
    
                    searchBtn.addEventListener('click', (e) => {
                      e.preventDefault();
  
                        console.log('teste');
                      });*/
    

    /*TypeError: Não é possível ler as propriedades de null (lendo 'addEventListener')
    esse é o erro que aparece no console e ele tambem para de mostra minha interface */
                   
      /*Nesse exemplo abaixo não aparece mais como 'null' 
      e o erro para de ser mostrado no console, mas mesmo assim 
      quando eu clico na lupa de pesquisa continua sem aparecer a palava
      'teste' no console */
    /*if(searchBtn){
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        console.log('teste');
      });
    };*/
  
    ////////Funções


   
    
    //API//////////////////////////////////////////////
    


/////////////resolvendo buges com REF//////////////////////////

/*import React, { useRef } from 'react';

function MyComponent() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener('click', handleClick);
    }
    return () => {
        if (buttonRef.current) {
            buttonRef.current.removeEventListener('click', handleClick);
        }
    };
  }, [handleClick]);


}*/

