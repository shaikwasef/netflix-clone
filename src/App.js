import React,{useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen"
import {auth} from './firebase'
import {useDispatch , useSelector} from "react-redux"
import {login,logout , selectUser} from "./features/UserSlice"
import ProfileScreen from "./screens/ProfileScreen"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //To check if there is a user who is signed in
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(
        (userAuth) => {
          if(userAuth){
            dispatch(
              login({
              uid : userAuth.uid,
              email : userAuth.email ,
            }))
          }else{
            dispatch(logout())
          }
        }
      );
      return unsubscribe;
      }
      , [dispatch])
    
  return (
    /*class App gives background color (black) */    
    <div className="App">
    {/* Router to switch path */}
      <Router>
    {/* If user available then display to HomeScreen else LoginScreen */}
        {!user ? (<LoginScreen/>) : (
        <Switch>
          {/* for path /profile switch to ProfileScreen */}
          <Route path = "/profile">
            <ProfileScreen />
          </Route>
           {/* for path /profile switch to homescreen */}
          <Route exact path="/">
           <HomeScreen />
          </Route>
        </Switch> )}
    </Router>
    </div>
  );
}

export default App;
