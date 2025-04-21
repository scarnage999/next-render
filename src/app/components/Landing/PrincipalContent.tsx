export const PrincipalContent = () => {
    return (
        <div className="bg-[#17494C]">
            <main className="flex justify-between items-center max-w-4xl mx-auto text-white py-15 gap-20">
                <div className="w-1/2">
                    <h2 className="text-7xl font-bold leading-1.3">
                        <span className="text-[#cc9fb6]">Champion</span>
                        <br/> 
                        <span className="text-[#fed6aa]">of </span>
                        <span className="text-[#00a655] border-b-4 border-white">customer</span>
                        <br/>
                        <span className="text-[#31aabd] border-b-4 border-white">service</span>
                    </h2> 
                </div>
                <div className="w-1/2">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex excepturi unde harum, ipsam nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex excepturi unde harum, ipsam nihil.
                        </p>
                    </div>
                    <div className="flex mt-5 gap-10">
                        <button className="bg-[#e4f0d3] p-3 text-[#17494C] font-medium">Free Trial</button>
                        <button className="border border-white p-3">View Demo</button>
                    </div>
                </div>
            </main>
        </div>
    )
}