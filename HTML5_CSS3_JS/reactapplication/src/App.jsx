import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Navbar />
                <Content />
            </>
        );
    }
};

export default App;