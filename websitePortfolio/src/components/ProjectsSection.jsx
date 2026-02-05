import { ArrowRight, Github } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "MotsPassant",
        description: "A French -> English Duolingo-style language learning proof-of-concept using basic JavaScript and Django REST API",
        image: "/projects/motspassant1.png",
        tags: ["HTML/CSS", "Javascript", "Python", "Django REST", "MongoDB"],
        githubUrl: "https://github.com/fwicotex/ProjetSim204_GR3_EQ1"
    }, 
    {
        id: 2,
        title: "Top-Down Shooter",
        description: "Made for CONUHACKS IX, this Java-based top-down shooter game was made from scratch, myself primarily being responsible for the game engine and level design",
        image: "/projects/topdown.PNG",
        tags: ["Java"],
        githubUrl: "https://github.com/v3r1510/1v1-Top-down-Shooter-Game"
    },

    {
        id: 3,
        title: "Code Monkies",
        description: "Academic project where I mastered my backend skills under Agile/Scrum development, being responsible for user authentication and database management",
        image: "/projects/341.png",
        tags: ["Python", "Django REST", "SQL (SQLite)"],
        githubUrl: "https://github.com/tiffsoa/-Code_Monkies-SOEN341_Project_F24-"
    },

    {
        id: 4,
        title: "Project Kudon",
        description: "As my first foray into AI/ML, this project will tackle fine-tuning an existing AI model for Quebec French translation. Currently WIP",
        image: "/projects/wip.jpg",
        tags: ["Python", "PyTorch", "Raspberry PI"],
        githubUrl: "https://github.com/joedaswagger/project-kudon"
    }

]

export const ProjectsSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects </span> 
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects that showcase my varied skillset as a fullstack developer in different languages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                {projects.map((project, key) => (
                    <div 
                    key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-80"/>
                            </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className = "bombo-button w-fit flex items-center mx-auto gap-2" href="https://github.com/joedaswagger" target="_blank">
                    More on my Github <ArrowRight size={16} />
                </a>
            </div>


        </div>
    </section>
    ) 
}