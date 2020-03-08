import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config/firebaseConfig';
import StyledSign from './style';
import UserLogo from './assets/user.svg';
import { useHistory } from 'react-router-dom';



function Sign() {

  let history = useHistory();

  function handleClick(link) {
    history.push(link);
  }

  return (

<StyledSign>
<div onClick={()=>{ handleClick('/mon-compte')}}><img src={UserLogo} />
<span>Se connecter</span>

{/* {user ? <span>{user.displayName}</span> : <span>Se connecter</span>} */}

</div>
{/*       {user ? <p>Salut, {user.displayName}</p> : <p>Login stp</p>}

      {user ? (
        <>
          <button onClick={signOut}>Déconnexion</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Se login avec Google</button>
      )} */}
 </StyledSign>


  );
}

export default Sign;
