
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex lg:flex-row py-20 
                       align-center max-w-5xl mx-auto mt-20">
            
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-2 sm:px-6 ">
               <div className="text-blue-500 py-2  sm:py-0"><i class="fas fa-user fa-5x"></i></div>
       
                </div>
                <div className="!text-left px-1 sm:!text-center px-6">           
            
                <h2 className="text-center text-blue-500  text-2xl mt-5 font-bold sm:text-3xl mt-0">
                About Me :</h2>
                <p className="mb-5 pb-5">
                    Hello ! <br />
                    Your friendly fellow developer living in Noida, India <br/>
                    I am a passionate and self motivated front end developer with 2.8+ years of professional experience in developing user friendly, responsive and modular applications in the IT industry. I am aspiring to work on latest front end development and cloud technologies alongside technical business understanding to leverage my skills to the best while being flexible and resourceful. 
                     </p> </div>
        
        </section>
    );
}
