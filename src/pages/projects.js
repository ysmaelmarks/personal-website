import ProjectsConfigs from "../components/ProjectDirection"
import {
    ArrowUpCircleIcon
} from '@heroicons/react/24/outline'
import NavBar from "@/components/Navbar";
import Head from 'next/head';


export default function Project() {
    return (
        <div className="projects">
            <Head>
                <title>Projects | Ysmael Marques</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <NavBar></NavBar>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center mt-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Projects
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Here are some of my projects of which I am proud
                        </p>
                        <ProjectsConfigs icon="star" direction="true"
                            titulo="Javascript Tutorship"
                            texto="My latest personal project is focused on exploring the education field. The purpose is to teach Javascript to beginners, assist intermediates with project ideas, and mentor individuals with the knowledge I already possess. The approach I plan to take is to introduce and demonstrate the practical applications of Javascript, showing how it works and what it can be used for. You can find me through Discord." icon2="discord" gitLink="https://discord.gg/xGFS9yVBwc" />
                        <ProjectsConfigs icon="globe"
                            titulo="This website"
                            texto="This website was my latest frontend project developed based on my need to have my own website to serve as a portfolio. Through this project, I was able to practice some of the React skills I learned at Senac/Resilia and expand my knowledge of Next.js." 
                            gitLink="https://github.com/ysmaelmarks/personal-website"
                            />
                        <ProjectsConfigs icon="puzzle"
                            direction="true"
                            titulo="GPT-3 WPP"
                            texto="GPTWPP was my latest backend project, which was developed due to my need to have an AI assistant closer to me in my daily life. In summary, I used Twilio, Express, and the OpenAI library. More details can be found on my Github." gitLink="https://github.com/ysmaelmarks/wpp-chatgpt" />
                        <ProjectsConfigs icon="academic"
                            titulo="Resilia Projects"
                            texto="Project organization for group projects carried out at Resilia. In all of these projects, I worked as a Squad Leader and co-facilitator. During the course, we utilized HTML, CSS, Javascript, Node.js, MySQL, React, Bootstrap, GIT, Agile methodologies, PowerBI, and Render."
                            gitLink="https://github.com/squad4resilia" />
                        <ProjectsConfigs icon="cog"
                            direction="true"
                            titulo="Resilient REST JS"
                            texto="Resilient Rest JS was a project developed through the Resilient Rest Java challenge. Although I completed the challenge in Java, I had the idea to complete the same challenge in JS. The challenge was to create a proxy for a weather API, but to use cache and circuit breakers to give more robustness to the API. I can say that the most challenging part of the project was finding a library that could assist with the circuit breaker."
                            gitLink="https://github.com/ysmaelmarks/resilient-rest-JS" />
                        <ProjectsConfigs icon="cog"
                            titulo="Microservice CRUD"
                            texto="API CRUD that connects to an online database (MongoDB). This was my first API that I developed in a concrete and professional manner. I also built it to understand the processes of a microservice. More details can be found on my Github."
                            gitLink="https://github.com/ysmaelmarks/microservice-crud" />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mr-4'>
                <a href='#'><ArrowUpCircleIcon className="h-8 w-6" aria-hidden="true" /></a>
            </div>
        </div>
    )
}