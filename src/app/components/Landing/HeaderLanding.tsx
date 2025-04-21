export const HeaderLanding = () => {
    return (
        <div className="bg-[#17494C]">
            <header className="flex justify-between items-center max-w-4xl mx-auto text-white py-5">
                <h2 className="text-2xl">Zendesk</h2>
                <menu>
                    <ul className="flex gap-16 items-center">
                        <li>
                            Product
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Solution
                        </li>
                        <li>
                            Demo
                        </li>
                        <li>
                            Resources
                        </li>
                        <li className="bg-[#e4f0d3] p-3 text-[#17494C] font-bold">
                            Free trial
                        </li>
                    </ul>
                </menu>
            </header>
        </div>
    )
}