import ReactHowler from 'react-howler';
import Button from '../components/Button_music';
import music from '../music/musica_ambiental.mp3';
import { Component } from 'react';

class Only_Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true,
    });
  }

  handlePause() {
    this.setState({
      playing: false,
    });
  }

  render() {
    return (
      <div>
        <ReactHowler
          src={music}
          playing={this.state.playing}
        />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
      </div>
    );
  }
}

export default Only_Play;
