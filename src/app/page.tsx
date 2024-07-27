import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard3d } from "@/components/project-card-3d";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import experiences from "@/lib/experiences.json";
import me from "@/lib/img/me.png";
import projects from "@/lib/projects.json";
import { AtSign, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const name = [
        { text: "Mohamed" },
        { text: "Irfan" },
    ]

    return (
        <div className="flex flex-col overflow-x-hidden">
            {/* Hero */}
            <header className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 mt-16">
                <div className="flex flex-col gap-2 w-full">
                    <TypewriterEffectSmooth words={name} />
                    <Reveal
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    >
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            <span className="text-3xl font-bold text-yellow-500"> Full Stack </span> Web Developer
                        </h3>
                    </Reveal>

                    <Reveal
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                    >
                        <p className="leading-7 text-md">
                            I plan, design, build, test and deploy software. With the help of coffee of course.
                        </p>
                    </Reveal>
                    <div className="flex gap-4">
                        <TooltipProvider>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="https://www.linkedin.com/in/mohamed-irfan-b9021a17b/" target="_blank">
                                            <Button variant="secondary" size="icon">
                                                <Linkedin />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="https://github.com/moirfan-dev" target="_blank">
                                            <Button variant="secondary" size="icon">
                                                <Github />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="mailto:mohamedirfanpopz@gmail.com" target="_blank">
                                            <Button variant="secondary" size="icon">
                                                <AtSign />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                        </TooltipProvider>
                        <a href="">
                            <Button className="ml-10 cursor-pointer bg-yellow-500">Resume</Button>
                        </a>
                    </div>
                </div>
                <div className="flex relative w-full h-full rounded-xl ">
                    <Image
                        src={me}
                        alt="Me"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-xl object-cover"
                    />
                </div>
            </header>
            <Separator />
            {/* About */}
            <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
                <h2 id="about" className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    About Me
                </h2>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                >
                    <p className="leading-7">
                        I build dynamic, user-centric web applications using modern technologies like React and Node.js. My expertise covers both front-end and back-end development, ensuring seamless integration and functionality. Additionally, I specialize in developing robust and scalable applications using .NET Core, providing a strong foundation for enterprise-level solutions.
                        <br />
                        <br />
                        Presently, my primary focus revolves around mastering the art of building high-quality and scalable software applications, continuously refining my skills in both frontend and backend development. As the saying goes, <em>"Once you go fullstack, you never go back"</em>.
                        <br />
                        <br />
                        When I'm not coding, I usually play video games, play cricket, or binge-watch anime.
                    </p>

                </Reveal>
            </section>
            <Separator />
            {/* Experience */}
            <section id="experiences" className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full">
                    Where I've Worked
                </h2>
                <div className="flex flex-col gap-4 md:hidden">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description}
                            skills={experience.skills}
                        />
                    ))}
                </div>
                <TracingBeam className="px-6 hidden md:flex md:flex-col">
                    <div className="flex flex-col gap-4">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.title}
                                title={experience.title}
                                company={experience.company}
                                date={experience.date}
                                description={experience.description}
                                skills={experience.skills}
                            />
                        ))}
                    </div>
                </TracingBeam>
            </section>
            <Separator />
            {/* Projects */}
            <section id="projects" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Projects Done
                </h2>
                <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
                    {projects.map((projects, index) => (
                        <Reveal
                            key={projects.title}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                        >
                            <ProjectCard3d
                                title={projects.title}
                                type={projects.type}
                                description={projects.description}
                                imageUrl={projects.imageUrl}
                                githubUrl={projects.githubUrl}
                                skills={projects.skills}
                            />
                        </Reveal>
                    ))}
                </div>
            </section>
            <Separator />
            {/* Skills */}
            <section id="skills" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Skills & Tools
                </h2>
                <p className="leading-7 text-center">
                    My primary focus lies in frontend development and backend development. Full-stack is the way to go xD.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start">
                    {/* Languages */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Languages
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* JavaScript */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">JavaScript</p>
                                </div>
                                {/* TypeScript */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">TypeScript</p>
                                </div>
                                {/* C# */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 255.582 290.108" className="hover:animate-spin">
                                        <path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc"/>
                                        <path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068"/>
                                        <path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091"/>
                                        <g fill="#fff">
                                            <path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/>
                                            <path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">C#</p>
                                </div>
                            </div>

                        </div>
                    </Reveal>

                    {/* Frontend */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Frontend
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* CSS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" className="hover:animate-spin">
                                        <path d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z" opacity=".35"></path><path fill="#f2f2f2" d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"></path><polygon fill="#2b59a1" points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"></polygon><path fill="#40396e" d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"></path><polygon fill="#2785bd" points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"></polygon><polygon fill="#d9eeff" points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"></polygon><polygon fill="#d9eeff" points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"></polygon><polygon fill="#d9eeff" points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"></polygon><path fill="#f2f2f2" d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">CSS</p>
                                </div>

                                {/* HTML */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">HTML</p>
                                </div>

                                {/* React */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="animate-spin hover:animate-none">
                                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">React</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Backend */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Backend
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* Express */}

                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                        <linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1" x1="30.982" x2="30.982" y1="21.203" y2="43.514" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1)" d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2" x1="44.5" x2="44.5" y1="16" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2)" d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3" x1="17.54" x2="17.54" y1="15" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3)" d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Express</p>
                                </div>

                                {/* Dot Net Core */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <defs>
                                        <style>
                                            {`
                                            .cls-1 {
                                                fill: #5c2d91;
                                            }
                                            .cls-2, .cls-3 {
                                                fill: #fff;
                                            }
                                            .cls-2 {
                                                opacity: 0.1;
                                            }
                                            .cls-4 {
                                                fill: #f2f2f2;
                                            }
                                            `}
                                        </style>
                                        </defs>
                                        <circle className="cls-1" cx="32" cy="32" r="32"/>
                                        <path className="cls-2" d="M9.82,9A32,32,0,1,0,55,54.18Z"/>
                                        <path className="cls-3" d="M7.4,37.25a1.35,1.35,0,0,1-1-.42,1.38,1.38,0,0,1-.41-1,1.4,1.4,0,0,1,.41-1,1.34,1.34,0,0,1,1-.43,1.37,1.37,0,0,1,1,.43,1.39,1.39,0,0,1,.42,1,1.37,1.37,0,0,1-.42,1A1.38,1.38,0,0,1,7.4,37.25Z"/>
                                        <path className="cls-3" d="M27.27,37H24.65L15.28,22.46a6,6,0,0,1-.58-1.14h-.08a18.72,18.72,0,0,1,.1,2.5V37H12.59V18.77h2.77l9.12,14.28q.57.89.74,1.22h.05a19.28,19.28,0,0,1-.13-2.68V18.77h2.13Z"/>
                                        <path className="cls-3" d="M41.69,37H32V18.77h9.24V20.7H34.18v6.06h6.58v1.92H34.18V35h7.52Z"/>
                                        <path className="cls-3" d="M56,20.7H50.7V37H48.57V20.7H43.33V18.77H56Z"/>
                                        <path className="cls-4" d="M26.12,49.4a4.93,4.93,0,0,1-2.32.49,3.74,3.74,0,0,1-2.87-1.15,4.26,4.26,0,0,1-1.08-3,4.46,4.46,0,0,1,1.21-3.26,4.12,4.12,0,0,1,3.08-1.24,4.93,4.93,0,0,1,2,.35v1a4,4,0,0,0-2-.5,3.06,3.06,0,0,0-2.35,1,3.64,3.64,0,0,0-.9,2.58,3.47,3.47,0,0,0,.84,2.45,2.86,2.86,0,0,0,2.21.91,4.14,4.14,0,0,0,2.19-.56Z"/>
                                        <path className="cls-4" d="M26.12,49.4a4.93,4.93,0,0,1-2.32.49,3.74,3.74,0,0,1-2.87-1.15,4.26,4.26,0,0,1-1.08-3,4.46,4.46,0,0,1,1.21-3.26,4.12,4.12,0,0,1,3.08-1.24,4.93,4.93,0,0,1,2,.35v1a4,4,0,0,0-2-.5,3.06,3.06,0,0,0-2.35,1,3.64,3.64,0,0,0-.9,2.58,3.47,3.47,0,0,0,.84,2.45,2.86,2.86,0,0,0,2.21.91,4.14,4.14,0,0,0,2.19-.56Z"/>
                                        <path className="cls-4" d="M30.21,49.89A2.78,2.78,0,0,1,28.08,49a3.11,3.11,0,0,1-.79-2.23,3.24,3.24,0,0,1,.83-2.36,3,3,0,0,1,2.23-.85,2.69,2.69,0,0,1,2.09.83,3.28,3.28,0,0,1,.75,2.29,3.22,3.22,0,0,1-.81,2.3A2.84,2.84,0,0,1,30.21,49.89Zm.07-5.47a1.83,1.83,0,0,0-.73-.19,1.23,1.23,0,0,0-1,.58,2.68,2.68,0,0,0-.41,1.58v3.06h-1v-6h1V45h0a2.1,2.1,0,0,1,.63-1,1.43,1.43,0,0,1,.94-.35,1.57,1.57,0,0,1,.57.08Z"/>
                                        <path className="cls-4" d="M43.72,47H39.49A2.24,2.24,0,0,0,40,48.54a1.86,1.86,0,0,0,1.42.54,3,3,0,0,0,1.86-.67v.9a3.48,3.48,0,0,1-2.09.57,2.54,2.54,0,0,0,.54,1.68,2.55,2.55,0,0,0,2.37.82,2.69,2.69,0,0,0,.78-1.85,2.68,2.68,0,0,0-.29-1.8,2.19,2.19,0,0,0-1.82-.76,3.18,3.18,0,0,0-.64,2.12Zm-1-.81a2,2,0,0,0-.4-1.29,1.37,1.37,0,0,0-1.1-.46,1.55,1.55,0,0,0-1.15.49,2.21,2.21,0,0,0-.59,1.27Z"/>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Dot Net Core</p>
                                </div>

                                {/* Node */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Node</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Database */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Database
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                               {/* Microsoft SQL */}
                               <div className="flex flex-col items-center justify-center">
                                    <svg width="100" height="100" viewBox="0 -141.54 1478.201 1478.201" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="matrix(.569 0 0 .569 199.451 -82.735)">
                                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2901.952" y1="923.573" x2="-2061.249" y2="1420.331" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)">
                                    <stop offset="0" stop-color="#909ca9"/>
                                    <stop offset="1" stop-color="#ededee"/>
                                    </linearGradient>
                                    <path fill="url(#a)" d="M1410.773 814.195l-286.9 93.683-249.599 110.161-69.829 18.435c-17.784 16.916-36.431 34.049-56.599 51.397-22.119 19.082-42.72 36.433-58.553 49.008-17.564 13.88-43.587 39.902-56.814 56.38-19.735 24.721-35.348 50.96-42.071 71.13-11.928 36.433-6.07 73.297 16.916 107.346 29.492 43.369 88.261 87.606 156.785 117.749 34.916 15.4 93.683 35.132 137.92 46.19 73.512 18.651 215.771 38.819 294.054 41.857 15.828.65 37.082.65 37.947 0 1.737-1.088 13.881-24.289 27.979-53.129 48.142-98.238 82.838-190.402 101.703-269.119 11.276-47.706 20.166-111.246 26.019-186.492 1.521-21.036 2.169-91.514.868-115.37-1.953-39.033-5.423-70.692-10.84-101.703-.868-4.555-1.088-8.676-.652-8.892.865-.65 3.467-1.517 38.815-11.712l-7.153-16.912v-.005h.004zm-65.49 38.386c2.602 0 9.539 66.573 11.273 108.646.436 8.89.216 14.745-.216 14.745-1.733 0-36.649-20.599-61.583-36.212-21.687-13.663-62.888-40.988-69.393-46.192-2.173-1.517-1.957-1.733 15.828-7.807 30.14-10.194 101.706-33.18 104.091-33.18zm-146.161 48.143c1.953 0 6.937 2.816 18.865 10.191 44.671 27.974 105.393 61.805 131.415 73.083 8.022 3.469 8.887 2.166-9.542 14.746-39.468 26.889-88.697 53.344-148.983 80.018-10.624 4.771-19.514 8.456-19.73 8.456-.432 0 .865-5.418 2.598-11.925 14.53-54.001 22.772-108.647 23.208-152.452.216-21.687.216-21.687 2.169-22.334-.436.217-.22.217 0 .217zm-30.142 11.492c1.297 1.299.432 49.877-1.304 63.104-3.903 31.662-9.975 61.153-19.947 94.335-2.386 8.018-4.558 14.745-4.987 15.177-.872 1.083-30.581-27.975-40.339-39.251-16.916-19.518-30.141-39.035-39.9-58.117-4.988-9.759-12.793-28.84-12.144-29.492 3.469-2.385 117.753-46.622 118.621-45.756zm-141.826 55.731c.216 0 .432 0 .652.216.432.434 1.953 3.905 3.254 7.807 6.937 18.867 22.548 46.624 35.997 64.407 14.746 19.518 34.048 40.334 50.091 53.996 5.207 4.337 9.975 8.456 10.624 9.108 1.304 1.302 1.737 1.083-33.612 14.53-40.981 15.613-85.656 31.226-136.835 47.706a6825.474 6825.474 0 0 0-36.643 11.928c-1.955.652-1.303-.434 4.335-9.323 25.371-39.686 63.97-117.536 85.657-172.618 3.687-9.542 7.373-19.082 8.025-21.251.868-3.038 1.95-4.121 4.768-5.64 1.518-.43 3.038-.866 3.687-.866zm-43.367 17.999c.649.436-10.411 23.637-21.254 44.889-21.036 40.985-44.022 81.323-74.815 130.331-5.204 8.456-10.19 16.265-10.842 17.132-1.083 1.519-1.519 1.083-4.988-5.638-7.373-14.53-13.447-33.181-16.699-50.313-3.254-16.916-2.602-46.406 1.086-64.621 2.816-13.444 2.602-13.227 9.107-16.481 27.757-14.095 117.537-56.166 118.405-55.299zm374.073 15.182v9.107c0 48.359-5.204 114.716-12.797 163.077-1.301 8.456-2.389 15.393-2.602 15.613 0 0-6.288-1.733-13.661-3.905-32.527-10.193-67.875-25.156-99.754-42.718-21.038-11.494-51.612-30.363-50.743-31.231.213-.215 9.323-4.986 19.947-10.625 42.509-22.118 83.274-45.972 118.622-69.609 13.229-8.892 33.176-23.202 37.518-27.107l3.47-2.602zm-537.802 64.185c.867 0 .65 1.735-.651 9.542-.868 5.64-1.951 16.049-2.382 23.202-1.739 31.662 3.469 55.084 19.082 87.177 4.337 8.892 7.809 16.265 7.589 16.48-1.519 1.303-145.074 43.375-190.183 55.734-13.444 3.685-25.152 6.939-26.024 7.153-1.515.436-1.733.22-1.083-3.47 4.987-31.875 29.276-73.512 63.104-108.644 22.554-23.419 40.554-37.08 71.347-54.648 22.119-12.575 56.165-31.439 58.767-32.309.002-.217.218-.217.434-.217zm338.295 60.503c.216-.216 5.42 2.605 11.708 6.29 46.408 26.891 111.03 51.83 166.108 64.623l4.991 1.086-6.941 3.899c-28.84 16.049-123.606 55.515-220.538 91.732-14.098 5.202-27.975 10.409-30.581 11.492-2.602 1.083-4.988 1.735-4.988 1.519 0-.22 3.906-7.809 8.89-17.132 27.107-50.744 54.433-112.547 68.311-155.485 1.739-4.12 2.82-7.805 3.04-8.024zm-34.48 11.278c.22.221-1.517 4.771-3.687 9.975-18.865 45.756-43.59 95.636-75.249 151.583-8.022 14.314-14.746 25.808-14.966 25.808-.213 0-6.721-3.906-14.527-8.676-45.976-28.192-86.743-62.888-113.414-96.501l-3.905-4.771 19.732-5.422c70.696-19.298 130.762-40.116 190.4-65.704 8.459-3.471 15.4-6.292 15.616-6.292zm214.253 74.815s.217.217 0 0c.216 4.988-10.844 49.661-19.953 81.969-7.589 27.107-14.098 48.361-26.022 85.874-5.204 16.485-9.755 30.143-9.975 30.143-.216 0-1.517-.216-2.818-.647-64.405-11.714-122.089-27.977-176.303-49.661-15.182-6.074-36.866-15.833-38.167-16.916-.432-.438 12.58-6.506 29.06-13.663 98.669-43.154 201.024-92.164 236.153-113.196 4.119-2.603 7.373-3.903 8.025-3.903zm-494.646 16.916c.434.432-27.107 40.118-65.709 94.114-13.444 18.867-29.057 40.985-34.911 49.225-5.856 8.241-14.746 21.253-19.734 29.06l-9.112 14.096-9.759-8.24c-11.494-9.544-31.442-29.927-40.333-41.204-18.651-23.201-31.226-47.706-36.214-70.04-2.386-10.411-2.386-15.618-.22-16.265 3.252-.867 61.153-14.53 115.37-27.11 30.143-6.937 65.054-15.177 77.632-18.213 12.579-3.041 22.774-5.423 22.99-5.423zm27.756 10.626l6.937 7.806c31.231 34.914 63.108 60.724 101.708 83.272 6.941 3.906 12.144 7.373 11.708 7.594-1.514 1.083-134.016 48.136-195.385 69.389-34.478 12.143-62.888 21.901-63.102 21.901-.216 0-2.169-1.299-4.341-2.818l-3.901-2.82 6.288-9.106c20.383-29.493 45.976-61.803 101.707-129.028l38.381-46.19zm173.053 123.822c.213-.215 9.755 3.252 21.464 7.594 28.195 10.624 50.527 17.345 80.456 24.936 36.866 9.326 90.211 18.434 121.657 21.035 4.771.432 7.373.868 6.505 1.519-1.521.868-33.395 11.494-56.816 18.867-37.302 11.708-151.149 45.32-243.962 71.995-17.132 4.987-31.879 9.108-32.746 9.323-2.166.436-9.325-1.519-9.325-2.386 0-.431 5.204-7.153 11.494-14.527 31.225-37.3 62.238-78.935 88.044-118.403 7.154-10.846 13.229-19.736 13.229-19.953zm-38.17 1.087c.216.216-15.179 24.936-42.066 67.439-11.496 17.999-24.291 38.383-28.846 45.54-4.337 6.939-10.842 17.784-14.527 23.854l-6.29 11.061-3.252-.868c-7.809-2.169-62.672-21.471-77.202-27.325-18-7.157-36.649-15.829-50.529-23.202-17.346-9.326-39.03-23.206-37.297-23.637.433-.216 30.143-8.243 65.922-17.999 94.984-25.809 147.678-40.77 182.161-51.612 6.29-1.952 11.71-3.471 11.926-3.251zm269.985 63.318h.216c.868 2.171-34.26 99.755-47.06 130.547-2.815 6.939-3.896 8.677-5.417 8.456-3.687-.213-54.646-7.37-85.66-11.925-53.994-8.24-144.641-24.073-167.409-29.275l-5.204-1.083 32.307-7.378c69.396-15.613 102.791-24.069 136.619-34.478 42.722-13.011 85.011-29.276 127.729-49.225 6.722-3.037 12.361-5.422 13.879-5.639z"/>
                                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-2882.7" y1="10288.81" x2="-2206.249" y2="10288.81" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)">
                                    <stop offset="0" stop-color="#939fab"/>
                                    <stop offset="1" stop-color="#dcdee1"/>
                                    </linearGradient>
                                    <path fill="url(#b)" d="M1114.983 145.414c-4.771-.647-81.757 27.11-131.415 47.275-67.01 27.327-119.052 53.351-151.148 75.899-11.925 8.461-26.891 23.422-29.273 29.276-.867 2.169-1.303 4.771-1.303 7.373l29.06 27.541 69.175 22.119 164.594 29.493 188.228 32.312 1.953-16.264c-.649 0-1.085-.216-1.73-.216l-24.728-3.905-4.984-8.89c-25.59-45.107-53.781-101.056-70.261-138.789-12.793-29.276-24.938-63.102-31.662-87.391-3.687-14.746-4.119-15.613-6.501-15.829v-.005h-.005zm-3.474 11.063h.223c.213.214 1.081 6.29 1.95 13.442 3.683 30.364 10.411 59.635 21.035 91.297 8.022 23.855 8.022 22.555-1.301 19.734-22.119-6.07-121.221-23.202-193-33.177-11.494-1.519-21.253-3.036-21.253-3.252-.867-.867 51.827-28.41 75.031-39.25 29.709-13.665 111.246-47.711 117.315-48.794zm-209.047 97.15l8.461 2.816c45.97 15.616 161.551 37.736 225.31 42.94 7.154.651 13.229 1.303 13.442 1.303.216.216-5.852 3.469-13.661 7.154-30.79 15.397-64.621 34.264-88.042 48.794-6.937 4.335-13.229 7.807-14.094 7.807-.868 0-5.42-.868-10.191-1.519l-8.674-1.303-21.683-21.253c-38.167-37.08-68.094-65.704-79.588-76.549l-11.28-10.19zm-8.671 6.721l30.576 38.168c16.696 21.035 33.611 41.635 37.301 46.187 3.683 4.557 6.721 8.245 6.505 8.461-.868.65-44.236-7.809-67.226-13.011-23.637-5.423-33.395-8.025-47.924-12.577l-11.928-3.905v-3.038c.216-14.53 18.651-36.214 49.877-58.331l2.819-1.954zm259.791 52.046c.869 0 1.95 1.951 4.552 7.806 7.373 16.263 30.364 60.07 35.997 68.526 1.74 2.822 4.771 3.038-25.802-1.95-73.512-11.93-97.152-15.829-97.152-16.263 0-.216 2.169-1.735 4.988-3.254 22.771-12.575 45.756-28.624 66.142-45.756 4.988-4.121 9.542-8.024 10.407-8.676.216-.433.652-.649.868-.433z"/>
                                    <radialGradient id="c" cx="-14217.448" cy="7277.705" r="898.12" gradientTransform="matrix(-.1185 -.0178 -.036 .237 -198.955 -1314.415)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#ee352c"/>
                                    <stop offset="1" stop-color="#a91d22"/>
                                    </radialGradient>
                                    <path fill="url(#c)" d="M804.66 294.828s-4.768 7.593-.215 18.87c2.822 6.937 11.061 15.393 20.384 24.069 0 0 96.5 94.114 108.211 107.561 53.344 61.585 76.549 122.305 78.718 206.012 1.301 53.78-8.894 101.054-34.264 155.919-45.106 98.453-140.307 207.098-287.117 327.67l21.472-7.157c13.878-10.411 32.745-21.467 76.982-45.756 102.137-55.952 217.071-107.346 358.028-160.258 202.971-76.335 536.715-165.681 726.676-194.736l19.737-3.038-3.038-4.771c-17.345-26.891-29.276-43.587-43.59-61.369-41.633-51.612-92.157-93.463-153.964-128.161-85.007-47.489-194.956-84.571-334.173-112.112-26.239-5.207-83.923-15.181-130.763-22.337-99.321-15.393-163.51-26.021-234.203-38.165-25.37-4.339-63.323-10.843-88.478-16.263-13.011-2.822-37.947-8.676-57.464-15.398-15.613-6.075-38.168-12.147-42.939-30.58zm55.952 54.216c.214-.214 3.683 1.083 8.24 2.602 8.24 2.816 18.865 6.07 31.446 9.542a1599.47 1599.47 0 0 0 28.624 7.589c13.011 3.251 23.852 6.288 24.068 6.288 1.521 1.519 23.424 71.558 30.797 98.449 2.815 10.195 4.988 18.867 4.771 18.867-.223.22-2.605-3.469-5.423-8.456-25.373-44.673-65.491-89.995-111.899-126.428-6.069-4.333-10.624-8.237-10.624-8.453zm106.692 29.492c1.085 0 5.856.651 11.708 1.951 36.866 8.24 103.008 20.818 145.293 27.975 7.157 1.083 12.797 2.387 12.797 2.818 0 .436-2.605 1.951-5.859 3.688-7.153 3.685-35.997 20.815-45.536 27.322-24.073 16.047-45.756 33.395-61.371 49.008-6.288 6.29-11.712 11.494-11.712 11.494s-1.297-3.685-2.386-8.242c-7.802-30.143-24.069-74.816-38.815-106.258-2.386-4.986-4.339-9.541-4.339-9.973 0 .433 0 .217.22.217zm187.795 35.781c1.301.432 3.47 7.806 7.806 24.069 8.025 31.446 11.712 66.576 10.411 99.321-.436 9.108-.868 17.564-1.304 18.651l-.649 2.166-11.276-3.685c-23.204-7.373-60.935-18.435-93.245-27.541-18.436-4.988-33.395-9.542-33.395-9.975 0-1.303 26.891-28.192 38.383-38.383 21.898-19.303 81.316-65.275 83.269-64.623zm14.963 2.166c.652-.647 89.779 14.746 130.331 22.554 30.145 5.854 73.948 14.963 76.549 16.049 1.301.432-3.254 3.034-17.784 9.539-57.248 25.808-99.754 49.008-142.036 77.202-11.06 7.373-20.386 13.444-20.602 13.444-.216 0-.433-6.287-.433-13.878 0-41.201-8.241-82.838-23.424-117.968-1.517-3.47-2.818-6.722-2.601-6.942zm230.516 45.542c.652.65-2.169 18.217-4.771 28.624-7.806 32.312-28.84 80.24-54.643 125.343-4.558 8.024-8.677 14.53-9.114 14.746-.429.216-6.285-3.038-13.009-6.941-25.154-14.746-53.778-28.624-85.007-41.637-8.671-3.685-16.263-6.723-16.48-7.153-1.521-1.303 68.308-47.493 105.174-69.612 29.276-17.781 76.982-44.239 77.85-43.37zm16.48 2.601c1.953 0 41.421 10.844 62.019 16.916 50.963 15.181 109.512 36.648 147.679 53.996l15.828 7.159-11.056 2.6c-93.245 21.467-173.049 46.192-250.034 77.418-6.289 2.602-11.928 4.771-12.357 4.771-.436 0 1.733-4.987 4.552-11.061 23.204-49.225 38.167-100.62 41.85-144.427.221-4.121.867-7.372 1.519-7.372zm-392.938 90.213c.649-.652 30.793 6.506 47.057 11.056 24.721 6.942 77.198 24.505 77.198 25.808 0 .216-5.853 5.204-12.79 11.278-28.408 23.637-55.734 48.572-88.481 80.234-9.759 9.328-17.997 16.917-18.429 16.917-.436 0-.649-1.304-.436-3.038 4.987-36.433 3.906-83.272-3.034-130.763-.653-6.074-1.302-11.276-1.085-11.492zm633.433.652c.429.431-13.881 22.984-22.988 35.777-13.009 18.649-32.098 43.375-75.252 97.588-22.765 28.622-48.358 60.936-56.812 71.778-8.678 10.842-15.831 19.948-16.051 19.948-.216 0-3.031-3.901-6.069-8.671-24.289-36.433-53.349-68.311-87.829-96.935-6.505-5.423-13.658-11.278-16.044-13.013-2.386-1.734-4.339-3.469-4.339-3.685 0-.649 36.862-16.483 64.841-27.757 49.01-19.952 115.794-43.805 165.892-59.203 26.24-8.239 54.215-16.263 54.651-15.827zm16.696 4.334c.865-.215 6.072 2.387 12.361 6.07 52.697 30.143 104.305 68.962 145.077 108.864 11.492 11.278 39.9 40.77 39.464 40.986 0 0-9.975.867-21.683 1.733-91.296 6.942-208.178 26.239-320.511 53.345-7.589 1.733-14.31 3.252-14.746 3.252-.429 0 8.025-8.456 18.653-18.647 65.922-63.538 96.067-103.656 131.628-175.22 4.986-10.623 9.325-19.731 9.757-20.383-.216 0-.216 0 0 0zm-482.936 49.446c3.038.647 31.229 13.88 52.48 24.503 19.517 9.755 48.794 25.372 50.311 26.671.216.216-10.195 5.638-22.984 11.928-40.772 20.384-75.684 39.682-112.118 61.802-10.408 6.29-19.082 11.497-19.298 11.497-.868 0-.652-.872 5.204-11.497 19.518-35.561 35.129-78.065 44.023-119.486.864-3.252 1.733-5.418 2.382-5.418zm-28.192 5.202c.652.652-6.721 27.323-11.273 41.853-8.894 27.541-23.856 62.02-38.383 88.043-3.474 6.069-8.677 14.961-11.496 19.948l-5.42 8.674-12.144-11.707c-14.094-13.663-25.59-22.12-40.333-29.712-5.859-3.033-10.411-5.638-10.411-6.069 0-1.735 37.082-35.347 65.49-59.635 20.383-17.566 63.321-52.045 63.97-51.395zm172.404 70.913l10.627 6.937c24.282 15.833 52.906 36.866 74.813 55.298 12.357 10.19 36.21 31.662 40.985 36.866l2.598 2.822-17.561 4.986c-99.321 27.538-176.087 52.043-265.649 85.007-9.975 3.685-18.433 6.721-19.085 6.721-1.297 0-2.385 1.083 19.954-19.519 57.251-52.691 107.992-110.812 145.726-167.411l7.592-11.707zm-45.324 11.276c.432.432-29.276 42.284-47.06 65.922-21.251 28.192-58.985 75.465-85.007 106.256-10.84 12.797-20.163 23.422-20.599 23.64-.652.216-.868-3.036-.868-8.024 0-26.242-6.721-54.216-18.433-78.068-4.988-9.975-5.856-12.361-4.768-13.444 4.119-3.688 67.223-39.686 107.123-61.153 26.89-14.312 68.956-35.563 69.612-35.129zm-274.107 67.225c.652 0 5.64 2.6 11.279 5.638 13.878 7.589 26.239 16.046 37.298 25.156.432.432-5.204 4.988-12.577 10.406-20.602 14.746-51.828 38.385-70.041 52.915-19.088 15.18-19.734 15.613-17.568 12.361 14.314-21.903 21.467-34.264 29.06-50.093 6.721-14.094 13.442-30.793 18.213-45.323 1.734-6.289 3.904-11.06 4.336-11.06zm73.083 57.248c1.081-.214 2.386 1.735 8.238 10.411 12.361 18.429 21.903 43.154 24.292 63.104l.429 4.339-29.705 11.494c-53.133 20.599-102.139 40.985-135.322 56.162-9.322 4.339-25.587 12.144-36.211 17.352-10.627 5.418-19.301 9.539-19.301 9.323s6.721-5.204 14.961-11.278c64.844-47.055 121.007-98.669 163.076-150.279 4.555-5.423 8.677-10.411 9.107-10.627l.436-.001zm-33.612 8.242c.868.867-23.853 28.84-40.768 45.971-41.853 42.723-83.273 76.12-134.669 108.649-6.505 4.119-12.359 7.804-13.011 8.24-1.519.867.432-1.303 22.986-25.808 14.314-15.397 25.155-28.408 37.516-44.453 8.24-10.624 9.759-12.143 21.688-20.604 31.878-22.987 105.39-72.864 106.258-71.995z"/>
                                    </g>
                                    <path fill="#231F1F" d="M265.747 900.102c-2.276 0-4.553.217-6.809.217-45.975 2.45-76.983 22.683-95.113 62.195-15.506 35.735-13.813 82.446.174 118.4 16.265 35.131 42.547 53.672 86.416 60.675 9.282 1.52 15.506 6.616 33.483 27.606l22.12 25.915h40.118l-26.676-26.892c-14.746-14.745-26.673-27.584-26.673-28.712 0-1.127 5.641-3.599 12.469-5.68 22.51-6.812 41.203-24.202 54.279-50.854 10.583-21.402 12.102-28.018 13.619-54.646 3.969-79.26-37.82-128.813-107.409-128.247l.002.023zm35.173 207.27c-19.517 9.453-47.857 11.34-66.356 4.553-19.127-7.025-37.646-26.889-45.975-49.377-9.259-24.591-7.937-69.956 2.646-90.386 17.023-32.528 39.534-47.49 72.43-47.49 48.792 0 76.549 29.884 80.171 86.048 2.863 46.885-12.838 82.058-42.895 96.632l-.021.02zm693.025-139.568c-16.828 0-29.709 6.811-38.385 20.231l-6.809 10.627v-27.628h-29.123v165.678h29.104v-52.956c0-48.424.604-54.084 7.371-67.335 9.326-18.172 25.371-27.234 40.879-22.897l10.408 3.036v-28.712h-13.445v-.044zm-171.098-1.519c-5.705 0-11.756.76-17.781 2.084-38.971 10.19-60.938 47.489-59.594 85.873 0 32.139 6.244 48.206 21.752 65.057 31.77 26.065 60.502 28.146 99.275 14.161 6.615-2.819 13.814-6.072 13.814-6.072v-26.065l-13.814 7.156c-31.379 13.661-55.016 13.661-73.949-2.43-12.076-12.296-17.391-27.042-19.84-43.868h117.426v-22.339c0-45.539-27.41-74.294-67.313-73.557h.024zm-47.492 72.647s4.338-28.407 20.428-39.554c7.744-5.466 16.633-8.11 25.328-8.11 8.719 0 17.414 2.818 24.592 8.306 14.748 11.341 17.219 39.143 17.219 39.143h-87.566v.215h-.001zm-702.111-29.881c-31.573-19.128-45.582-32.921-43.869-49.185 4.9-44.997 60.503-38.773 91.295-21.749l.219-30.272s-17.024-7.373-41.421-7.764c-37.429-.564-61.63 11.709-72.97 36.691-16.656 36.865-1.908 64.665 51.396 95.677 29.925 17.412 43.152 32.528 43.152 49.008 0 34.047-41.05 45.931-83.401 24.57-8.716-4.337-16.09-7.959-16.48-7.959-1.519 9.651-.736 32.745-.736 32.745s13.012 5.466 32.527 9.236c48.4 9.65 92.445-13.054 96.608-49.919 3.622-34.609-8.893-52.761-56.318-81.104l-.002.025zm1178.454-43.155c-5.682 0-11.711.78-18 2.103-38.924 10.192-60.85 47.492-59.354 85.876 0 32.095 6.225 48.011 21.729 64.838 31.771 26.089 60.504 28.191 99.473 14.184 6.592-2.818 13.77-6.026 13.77-6.026v-26.109l-13.791 7.197c-31.443 13.619-55.082 13.619-73.947-2.471-12.145-12.274-17.414-26.847-19.865-43.871h117.232v-22.336c0-45.321-27.412-74.099-67.313-73.339l.066-.046zm-47.492 72.646s4.381-28.365 20.449-39.729c7.721-5.485 16.611-8.132 25.307-8.132 8.674 0 17.414 2.819 24.594 8.327 14.746 11.342 17.219 39.338 17.219 39.338h-87.545l-.024.196zm-533.809-29.123c-31.573-19.083-45.54-32.92-43.848-49.185 4.9-45.02 60.504-38.773 91.296-21.749l.218-30.272s-17.024-7.374-41.421-7.722c-37.429-.563-61.63 11.711-72.991 36.692-16.633 36.864-1.692 64.666 51.437 95.677 29.884 17.393 43.111 32.312 43.111 48.792 0 34.047-41.029 46.126-83.381 24.569-8.674-4.337-16.046-7.916-16.48-7.916-1.519 9.649-.736 32.746-.736 32.746s12.858 5.27 32.31 9.237c48.445 9.672 92.51-13.012 96.653-49.877 3.6-34.437-8.891-52.587-56.167-80.952v-.04zm752.421-42.005c-16.828 0-29.859 6.829-38.383 20.254l-6.811 10.582v-27.583h-29.123V1136.3h29.102v-52.954c0-48.403.584-54.085 7.375-67.313 9.324-18.15 25.369-27.235 40.875-22.878l10.408 3.035v-28.775h-13.443zm-984.021 41.05V902.941h-29.361v233.728h123.478v-27.604h-94.116v-100.601zm679.015 32.896l-24.201 62.975-23.27-63.322-23.637-70.173h-30.055c19.475 55.212 40.658 111.376 62.02 165.829 9.26.216 18.541 0 27.799 0l32.682-82.058 33.287-83.75h-28.732s-12.688 33.266-25.914 70.521l.021-.022zM506.455 839.251c4.728 0 8.674-1.516 11.927-4.769 3.208-3.211 4.9-6.984 4.9-11.711 0-4.728-1.692-8.675-4.9-11.711-3.253-3.035-7.005-4.555-11.711-4.555-4.769 0-8.717 1.52-11.927 4.728-3.252 3.211-4.727 7.158-4.727 11.712 0 4.771 1.519 8.716 4.727 11.711 3.037 3.034 6.984 4.553 11.711 4.553v.042zm-10.408-26.889c2.818-2.818 6.245-4.121 10.625-4.121 4.121 0 7.548 1.303 10.411 4.121 2.819 2.819 4.337 6.245 4.337 10.409 0 4.163-1.518 7.764-4.337 10.582-2.862 2.817-6.29 4.163-10.411 4.163-4.185 0-7.59-1.301-10.408-4.163-2.819-2.818-4.337-6.419-4.337-10.582 0-4.164 1.301-7.589 4.12-10.409zm7.003 11.928h1.908c1.346 0 2.668 1.3 3.795 3.773l2.279 5.116h3.577l-2.818-5.683c-1.149-2.275-2.276-3.598-3.6-3.969 1.67-.39 2.992-.953 3.947-2.082.952-.974 1.3-2.298 1.3-3.795 0-1.734-.542-3.034-1.69-3.989-1.302-1.084-3.384-1.669-6.074-1.669h-6.026v21.187h3.035v-8.891l.367.002zm0-9.846h2.647c1.908 0 3.253.39 3.99.953.716.564.911 1.303.911 2.646 0 2.45-1.52 3.601-4.337 3.601h-3.252v-7.2h.041zm-485.018 7.958c0-7.373-.216-12.858-.39-16.09h.174c.758 3.814 1.691 6.657 2.45 8.543l28.19 62.975h4.728l28.19-63.538c.761-1.733 1.52-4.337 2.452-7.959h.216c-.563 6.29-.758 11.754-.758 16.112v55.581h9.648v-82.622h-12.1L54.919 852.87c-.955 2.276-2.278 5.683-3.969 10.193h-.392c-.563-2.234-1.886-5.639-3.772-9.803l-25.33-58.053H8.598v82.621h9.281v-55.385l.153-.041zm96.045.154h8.329v51.458h-8.329v-51.458zm4.164-18.868c1.736 0 3.21-.587 4.337-1.734 1.15-1.129 1.91-2.603 1.91-4.337 0-1.692-.565-3.211-1.887-4.337-1.171-1.15-2.668-1.737-4.381-1.737-1.69 0-3.208.587-4.338 1.737-1.146 1.126-1.907 2.645-1.907 4.337 0 1.887.586 3.208 1.907 4.337 1.304 1.147 2.647 1.734 4.338 1.734h.021zm63.54 71.455v-9.066c-4.555 3.405-9.456 5.098-14.53 5.098-6.07 0-10.995-2.081-14.595-6.07-3.577-3.947-5.485-9.436-5.485-16.266 0-7.156 1.908-12.84 5.854-17.177 3.795-4.163 8.719-6.245 14.748-6.245 4.922 0 9.647 1.52 14.009 4.557v-9.65c-3.968-2.082-8.5-3.037-13.619-3.037-9.456 0-16.827 3.037-22.335 8.894-5.466 5.854-8.285 13.813-8.285 23.42 0 8.543 2.45 15.722 7.548 21.209 5.312 5.637 12.102 8.5 20.428 8.5 6.438-.178 11.707-1.523 16.262-4.167zm23.831-27.433c0-6.788 1.518-12.273 4.337-16.049 2.647-3.403 5.855-5.116 9.65-5.116 3.21 0 5.486.585 7.155 1.908v-9.846c-1.3-.563-3.187-.758-5.637-.758-3.405 0-6.439 1.146-9.107 3.253-2.819 2.231-5.074 5.638-6.397 9.975h-.216v-12.08h-9.433v58.985h9.454V847.71h.194zm54.279 31.443c8.892 0 16.048-2.863 21.36-8.543 5.29-5.641 7.936-13.229 7.936-22.686 0-9.647-2.427-17.021-7.372-22.51-4.9-5.483-11.711-8.132-20.603-8.132s-16.048 2.647-21.36 7.764c-5.681 5.641-8.674 13.599-8.674 23.813 0 8.891 2.429 16.265 7.548 21.751 5.29 5.68 12.295 8.521 21.165 8.521v.022zm-13.445-48.055c3.6-3.795 8.329-5.683 14.182-5.683 6.074 0 10.627 1.888 14.01 5.683 3.404 3.969 5.097 9.63 5.097 17.197 0 7.198-1.519 12.859-4.729 16.654-3.208 3.969-7.936 6.071-14.183 6.071-6.071 0-10.777-2.104-14.377-6.071-3.577-3.99-5.291-9.456-5.291-16.654-.368-7.156 1.519-13.01 5.291-17.197zm84.141 42.916c3.599-3.208 5.509-7.155 5.509-12.102 0-4.337-1.52-7.936-4.338-10.777-2.3-2.275-5.854-4.337-10.994-6.419-4.556-1.906-7.374-3.6-8.893-4.923-1.517-1.517-2.45-3.402-2.45-6.071 0-2.45.955-4.337 2.821-5.855 1.908-1.516 4.337-2.253 7.59-2.253 5.096 0 9.454 1.343 13.443 4.185v-9.456c-3.816-1.906-7.958-2.817-12.686-2.817-6.071 0-11.189 1.671-14.964 4.899-3.969 3.212-5.854 7.375-5.854 12.274 0 4.337 1.3 7.938 3.771 10.582 2.082 2.256 5.641 4.556 10.583 6.614 4.729 2.083 7.938 3.968 9.65 5.485 1.691 1.52 2.45 3.405 2.45 5.641 0 5.506-3.772 8.349-11.146 8.349-5.682 0-10.776-1.866-15.333-5.638v10.189c4.121 2.475 9.066 3.601 14.53 3.601 7.005-.368 12.49-2.081 16.264-5.486l.047-.022zm45.019-56.73c-8.893 0-16.048 2.647-21.361 7.764-5.638 5.641-8.674 13.599-8.674 23.813 0 8.891 2.452 16.265 7.547 21.751 5.313 5.68 12.295 8.521 21.187 8.521 9.107 0 16.048-2.861 21.36-8.545 5.313-5.637 7.958-13.227 7.958-22.683 0-9.65-2.472-17.022-7.374-22.509-5.115-5.487-11.927-8.133-20.601-8.133l-.042.021zm18.345 31.012c0 7.198-1.518 12.859-4.727 16.654-3.21 3.969-7.938 6.071-14.184 6.071-6.074 0-10.778-2.104-14.379-6.071-3.577-3.99-5.29-9.456-5.29-16.654 0-7.59 1.888-13.444 5.683-17.393 3.576-3.773 8.306-5.682 14.182-5.682 5.854 0 10.561 1.907 13.964 5.682 3.037 4.163 4.729 9.824 4.729 17.393h.022zm25.547 29.513h9.433v-51.068h13.813v-7.938H428.93v-9.108c0-8.282 3.208-12.446 9.845-12.446 2.234 0 4.511.563 6.203 1.518v-8.521c-1.692-.759-3.969-.932-6.812-.932-5.095 0-9.258 1.519-12.664 4.727-3.969 3.773-6.071 8.674-6.071 15.312v9.672h-9.978v7.936h9.978v50.876l.067-.028zm38.75-16.091c0 11.538 5.098 17.414 15.506 17.414 3.774 0 6.614-.606 8.891-1.951v-8.11c-1.734 1.302-3.795 1.91-6.071 1.91-3.208 0-5.464-.762-6.788-2.475-1.345-1.689-2.103-4.554-2.103-8.501v-33.286h14.961v-7.938h-14.961v-17.39c-3.253 1.127-6.44 2.082-9.456 3.034v14.355h-10.192v7.938h10.192v34.979l.021.021zm1014.88 108.73c-3.209-3.034-7.004-4.553-11.709-4.553-4.77 0-8.719 1.519-11.928 4.771-3.209 3.188-4.729 7.155-4.729 11.711 0 4.728 1.52 8.675 4.705 11.709 3.211 3.036 7.156 4.556 11.928 4.556 4.705 0 8.674-1.52 11.928-4.729 3.188-3.253 4.879-7.004 4.879-11.709-.174-4.771-1.887-8.719-5.096-11.754l.022-.002zm-1.517 22.338c-2.82 2.818-6.246 4.119-10.41 4.119-4.119 0-7.545-1.301-10.408-4.119-2.818-2.863-4.338-6.441-4.338-10.627 0-4.121 1.301-7.545 4.164-10.408 2.818-2.817 6.225-4.121 10.582-4.121 4.121 0 7.549 1.304 10.41 4.121 2.818 2.863 4.336 6.287 4.336 10.408 0 4.382-1.301 7.764-4.336 10.627zm-8.502-9.651c1.691-.39 3.037-1.149 3.969-2.081.955-.977 1.303-2.301 1.303-3.815 0-1.692-.543-3.037-1.691-3.969-1.301-1.085-3.404-1.671-6.07-1.671h-6.029v21.164h3.037v-8.891h1.885c1.303 0 2.604 1.3 3.773 3.773l2.254 5.096h3.602l-2.818-5.683c-.977-2.472-2.105-3.601-3.252-3.97l.037.047zm-2.082-1.907h-3.252v-7.155h2.668c1.887 0 3.209.345 3.969.932.758.563.932 1.301.932 2.646 0 2.45-1.518 3.579-4.336 3.579l.019-.002zM933.443 816.353h2.646v-21.187h7.002v-2.646h-16.652v2.646h7.006v21.187h-.002zm16.047-15.917c0-2.062 0-3.753-.152-4.705.174 1.126.564 1.887.738 2.45l8.133 18.172h1.301l8.152-18.347c.219-.563.393-1.301.76-2.275-.174 1.887-.174 3.401-.174 4.553v16.048h2.82V792.52h-3.406l-7.371 16.438c-.174.587-.762 1.734-1.129 3.037h-.217c-.152-.761-.541-1.519-1.084-2.818l-7.373-16.655h-3.816v23.854h2.666v-15.917l.152-.023z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Tools */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Tools
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* Git */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Git</p>
                                </div>

                               {/* Burpsuite */}

                                {/* {Github} */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                        <path fill="#8b8e98" d="M31 3A28 28 0 1 0 31 59A28 28 0 1 0 31 3Z"></path><path fill="#7e8189" d="M31,54A23,23,0,1,1,54,31,23,23,0,0,1,31,54Z"></path><path fill="#faefde" d="M36.08,43.35A11,11,0,0,1,39,50v5.25c0,.55.23,2.13.9,2.31L31,59.18l-9-1.61c.72-.16,1-1.77,1-2.32s0-.91,0-3.25c-7.79,1.69-9.4-4.3-9.4-4.3-1.28-3.23-3.11-4.1-3.11-4.1-2.54-1.73.19-1.7.19-1.7A5.89,5.89,0,0,1,15,44.79c2.5,4.27,6.44,3.92,8,3.21.26-1.81,2.1-3.93,2.9-4.63-6.22-.71-12.76-3.11-12.76-13.84A10.83,10.83,0,0,1,16,22a10.09,10.09,0,0,1,.28-7.41s2.35-.75,7.7,2.87a26.61,26.61,0,0,1,14,0c5.34-3.62,7.69-2.87,7.69-2.87A10.09,10.09,0,0,1,46,22a10.83,10.83,0,0,1,2.87,7.51C48.86,40.29,42.32,42.66,36.08,43.35Z"></path><path fill="#8d6c9f" d="M31,2a29,29,0,0,0-9.54,56.38,1,1,0,0,0,.55.19A29,29,0,1,0,31,2ZM23.7,57a6.22,6.22,0,0,0,.3-1.74v-.54c0-.45,0-1.06,0-2.72a1,1,0,0,0-1.21-1c-6.72,1.46-8.17-3.38-8.23-3.58l0-.11a9.44,9.44,0,0,0-3-4.24,5.37,5.37,0,0,1,2.56,2.2c2.64,4.53,7,4.65,9.3,3.62a1,1,0,0,0,.58-.77,8.62,8.62,0,0,1,2.56-4A1,1,0,0,0,26,42.38c-5.87-.67-11.87-2.72-11.87-12.84a9.82,9.82,0,0,1,2.62-6.84A1,1,0,0,0,17,21.64,8.84,8.84,0,0,1,17,15.55c.85,0,2.92.39,6.42,2.76a1,1,0,0,0,.83.14,25.56,25.56,0,0,1,13.48,0,1,1,0,0,0,.83-.14c3.51-2.38,5.59-2.74,6.41-2.77a8.87,8.87,0,0,1,.07,6.1,1,1,0,0,0,.19,1.05,9.82,9.82,0,0,1,2.61,6.84c0,10.13-6,12.17-11.89,12.82a1,1,0,0,0-.54,1.75A10.2,10.2,0,0,1,38,50v5.25A6.28,6.28,0,0,0,38.29,57,26.86,26.86,0,0,1,23.7,57Zm16.5-.6a4.13,4.13,0,0,1-.2-1.13V50a11.66,11.66,0,0,0-2-5.91c5.55-.94,11.89-3.82,11.89-14.56a11.76,11.76,0,0,0-2.74-7.73,11.44,11.44,0,0,0-.48-7.56,1,1,0,0,0-.62-.58c-.28-.09-2.85-.76-8.18,2.74a27.61,27.61,0,0,0-13.66,0c-5.33-3.5-7.9-2.83-8.18-2.74a1,1,0,0,0-.62.58,11.42,11.42,0,0,0-.48,7.56,11.75,11.75,0,0,0-2.74,7.73c0,10.65,6.23,13.58,11.73,14.56a9.51,9.51,0,0,0-1.74,3.16c-1.42.4-4.34.41-6.29-2.94a6.9,6.9,0,0,0-5.15-3.4c-.54,0-1.9.09-2.22,1.13s.91,2,1.46,2.4l.13.07c.06,0,1.52.8,2.6,3.53.23.71,2.22,6.1,9.35,5.15,0,.79,0,1.19,0,1.5v.56a4,4,0,0,1-.21,1.13,27,27,0,1,1,18.41,0Z"></path><path fill="#8d6c9f" d="M31 37a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V38A1 1 0 0 0 31 37zM35.6 39.53A1 1 0 0 0 37.53 39L37 37.08a1 1 0 0 0-1.93.52zM21.75 34.52a1 1 0 0 0-1.37.37l-1 1.73a1 1 0 0 0 1.73 1l1-1.73A1 1 0 0 0 21.75 34.52zM40.88 37.62a1 1 0 1 0 1.73-1l-1-1.73a1 1 0 0 0-1.73 1zM26.21 36.37a1 1 0 0 0-1.22.71L24.47 39a1 1 0 1 0 1.93.52l.52-1.93A1 1 0 0 0 26.21 36.37zM41.35 9.46a22.71 22.71 0 0 0-2.3-1 1 1 0 0 0-.7 1.87 21.1 21.1 0 0 1 2.1.92 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89zM34.65 7.29a23.08 23.08 0 0 0-15 2.72 1 1 0 0 0 .5 1.87 1 1 0 0 0 .49-.13A21.1 21.1 0 0 1 34.34 9.27a1 1 0 1 0 .32-2z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Github</p>
                                </div>

                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <Separator />
            {/* Contact */}
            <section id="contact" className="flex flex-col items-center justify-center gap-8 sm:py-48 py-24">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Get In Touch
                </h2>
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                >
                    <p className="leading-7">
                        If you'd like to get in touch with me, feel free to reach out on LinkedIn or my email and I'll get back to you whenever I can.
                    </p>
                </Reveal>
                <div className="flex">
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                    >
                        <Link href="mailto:mohamedirfanpopz@gmail.com" target="_blank">
                            <button className="inline-flex m-5 hover:bg-red h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Say Hi!
                            </button>
                        </Link>

                        <Link href="https://www.linkedin.com/in/mohamed-irfan-b9021a17b/" target="_blank">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                LinkedIn
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}
