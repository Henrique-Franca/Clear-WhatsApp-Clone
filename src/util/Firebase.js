//import * as firebase from 'firebase'
//import * as firestore from 'firebase/firestore'

const firebase = require('firebase');
require('firebase/firestore');

//import {Firebase} from 'firebase';



export class Firebase {

    constructor() {

        this._config={

            apiKey: "AIzaSyDCoOaC7pJy-nn0UsRp5vSpGihAzsLMh70",
            authDomain: "whatsapp-clone-2603b.firebaseapp.com",
            projectId: "whatsapp-clone-2603b",
            storageBucket: "whatsapp-clone-2603b.appspot.com",
            messagingSenderId: "443751224266",
            appId: "1:443751224266:web:670cdb8202c30f1a82f533"

        }


        this.init();

    }

    init(){

        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config);
            firebase.firestore().settings({});
            window._initializedFirebase = true;

        }

    }

    initAuth(){

        return new Promise((s,f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().singInWithPopup(provider).then(result=>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({user,token});

            }).cath(err=>{

                f(err);

            })

        });

    }

    static db(){

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

}