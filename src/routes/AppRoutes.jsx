import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ReportIssue from "../pages/ReportIssue";
import NotFound from "../pages/NotFound";
import MyReports from "../pages/MyReports";

function AppRoutes(){
    return(
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path = "/report" element = {<ReportIssue/>}/>
            <Route path = "*" element = {<NotFound/>}/>
            <Route path="/my-reports" element={<MyReports />} />
        </Routes>
    )
}

export default AppRoutes;