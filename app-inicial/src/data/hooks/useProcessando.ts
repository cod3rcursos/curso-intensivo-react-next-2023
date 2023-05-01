import { useState } from "react"

export default function useProcessando() {
    const [processando, setProcessando] = useState<boolean>(false)

    function iniciarProcessamento() {
        setProcessando(true)
    }

    function finalizarProcessamento() {
        setProcessando(false)
    }

    return {
        processando,
        iniciarProcessamento,
        finalizarProcessamento
    }
}