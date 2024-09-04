import Navbar from "@/components/header/desktop-header";
import Footer from "@/components/footer/Footer";

export default function VideoTwo () {
  return(
    <div>
      <div>
        <Navbar/>
      </div>
      <video controls width="100%" >
        <source src="Accelerated Leader, Episode 2 - Collective Fatigue.mp4" type="video/mp4"/>
      </video>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
