import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleloclick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleclearclick = () => {
        let newText = " "
        setText(newText)
    }

    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={handleclearclick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p> {text}</p>
            </div>
        </>
    )
}
