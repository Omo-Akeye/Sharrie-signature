import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer, { footerSections } from "./components/Footer";
import ScrollToTop from "./hooks/scrolltop";


export default function AppLayout() {
  return (
    <div >
        <Nav/>
        <Outlet/>
        <Footer sections={footerSections}/>
        <ScrollToTop/>
    </div>
  )
}
