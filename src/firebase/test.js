import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firestore = firebase.firestore();
const testFireStore = () => (


console.log(firestore.collection('users').doc('QdHljYeGXmTVXHA0I4fm').collection('cartitems').doc('cPxULWg9ES8G1JGoUWWk'))
)
export default testFireStore();