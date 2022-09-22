import { collection, getDocs, orderBy, query, startAfter, where, limit } from "firebase/firestore";
import Firebase from "../../config/firebase";

const GetUserMainFeed = async function () {
    const auth = Firebase.auth;
    const db = Firebase.firestore;

    var posts = [];

    // query the first set of documents
    const first = query(collection(db, "posts"), orderBy("createdDate", "desc"), where("uid", "==", auth.currentUser.uid ) ,limit(25));
    const documentSnapshots = await getDocs(first);

    documentSnapshots.forEach((doc) => {
        posts.push({
            title: doc.data().title,
            content: doc.data().content,
            timestamp: doc.data().createdDate.toDate().toLocaleString(),
            image: doc.data().image,
            favCount: doc.data().favCount,
            commentCount: doc.data().commentCount,
            uid: doc.data().uid
        });
        //DEBUG: console.log("DOC" + doc.data);
    });

    /* // get the last visible document in snapshot
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    DEBUG:
    console.log("last", lastVisible);

    // Construct a new query starting at this document,
    // get the next 25 cities.
    const next = query(collection(db, "posts"), orderBy("createdDate", "desc"), startAfter(lastVisible) , limit(25));
 */
    return posts;

}

export default GetUserMainFeed;