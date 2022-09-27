import React from 'react'
import ReactDOM from 'react-dom/client'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import Clock   from './Clock'

const el = document.getElementById('root')

const root =  ReactDOM.createRoot(el)

class App extends React.Component {
    state = {
        lat: null,
        lon: null,
        errorMessage: ''
    }

    componentDidMount() {
        //optional
        // console.log('Component was rendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ 
                    lat: position.coords.latitude, 
                    lon: position.coords.longitude 
                })
            ,
            (error) => this.setState({ errorMessage: 'Something went wrong!!'}) 
        )
    }

    // componentDidUpdate() {
    //     //optional
    //     console.log('Component was just u[dated - it rerendered!')
    // }

    componentWillUnmount() {
        //optional
        // cleanup ufter our c omponent mounted
    }

    renderContent() {
        if(this.state.errorMessage && (!this.state.lat && !this.state.lon) ) { 
            return <div>Error: { this.state.errorMessage}</div>
        }else if(!this.state.errorMessage && (this.state.lat && this.state.lon) ){
            return <SeasonDisplay lat={ this.state.lat } />
        }else{
            return <Spinner message="Please accept location request" />
        }
    }


    render() {
      return (
        <div>
            { this.renderContent() }
        </div>
      )
    }
}



root.render(<App />)
// root.render(<Clock />)