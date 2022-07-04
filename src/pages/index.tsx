import { useAtom } from 'jotai'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import Homepage from '../components/Home/Homepage'
import { isLoadingPage, LoadingEffect } from '../store'

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingPage)


  return (  
      <main className={isLoading ? 'hidden' : ''}>
        <Homepage />
      </main>

  )
}

export default Home
