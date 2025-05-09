import { Link } from "react-router-dom";
import "./notfound.css"


const NotFound = () => {
  return (
    <div id="notfound" className="mt-5">
      <div className="notfound">
        <div className="notfound-404">
          <h1>4<span>🥵</span>4</h1>
        </div>
        <h2 className="mt-5">Oops! Page Not Be Found</h2>
        <p>Spiacenti ma la pagina che stai cercando non esiste, è stata rimossa. nome cambiato o è temporaneamente non disponibile</p>
        <Link to="/">Torna alla pagina profilo</Link>
      </div>
    </div>
  );
};

export default NotFound;