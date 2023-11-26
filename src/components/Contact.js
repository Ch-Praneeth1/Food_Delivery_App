const Contact = () =>{
    return(
        <div className="text-center">
            <div>
                <h1 className="font-bold text-3xl m-4 p-4">Contact us at </h1>
                <form>
                    <input  type="text" placeholder="name" className="p-2 m-2 border border-black"></input>
                    <input type="text" placeholder="message" className="p-2 m-2 border border-black"></input>
                    <button className="bg-gray-200 rounded-lg p-2 m-2 border border-black">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;