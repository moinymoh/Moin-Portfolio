import Link from "next/link"
import React from "react"
import { SiDocusign, SiFiles, SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si"

export const Contact = () => {
   const userName = "moinymoh"

   const socialLinks = {
      github: "https://github.com/mpasha400",
      linkedin: "https://www.linkedin.com/in/moiin/",
      twitter: "https://twitter.com/Mohamma93073097",
      resume: "https://drive.google.com/file/d/1yU4UjGus4k8abkmtWlyIlflTnakfKv2e/view?usp=sharing",
      email: "mailto:mohdmoin4011@gmail.com",
   }

   const renderIcon = (key) => {
      switch (key) {
         case "email":
            return <SiGmail color="#DB4437" />
         case "github":
            return <SiGithub color="black" />
         case "linkedin":
            return <SiLinkedin color="#0077B5" />
         case "twitter":
            return <SiTwitter color="#1DA1F2" />
         case "resume":
            return <SiDocusign color="#0077B5" />
         default:
            return null
      }
   }

   return (
      <section
         id="contact"
         className="py-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
         <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
               CONTACT
            </h2>
            <ul className="flex justify-center items-center space-x-8">
               {Object.entries(socialLinks).map(([key, value], index) => (
                  <Link key={key} href={value} target="_blank">
                     <div className="text-5xl p-3 rounded-full bg-white shadow-md hover:bg-gray-200 transition-transform duration-300 hover:scale-110">
                        {renderIcon(key)}
                     </div>
                  </Link>
               ))}
            </ul>
         </div>
      </section>
   )
}
