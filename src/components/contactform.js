import * as React from "react"

const Contactform = () => ( 
<>
    <h2 className="mb-10 mt-20 font-bold text-xl text-center"> Contactez-moi </h2>
        <section className=" w-10/12 md:w-6/12 m-auto mb-20"> 
        <form className="flex flex-col ">
            <label className="mb-5" htmlFor="nom">Nom</label>
            <input type="text" className="mb-5 border"></input>
            <label className="mb-5" htmlFor="mail">Adresse mail</label>
            <input type="mail" className=" mb-5 border"></input>
            <label className="mb-5" htmlFor="message"> Message</label>
            <textarea cols="25" className="h-20 border"></textarea>
        </form>
        </section>
        </>

    )

export default Contactform
