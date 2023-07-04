function Anchor(props) {
  return (
    <div>
      <a href={props.link} title={props.name} className={props.class} onClick={props.click}>
        {props.title}
      </a>
    </div>
  );
}

export default Anchor;
