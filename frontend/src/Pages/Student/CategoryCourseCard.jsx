import { Link } from "react-router-dom";
import CategoryCourseDescription from "./CategoryCourseDescription";
function CategoryCourseCard(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <Link
          to={`/Student/CategoryCourseDescription`}
          className="btn btn-primary btn-color"
        >
          Know More &rarr;
        </Link>
      </div>
    </div>
  );
}
export default CategoryCourseCard;