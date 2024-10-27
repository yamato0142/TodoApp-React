import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase"; // firebase.jsからauthをインポート

export const SignIn = () => {


    const signInWithGoogle = () => {
        // Googleプロバイダオブジェクトのインスタンスを作成
        const provider = new GoogleAuthProvider();
        // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert("success : " + user.displayName + "さんでログインしました");
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    
    return (
        <div>
            <div className="login">
                <h1>ログイン</h1>
            </div>
            <div className="signin_button">
                <img src="../btn_google_signin.png" onClick={signInWithGoogle} alt="google signin" />
            </div>
        </div>
    );
}
