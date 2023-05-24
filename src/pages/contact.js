import Image from "next/image"
import LinkIN from "../../public/images/linkedin3.svg"
import Email from "../../public/images/email2.svg"
import NavBar from "@/components/Navbar";
import Head from "next/head";


export default function Contact() {
  return (
    <div className="contact">
      <Head>
        <title>Contact | Ysmael Marques</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <NavBar></NavBar>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Interested in my work? Please get in touch:
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="mailto:ysmaelmarkss@gmail.com" className="text-sm font-semibold leading-6 text-gray-900">
                <Image src={Email} alt='email' className="h-5 w-5 mt-1" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/ysmael-marques/" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">
                <Image src={LinkIN} alt='link' className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}