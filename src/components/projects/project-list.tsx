import Image from "next/image";
import Link from "next/link";

export default function ProjectList () {
  const projects = [
    { id: 1, name: "Education for All", description: "Building schools and providing educational resources in rural areas.", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, name: "Clean Water Initiative", description: "Installing water purification systems in communities lacking access to clean water.", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, name: "Healthcare Outreach", description: "Mobile clinics offering basic healthcare services to remote villages.", image: "/placeholder.svg?height=200&width=300" },
    { id: 4, name: "Agricultural Development", description: "Training farmers in sustainable farming techniques to improve crop yields.", image: "/placeholder.svg?height=200&width=300" },
    { id: 5, name: "Youth Empowerment", description: "Vocational training programs for young adults to develop marketable skills.", image: "/placeholder.svg?height=200&width=300" },
  ];

  return (
    <div className="bg-[#161415] py-16">
      <div className="w-[60%] xs:max-md:w-[90%] mx-auto">
        <h2 className="text-white text-3xl font-bold mb-8">Our Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#231f20] p-6 rounded-lg flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-white text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-[#aba7a5] mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block px-4 py-2 bg-[#d3b975] text-[#231f20] rounded-full hover:bg-white transition-colors"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
