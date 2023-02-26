import React, { useEffect, useState } from 'react'
import Quote from './Quote';

function Home(props) {
    const [quotes, setquotes] = useState([])
    const getQuotes = async () => {
        console.log("working")
        let data = await fetch("https://apex.oracle.com/pls/apex/sowmith_workspace/quote/get")
        let convertedData = await data.json();
        let items = convertedData.items
        setquotes(items)
        console.log(items)
    }
    useEffect(() => {
        getQuotes();
    }, [])
    return (
        <>
        <div className={`container-fluid bg-${props.theme} bg-opacity-75 `} style={{minHeight:"95vh"}}>
            <div className={`container `}>

                <div className="row py-3">
                    <div className="col"><h1>Quotes!</h1></div>
                    <div className="col"><button onClick={getQuotes} className="btn btn-primary float-end">Refresh</button></div>
                </div>
                <div className="row">
                    {quotes.map((element, index) => {
                        return <Quote theme = {props.theme} quote={element.quote} name={element.name} likes={element.likes} />
                        
                    })}
                </div>
            </div>
            </div>
        </>
    )
}

export default Home