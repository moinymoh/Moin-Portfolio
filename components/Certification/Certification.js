import React from "react"

const Certification = () => {
   const certifications = [
      {
         title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
         provider: "Amazon AWS",
         date: "May 2022",
         link: "https://www.credly.com/badges/9c223284-5102-4078-a193-67b5c11ce7db/print",
         badge: "/images/AmazonCloud.jpg",
      },
      {
         title: "Certificate Of Excellence",
         provider: "Coding Ninjas",
         date: "May 2022",
         link: "https://drive.google.com/file/d/1pyzBoCT_z4Wroxm7VmHaYWn2pCqBCdQl/view",
         badge: "/images/CodingNinja.jpg",
      },
      {
         title: "Artificial Intelligence Foundation - Gold",
         provider: "Nasscom",
         date: "May 2022",
         link: "https://drive.google.com/file/d/16xAOKugSgYJ3VhFkYH0NvjqmA-P3Ss_p/view?usp=drive_link",
         badge: "/images/ArtificialIntelligence.png",
      },
   ]

   return (
      <section
         id="certifications"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
            CERTIFICATIONS
         </h2>
         <div className="container mx-auto">
            <div className="flex flex-nowrap overflow-x-auto px-4 gap-4 justify-content-center md:justify-center">
               {certifications.map((certification, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <a
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                           src={certification.badge}
                           alt={`${certification.title} badge`}
                           width={200}
                           height={200}
                           className="w-42 h-42 mb-4 object-contain rounded transform transition-transform duration-300 hover:scale-105"
                        />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Certification
