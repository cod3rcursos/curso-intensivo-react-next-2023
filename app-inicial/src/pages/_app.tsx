import { CarrinhoProvider } from '@/data/contexts/CarrinhoContext'
import { ContadorProvider } from '@/data/contexts/ContadorContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CarrinhoProvider>
            <ContadorProvider>
                <Component {...pageProps} />
            </ContadorProvider>
        </CarrinhoProvider>
    )
}
