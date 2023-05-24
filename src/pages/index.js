import MyDropdown from "@/components/Menu"
import Head from "next/head";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Ysmael Marques</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="about">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="flex">
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hello there!
              </h1>
              <div className="flex">
                <MyDropdown>
                </MyDropdown>
              </div>

            </div>

            <div className="text-center flex">
            </div>
            <div className="text-center">
              <p className="mt-5 text-start leading-8 text-gray-600 text-justify">
                back-end software developer in search of <strong className="text-black">improvement</strong> and I&apos;m <strong className="text-black">loving</strong> what I do.
              </p>
              <p className="text-start leading-8 text-gray-600">
                trying to make a difference with code, education and empathy,
              </p>
              <p className="text-start leading-8 text-gray-600">
                and open to new challenges
              </p>
            </div>
            <div className="mt-6 flex-row items-center justify-center gap-x-6">
              <p className="mt-5 text-start w-96 leading-8 text-gray-600">based in Rio de Janeiro - <strong className="text-black">Brazil</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}