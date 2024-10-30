import Image from "next/image";

export default function LeadershipBody () {
  return (
    <div>
      <div className="relative flex xs:max-md:flex-col justify-center gap-10 xs:max-md:gap-5 bg-[#231f20] leading-8">
        <div>
          <p className="text-[#aba7a5]">
            <span className="text-white font-semibold underline">
              Bishop Dr. Uwem Noah Joseph
            </span> was born on February 24, 1972, in Ibiakpan No. 2 Otoro Abak, Abak Local Government Area of Akwa Ibom State.
            His journey in ministry began after a profound encounter with the Lord in June 1993. Since then, he has dedicated his
            life to serving God and leading the Full Gospel Church of God.
          </p>
          <p className="text-[#aba7a5] mt-10 xs:max-md:mt-5">
            With extensive educational background including degrees in Christian Education, Ministry, and Church Administration/Management,
            Bishop Dr. Uwem Noah has served in various capacities within the church. His service includes roles as Sunday School Teacher,
            Prayer Band Director, and Local and District Evangelism Director, showcasing his commitment to spiritual leadership and education.
          </p>
        </div>
        <div>
          <p className="text-[#aba7a5]">
            His academic achievements include a Diploma from Full Gospel School of Theology, a Bachelor`&apos;`,s degree in Christian Education
            from Lagos Christian College, a Master`&apos;`,s Degree in Ministry, and a Doctorate in Church Administration/Management. Recently,
            he completed his B.Sc in Sociology and Anthropology from the University of Uyo in 2023.
          </p>
          <p className="text-[#aba7a5] mt-10 xs:max-md:mt-5">
            As the National Overseer of Nigeria from 2024, Bishop Dr. Uwem Noah Joseph leads with vision and dedication. Together with
            his wife, Rev. (Mrs.) Rose Uwem Noah, they are blessed with four male children: Success, Destiny, Dignity, and Majesty.
            Their ministry focuses on spiritual growth, leadership development, and church expansion throughout Nigeria.
          </p>
        </div>
      </div>

      <div className="flex xs:max-md:flex-col justify-center gap-10 xs:max-md:gap-0 bg-[#231f20] mt-40 xs:max-md:mt-10">
        <div className="relative w-1/2 xs:max-md:w-full flex flex-col">
          <div className="relative h-[80vh] xs:max-md:h-[50vh] w-full">
            <Image
              fill={true}
              src="/pts.jpeg"
              alt="Bishop Dr. Uwem Noah Joseph"
              className="rounded-lg object-cover object-center"
            />
          </div>
          <p className="relative xs:max-md:-top-10 xs:max-md:p-2 text-[#aba7a5] mt-2 xs:max-md:text-white xs:max-md:font-bold xs:max-md:bg-black xs:max-md:bg-opacity-50 xs:max-md:backdrop-blur-md">
            Bishop Dr. Uwem Noah Joseph
            National Overseer
          </p>
        </div>
        <div className="relative w-1/2 xs:max-md:w-full flex flex-col">
          <div className="relative h-[80vh] xs:max-md:h-[50vh] w-full">
            <Image
              fill={true}
              src="/IMG_5826.JPG"
              alt="Bishop Dr. Uwem Noah Joseph and Rev. Rose Uwem Noah"
              className="rounded-lg object-cover object-center"
            />
          </div>
          <p className="relative xs:max-md:-top-10 xs:max-md:p-2 text-[#aba7a5] mt-2 xs:max-md:text-white xs:max-md:font-bold xs:max-md:bg-black xs:max-md:bg-opacity-50 xs:max-md:backdrop-blur-md">
            Bishop Dr. Uwem Noah Joseph & Rev. Rose Uwem Noah
          </p>
        </div>
      </div>

      <div className="relative flex xs:max-md:flex-col justify-center gap-10 xs:max-md:gap-5 bg-[#231f20] leading-8 mt-20">
        <div>
          <p className="text-[#aba7a5]">
            <span className="text-white font-semibold underline">
              Rev. (Mrs.) Rose Uwem Noah
            </span>, born on October 21, 1987, is a native of Abak L.G.A., Akwa Ibom State, Nigeria.
            She is married to Bishop Dr. Uwem Noah Joseph and serves as the National Women President of the Full Gospel Church of God.
          </p>
          <p className="text-[#aba7a5] mt-10 xs:max-md:mt-5">
            Rev. Rose is a multifaceted professional, working as an Administrator, Educationist, Pastor, and Digital Creator.
            She is also deeply involved in humanitarian services, demonstrating her commitment to serving others and making a positive impact in her community.
          </p>
        </div>
        <div>
          <p className="text-[#aba7a5]">
            Her impressive educational background includes an HND, PGDE, and M.Ed, with a Ph.D. currently in progress.
            This academic prowess complements her roles in the church and society.
          </p>
          <p className="text-[#aba7a5] mt-10 xs:max-md:mt-5">
            Rev. Rose is known for her fear of God, value for souls, and dedication to reaching out to the poor and needy.
            Her love for service, coupled with her hardworking nature and humility, makes her an integral part of the leadership team
            at Full Gospel Church of God, supporting the vision and ministry of her husband, Bishop Dr. Uwem Noah Joseph.
          </p>
        </div>
      </div>
    </div>
  );
}
