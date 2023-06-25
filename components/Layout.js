import React from "react"
import Head from "next/head"
import Navbar from "./NavBar/NavBar"
import { Contact } from "./Contact/Contact"

const Layout = ({ children, pageTitle }) => {
   return (
      <>
         <Head>
            <title>{pageTitle}</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <meta
               name="description"
               content="Software engineer skilled in Programming and Technologies like React, Redux, JavaScript, Java, SpringBoot, and AWS Services. Bachelors in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology."
            />
            <meta
               name="keywords"
               content="software engineer, programming, Java, React, javascript, Redux, AWS, Spring, computer science"
            />
            <meta name="author" content="Mohammad Moin" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               property="og:title"
               content="Mohammad Moin - Software Engineer"
            />
            <meta
               property="og:description"
               content="Software engineer skilled in Programming and Technologies like React, Redux, JavaScript, Java, SpringBoot, and AWS Services. Bachelors in Computer Science Engineering. Interested in working on Revolutionary technologies and solving real-world problems through technology."
            />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
         </Head>
         <header>
            <Navbar />
         </header>
         <main className="p-4">{children}</main>
         <footer>
            <Contact />
         </footer>
      </>
   )
}

export default Layout
