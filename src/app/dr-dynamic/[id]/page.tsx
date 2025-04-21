import { SingleCharacter } from "@/models/SingleCharacter.model";

interface IPropsSingleCharacter {
    params: Promise<{id: string}>
}
const getCharacterById = async (id: string) => {
    const requestApi = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data:SingleCharacter = await requestApi.json();
    return data
}
const singleCharacterById = async({params}: IPropsSingleCharacter) => {
    const {id} = await params;
    
    if(!id){
        return {
            notfound: true
        }
    }
    
    const character = await getCharacterById(id);
    return (
        <div>
            <header className="bg-slate-900 text-white p-5 text-center">
                <h1>Dragon Ball API</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">
                
                <section className="flex justify-between items-start">
                    <div className="w-1/3">
                        <img className="h-120 mx-auto" src={character.image} alt={character.name}/> 
                    </div>
                    <div className="w-2/3">
                       <h2 className="font-bold text-2xl">{character.name}
                        <span className="font-normal text-gray-500 text-sm"> {character.race}</span>
                        </h2> 
                       <p>{character.description}</p>
                    </div>
                </section>
                <section>
                    {
                        character.transformations.length == 0 && (
                        <p className="p-5 w-1/3 text-center">No tiene Transformaciones</p>
                        )   
                    }

                    {
                        character.transformations.length > 0 && (
                            <div className="flex gap-5 flex-wrap mt-10">

                                {
                                    character.transformations.map((transformation) => (
                                        (<div key={transformation.id} className="text-center p-5 bg-slate-100 rounded">
                                            <img src={transformation.image} alt={transformation.name} className="h-60 mx-auto"/>
                                            {
                                                <h4>
                                                    {transformation.name}
                                                </h4>
                                            }        
                                            </div>
                                        )
                                    ))
                                }
                            </div>
                        )
                    }
                </section>

            </main>     
        </div>
    )
}

export default singleCharacterById