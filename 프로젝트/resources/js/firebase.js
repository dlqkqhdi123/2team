import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqURFWepmS2iVbApVUmBQNWgirojWwQKM",
  authDomain: "md-project-ef43a.firebaseapp.com",
  projectId: "md-project-ef43a",
  storageBucket: "md-project-ef43a.appspot.com",
  messagingSenderId: "974099556210",
  appId: "1:974099556210:web:a4810054b80f90c9815feb",
  measurementId: "G-V1QZ8J8081",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

async function addDatas(collectionName, dataObj) {
  // 문서ID 부여
  //   await setDoc(doc(db, "member", "member1"), dataObj);

  // 문서ID 자동
  await addDoc(collection(db, collectionName), dataObj);
}

async function deleteDatas(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}

async function updateDatas(collectionName, docId, updateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  const docData = await getDoc(docRef);
  console.log(docData.data());
  debugger;
  // 문서 필드 데이터 수정
  await updateDoc(docRef, updateInfoObj);
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deleteDoc,
  deleteDatas,
  updateDoc,
  deleteField,
  updateDatas,
};
