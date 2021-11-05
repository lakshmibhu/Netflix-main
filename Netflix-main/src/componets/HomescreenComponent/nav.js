import firebase from "firebase";
import React, { useState, useEffect } from "react";
import "../../css/Nav.css";


function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          className="logo"
        />

        <button class="favouriteMovies">favouriteMovies</button>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="nav_avatar"
          onClick={() => firebase.auth().signOut()}
        />
      </div>
    </div>
  );
}

export default Nav;



// const reducer = ()=>({});
// const sagaMiddleware = ReduxSaga.default();
// const store = createStore(reducer, {}, compose(
//     applyMiddleware(
//         sagaMiddleware
//     )
// ));
// store.runSagas = sagaMiddleware.run;

// // ------------ Sagas

// const BUTTON_PRESSED = 'Button is not woking currently';

// function* waitTilButtonPressed(){
//     while(true){
//         yield take(BUTTON_PRESSED);
//         yield call([window, 'alert'], 'button pressed');
//     }
// }

// // ------------ Run

// store.runSagas(waitTilButtonPressed);

// // ------------ Render

// const Button = ({ onClick })=>(
//     <button onClick={onClick}>
//         Click
//     </button>
// );

// const EnhancedButton = connect(
//     null,
//     dispatch => ({
//         onClick: ()=>dispatch({
//             type: BUTTON_PRESSED
//         })
//     })
// )(Button);

// ReactDOM.render((
//     <Provider store={store}>
//         <EnhancedButton/>
//     </Provider>
// ), document.getElementById('app'));
