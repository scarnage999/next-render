"use client"

import { useEffect, useState } from "react"
import { SlideBar } from "../components/passwords/SlideBar"
import { SwitchInput } from "../components/passwords/SwitchInput"

const PasswordsPage = () =>{
    const [inputValue, setInputValue] = useState<string>("")
    const [longitudPass, setLongitudPass] = useState<number>(10)
    const [upperCase, setUpperCase] = useState<boolean>(true)
    const [lowerCase, setLowerCase] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<boolean>(true)
    const [symbols, setSymbols] = useState<boolean>(true)
    const [showMessage, setShowMessage] = useState<boolean>(false)

    useEffect(() => {
        generatePassword()
    }, [longitudPass ,upperCase, lowerCase, symbols, numbers])

    const generatePassword = () => {
        let characters = ""
        if(upperCase) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(lowerCase) {
            characters += "abcdefghijklmnopqrstuvwxyz"
        }
        if(numbers) {
            characters += "0123456789"
        }
        if(symbols) {
            characters += "!@#$%^&*()_+[]{}|;:,.<>?/"
        }
        let password = "";

        for(let i = 0; i < longitudPass; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        setInputValue(password)
    }
    const copyPassword = () => {
        navigator.clipboard.writeText(inputValue)
        setShowMessage(true)
    }

    return (
        <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
            <div className="bg-white border border-gray-500 p-5 rounded">
                <h2>Password Generate</h2>
                <div className="flex">
                    <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="password" className="rounded p-2 my-2 border" />
                    <button onClick={copyPassword} className="w-20 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400 hover:text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                    </svg>
                    </button>
                </div>  
                <SlideBar value={longitudPass} changeValue={setLongitudPass}/>
                <div className="flex justify-between py-5">
                    <SwitchInput title="Mayusculas" value={upperCase} changeValue={setUpperCase}/>
                    <SwitchInput title="Minusculas" value={lowerCase} changeValue={setLowerCase}/>
                </div>
                <div className="flex justify-between pb-3">
                    <SwitchInput title="Numeros" value={numbers} changeValue={setNumbers}/>
                    <SwitchInput title="Simbolos" value={symbols} changeValue={setSymbols}/>
                </div>

                <button onClick={generatePassword} className="w-full bg-blue-500 text-white p-2 rounded">Generate</button>
                <div className="absolute bottom-5 right-5">
                    {
                        showMessage && (
                            <p className="flex gap-5 justify-between items-center bg-green-500 text-white p-2 rounded w-full text-center mt-5 text-sm">
                                <span>Contraseña copiada</span>
                                <svg onClick={() => setShowMessage(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 hover:cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </p>
                            
                        )
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default PasswordsPage