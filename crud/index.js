const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  deleteDoc,
} = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyD5NUBAUBfNamZzfe9QMM2obbJ7HnqFNsk",
  authDomain: "biblioteca-firebase-1e69e.firebaseapp.com",
  projectId: "biblioteca-firebase-1e69e",
  storageBucket: "biblioteca-firebase-1e69e.appspot.com",
  messagingSenderId: "345044561990",
  appId: "1:345044561990:web:3bf1dd0f5d1e7c6e441a47",
  measurementId: "G-3010FRQLL3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function save(tableName, id, data) {
  if (id) {
    const referenceEntity = await setDoc(doc(db, tableName, id), data);
    const savedData = {
      ...data,
      id: id,
    };
    return savedData;
  } else {
    const referenceEntity = await addDoc(collection(db, tableName), data);
    const savedData = {
      ...data,
      id: referenceEntity.id,
    };
    return savedData;
  }
}

async function get(tableName) {
  const tableRef = collection(db, tableName);

  const q = query(tableRef);

  const querySnapshot = await getDocs(q);

  const list = [];

  querySnapshot.forEach((doc) => {
    const data = {
      ...doc.data(),
      id: doc.id,
    };
    list.push(data);
  });
  return list;
}

async function getByID(tableName, id) {
  const docRef = doc(db, tableName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return new Error("Not found!");
  }
}

async function remove(tableName, id) {
  const data = await deleteDoc(doc(db, tableName, id));
  return {
    message: `${id} deleted`,
  };
}

module.exports = { save, get, getByID, remove };
