import React from 'react'
import { useState} from 'react'

function SignupPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [emailvalid, setEmailValid] = useState("")
    const [passworderror, setPasswordError] = useState("")
    const [nationality, setNationality] = useState("")
    const [message, setMessage] = useState([""])
 

    // Email
      const handleEmail = (e) => {
        setEmail(e.target.value);
      }

      const validateEmail = () => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!email || regex.test(email) === false){
          setEmailError("Please enter a valid email address");
        return false;
      }
      setEmailValid("valid");
      return true;
    }

    const handleSubmit = () => {
      if(validateEmail()) {
        setEmail(email)
      }
    }

    // Password
    const handlePassword = (e) => {
      let newpass = e.target.value;
      setPassword(newpass);
    

    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if (!newpass.match(lowerCase)) {
      setPasswordError("Password should contain lowercase letters")
      return false
    }
    else if (!newpass.match(upperCase)) {
      setPasswordError("Password should at least contain 1 uppercase letter")
      return false
    }
    else if (!newpass.match(numbers)) {
      setPasswordError("Password should contain 1 number")
      return false
    }
    else if (newpass.length < 8) {
      setPasswordError("Password length should be at least 9 letters")
      return false
    }
    else {
      setPasswordError("Password is strong!")
      return true;
    }
  }



        const handleNationality = (e) => {
          const updatedOptions = [...e.target.options]
          .filter(option => option.selected)
          .map(x => x.value);
          setNationality(updatedOptions);
        };
        

        const options = [
          { value: "united Kingdom", label: "United Kingdom"},
          { value: "germany", label: "Germany"},
          { value: "france", label: "France"}
        ]

     

  return (
    <div>
      <form className="d-flex flex-column">
        <label className="Email">Email</label>
        <input type="email" className="form-email mb-3" value={email} placeholder="type email" onChange={handleEmail}></input>
        {emailerror ?
        <span className="text-danger">{emailerror}</span>
        :
        <span className="text-success">{emailvalid}</span>
}
        <label className="Password">Password</label>
        <input type="password" className="form-password" value={password} placeholder="type password" onChange={handlePassword}></input>
       
       {passworderror ?
       <>
       
        {passworderror ?
         <span className="text-danger">{passworderror}</span>
         :
         <span className="text-success">{passworderror}</span>
}
</>
:
<>
{!passworderror ?
         <span className="text-danger">{!passworderror}</span>
         :
         <span className="text-success">{passworderror}</span>
}
</>
}
        </form>

        <select value={nationality} onClick={() => setMessage(message)} options={options} className="form-control mt-3" onChange={handleNationality}>
        {options.map(option => {
          return <option className="options-countries" value={option.value}>{option.label}<p>{option.text}</p></option>
        })}
        </select>

        <button onClick={handleSubmit} className="form-control bg-info">Sign Up</button>
        
        <p>Your email is {email}</p>
        
        {emailerror ?
        <>
        {emailerror ?
        <p>Your email address is wrong</p>
        :
        <p>Your email address is correct</p>
}
</>

:
<>
{emailvalid ?
  <p>Your email address is correct</p>
  :
  <p>Your email address is wrong</p>
}
</>
}

</div>
  )
}

export default SignupPage