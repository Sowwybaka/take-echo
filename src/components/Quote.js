import React from 'react'

function Quote(props) {
    const likeQuote = async () => {
        await fetch(`https://apex.oracle.com/pls/apex/sowmith_workspace/quote/likes?quote=${props.quote}`, { method: "POST" })
    }  
    return (
        <div className="col-4">
        <div className={`card ${props.theme==="dark"?"text-white":"text-dark"} my-3 bg-${props.theme} `}>
            <div className="card-header">Quote<span className='px-3'>{props.likes} likes</span><i onClick={likeQuote} style={{cursor:"pointer"}} class="float-end bi bi-hand-thumbs-up"></i></div>
            <div className={`card-body  bg-${props.theme}`}>
                <blockquote className="blockquote mb-0">
                    <p>{props.quote}</p>
                    <footer className="blockquote-footer">
                        {props.name}
                    </footer>
                </blockquote>
            </div>
        </div>
        </div>  
   
    )
}

export default Quote