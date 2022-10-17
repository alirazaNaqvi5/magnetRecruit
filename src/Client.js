
const Client = () => {
    return ( 
        <div className="lg:w-full bg-[#14213D] lg:flex lg:flex-row sm:grid">
            <div className="bg-[#14213D] p-6 text-center w-full ">
                <h1 className="text-5xl m-4 font-bold text-center text-[#fca311]">Candidates</h1>
                <p className="text-center text-white text-xl my-6">Let us know about yourself and what motivates you, so we can update you on our<br/>
                 vacancies or job hunt on your behalf.</p>
                 <button className="bg-[#fca311] hover:bg-slate-500 my-4 hover:text-slate-200 align-middle px-8 py-3 rounded-md text-xl font-bold">Read More</button>
            </div>
            <div className="bg-slate-200 p-6 text-center w-full m-auto ">
                <h1 className="text-5xl m-4 font-bold text-center text-[#14213D]">Clients</h1>
                <p className="text-center text-[#14213D] text-xl my-6">
                If you have a requirement and would like our support, get in touch to<br/>
                 see how we can help you.
                 </p>
                 <button className="bg-[#14213D] text-white hover:bg-[#fca311] my-4 hover:text-slate-200 align-middle px-8 py-3 rounded-md text-xl font-bold">Read More</button>
            </div>
        </div>
     );
}
 
export default Client;