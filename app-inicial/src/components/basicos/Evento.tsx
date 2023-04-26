export default function Evento() {
    let contador = 0

    function incrementar() {
        console.log(contador++)
    }

    return (
        <button className={`
            flex justify-center items-center
            h-72 w-72 bg-green-600 text-4xl
        `} onClick={incrementar}>
            Evento
        </button>
    )
}