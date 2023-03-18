import './App.css';
import { useState } from 'react';

function App() {

  let [errorM, setErrorM] = useState('')
  let [errorM2, setErrorM2] = useState('')
  let [errorM3, setErrorM3] = useState('')
  let [errorM4, setErrorM4] = useState('')
  let [name, setName] = useState('')
  let [lastName, setLastName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  return (<>
  
  <main>
    <article className='trial-info'>
      <h1>Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is unvaluable.</p>
    </article>
    
    <section className='form-section'>
      <span className='trial-price'><span className='bold'>Try it free 7 days</span> then 20$/mo. thereafter</span>

      <form className='form'>

        {/* FOR INPUTS */}
        <div>
          <input type="text" placeholder='First Name' onInput={(e) => {setName(name = e.target.value)}}/>
          <p style={{fontSize: '0.6em', color: '#ff7a7a'}}>{errorM}</p>
        </div>
        <div>
          <input type="text" placeholder='Last Name' onInput={(e) => {setLastName(lastName = e.target.value)}}/>
          <p style={{fontSize: '0.6em', color: '#ff7a7a'}}>{errorM2}</p>
        </div>
        <div>
          <input type="email" placeholder='Email Address' onInput={(e) => {setEmail(email = e.target.value)}} />
          <p style={{fontSize: '0.6em', color: '#ff7a7a'}}>{errorM3}</p>
        </div>
        <div>
          <input type="password" placeholder='Password' onInput={(e) => {setPassword(password = e.target.value)}}/>
          <p style={{fontSize: '0.6em', color: '#ff7a7a'}}>{errorM4}</p>
        </div>
        <input type="submit" value="CLAIM YOUR FREE TRIAL" onClick={(e) => {
          e.preventDefault()

          if (name == '') {
            setErrorM('First Name cannot be empty');
          } else {
            setErrorM('');
          }

          if (lastName == '') {
            setErrorM2('Last Name cannot be empty');
          } else {
            setErrorM2('');
          }
          
          if (email == '') {
            setErrorM3('Looks like this is not an email');
          } else {
            setErrorM3('');
          }

          if (password == '') {
            setErrorM4('Password cannot be empty');
          } else {
            setErrorM4('');
          }
        }}/>

        {/* for terms and conditions */}
        <p>By clicking the button, you're agreeing to our <span className='red'>Terms and Services</span></p>

      </form>
    </section>
  </main>
  </>);
}

export default App;
