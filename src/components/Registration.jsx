import React ,{ useState}  from 'react'
import "./registration.css"

const Registration = () => {
    
  const btnSubmitClick = () => {
    
    alert("Registration successful!")
  }
  const btnResetClick = () => {
  setUsername("");
  setPassword("");
  setEmail("");
  setStatus("not valid");
    alert("Registration reset!")
  }

  const validateUsername  = (value) => {
   if(value.length >= 8){
    setStatus("valid");
   }
   else {
    setStatus("not valid");
   }
  }
   const validatePassword  = (pass) => {
    if(pass.length >= 8 ){
     isPassValid("valid");
    }
    else {
      isPassValid("not valid");
    }
  }

const [status , setStatus] = useState("not valid");
const [pass , isPassValid] = useState("not valid");
const [username , setUsername] = useState("");
const [password , setPassword] = useState("");
const [email , setEmail] = useState("");


  return (
    <div>
        

      
      <table border="2">
        <tr>
            <td><h5>Registration Form</h5></td>
        </tr>
         <tr>
            <td>
                <input type="text" placeholder="Enter your username" width="150px" 
                 
                onChange={(e) => {
                  const val = e.target.value;
                  setUsername(val);
                    validateUsername(val);
                    
                }}
                value={username}
                />

            </td>
        </tr>
         <tr>
            <td>
                <input type="password" placeholder="Create your password" width="150px"  
                
                onChange={(e) =>{
                const  pass = e.target.value;
                  setPassword(pass);
                  validatePassword(pass);
                }
                }
                value={password}

                />
                
            </td>
             
        </tr>
        <tr>
            <td>
                <input type="text" placeholder="Enter your email id" width="150px" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}  />
                
            </td>
        </tr>  
         <tr>
            <td>
               <button  onClick={btnSubmitClick} disabled={status != "valid" || pass != "valid"}>Submit</button>&nbsp;
               <button  onClick={btnResetClick} >Reset</button>
            </td>
        </tr>



        <tr>
            <td><h3>{username}</h3></td>
        </tr>

      </table>
    </div>
  )
}

export default Registration
