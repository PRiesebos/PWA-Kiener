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

//firestore functions
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
    title,
    fname,
    lname,
    street,
    city,
    zip,
    country,
    ship
) => {
    try {
        await docUser
            .doc(userObject)
            .collection("addresses")
            .doc(number)
            .set({
                type,
                title,
                fname,
                lname,
                street,
                city,
                zip,
                country,
                ship,
            });
    } catch (error) {
        return error;
    }
};
db.updateAddress = async (userObject, number, ship) => {
    try {
        await docUser
            .doc(userObject)
            .collection("addresses")
            .doc(number)
            .update({
                ship,
            });
        return true;
    } catch (error) {
        return error;
    }
};
db.deleteAddress = async (userObject, number) => {
    try {
        await docUser
            .doc(userObject)
            .collection("addresses")
            .doc(number)
            .delete();
        return true;
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

db.getAddress = async (user, address) => {
    try {
        await docUser
            .doc(user)
            .collection("addresses")
            .doc(address)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    store.commit("setCurrentUserAddress", doc.data());
                } else {
                    console.log("No such document or data already stored");
                    store.commit("setCurrentUserAddress", null);
                }
            });
        return true;
    } catch (error) {
        return error;
    }
};

db.getSecondAddress = async (user, address) => {
    try {
        await docUser
            .doc(user)
            .collection("addresses")
            .doc(address)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    store.commit("setCurrentUserSecondAddress", doc.data());
                } else {
                    console.log("No such document or data already stored");
                    store.commit("setCurrentUserSecondAddress", null);
                }
            });
        return true;
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
        store.commit("setCurrentUserAddress", null);
        store.commit("setCurrentUserSecondAddress", null);

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
