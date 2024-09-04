import Image from "next/image";

export default function LeadershipBody () {
  return (
    <div>
      <div className="relative flex justify-center gap-10 bg-[#231f20] leading-8">
        <div>
          <p className="text-[#aba7a5]">
            <span className="text-white font-semibold">
              Pastors Rob & Becca founded River Valley Church
            </span>{" "}
            in an elementary school in 1995. It has since grown into a thriving
            church with nearly 10,000 in attendance across ten U.S. campuses and
            one international campus (Mbekelweni, eSwatini) with plans for
            further expansion in the future.
          </p>
          <p className="text-[#aba7a5] mt-10">
            Through Pastor Rob’s unique and practical preaching style, vision
            casting and gifts of leadership, he encourages people to live out
            River Valley’s mission of cultivating an authentic, life-changing
            relationship with Jesus Christ. He is the author of the books{" "}
            <span className="text-white font-semibold italic">
              “Change Before You Have To,” “Front Row Leadership,” “Fix It,”
              “Speed of Unity,”
            </span>{" "}
            and his latest release,{" "}
            <span className="text-white font-semibold italic">
              “Keep the Change.”
            </span>
          </p>
        </div>
        <div>
          <p className="text-[#aba7a5]">
            In addition to leading River Valley, he also serves on several
            organizational boards including the Lead Team of the Association of
            Related Churches (ARC), and speaks at events and conferences around
            the world.
          </p>
          <p className="text-[#aba7a5] mt-10">
            Pastor Becca worked for the first 10 years of the church as an
            accountant to support their family before being called into
            full-time ministry herself! Pastor Becca now leads the women’s
            ministry at River Valley and also is the creator of our women’s
            conference, Sparkle, where thousands of women gather every year to
            lift up the name of Jesus!
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-10 bg-[#231f20] mt-40">
        <div className="relative w-1/2 flex flex-col">
          <div className="relative h-[80vh] w-full">
            <Image
              fill={true}
              src="/leadership/group1.jpg"
              alt="pastor Logo"
              className="rounded-lg object-cover object-center"
            />
          </div>
          <p className="text-[#aba7a5] mt-2">Connor Daniel</p>
        </div>
        <div className="relative w-1/2 flex flex-col">
          <div className="relative h-[75vh] w-full">
            <Image
              fill={true}
              src="/leadership/group2.JPG"
              alt="pastor Logo"
              className="rounded-lg object-cover object-center"
            />
          </div>
          <p className="text-[#aba7a5] mt-2">Logan Mac</p>
        </div>
      </div>
    </div>
  );
}
