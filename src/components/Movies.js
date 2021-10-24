import { NavLink } from "react-router-dom";

const Movies = (props) => {
    return (
      <div>
        <img src={props.img} alt="imageItem" />
        <h3>{props.title}</h3>
        <h3>{props.year}</h3>
        <h3>{props.type}</h3>
       <NavLink to = {`/${props.imdbID}`}><button>Details</button></NavLink>
      </div>
    );
}

export default Movies
