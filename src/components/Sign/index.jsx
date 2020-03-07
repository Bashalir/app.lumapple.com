import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function Sign({ user, signOut, signInWithGoogle }) {
  return (
    <div className="account">
      {user ? <p>Salut, {user.displayName}</p> : <p>Login stp</p>}

      {user ? (
        <>
          <button onClick={signOut}>Déconnexion</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Se login avec Google</button>
      )}
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Sign);
