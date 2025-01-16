// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-blue-500 font-bold text-center">
                Work Expierence and Projects
            </h2>
            <div className="p-10 bg-blue-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
            

                    <h2 className="font-bold text-xl text-center">
                    
                       Project: Application of Stanard Life, United Kingdom(June 2022- Dec 2024)
                    </h2>
                    <p>
                    
                    A UK based financial services company
                        <br/>
                        <h3 className="font-bold text-s ">  My  Role & Reponsibilities:</h3>
                        <ul className="list-disc pl-5">
                            <li>
                            Convert design mockups into code to facilitate implementation while ensuring Level A and AA accessibility standards and compatibility for different mobile devices.
                            </li>
                            <li>Worked with JSP/JSPX and React JS to create dynamic web pages and used AJAX for API integration with backend.</li>
                            <li>Competent in using JIRA tool to track work status,  releases and  issues management , used by team to collaborate and aligned with tasks.</li>
                            <li>Run SonarQube tool to maintain the standard coding practices and Fortify tool to identify vulnerabilities.</li>
                            <li>Experience of working in a cross functional multicultural team with regular client interactions and business meetings.</li>
                        </ul>
                    </p>
            </div>
            <div className="p-10 bg-blue-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
            
                    <h2 className="font-bold text-xl text-center">
                      
                           Portfolio Website (Jan 2025)
                
                    </h2>
                    <p>
                     A Portfolio website that enables individuals to display professional work, achievements, and skills. This website is created from React and Tailwind CSS.
                  
                    <br/>
                        <h3 className="font-bold text-s ">  My  Role & Reponsibilities:</h3>
                        <ul className="list-disc pl-5">
                            <li>
                               Used React for creating the portfolio website.
                            </li>
                            <li>Used Tailwind CSS framework for styling</li>
                            <li>Used BrowserRouter for routing to different components in UI</li>
                        </ul>
                        </p>
                </div>
        
        </section>
    );
}
