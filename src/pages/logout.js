import React, { Component } from 'react'
import authService from '../service/authService';

export default class logout extends Component {
    async componentDidMount(){
        try{
            authService.logout();
            window.location = '/home';
        }catch(err){
            console.log(err);
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

