import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
function Createquote(props) {
    const navigate = useNavigate();
    const name = useRef();
    const quote = useRef();
    const submitQuote = async () => {
        await fetch(`https://apex.oracle.com/pls/apex/sowmith_workspace/quote/post?name=${name.current.value}&quote=${quote.current.value}`, { method: "POST" })
        navigate("/take-echo")
    }


    return (
        <>
        <div className={`container-fluid bg-${props.theme} bg-opacity-75 `} style={{minHeight:"95vh"}}>
            <div className="container py-3 ">
                <div className="alert alert-dark alert-dismissible fade show" role="alert">
                    <strong>Warning</strong> Use appropriate language
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    />
                </div>


                <h1>Create your own quotes here</h1>

                <div className=" form-floating mb-3">
                    <input
                        ref={name}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name"
                    />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <textarea
                        ref={quote}
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        defaultValue={""}
                        style={{ minHeight: 100 }}
                    />
                    <label htmlFor="floatingTextarea">Quote</label>
                </div>
                <button onClick={submitQuote} className="btn btn-primary my-3">submit</button>
            </div>
            </div>

        </>
    )
}

export default Createquote