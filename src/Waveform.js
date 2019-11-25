import React from 'react';
import WaveSurfer from 'wavesurfer';

class Waveform extends React.Component {
  componentDidMount() {
    const aud = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#4a74a5',
      responsive: true,
      waveColor: '#ccc',
      cursorColor: '#4a74a5',
    });

    this.wavesurfer.load(aud);

  }

  playIt = () => {
    this.wavesurfer.playPause();
  };

//https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3
//https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a
  render() {
    return (
      <div>
        <button onClick={this.playIt}>Play</button>
        <div
          style={{ border: '1px solid grey', width: 900, height: 80 }}
          id="waveform"
        />
        <audio
          id="song"
          src="https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3"
        />
      </div>
    );
  }
}
export default Waveform;