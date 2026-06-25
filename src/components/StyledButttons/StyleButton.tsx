import type { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full px-4 py-3 flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-600 text-white bg-transparent hover:bg-accent-green hover:text-dark-900 transition-all duration-300 font-medium"
        >
            {children}
        </button>
    )
}

export default StyledButton;


