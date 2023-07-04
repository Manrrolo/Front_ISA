function Button(props) {
  return (
    <div>
      <a id={props.id} href={props.link}>
        <button id={props.id_2} className="Button" onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      </a>
    </div>
  );
}

export default Button;
