import Image from "next/image";

export default function ProjectBody () {
  return (
    <div className="text-[#aba7a5] space-y-6">
      <h2 className="text-white text-3xl font-bold mb-4">Bishop Alex: Africa Project Coordinator</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/3">
          <Image
            src="/bishop_alex_1.JPG"
            alt="Bishop Alex"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p>
            Bishop Alex, serving as the Africa Project Coordinator, brings a wealth of experience and passion to his role. With over two decades of ministry and humanitarian work across Africa, he has been instrumental in developing and implementing transformative projects that address the spiritual and physical needs of communities.
          </p>
          <p className="mt-4">
            His vision for the Africa Project is to create sustainable change through education, healthcare, and spiritual development. Bishop Alex`&apos;`s approach combines local partnerships with international resources to ensure that each project is culturally relevant and long-lasting in its impact.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/2">
          <Image
            src="/leadership/couple-pastor.jpg"
            alt="Bishop Alex and his wife"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/IMG_0979.JPG"
            alt="Bishop Alex's family"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <p>
        Under his leadership, the Africa Project has expanded its reach to over 15 countries, touching the lives of thousands of individuals and families. His dedication to empowering local leaders and fostering self-sufficiency has become a hallmark of the project`&apos;`s success.
      </p>
    </div>
  );
}
