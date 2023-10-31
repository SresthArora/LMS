function Video(props) {
  return (
    <li className="list-group-item btn-flex">
      {props.title}
      <button className="">
        <a className="text-white" href={props.link} target="_blank">
          Play
        </a>
      </button>
    </li>
  );
}
export default Video;


// classes to be removed : "btn btn-sm float-end text-white"