import React, { useState } from 'react'
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import styled from 'styled-components'

const LoginSignup = () => {
    
    const [action, setAction] = useState("Sign Up", "Login")

  return (
  
    <Wrapper className="container">
        <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"></div>
        </div>   
        <div className="inputs">
          {action==="Login"? <div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='User name' />
              </div>}
              
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
              </div>
        </div>   
        {action==="Sign Up"? <div></div>: <div className="forget-password">
            Forget Password? <span>Click Here</span>
        </div>}
        
        <div className="submit-container">
            <div className= {action==="Login"?"submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
            <div className= {action==="Sign Up"?"submit gray" : "submit"} onClick={() =>{setAction("Login")}}>Login</div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.container{
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 200px;
  width: 600px;
  background: #fff;
  padding-bottom: 30px;
}

.header{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 100%;
  margin-top: 30px;  
}

.text{
  color: #3c009d;
  font-size: 48px;
  font-weight: 700;
}

.underline{
  width: 61px;
  height: 6px;
  background: #3c009d;
  border-radius: 9px;
}

.inputs{
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.input{
  display: flex;
  align-items: center;
  margin: auto;
  width: 480px;
  height: 80px;
  background: #eaeaea;
  border-radius: 8px;
}

.input img{
  margin: 0px 20px;
}

.input input{
  height: 50px;
  width: 400px;
  background: transparent;
  border: none;
  outline: none;
  color: #797979;
  font-size: 19px;
}

.forget-password{
  padding-left: 62px;
  margin-top: 27px;
  color: #797979;
  font-size: 18px;
  margin-left: 530px;
}

.forget-password{
  color: #4c00b4;
  cursor: pointer;
}

.forget-password span:hover{
  text-decoration: underline;
}

.submit-container{
  display: flex;
  gap: 30px;
  margin: 60px auto;
  margin-left: 360px;
}

.submit{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: #fff;
  background: #4c00b4;
  border-radius: 50px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
}

.gray{
  background: #eaeaea;
  color: #676767;

}
`
export default LoginSignup
 