import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 1
        }
    }
    sumar() {
        this.setState({contador: this.state.contador + 1})
    }
    render(){
        return(
            <div>
                <h1>Hola mundo</h1>
                <span>{this.state.contador}</span>
                <button onClick={() => this.sumar()}>Contar</button>
            </div>
        )
    }
}

export default App
