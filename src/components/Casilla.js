function Casilla(props) {
  return (
    <div className={props.class} title={props.title} >
      <img src={props.img} alt="" id={props.id} className={props.coordenada}/>
    </div>
  );
}

export default Casilla;
