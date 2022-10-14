const firebase = require('firebase');
require('firebase/firestore');



//import * as firebase from 'firebase'
//import * as firestore from 'firebase/firestore'

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

    static db(){

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

}