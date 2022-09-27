
import './SeasonDisplay.css'
import React from 'react'

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]



    return (
        <div className={ `${season} season-display` }>
            <i className={ `${iconName} icon-left icon massive` }></i>
            <h1>{ text }</h1>
            <i className={ `${iconName} icon-right icon massive` }></i>
        </div>
    )
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beatch!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it is cold",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
     return lat > 0 ? 'summer' : 'winter'
    }else {
        return lat > 0 ? 'winter' : 'summer'
    }

}



export default SeasonDisplay