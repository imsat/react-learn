import React from 'react'
import ReactDOM from 'react-dom/client'
import SeasonDisplay from './SeasonDisplay'

const el = document.getElementById('root')

const root =  ReactDOM.createRoot(el)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: null,
            lon: null,
        }
    }


    render() {
        // console.log('render')
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    lat: position.coords.latitude, 
                    lon: position.coords.longitude 
                })
            },
            (error) => console.log(error),
        );
    
        return <div>
            Latitude: { this.state.lat }
            <br />
            Longitude : { this.state.lon }
            </div>
    }
}



root.render(<App />)