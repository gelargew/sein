import { useProgress } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";


export const isMenuActive = atom(false)
export const isLoadingPage = atom(true)


let timer: NodeJS.Timeout;

export const LoadingEffect = () => {
    const [, setIsLoading] = useAtom(isLoadingPage)
    const router = useRouter()

    const start = () => setIsLoading(true)
    const finish = () => setIsLoading(false)

    useEffect(() => {
        router.events.on('routeChangeStart', start)
        router.events.on('routeChangeComplete', finish)
        router.events.on('routeChangeError', finish)

        return () => {
            router.events.on('routeChangeStart', start)
            router.events.on('routeChangeComplete', finish)
            router.events.on('routeChangeError', finish)           
        }
    }, [router])


    return null
}
