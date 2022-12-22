import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { config } from "./coderhousePrivi.js";
admin.initializeApp({
    credential: admin.credential.cert(config),
});
// const db = getFirestore();
