
import './Central.css'
import './Api.js'
                
function Central(){

    return(
        <div className="centro container">          

            <div className=" form">
                <h3 >Confira o clima de uma cidade</h3>
                <div className="form-input-container">
                    <input 
                    type="text" 
                    placeholder="Digite o nome da cidade" 
                    id="city-input"
                    />
                    <button id="search">
                        <i className="fa-solid fa-magnifying-glass"/>
                    </button>      
                </div>
            </div>
            <div className=" weather-data">
                <h2>
                    <i className="fa-solid fa-location-dot"></i>
                    <span id='city'> Maceió </span>
                    <img 
                        src="https://countryflagsapi.com/png/br" 
                        alt="bandeira" 
                        id="country" 
                    />
                </h2>
                <p id='temperature'>
                    <span>30</span>
                    &deg;C</p>
                    <div id="description-container">
                        <p id="description"></p>
                        <img src="http://openweathermap.org/img/wn/01d.png" alt="Condições do tempo" id="weather-icon"/>
                    </div>
                    <div id="details-container">
                        <p id="umidity">
                            <i className="fa-solid fa-droplet"></i>
                            <samp> 48% </samp>
                        </p>

                        <p id="wind">
                            <i className="fa-solid fa-wind"></i>
                            <samp> 3Km/h </samp>
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Central
//id="search"