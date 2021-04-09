import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import IndexNavigation from './src/navigation/IndexNavigation';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IndexNavigation />
    </PersistGate>
  </Provider>
);

export default App;
