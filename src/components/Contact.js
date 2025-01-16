
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-blue-500 text-center">
                Contact
            </h2>
            <div className="  flex gap-5 justify-center 
                        my-10">
            
                    <div > 
                    <span className="font-bold mr-[6px]">Mobile Number:   </span>
                    <a href=" your number" target="_blank" className="text-blue-800"> your number
                     </a> </div>
               
                   <div > 
                    <span className="font-bold mr-[6px]">Email address: </span>
                    <a href=" your email" target="_blank" className="text-blue-800">
                  your email  </a></div> 

                    <div> 
                    <span className="font-bold mr-[6px]">LinkedIn: </span>

                    <a href="linkedin" target="_blank" className="text-blue-800">linkedin</a>
                    </div> 
                    
            </div>
        </section>
    );
}
