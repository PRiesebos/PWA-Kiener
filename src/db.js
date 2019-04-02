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

firebase.initializeApp(config);
const db = firebase.firestore();
const docRef = db.collection("users");

db.addUser = async (
    userObject,
    customerType,
    title,
    first,
    last,
    email,
    streetAndNumber,
    zip,
    city,
    country
) => {
    try {
        await db
            .collection("users")
            .doc(userObject)
            .set({
                id: userObject,
                customerType,
                title,
                first,
                last,
                email,
                streetAndNumber,
                zip,
                city,
                country,
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
                if (doc.exists) {
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
        store.commit("setCurrentUserData", null);

        return true;
    } catch (error) {
        return error;
    }
};

export default db;
