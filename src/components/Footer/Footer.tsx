import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t-2 border-emerald-600 border-opacity-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center gap-6 mb-6">
                    <button
                        onClick={() => window.open("https://github.com/Pablo147dias")}
                        className="text-emerald-500 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-slate-900"
                    >
                        <GitHubIcon fontSize="large" />
                    </button>
                    <button
                        onClick={() => window.open("https://www.linkedin.com/in/pablo-dias-617243208/")}
                        className="text-emerald-500 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-slate-900"
                    >
                        <LinkedInIcon fontSize="large" />
                    </button>
                    <a
                        href="mailto:pablodias147@gmail.com"
                        className="text-emerald-500 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-slate-900 flex items-center justify-center"
                    >
                        <EmailIcon fontSize="large" />
                    </a>
                </div>
                <div className="text-center border-t border-emerald-600 border-opacity-20 pt-6">
                    <p className="text-gray-400">
                        © 2025 Pablo Dias - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer


