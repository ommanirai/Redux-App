import logo from './logo.svg';
import './App.css';
// import UseState from './components/UseState';
// import UseNumber from './components/UseNumber';
// import UseEffect from './components/UseEffect';
// import DataFetch from './components/DataFetch';
// import UsingContext from './components/UsingContext';
// import GlobalContextProvider from './components/GlobalContext';
import MyRoutes from './MyRoutes';
import { combineReducers, createStore } from 'redux';
// import counterReducer from './reducer/counterReducer';
import { Provider } from 'react-redux';
// import gameReducer from './reducer/gameReducer';
// import Counter from './pages/Counter';
import itemReducer from './reducer/itemReducer';
import cartReducer from './reducer/cartReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  // const store = createStore(counterReducer)
  // const gameStore=createStore(gameReducer)
  // const combinedReducers = combineReducers({
  //   counter: counterReducer,
  //   game: gameReducer
  // })

  const persistConfig = {
    key: 'root',
    storage,
  }


  const combinedStore = combineReducers({
    item: itemReducer,
    cart: cartReducer
  })

  const persistedReducer = persistReducer(persistConfig, combinedStore)



  const my_store = createStore(persistedReducer)
  let my_persistor=persistStore(my_store)
  return (
    <>
      {/* {/* <UseState /><br/><br/>
      <UseNumber/> */
      /* <UseEffect/> */
      /* <DataFetch/> */
      /* <GlobalContextProvider>
      <UsingContext/>
      </GlobalContextProvider>*/}
      {/* <Provider store={store}> */}
      <PersistGate persistor={my_persistor}>
      <Provider store={my_store}>
        <MyRoutes />
      </Provider>
      </PersistGate>
    </>

  );
}

export default App;
