import React from 'react';
import { projectFirestore} from '../firebase/config';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {
  
  
  const handleClick = (e) => {
   
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
    if(e.target.classList.contains('deleteButton'))
    {
      console.log('Delete button pressed');
      console.log(selectedImg.id);
       projectFirestore.collection('images')
      .doc(selectedImg.id).delete();
      setSelectedImg(null);
      
  }
}

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.button className='deleteButton'>X</motion.button> 
      <motion.img src={selectedImg.url} alt="enlarged pic" 
        initial={{ y: "-100vh" }}q
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal;