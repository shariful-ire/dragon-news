import Header from "@/components/Header";
import NavBar from "@/components/NavBar";


const HomeLayout = ({children}) => {
  return (
    <>
        <Header></Header> 
        <NavBar></NavBar>   
        {children}
    </>
  )
}

export default HomeLayout;