import Link from "next/link"

export const TopBar = () => {
    return (
        <div className="bg-[#03363e] p-5">
            <ul className="flex  justify-center gap-10 text-white">
                <li>
                    CX trends 2024
                </li>
                <li>
                    Unlock growth with customer service
                </li>
                <li>
                    <Link href={"#"} className="underline">Get the report</Link>
                </li>
            </ul>
        </div>
    )
}