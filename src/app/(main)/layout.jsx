import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";
import BreakingNews from "@/components/shared/BreakingNews";


const MainLayout = ({children}) => {
  return (
    <>
        <Header></Header> 
        <BreakingNews></BreakingNews>
        <NavBar></NavBar>   
        {children}
    </>
  )
}

export default MainLayout;