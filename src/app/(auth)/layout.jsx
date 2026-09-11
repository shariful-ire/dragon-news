import NavBar from '@/components/NavBar';


const AuthLayout = ({children}) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  )
}

export default AuthLayout;