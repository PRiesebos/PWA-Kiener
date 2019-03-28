import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import store from "@/store";

var config = {
    apiKey: "AIzaSyAqfBIX3z84Ji1cHHsQqXc5uK4wtP8yYog",
    authDomain: "vuejs-http-53bfb.firebaseapp.com",
    databaseURL: "https://vuejs-http-53bfb.firebaseio.com",
    projectId: "vuejs-http-53bfb",
    storageBucket: "vuejs-http-53bfb.appspot.com",
    messagingSenderId: "897220143817",
};

const db = firebase.initializeApp(config);
const dbf = firebase.firestore();
const docRef = dbf.collection("users");

db.addUser = async (
    userObject,
    username,
    customerType,
    title,
    first,
    last,
    email
) => {
    try {
        await dbf
            .collection("users")
            .doc(username)
            .set({
                id: userObject,
                username,
                customerType,
                title,
                first,
                last,
                email,
            });
    } catch (error) {
        return error;
    }
};

db.getUser = async user => {
    try {
        await docRef
            .doc(user)
            .get()
            .then(function(doc) {
                if (doc.exists && store.setCurrentUserData == null) {
                    store.commit("setCurrentUserData", doc.data());
                } else {
                    console.log("No such document or data already stored");
                }
            });
    } catch (error) {
        return error;
    }
};

db.signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        store.commit("setCurrentUser", firebase.auth().currentUser);

        return true;
    } catch (error) {
        return error;
    }
};

db.signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);

        store.commit("setCurrentUser", firebase.auth().currentUser);

        return true;
    } catch (error) {
        return error;
    }
};

db.signOut = async () => {
    try {
        await firebase.auth().signOut();

        store.commit("setCurrentUser", null);

        return true;
    } catch (error) {
        return error;
    }
};

export default db;
