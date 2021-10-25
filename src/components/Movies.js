import { NavLink } from "react-router-dom";

const Movies = (props) => {
  return (
    <div>
        <div class="col">
          <div class="card shadow-sm">
             <img src={props.img === "N/A" ? '/dummy.jpg' : props.img} width="100%" height="520" class="bd-placeholder-img card-img-top" alt="imageItem" />

            <div class="card-body">
                <h4>{props.title}</h4>
             
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 <NavLink to={`/${props.imdbID}`}><button type="button" class="btn btn-sm btn-outline-secondary">Details</button></NavLink>
                </div>
                <small class="text-muted">{props.year}</small>
              </div>
            </div>
          </div>
        </div>
      <div></div>
      
    </div>
  );
};

export default Movies;
