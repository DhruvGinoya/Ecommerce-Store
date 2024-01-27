import HeroSection from './components/HeroSection'
import { useProductContext, AppContext } from './context/productcontext';


const About = () => {

  // const{myName} = useProductContext(AppContext);

  const data ={
    name: "DG'S Ecommerce Store" 
   }

  return (
    <>
    {/* {myName} */}
   <HeroSection myData={data}/>{""}
   </>
  )
}

export default About
