import React from 'react';

const App = () => {
    return (
        <div className="App">
            <div className="number">0</div>
            <div className="buttons">
                <button type="button" className="increase">+</button>
                <button type="button" className="reset">reset</button>
                <button type="button" className="decrease">-</button>
            </div>
        </div>
    );
};

export default App;
