import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import AllCrypto from "./pages/AllCrypto"
import WelcomePage from "./pages/WelcomePage"
import LoginPage from "./pages/LoginPage"
import NewsPage from "./pages/NewsPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/welcome" exact element={<WelcomePage />} />
        <Route path="/home" exact element={<Home/>}></Route>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/news" element={<NewsPage />} />
        
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/View" element={<AllCrypto />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
