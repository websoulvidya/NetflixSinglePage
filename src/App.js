import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import RowPost from "./components/RowPost/RowPost";
import  { originals,action,comedy,romance,horror,documentories} from "./Urls"
function App() {
  return (
<div className="App">
<Navbar />
<Banner />
<RowPost url={originals} title="Netflix Originals" />
<RowPost url={action} title ="Action" isSmall/>
<RowPost url={comedy} title ="Comedy" isSmall/>
<RowPost url={romance} title ="Romance" isSmall/>
<RowPost url={horror} title ="Horror" isSmall/>
<RowPost url={documentories} title ="Documentories" isSmall/>
</div>
  );
}

export default App;
