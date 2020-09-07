import React,{useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import {projectAuth} from '../firebase/config';

import { motion } from 'framer-motion';


// Need to make this load and unload dynamically.

const ImageGrid = ({ setSelectedImg }) => {
  
  const { docs } = useFirestore('images');
  const [userState,setUserState] = useState(false);
  projectAuth.onAuthStateChanged(user => {
    if(user) {
      setUserState(true);
    }
    else {
      setUserState(false);
    }

  })
  if(userState===false)
  {
    return (
     
      <div className="img-grid">
      {docs && docs.map(doc => (
        
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc)} 
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1 }}
          />
         
        </motion.div>
        
      ))}
    </div>

    )
  }
  else {
    // User signed out, fade gallery, etc
  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc)}
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
}

export default ImageGrid;