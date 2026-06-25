import StyledButton from "../StyledButttons/StyleButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {
    return (
        <div className="border-2 border-emerald-600 border-opacity-30 rounded-xl p-6 bg-slate-900 hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/20">
            <h3 className="text-2xl font-bold text-white mb-1">
                {title}
            </h3>
            <p className="text-emerald-500 text-sm mb-4">
                {subtitle}
            </p>
            <img
                src={srcImg}
                alt={title}
                className="w-full rounded-lg mb-4 object-cover h-64"
            />
            <p className="text-gray-300 text-base mb-4 leading-relaxed">
                {description}
            </p>
            <p className="text-emerald-500 font-semibold mb-4 text-sm">
                {technologies}
            </p>
            <div className="grid grid-cols-2 gap-3">
                <StyledButton onClick={() => window.open(websiteURL)}>
                    Ver Projeto
                </StyledButton>
                <StyledButton onClick={() => window.open(codeURL)}>
                    Ver Código
                </StyledButton>
            </div>
        </div>
    )
}

export default ProjectCard


