import firebase from 'firebase/app';
import 'firebase/firestore';

export function getFirestoreValue(collection, doc, field) {
  const db = firebase.firestore();
  return db.collection(collection).doc(doc).get().then(function(d) {
    return d.exists ? d.data()[field] : 'ERROR';
  });
}
