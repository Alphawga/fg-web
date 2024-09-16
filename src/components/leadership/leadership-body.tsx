import Image from "next/image";

export default function LeadershipBody () {
  return (
    <div>
      <div className="relative flex xs:max-md:flex-col justify-center gap-10 xs:max-md:gap-5 bg-[#231f20] leading-8">
        <div>
          <p className="text-[#aba7a5]">
            <span className="text-white font-semibold underline">
              Alex and Leah Abiola
            </span> served as the overseers to Nigeria and Superintendents to anglophone
            West Africa and currently serving as the Africa Project Coordinator
            With a ministry that includes ministerial education, medical
            missions, church building family and marital counseling, substance
            abuse counseling, and outreach to children and poor, they have
            touched many lives.
          </p>
          <p className="text-[#aba7a5] mt-10 xs:max-md:mt-5">
            They served as missionaries to the Republic of Ireland from December
            2004 to July 2010. From 2010-2012, they were missionaries in
            Nigeria. From 2012 to 2024, they have served as
            missionaries/Administrative Overseer, and from 2018 to 2024 also
            serve as Superintendent to the anglophone West Africa countries.
            Living in Lagos, Nigeria, the Abiolas are strategically well located
            to minister to the entire country and the surrounding countries.
          </p>
        </div>
        <div>
          <p className="text-[#aba7a5]">
            The Abiolas work fervently and constantly, abounding in the work of
            the lord, demonstrating God&apos;s love, wisdom, and peace that the
            church may stand perfect and complete in order to make progress and
            move forward in all the will of God, fulfilling fearlessly the
            calling of God with effectiveness.
          </p>
          <p className="text-[#aba7a5] mt-10 xs:max-md:mt-5">
            Alex and Leah coordinate short-term mission trips to Nigeria and the
            anglophone countries of Western Africa and the whole Africa in the
            area of ministerial training, leadership empowerment, and medical
            assistance. One of their projects is to teach pastors to be
            self-supporting and effective leaders. They also help the needy and
            provide medical assistance. In the future, they would like also to
            build schools, hospitals, orphanages, and churches.
          </p>
        </div>
      </div>

      <div className="flex xs:max-md:flex-col justify-center gap-10 xs:max-md:gap-0 bg-[#231f20] mt-40 xs:max-md:mt-10">
        <div className="relative w-1/2 xs:max-md:w-full flex flex-col">
          <div className="relative h-[80vh] xs:max-md:h-[50vh] w-full">
            <Image
              fill={true}
              src="/leadership/group1.jpg"
              alt="pastor Logo"
              className="rounded-lg object-cover object-center"
            />
          </div>
          <p className="relative xs:max-md:-top-10 xs:max-md:p-2 text-[#aba7a5] mt-2 xs:max-md:text-white xs:max-md:font-bold xs:max-md:bg-black xs:max-md:bg-opacity-50 xs:max-md:backdrop-blur-md">
            Connor Daniel
          </p>
        </div>
        <div className="relative w-1/2 xs:max-md:w-full flex flex-col">
          <div className="relative h-[80vh] xs:max-md:h-[50vh] w-full">
            <Image
              fill={true}
              src="/leadership/group2.jpg"
              alt="pastor Logo"
              className="rounded-lg object-cover object-center"
            />
          </div>
          <p className="relative xs:max-md:-top-10 xs:max-md:p-2 text-[#aba7a5] mt-2 xs:max-md:text-white xs:max-md:font-bold xs:max-md:bg-black xs:max-md:bg-opacity-50 xs:max-md:backdrop-blur-md">
            Logan Mac
          </p>
        </div>
      </div>
    </div>
  );
}
