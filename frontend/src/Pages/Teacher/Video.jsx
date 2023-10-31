function Video(props) {
  return (
    <li className="list-group-item btn-flex">
      {props.title}
      {/* <button
        className="DeleteVideo btn btn-sm float-end text-white"
        onClick={props.onDelete}
      >
        Delete
      </button> */}
      <button className="">
        <a className="text-white" href={props.link} target="_blank">
          Play
        </a>
      </button>
    </li>
  );
}
export default Video;
