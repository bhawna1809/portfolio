// Skills.js
export default function Skills() {
    const skills = ["Front end programming: HTML, CSS/SASS, JavaScript,TypeScript, AJAX and  JSPs", "Front end frameworks: React, React Native, jQuery", "Styling frameworks: Bootstrap, React Bootstrap, Tailwind CSS","Tools: Summernote, Figma, Jenkins, Fortify, AutoDeploy, Spunk and BlackDuck" , "Responsive Design: Mobile First Design, Media Queries", "Back End: Core Java, JDBC and Restful APIs", "Databases:MySQL and OracleDB"
        ,"Testing tools: Postman, Selenium, Dev Tool, Lighthouse and SonarQube","IDE & Server: IntelliJ, Maven, VS Code, Jboss/Wildfly","Agile Methodology: SCRUM Framework and JIRA tool","Cloud Basics: Cloud deployments, Types, EC2, Amplify, RDS and IAM"];
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-10xl mx-auto">
            <h2 className="text-center text-6xl text-blue-500 font-bold">
                My Skills
            </h2>
            <div className="mt-10 flex gap-5 
                            flex-wrap mx-auto max-w-l">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-6 py-4
                                        rounded bg-blue-200 text-m 
                                        flex justify-center
                                        font-bold hover:shadow-xl">
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
    )
}
