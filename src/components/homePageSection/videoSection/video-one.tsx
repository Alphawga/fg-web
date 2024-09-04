import Navbar from "@/components/header/desktop-header";
import Footer from "@/components/footer/Footer";

export default function VideoOne () {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <video controls width="100%" autoPlay loop>
        <source src="World Missions Report.mp4" type="video/mp4" />
      </video>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
