import Link from "next/link"

export const Menu = () => {
    return (
    <div className="w-72 mx-auto text-center pt-10">
        <menu>
            <ul>
                <li className="block w-full bg-slate-200 rounded hover:bg-slate-400 mb-3 p-3">
                    <Link href="/ssr-landing">Landing</Link>
                </li>
                <li className="block w-full bg-slate-200 rounded hover:bg-slate-400 mb-3 p-3">
                    <Link href="/csr-passwords">Generador de contraseñas</Link>
                </li>
                <li className="block w-full bg-slate-200 rounded hover:bg-slate-400 mb-3 p-3">
                    <Link href="./dr-dynamic">Api Dragon ball</Link>
                </li>
            </ul>
        </menu>
    </div>
    )
}