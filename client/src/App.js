import React from 'react';
import { AppProvider } from './context/AppContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';

const MainApp = () => {
    return (
        <Provider store={store}>
            <AppProvider>
                <App />
            </AppProvider>
        </Provider>
    );
};

export default MainApp;