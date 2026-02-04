import { Balloon, Briefcase, Code, GraduationCap, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Jack-of-all-trades, Master of None, Though Oftentimes Better than a Master of One 
                    </h3>

                    <p className="text-muted-foreground">
                        Coding since 2021 with a passion for it that goes back even further,
                        my knowledge and skills are diverse, but I'm most specialized at creating solutions 
                        to new and ever-complexifying problems.

                    </p>

                    <p className="text-muted-foreground">
                        I'm always out there building projects and broadening my horizons; from web and game development 
                        to AI/ML, I'm constantly learning by being at the forefront of the tech industry.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="bombo-button text-foreground" >
                            Let's talk
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Here's my CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Fullstack Developer</h4>
                                    <p className="text-muted-foreground">
                                        Extensive experience with both frontend and backend technologies using modern frameworks.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Third-Year University Student</h4>
                                    <p className="text-muted-foreground">
                                        Currently undertaking a Bachelor's Degree in Software Engineering Co-op at Concordia University.
                                    </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Balloon className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Fun Fact</h4>
                                    <p className="text-muted-foreground">
                                        I'm (unfortunately) a fan of Manchester United. GGMU!
                                    </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}