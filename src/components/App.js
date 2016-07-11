import React, {PropTypes} from 'react';
import Header from '../containers/Header';
import SideMenu from './SideMenu';

const App = ({children}) => {
    return (
        <div>
            <Header />
            <SideMenu />
            {children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;