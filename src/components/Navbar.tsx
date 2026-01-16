import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Navbar() {

    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ 
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    const handleClickScroll2 = () => {
        const element = document.getElementById('experience');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ 
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    const handleClickScroll3 = () => {
        const element = document.getElementById('projects');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ 
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className="flex justify-center items-center w-full fixed px-4 top-4 z-50">
                <motion.nav 
                    style={{ boxShadow: '0 0 30px 2.5px #0a0a0a' }} 
                    className="flex h-14 max-w-4xl w-full bg-gradient-to-br from-primary to-secondary rounded-lg border-1 border-accent px-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.39, 0.21, 0.12, 0.96] }}
                >
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <img alt="" draggable={false} className="h-10 w-10" src="/me.png" />
                            <button onClick={handleClickScroll} className="p-2 duration-300 text-base font-medium hover:bg-secondary rounded-md">
                                About
                            </button>
                            <button onClick={handleClickScroll2} className="p-2 duration-300 text-base font-medium hover:bg-secondary rounded-md">
                                Experience
                            </button>
                            <button onClick={handleClickScroll3} className="p-2 duration-300 text-base font-medium hover:bg-secondary rounded-md">
                                Projects
                            </button>
                        </div>
                        <div className="min-[330px]:flex hidden flex-row gap-2 items-center">
                            <Link draggable={false} href="/Resume.pdf" download="Raj_Resume.pdf" className="p-2 duration-300 text-base font-medium hover:bg-secondary rounded-md flex items-center gap-1.5">
                                <Download className="w-4 h-4" />
                                Resume
                            </Link>
                            <Link draggable={false} href="https://github.com/bibhanshuraj19/raj.gg" target="_blank" className="p-2 duration-300 text-base font-medium hover:bg-secondary rounded-md">
                                Source
                            </Link>
                        </div>
                    </div>
                </motion.nav>
            </header>
        </>
    );
}

