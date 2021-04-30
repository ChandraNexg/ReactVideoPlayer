import VideoPlayer from "./components/VideoPlayer";
import 'antd/dist/antd.css';
import Properties from "./components/Properties";
import './App.css';
import BottomView from "./components/BottomView";

function App() {
  return (
    <div className="App">
        <div id="wrapper">
          <div id="left">
              <div className='center'>
                <VideoPlayer/>
              </div>
              <div>
                <BottomView/>
              </div>
          </div>
          <div id="right">
          <div className='centerProperties'>
                <Properties/>
                </div>
          </div>
        </div>
    </div>
  );
}

export default App;
