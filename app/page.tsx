import Image from "next/image";
import ToggleColor from "./ToggleTheme/Color/ToggleColor";
import Navbar from "./Components/Drawer/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
export default function Home() {
  return (
<>
<div className=" ">
  <Navbar />
<Landing/>

    </div>
</>
  );
}
