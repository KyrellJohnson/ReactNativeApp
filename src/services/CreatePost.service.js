import Firebase from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore"; 

const CreatePost = async function(props){
    const postContent = props.postContent;
    const postUser = props.id

    try{
        const docRef = await addDoc(collection(Firebase.firestore, "posts"), {
            postContent: postContent,
            postUser: postUser
        })
        console.log("Document written with ID: ", docRef.id)
    }catch(e){
        console.log("Error writing Doc: " + e);
    }


}

export default CreatePost;