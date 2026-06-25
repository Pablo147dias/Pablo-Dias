import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    const navItems = [
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
    ];

    return (
        <nav className="fixed w-full bg-slate-900 bg-opacity-95 backdrop-blur-md z-50 border-b border-emerald-600 border-opacity-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-emerald-500 ">Pablo Dias</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleSmoothScroll(item.id)}
                                className="text-white hover:text-emerald-500 transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? (
                            <CloseIcon fontSize="large" />
                        ) : (
                            <MenuIcon fontSize="large" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-emerald-600 border-opacity-20">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleSmoothScroll(item.id)}
                                className="block w-full text-left px-4 py-2 text-white hover:text-emerald-500 hover:bg-slate-900 transition-all duration-300"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}


