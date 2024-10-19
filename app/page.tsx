
import Features from "@/components/Features";
import Header from "@/components/Header";
import Vet from "@/NewComponents/Vet"
import Ending from "@/NewComponents/Ending";
import Landing from "@/components/Landing";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <div className="relative">
            <Header />
            <Landing />
            <Features />
            <Pricing/> 
            <Vet />
            <Ending /> 
        </div>
  );
}




