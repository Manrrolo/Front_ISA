import Anchor from './Anchor';
import gear from '../imgs/gear.png';
function Engranaje() {
  return (
    <>
      <div className="color-changer">
        <div className="color-panel">
          <img src={gear} alt="" />
        </div>
        <div className="color-selector">
          <div className="heading">Colores personalizados</div>
          <div className="colors">
            <ul>
              <li>
                <Anchor class={'color-red'} name={'color-red'}></Anchor>
              </li>
              <li>
                <Anchor class={'color-blue'} name={'color-blue'}></Anchor>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Engranaje;
