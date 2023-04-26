import ImagemAleatoria from "@/components/hooks/ImagemAleatoria";

export default function PaginaImagens() {
    return (
        <div className={`
            flex justify-center items-center h-screen
            gap-5
        `}>
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />
        </div>
    )
}