// React
import {useNavigate} from 'react-router-dom'
import React, { Fragment, useEffect, useState } from 'react'

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useDispatch } from 'react-redux'
import { userSlice } from '../ReduxFiles/userSlice'

// Axios
import axios from 'axios'

// Components
import PageSection from '../PageSectionFiles/PageSection'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import loginStyles from './login.module.css'

const Login = () => {

    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()

    // Navigation
    const navigate = useNavigate()

    // fetching user data from api and saving the data in users
    const [users, setUsers] = useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/users').then((resp)=>{
            setUsers(resp.data);
        }).catch((err)=>
            console.log(err)
        )
    },[])

    // Handling login function: checking username and password
    const [loginError, setLoginError] = useState(false)
    const handleLogin = ()=>{
        const user = users?.filter((data)=>{
            if(data.username == name){
                if(data.password == password){
                    setLoginError(false)
                    dispatch(userSlice.actions.getUserData(data))
                    navigate('/home')
                    return data
                }
            }
        })
        if(user.length == 0){
            setLoginError(true)
        }
    }

    // Input values are saved in these constants to be used
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    return(
        <Fragment>

            {/* Page title */}
            <PageSection title={t('login')}/>

            {/* Login section container */}
            <div className='mainSectionContainer'>
                
                <div className={loginStyles.loginContainer}>

                    <div className={loginStyles.sectionContent}>

                        {/* Title */}
                        <div className={loginStyles.sectionTitle}>
                            {t('logintoyouraccount')}
                        </div>
                        
                        {/* Username */}
                        <label>
                            <span>{t('username')}</span>
                            <input 
                                className={loginStyles.inputContainer}
                                type="text" 
                                placeholder={t('username')}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </label>

                        {/* Password */}
                        <label>
                            <span>{t('password')}</span>
                            <input 
                                className={loginStyles.inputContainer}
                                type="password" 
                                placeholder={t('password')}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </label>
                        
                        {/* If password is incorrect message */}
                        {loginError && 
                            <p style={{textAlign:"center",color:"red"}}>
                                {t('incorrectusernameorpassword')}
                            </p>
                        }
                        
                        {/* Login button */}
                        <div className={"button centeredSecondaryButton"} 
                            onClick={()=>handleLogin()}
                        >
                            {t('login')}
                        </div>

                    </div>

                </div>
            
            </div>
        </Fragment>
    )
}

export default Login