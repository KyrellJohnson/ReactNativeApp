import { collection, getDocs, orderBy, query, startAfter, where, limit, Timestamp } from "firebase/firestore";
import Firebase from "../../config/firebase";

const GetUserMainFeed = async function () {
    const auth = Firebase.auth;
    const db = Firebase.firestore;

    var posts = [];

    // query the first set of documents
    const first = query(collection(db, "posts"), orderBy("createdDate", "desc"), where("uid", "==", auth.currentUser.uid ) ,limit(25));
    const documentSnapshots = await getDocs(first);

    documentSnapshots.forEach((doc) => {
/*         console.log(doc.id + ": " + doc.data().createdDate.toDate())
        console.log("NOW: " + Timestamp.now().toDate())

        const date1 = doc.data().createdDate.toDate()
        const date2 = Timestamp.now().toDate()

        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffTime + " milliseconds")
        console.log(diffDays + " days");
        console.log(msToTime(diffTime))
 */
        posts.push({
            title: doc.data().title,
            content: doc.data().content,
            timestamp: doc.data().createdDate.toDate().toLocaleString(),
            image: doc.data().image,
            favCount: doc.data().favCount,
            commentCount: doc.data().commentCount,
            uid: doc.data().uid,
            postId: doc.id
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


function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

export default GetUserMainFeed;