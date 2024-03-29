import React from "react";
import { connect } from 'react-redux'
import{ signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                client_id:  '406690093862-2eu0egauda6gm7d0itb5uvjkbqkhtfut.apps.googleusercontent.com',
                scope: 'email',
                plugin_name:'sample_login'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }


    onAuthChange = (isSignedIn) =>  {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignInClick = () =>  {
        this.auth.signIn()
    }

    onSignOutClick = () =>  {
        this.auth.signOut()
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null){
        return null
        }else if(this.props.isSignedIn){
        return (
            <button className="ui red google button" onClick={this.onSignOutClick}>
                <i className="google icon"></i>
                Log Out
                </button>
        )
        }else{
            return (
                <button className="ui green google button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Log In With Google
                    </button>
            )
        }
    }

    render() {
        return <div className="">{this.renderAuthButton()}</div>
    }
}


const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut })(GoogleAuth);