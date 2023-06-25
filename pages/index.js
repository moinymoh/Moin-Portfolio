import { React } from "react"

import Layout from "../components/Layout"
import { FaJava, FaServer, FaTerminal } from "react-icons/fa"

import {
   SiCplusplus,
   SiGo,
   SiPython,
   SiMysql,
   SiPostgresql,
   SiNeo4J,
   SiKubernetes,
   SiDocker,
   SiTerraform,
   SiAmazonaws,
   SiGooglecloud,
   SiMicrosoftazure,
   SiJavascript,
   SiJenkins,
   SiLinux,
   SiApple,
   SiWindows,
   SiReact,
   SiRedux,
   SiSpring,
   SiSpringboot,
   SiAmazondynamodb,
   SiAwslambda,
   SiAmazons3,
   SiAmazon,
   SiAmazonec2,
   SiWasmcloud,
   SiSteamworks,
   SiLeetcode,
   SiGeeksforgeeks,
   SiCodingninjas,
} from "react-icons/si"

import WorkExperience from "@/components/Experience/WorkExperience"
import About from "@/components/About/About"
import Skills from "@/components/Skills/Skills"
import Hero from "@/components/Hero/Hero"
import Certification from "@/components/Certification/Certification"

export default function Home() {
   const skills = [
      {
         title: "React",
         category: "Programming",
         icon: <SiReact color="#3776AB" />,
         proficiency: "Expert",
         proficiencyLevel: 80,
         color: "text-blue-600",
         url: "https://react.dev/",
      },
      {
         title: "Redux",
         category: "Programming",
         icon: <SiRedux color="#00ADD8" />,
         proficiency: "Intermediate",
         proficiencyLevel: 83,
         color: "text-green-500",
         url: "https://redux.js.org/",
      },
      {
         title: "JavaScript",
         category: "Programming",
         icon: <SiJavascript color="#F7DF1E" />,
         proficiency: "Expert",
         proficiencyLevel: 80,
         color: "text-red-500",
         url: "https://www.javascript.com/",
      },
      {
         title: "Java",
         category: "Programming",
         icon: <FaJava color="#E32636" />,
         proficiency: "Intermediate",
         proficiencyLevel: 84,
         color: "text-purple-600",
         url: "https://www.java.com/en/",
      },
      {
         title: "Spring Boot",
         category: "Programming",
         icon: <SiSpringboot />,
         proficiency: "Intermediate",
         proficiencyLevel: 70,
         color: "text-indigo-500",
         url: "https://spring.io/projects/spring-boot",
      },
      {
         title: "C/C++",
         category: "Programming",
         icon: <SiCplusplus color="#00599C" />,
         proficiency: "Intermediate",
         proficiencyLevel: 82,
         color: "text-yellow-500",
         url: "https://isocpp.org/",
      },
      {
         title: "Amazon DynamoDB",
         category: "AWS Services",
         icon: <SiAmazondynamodb color="#FF9900" />,
         proficiency: "Intermediate",
         proficiencyLevel: 86,
         color: "text-pink-500",
         url: "https://aws.amazon.com/dynamodb/",
      },
      {
         title: "AWS Lambda",
         category: "AWS Services",
         icon: <SiAwslambda color="#1A73E8" />,
         proficiency: "Intermediate",
         proficiencyLevel: 70,
         color: "text-orange-500",
         url: "https://aws.amazon.com/lambda/",
      },
      {
         title: "Amazon S3 (Simple Storage Service)",
         category: "AWS Services",
         icon: <SiAmazons3 color="#0078D4" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-teal-500",
         url: "https://aws.amazon.com/s3/",
      },
      {
         title: "AWS IAM (Identity and Access Management)",
         category: "AWS Services",
         icon: <SiAmazon color="#2496ED" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-blue-400",
         url: "https://aws.amazon.com/iam/",
      },
      {
         title: "Amazon EC2 (Elastic Compute Cloud)",
         category: "AWS Services",
         icon: <SiAmazonec2 color="#326CE5" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-green-400",
         url: "https://aws.amazon.com/ec2/",
      },
      {
         title: "AWS CloudFormation",
         category: "AWS Services",
         icon: <SiWasmcloud color="#5C4EE5" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-yellow-400",
         url: "https://docs.aws.amazon.com/cloudformation/index.html",
      },
      {
         title: "Amazon Kinesis Data Firehose",
         category: "AWS Services",
         icon: <SiSteamworks color="#D24939" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-red-400",
         url: "https://aws.amazon.com/kinesis/data-firehose/",
      },
      {
         title: "MacOS",
         category: "OS & Databases",
         icon: <SiApple color="#A1A1A1" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-pink-400",
         url: "https://www.apple.com/macos/",
      },
      {
         title: "Windows",
         category: "OS & Databases",
         icon: <SiWindows color="#0078D7" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-orange-400",
         url: "https://www.microsoft.com/en-us/windows",
      },
      {
         title: "Linux",
         category: "OS & Databases",
         icon: <SiLinux color="#FFFFFF" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-indigo-400",
         url: "https://www.linux.org/",
      },
      {
         title: "MySQL",
         category: "OS & Databases",
         icon: <SiMysql color="#0072C6" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-blue-300",
         url: "https://www.mysql.com/",
      },
      {
         title: "Amazon DynamoDB",
         category: "OS & Databases",
         icon: <SiAmazondynamodb color="#336791" />,
         proficiency: "Intermediate",
         proficiencyLevel: 86,
         color: "text-green-300",
         url: "https://aws.amazon.com/dynamodb/",
      },
      {
         title: "LeetCode",
         category: "Code Archives",
         icon: <SiLeetcode color="#FFFFFF" />,
         proficiency: "Intermediate",
         proficiencyLevel: 85,
         color: "text-indigo-400",
         url: "https://leetcode.com/Moin7_/",
      },
      {
         title: "GeeksforGeeks",
         category: "Code Archives",
         icon: <SiGeeksforgeeks color="#FFFFFF" />,
         proficiency: "Intermediate",
         proficiencyLevel: 80,
         color: "text-indigo-400",
         url: "https://auth.geeksforgeeks.org/user/mo123/practice",
      },
      {
         title: "Coding Ninjas",
         category: "Code Archives",
         icon: <SiCodingninjas color="#FFFFFF" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-indigo-400",
         url: "https://www.codingninjas.com/studio/profile/Mohammad_Moin",
      }
   ]
   const workExperience = [
      {
         company: "Amazon",
         location: "Bangalore, IN",
         logo: "/images/amazon.svg",
         companyUrl: "https://www.amazon.com/",
         positions: [
            {
               title: "Software Developer Engineer Intern, Full Stack",
               duration: "January 2023 - Present",
               responsibilities: [
                  "Designed and implemented Cross utilization of agents across multi tenants, a feature that eliminated the requirement for Agent Migration, resulting in a substantial time savings of 2 hours per day for 10,000 users.",
                  "Designed and developed Real-Time Dashboard (RTD) that provides comprehensive visibility into agents' online activities, empowering managers to effectively monitor and track their performance in real-time.",
                  "Streamlined work item reprioritization by eliminating RTD and self-service page switching, saving managers 1 hour daily in manual efforts.",
                  "Resolved multiple bugs across the software system to enhance functionality and improve user experience."
               ],
            },
         ],
      }
   ]
   const aboutMeText =
      "Hi, I am a Software Engineer proficient in a wide range of programming languages and technologies, including React, Redux, JavaScript, Java, Spring Boot and SQL. I have a strong background in working with various AWS services such as DynamoDB, S3, CloudWatch, Lambda, EC2, RDS, and ECS, among others. I hold a Bachelor's Degree in Computer Science Engineering from VIT (Vellore Institute of Technology). I am passionate about leveraging cutting-edge technologies to tackle real-world challenges and drive innovation in the field of software development."
   return (
      <Layout pageTitle="Moin - SWE">
         <Hero />
         <About aboutMeText={aboutMeText} />
         <WorkExperience workExperience={workExperience} />
         <Skills skills={skills} />
         <Certification />
      </Layout>
   )
}
