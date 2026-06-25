import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButttons/StyleButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center pt-20 md:pt-0">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 opacity-30 blur-3xl">
                <AnimatedBackground />
              </div>
              <div className="relative">
                <img
                  src={Avatar}
                  alt="Pablo Dias Avatar"
                  className="w-64 h-64 rounded-full border-2 border-emerald-600 shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Pablo Dias
              </h1>
              <h2 className="text-2xl md:text-3xl text-emerald-500 font-medium">
                Desenvolvedor de Software
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Estudante de Ciência da Computação em transição de carreira, com mais de 1 ano de experiência intensiva em desenvolvimento web.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StyledButton onClick={() => console.log("Download CV")}>
                <DownloadIcon />
                <span>Download CV</span>
              </StyledButton>
              <StyledButton onClick={() => console.log("Contato")}>
                <EmailIcon />
                <span>Entre em Contato</span>
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


