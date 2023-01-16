import {React} from "react";
import '../../styles/home.scss'
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="home ">
                <div className="coluna-1 ">
                    <div className="texto-1">
                        <h2>Concentre as informações mais relevantes do negócio e aumente a eficiência dele</h2>
                        <h5>Este aplicativo tem como objetivo auxiliar na gestão do seu negócio. Estamos abertos para
                            sugestões de melhorias e ajustes à sua necessidade.
                        </h5>
                        <button>Registre-se</button> <button onClick={() => navigate('/formulario')}>Formulario </button>

                    </div>
                    <div>

                        <img className="img-sistema" src="https://www.aokisistemas.com.br/wp-content/uploads/2018/05/o-que-e-crm-1030x607.jpg" alt="sistema crm"></img>

                        col
                    </div>
                </div>
                continua...
            </div>
        </div>
    )
}
export default Home;