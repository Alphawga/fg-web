export default function BackgroundVideo () {
  return (
    <div className="absolute h-screen xs:max-md:h-full w-full overflow-hidden skeleton">
      <div className="absolute size-full bg-gradient-to-t from-black from-[40%] to-[80%] to-gray-800 opacity-70 xs:max-md:opacity-50"></div>
      <video className="size-full object-cover" autoPlay loop muted>
        <source src="/home/heroSectionBGVideo.mp4" type="video/mp4" className="size-full" />
      </video>
    </div>
  );
}
