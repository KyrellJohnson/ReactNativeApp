import Firebase from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateUser = async function (props) {
    const auth = Firebase.auth;
    const email = props.email;
    const password = props.password;

    var errorMessage = null
    if (email !== '' && password !== '' && displayName !== '') {
        await createUserWithEmailAndPassword(auth, email, password)
            .catch(e=> {
                errorMessage = e;
            })
            .then(async e=>{

            })
        
        return errorMessage
        //await updateProfile(auth.currentUser, {displayName: displayName})
    }
}


export default CreateUser;