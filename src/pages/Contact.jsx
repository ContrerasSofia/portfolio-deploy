import { useState } from 'react';


export default function Contact() {
  
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [uName, setUName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'uName') {
      setUName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) 
    || !uName ||  !message) {
      setErrorMessage('Wrong entry data');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      
    }
    
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUName('');
    setMessage('');
    setEmail('');
  };
  
  return (
    <div className='row justify-content-center'>
      <h3  className='col-7 text-center mt-3'> Contact</h3>
      <div className='col-6 '>
      <form className="form" onSubmit={handleFormSubmit}>
      <label  className="form-label mt-3">Name</label>
      <input 
          className='form-control'
          value={uName}
          name="uName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <label  className="form-label mt-3">Email</label>
        <input
        className='form-control '
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label  className="form-label mt-3">Message</label>
        <textarea
        className='form-control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          rows="4"
        />
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        <button className='btn btn-outline-dark mt-3' type="submit">Submit</button>
      </form>
      
      </div>
     
    </div>
  );
}
