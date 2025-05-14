import {useState} from 'react'

export function App() {
    const [valor, setValor] = useState(100)
    const [mostrar, setMostrar] = useState(true)

    function trocar() {
        setMostrar(!mostrar)
    }
    
    return (
        <div className='flex flex-col gap-4 items-center mt-25'>

            <h1 className='text-white text-8xl'>{valor}</h1>

            <button onClick={() => setValor(valor + 100)} className='text-white bg-purple-600 py-2 px-4 rounded-2xl'>Aumentar</button>


            {mostrar===true ?  <button onClick={trocar} className='text-white bg-blue-600 py-2 px-4 rounded-2xl'>Esconder</button> : <button onClick={trocar} className='text-white bg-blue-600 py-2 px-4 rounded-2xl'>Mostrar</button>}

            {mostrar===true ? <p className='text-white'>Miguel Santos não sabe fazer um pão</p> : <p></p>}

        </div>
    )
}