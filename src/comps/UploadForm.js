import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { projectAuth } from '../firebase/config'


const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
    
  projectAuth.onAuthStateChanged(user => { 
          
      if(user) {
          // User signed in.
          setLoggedIn(true);
       
      
      }
      else {
          // Not signed in.
          setLoggedIn(false); 
         
          
      }
      
  })
  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  if(loggedIn)
  {
  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
  }
  else {
    return (
      <h1 className="loginPrompt">You must login first.</h1>
    )
  }
}

export default UploadForm;