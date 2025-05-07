// React
import React, {Fragment, useState} from "react"

// i18Next
import { useTranslation } from 'react-i18next'

// Components
import PageSection from '../PageSectionFiles/PageSection'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import contactStyles from './contact.module.css'

// icons
import { CiMap } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

// google maps
import GoogleMapReact from 'google-map-react';

// Google maps location marker content
const Marker = ({ text }) => {
    return(
        <Fragment>
            <div className="d-flex flex-column align-items-center justify-content-center" 
                style={{color:"#e71580"}}
            >
                <IoLocationOutline size={20}/>
                {text}
            </div>
        </Fragment>
    )
}

const Contact = () => {

    // Language
    const {t} = useTranslation();

    // input values to be used later
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    
    // Input fields array
    const input = [
        {
            tag: 'input',
            type: 'text',
            placeholder: t('entername') + " *",
            inputChange: (value)=>{setName(value)},
        },
        {
            tag: 'input',
            type: 'email',
            placeholder: t('enteremail') + " *",
            inputChange: (value)=>{setEmail(value)},
        },
        {
            tag: 'input',
            type: 'mobile',
            placeholder: t('enterphoneno') + " *",
            inputChange: (value)=>{setPhone(value)},
        },
        {
            tag: 'input',
            type: 'text',
            placeholder: t('entersubject'),
            inputChange: (value)=>{setSubject(value)},
        },
        {
            tag: 'textarea',
            type: 'text',
            placeholder: t('message') + " *",
            inputChange: (value)=>{setMessage(value)},
        },
    ]

    // Cards array
    const contactCards = [
        {
            icon:<CiMap/>,
            title:t('address'),
            detail:"123 Street, Old Trafford, London, UK",
        },
        {
            icon:<HiOutlineMailOpen/>,
            title:t('emailaddress'),
            detail:"info@yourmail.com",
        },
        {
            icon:<IoIosPhonePortrait/>,
            title:t('phone'),
            detail:"+ 457 789 789 65",
        },
    ]

    // Google maps default values
    const defaultProps = {
        center: {
          lat: 26.8206,
          lng: 30.8025
        },
        zoom: 5
    };

    return(
        <Fragment>

            {/* Page title */}
            <PageSection title={t('contactUs')}/>

            {/* Contact section container */}
            <div className="mainSectionContainer">
                
                <div className={contactStyles.contactSectionContainer}>
                    
                    {/* Cards section 1 */}
                    <div className={contactStyles.cardsSection}>
                        {contactCards.map((data,index)=>{
                            return(
                                <div key={index} className={contactStyles.cardContainer}>

                                    {/* Icon */}
                                    <div className={contactStyles.cardIcon}>
                                        {data.icon}
                                    </div>

                                    {/* Title */}
                                    <span>{data.title}</span>
                                    
                                    {/* Detail */}
                                    <p className="word-break-1">{data.detail}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Contact mail and maps section 2 */}
                    <div className={contactStyles.contactSection}>

                        {/* Contact information input fields */}
                        <div className={contactStyles.contactContent}>

                            {/* Title */}
                            <span>{t('getintouch')}</span>
                            
                            {/* Description */}
                            <p>{t('shortlorem')}</p>
                            
                            {/* Input container */}
                            <div className={contactStyles.contactInputContainer}>
                                {input.map((data, index)=>{
                                    // if the input field is input return the following
                                    if(data.tag == "input"){
                                        return(
                                            <Fragment key={index}>
                                                <input 
                                                    type={data.type}
                                                    onChange={data.inputChange}
                                                    placeholder={data.placeholder} 
                                                    className={contactStyles.contactInputField} 
                                                />
                                            </Fragment>
                                        )
                                    }
                                    // if the input field is text area return the following
                                    else if(data.tag == "textarea"){
                                        return(
                                            <Fragment key={index}>
                                                <textarea
                                                    type={data.type}
                                                    style={{width:"100%"}}
                                                    onChange={data.inputChange}
                                                    placeholder={data.placeholder} 
                                                    className={contactStyles.contactInputField} 
                                                />
                                            </Fragment>
                                        )
                                    }
                                })}
                            </div>

                            {/* Message button */}
                            <div className={"button primaryButton"}
                                onClick={()=>{
                                    if(name != "" && email != "" && phone != "" && subject != "" && message != "" ){
                                        alert(t('messagesent'))
                                    }
                                    else{
                                        alert(t("pleasefillallinputfieldstocontinue"))
                                    }
                                }}
                            >
                                {t('sendmessage')}
                            </div>
                        </div>

                        {/* Google maps */}
                        <div className={contactStyles.mapsContainer}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                {/* Marker on map */}
                                <Marker
                                    lat={30.0511}
                                    lng={31.3656}
                                    text={t('here')}
                                />
                            </GoogleMapReact>
                        </div>
                    </div>

                </div>
            
            </div>

        </Fragment>
    )
}

export default Contact