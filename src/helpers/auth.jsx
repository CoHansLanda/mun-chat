import { auth } from "../services/firebase"
export function signUp(email,password){
    return auth().createUserWithEmailAndPassword(email,password);
}
export function logIn(email,password){
    return auth().signInWithEmailAndPassword(email,password);
}
export function signInWithGoogle(){
    var provider=new auth.GoogleAuthProivder();
    return auth().signInWithPopup(provider);
}
export function logout(){
    return auth().signOut();
}
export default null;