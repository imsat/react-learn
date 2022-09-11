// 1) Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root =  ReactDOM.createRoot(el)

// 4) Create a component
function App() {
    // const date = new Date()
    // const time = date.toLocaleTimeString()
    // const name = 'Satyajit Mondal'
    // const age = 23

    // let message = {00-50
    //     color: 'red'
    // }

    // if(Math.random() > 0.5) {
    //     message = 'Hello there'
    // }

    // return <h1>
    // { new Date().toLocaleTimeString() }
    // </h1>

    // const inputType = 'number'
    // const minvalue = 5

    // return <input type={inputType} min={minvalue}  />

    // return <input style={{border: '3px solid red'}} type="number" min={0}  />


    // return <textarea autoFocus={true} /> //Rule #1 Camel case 2 word attributes
    // return <input style={{backgroundColor: 'red'}} maxLength={5} /> //Rule #2 for number use only curly braces

     return (
        <div className="rtr">
            <textarea 
            autoFocus={true} 
            readOnly={false}
            spellCheck={true}
            style={{border: '5px solid brown'}}
            />
        </div>
     )

}

// 5) Show the component on the screen
root.render(<App />)
