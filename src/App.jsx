import './App.css'
import {CardWrapper} from "./components/CardWrapper.jsx";
import Search from "./components/Search.jsx";
import {useState, useEffect} from "react";

function App() {

    const [search, setSearch] = useState("")
    const [error, setError] = useState(null)
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const apikey = import.meta.env.VITE_API_KEY
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": apikey
        }
    }
    const url = `${import.meta.env.API_BASE_URL}/cards`

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(url, options)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            if (data.response === "False") {
                setError("No results found")
                setResults([])
                setIsLoading(false)
                return
            }
            setResults(data?.results)

        } catch (e) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <main>
            <div className={'pattern'}>

            </div>
            <div className={'wrapper'}>
                <header>
                    <img src={"./logo.svg"} alt={"logo"} className={'logo'}/>
                    <h1 className={'text-3xl font-bold underline'}>
                        Welcome to the <span className={'text-gradient'}>Card</span> App
                    </h1>
                    <Search search={search} setSearch={setSearch}/>
                </header>

                <h2 className={'text-white'}>
                    {search}
                </h2>

                <section className={'all-movies'}>
                    <h2>Results</h2>
                    {
                        isLoading ?
                            (<div className={'text-white'}>
                                Loading...
                            </div>) :
                            error ? (
                                <div className={'text-red-500'}>
                                    {error}
                                </div>
                            ) : (
                                <ul>
                                    list of Resuls....
                                </ul>
                            )
                    }
                </section>


            </div>

            {/*<CardWrapper></CardWrapper>*/}
        </main>
    )
}


export default App
