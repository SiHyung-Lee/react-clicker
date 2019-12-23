import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSync } from '@fortawesome/free-solid-svg-icons';

const Outer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #6c757d;
`;

const Display = styled.div`
  height: 200px;
  color: #6c757d;
  text-align: center;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  font-family: '.AppleSystemUIFont', sans-serif;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  height: 100px;
  width: 33.333%;
  font-size: 30px;
  border: none;
  color: #fff;
`;

class Clicker extends React.Component {
    state = {
        number: 0
    };

    Increase = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    Decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    };

    Reset = () => {
        this.setState({
            number: 0
        });
    };

    render() {
        return (
            <Outer>
                <Display>{this.state.number}</Display>
                <Buttons>
                    <Button className="increase" onClick={this.Increase}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <Button className="reset" onClick={this.Reset}>
                        <FontAwesomeIcon icon={faSync} />
                    </Button>
                    <Button className="decrease" onClick={this.Decrease}>
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                </Buttons>
            </Outer>
        );
    }
}

const App = () => {
    return (
        <div className="App">
            <Clicker />
        </div>
    );
};

export default App;
