import FooterBar from "@/components/FooterBar";
import NavBar from "@/components/NavBar";


const MainLayout = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
      <FooterBar/>
    </>
  );
};

export default MainLayout;