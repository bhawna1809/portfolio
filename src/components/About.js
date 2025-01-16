
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex lg:flex-row py-20 
                       align-center max-w-5xl mx-auto mt-20">
            
               <div className="text-blue-500"><i class="fas fa-user fa-10x"></i></div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-blue-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>             
                <p>
                    Hello ! <br />
                    Your friendly fellow developer living in Noida, India <br/>
                    I am a passionate and self motivated front end developer with 2.5+ years of professional experience in developing user friendly, responsive and modular applications in the IT industry. I am aspiring to explore majorly on latest front end and cloud technologies along side technical business understanding to leverage my skills to the best while being flexible and resourceful. 
                     </p>
            </div>
        
        </section>
    );
}
