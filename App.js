import React, { useEffect } from 'react';
  import './App.css';
import HomeScreen from './HomeScreen';
import Login from './Login';
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout , selectUser } from './features/userSlice';
function App() {
  const user = true ;
  const dispatch = useDispatch(); 
  useEffect(() => {const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    if(userAuth){
      console.log(userAuth);
      dispatch(login({
        user: userAuth,
        uid: userAuth.uid,
        email: userAuth.email,
      }));
    }else{
      dispatch(logout);
    }
  })
  return unsubscribe;
}, [dispatch]);
  return (
    <div className="App">
    <Router>
    {!user ? <Routes>
      <Route path='/' element={<Login/>}>
      </Route>
    </Routes>  : <Routes> <Route path='/' element={<HomeScreen/>}> </Route> </Routes> }
    </Router>

    </div>
  );
}

export default App;
