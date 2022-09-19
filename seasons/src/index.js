import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')

const root =  ReactDOM.createRoot(el)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: null,
            lon: null,
            errorMessage: ''
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
            (error) => {
                // console.log(error);
                // this.setState({ errorMessage: error.message});
                // alert('Something went wrong!')
            },
        );
    
        return <div>
            Latitude: { this.state.lat }
            <br />
            Longitude : { this.state.lon }
            <br />
            <p>Error : { this.errorMessage }</p>
            </div>
    }
}



root.render(<App />)