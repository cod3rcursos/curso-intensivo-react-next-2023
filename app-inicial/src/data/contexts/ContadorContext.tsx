import { createContext, useState } from "react"

interface ContadorContextProps {
    numero: number
    incrementar: () => void
    decrementar: () => void
}

const ContadorContext = createContext<ContadorContextProps>({} as any)
export default ContadorContext

export function ContadorProvider(props: any) {
    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero - 1)
    }

    return (
        <ContadorContext.Provider value={{
            numero, incrementar, decrementar
        }}>
            {props.children}
        </ContadorContext.Provider>
    )
}