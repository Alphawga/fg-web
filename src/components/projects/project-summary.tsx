export default function ProjectSummary () {
  return (
    <div className="bg-[#231f20] py-16">
      <div className="w-[60%] xs:max-md:w-[90%] mx-auto text-[#aba7a5]">
        <h2 className="text-white text-3xl font-bold mb-6">Impact Summary</h2>
        <p className="mb-4">
            Since its inception, the Africa Project has made significant strides in improving lives across the continent:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Built 50 schools, providing education to over 10,000 children</li>
          <li>Installed 100 water purification systems, serving 500,000 people</li>
          <li>Conducted 200 mobile clinic missions, treating 100,000 patients</li>
          <li>Trained 5,000 farmers in sustainable agriculture techniques</li>
          <li>Empowered 2,000 youth through vocational training programs</li>
        </ul>
        <p>
            These achievements represent not just numbers, but transformed lives and communities. The Africa Project continues to expand its reach, fostering hope and creating opportunities for a brighter future across the continent.
        </p>
      </div>
    </div>
  );
}
