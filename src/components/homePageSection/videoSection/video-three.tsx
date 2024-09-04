import Navbar from "@/components/header/desktop-header";
import Footer from "@/components/footer/Footer";

export default function VideoThree () {
  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <video controls width="100%">
        <source src="Just Checking In ... with Dr. Fred Garmon.mp4" type="video/mp4"/>
      </video>

      <div>
        <Footer/>
      </div>

    </div>
  );
}
