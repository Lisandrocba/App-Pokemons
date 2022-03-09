import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/appNavigation/AppNavigation';
import store from './src/store/store'
import { init } from './src/utils/data/sqlite';

init().then(() => {
  console.log('DB initialized')
}).catch(err => {
  console.log('DB initialization failed', err)
})


const App = () => {
  return(
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
};

export default App;
