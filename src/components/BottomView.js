import React, { Component } from 'react'
import WaveSurfer from 'wavesurfer.js';


export class BottomView extends Component {
    state = {
        playing: false,
      };
    
      componentDidMount() {
        const track = document.querySelector('#track');
    
        this.waveform = WaveSurfer.create({
          barWidth: 2,
          cursorWidth: 1,
          container: '#waveform',
          backend: 'WebAudio',
          height: 140,
          progressColor: '#2D5BFF',
          responsive: true,
          waveColor: '#333',
          cursorColor: 'transparent',
        });
    
        this.waveform.load(track);
      };
      
      handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
      };
      
      render() {
        const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

    
        return (
          <div className='waveformContianer'>
            <button onClick={this.handlePlay} className='playButton' >
              {!this.state.playing ? 'Play' : 'Pause'}
            </button>
            <div id="waveform" className='wave'></div>
            <audio id="track" src={url} />
          </div>
        );
      }
    };


export default BottomView

