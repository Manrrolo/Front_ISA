import gear from '../imgs/Compact-disc.png';
import Only from '../components/Only_play'
function Music() {
  return (
    <>
      <div className="color-changer_2">
        <div className="color-panel">
          <img src={gear} alt="" />
        </div>
        <div className="color-selector">
          <div className="heading">Musica Ambiental</div>
            <ul>
              <li>
                <Only/>
              </li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Music;
