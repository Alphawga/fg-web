export default function styleHeader (
  heroID: string,
  updateHeaderState: (id: string) => void,
  updateHeaderStyle: (id: string) => void,
  scrollPosition: number,
  updateScrollPosition: (id: number) => void
) {
  const SCROLL_HEIGHT_TO_HIDE_HEADER = 250;
  const heroTop = document.getElementById(heroID)?.getBoundingClientRect().top;

  if (typeof heroTop === "number" && heroTop < -SCROLL_HEIGHT_TO_HIDE_HEADER) {
    updateHeaderState("hide");
  } else {
    updateHeaderState("show");
  }

  if (typeof heroTop === "number" && heroTop < scrollPosition) {
    updateHeaderStyle("bg-transparent");
  } else {
    updateHeaderStyle("bg-[#231f20]");
    updateHeaderState("show");

    setTimeout(() => {
      updateHeaderStyle("bg-transparent");
    }, 500);
  }

  if (typeof heroTop === "number") {
    updateScrollPosition(heroTop);
  }
}
