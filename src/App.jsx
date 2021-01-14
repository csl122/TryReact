import React from "react";
import logo from './logo.svg';
import './App.css';
import Tick from './timer';
import MyNav from './nav';

export default class App  extends React.Component {

    render() {

        const navBar = ['A', 'B', 'C'];
        const navBar2 = [11, 22, 33];
        
        return(
            // 这里的div必不可少
            <div>
                
                <Tick />
                <MyNav nav = {navBar}/>
                <MyNav nav = {navBar2}/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </div>
        )
    
    }
}
