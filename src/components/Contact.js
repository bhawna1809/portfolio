
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-blue-500 text-center">
                Contact
            </h2>
            <div className=" gap-5 justify-center 
                        my-10">
            
                    <div > 
                    <span className="font-bold">Mobile Number:   </span>
                    <a href="tel:+918853625286"  rel="noreferrer" target="_blank" className="text-blue-800">+91 8853625286
                     </a> </div>
               
                   <div > 
                    <span className="font-bold">Email address: </span>
                    <a href="mailto:bhawnatekwani313@gmail.com?subject=Hello&body=Message"  rel="noreferrer" target="_blank" className="text-blue-800">
                    bhawnatekwani313@gmail.com </a></div> 

                    <div> 
                    <span className="font-bold">LinkedIn: </span>

                    <a href="https://www.linkedin.com/in/bhawna-tekwani" target="_blank" rel="noreferrer"  className="text-blue-800">Bhawna Tekwani</a>
                    </div> 
                    
            </div>
        </section>
    );
}
