import Image from "next/image"
import Photo2 from "../../public/images/photo2.jpg"
import NavBar from "@/components/Navbar";
import Head from 'next/head';
 
export default function About() {
  return (
    <div className="about">
      <Head>
        <title>About | Ysmael Marques</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <NavBar></NavBar>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About me
            </h1>
            <Image src={Photo2} alt='github' className="m-auto w-1/6 rounded-full mt-6" aria-hidden="true"
            />
            <p className="mt-3 text-lg leading-8 text-gray-700">
            Hello, I am Ysmael Marques.
            </p>
            <p className="mt-6 leading-8 text-gray-700 text-justify">
            Currently, I am a full-stack developer, but fascinated by back-end development and passionate about JavaScript!
            </p>
            <p className="leading-8 text-gray-700 text-justify">
            I have a background in healthcare, where I studied Nutrition, but today, more than ever, I see myself in the tech.
            </p>
            <p className="mt-2 leading-8 text-gray-700 text-justify">
            Particularly, I have a soft spot for web development, from something as simple as a single HTML file to large Next.js applications. Anyone can become a developer, editor, or coder; nobody needs to ask for permission. You can simply open your VScode and build.
            </p>
            <p className="mt-2 leading-8 text-gray-700 text-justify">
            My latest in-person learning experience in the program developed by the Rio de Janeiro City Government, Senac, and Resilia, Programadores Cariocas, created within me an immense desire and need to share what I learned. Today, my greatest goal is to teach coding, as well as code.
            </p>
            <p className="mt-2 leading-8 text-gray-700 text-justify">
            Outside the development and education area, I have some hobbies such as listening to a lot of music (especially the sad ones, I love them) and spending quality time with my friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}