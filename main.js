import Tracker from "./component/pricetracker";
import ReactDom from "react-dom/client";
import Header from "./component/header";
import Footer from "./component/footer";
function App()
{
 return(
    <>
    <Header/>
    <Tracker/>
   <Footer/>
    </>
 )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>)