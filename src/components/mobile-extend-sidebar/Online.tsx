import Link from "next/link";

export default function Online () {
  return (
    <div className="h-full overflow-auto">
      <h3 className="text-white font-medium tracking-wider">ONLINE LOCATIONS</h3>
      <div className="text-[#ABA7A5]">
        <Link href="/" className="block py-5 border-b border-[#ABA7A5] hover:text-white">
          <h3 className="font-bold">Watch Live</h3>
          <p className="text-sm font-light">Saturday 4pm | Sunday 9am</p>
        </Link>

        <Link href="/" className="block mt-5 hover:text-white">
          <h3 className="font-bold">Online Campus</h3>
          <p className="text-sm font-light">We&apos;d love for you to be a part of our Online Campus. No matter where are are in the world.</p>
        </Link>
        <Link href="/" className="block mt-5 hover:text-white">
          <h3 className="font-bold">Facebook Group</h3>
          <p className="text-sm font-light">We love providing an online experience, but we truly believe life is better connected!</p>
        </Link>
      </div>
    </div>
  );
}
