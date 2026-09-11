import Header from "@/components/Header";
import NavBar from "@/components/NavBar";


const MainLayout = ({children}) => {
  return (
    <>
        <Header></Header> 
        <NavBar></NavBar>   
        {children}
    </>
  )
}

export default MainLayout;