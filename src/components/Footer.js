
export default function Footer() {
    return (
        <section className="p-3 bg-blue-300 flex fixed bottom-0 w-full">
            
                <span className="!w-[33.3%] font-bold">©Copyright 2025. All rights reserved.</span>
                <span className="!w-[33.3%] font-bold">Made with Love, Laugh, React and Tailwind CSS.</span>
                <span className="!w-[33.3%] font-bold">
                <a href="https://github.com/bhawna1809" target="_blank" className="text-gray-800 mr-10 hover:text-black">
                <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/bhawna-tekwani" target="_blank" className="text-blue-900 hover:text-black">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
                </span>

        </section>
    );
}
