import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
// import './index.css';
// import App from './components/App/App';

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <BrowserRouter>
//         <Route component={App} />
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );