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
const docUser = db.collection("users");

db.addUser = async (userObject, email, name) => {
    try {
        await docUser.doc(userObject).set({
            id: userObject,
            email,
            name,
        });
    } catch (error) {
        return error;
    }
};

db.addAddress = async (
    userObject,
    number,
    type,
    fname,
    lname,
    street,
    city,
    zip,
    country,
    ship,
    bill
) => {
    try {
        await docUser
            .doc(userObject)
            .collection("Addresses")
            .doc(number)
            .set({
                type,
                fname,
                lname,
                street,
                city,
                zip,
                country,
                shipping: ship,
                billing: bill,
            });
    } catch (error) {
        return error;
    }
};

db.getUser = async user => {
    try {
        await docUser
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

db.updateUserInfo = async (id, salutation, fname, lname) => {
    try {
        await docUser.doc(id).update({
            salutation: salutation,
            firstName: fname,
            lastName: lname,
        });
        await docUser
            .doc(id)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    store.commit("setCurrentUserData", doc.data());
                } else {
                    console.log("No such document or data already stored");
                }
            });
        return true;
    } catch (error) {
        return error;
    }
};

db.updateUserEmail = async (id, email) => {
    try {
        await docUser.doc(id).update({
            email: email,
        });
        await docUser
            .doc(id)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    store.commit("setCurrentUserData", doc.data());
                } else {
                    console.log("No such document or data already stored");
                }
            });
        return true;
    } catch (error) {
        return error;
    }
};

db.signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        return error;
    }
};

db.signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        return error;
    }
};

db.signOut = async () => {
    try {
        await firebase.auth().signOut();

        store.commit("setCurrentUserData", null);

        return true;
    } catch (error) {
        return error;
    }
};

db.resetPassword = async email => {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
        return error;
    }
};

export default db;
