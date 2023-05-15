import Focuser from "./Focuser/Focuser.js";
import ProfileWithSearch from "./Profile/ProfileWithSearch.js";
import TimerWrapper from "./Timer/TimerWrapper.js";
import Video from "./Video/video.js";

function App() {
  return (
    <div className="App">
      <Focuser />
      <Video />
      <TimerWrapper />
      <ProfileWithSearch />
    </div>
  );
}

export default App;
