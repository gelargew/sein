import WorksPage from "../components/Works/WorksPage";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { isLoadingPage, LoadingEffect } from "../store";

export default function Works() {
    const [isLoading, setIsLoading] = useAtom(isLoadingPage)


    return (
        <>
            <main className={isLoading ? 'hidden' : ''} >
                <WorksPage />
            </main>
        </>
    )
}