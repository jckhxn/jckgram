import { useState, useEffect } from 'react';
import { projectFirestore,projectAuth} from '../firebase/config';

const useFirestore = (collection) => {
  const [userID,setUserId] = useState(0);
  const [docs, setDocs] = useState([]);
  projectAuth.onAuthStateChanged(user => { 
    if(user) {
      setUserId(user.uid);
    }
    else {
      // No user.  YOU GET NOTHING.
      
    }
  });
  useEffect(() => {
   
 

    const unsub = projectFirestore.collection(collection).where('user','==',userID)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          
          documents.push({...doc.data(), id: doc.id,});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts

  }, [collection,userID]); 
  
  return { docs };

}

export default useFirestore;