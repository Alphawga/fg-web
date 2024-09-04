
import SideNavLinks from "@/components/side-nav-links/side-nav-links";
import { experienceLinks, learnLinks, goLinks } from "@/contents/sidebar-links";

type Props = {
  option: string;
  setOption: (state: string) => void;
};

export default function DesktopSideNavBar ({ option, setOption }: Props) {
  return (
    <div
      onMouseEnter={() => setOption(option)}
      className=" hidden group-hover:block absolute top-0 left-0 h-screen w-1/3 bg-[#231f20] animate-accordion-left pl-[130px] pr-14 pt-28"
    >
      {option === "experience" &&  <SideNavLinks link={experienceLinks} /> }
      {option === "learn" && <SideNavLinks link={learnLinks} /> }
      {option === "go" && <SideNavLinks link={goLinks} /> }
    </div>
  );
}
