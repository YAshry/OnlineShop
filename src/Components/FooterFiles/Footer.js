// React
import React, {Fragment,useState,useEffect} from "react"
import {NavLink, Link, useParams} from "react-router-dom";

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import {useDispatch} from 'react-redux'
import { productSlice } from '../ReduxFiles/productSlice'

// Axios
import axios from 'axios'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import footerStyles from './footer.module.css'

// Images
import visa from '../Assets/PaymentLogos/visa.png'
import master from '../Assets/PaymentLogos/master.png'
import paypal from '../Assets/PaymentLogos/paypal.png'
import footerLogo from '../Assets/Logo/footerLogo.png'
import discover from '../Assets/PaymentLogos/discover.png'
import american from '../Assets/PaymentLogos/american.png'

// Icons
import {FaTwitter} from 'react-icons/fa'
import {TfiGoogle} from 'react-icons/tfi'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {TiSocialInstagram} from 'react-icons/ti'

const Footer = () => {
    
    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()

    // Params
    var {category} = useParams()

    // Products fetched and saved in products useState
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((resp)=>{
            if(resp && resp?.status == 200 && resp?.data){
                setProducts(resp.data);
            }
            else{
                console.log("No Data Fetched")
            }
        }).catch((err)=>
            console.log(err)
        )
    },[])

    // Product Categories saved in categories array
    const categories = []
    {products?.map((data,index)=>{
        if(categories.includes(data.category) == false){
            categories.push(data.category)
        }
    })}

    // Social icons array
    const socialIcons = [
        {
            icon:<BiLogoFacebook size={22}/>,
            link:"https://www.facebook.com",
        },
        {
            icon:<FaTwitter size={18}/>,
            link:"https://www.twitter.com",
        },
        {
            icon:<TfiGoogle size={17}/>,
            link:"https://www.google.com",
        },
        {
            icon:<AiOutlineYoutube size={20}/>,
            link:"https://www.youtube.com",
        },
        {
            icon:<TiSocialInstagram size={20}/>,
            link:"https://www.instagram.com",
        },
    ]

    // Footer components array
    const pages = [
        {
            link:'questions',
            name:t('faq'),
        },
        {
            link:'about',
            name:t('aboutUs'),
        },
        {
            link:'contact',
            name:t('contactUs'),
        },
    ]

    // Payment options array
    const payments = [
        {
            image:visa,
        },
        {
            image:discover,
        },
        {
            image:master,
        },
        {
            image:paypal,
        },
        {
            image:american,
        },
    ]

    return(
        <Fragment>

            {/* Subscribe */}
            <div className={`${footerStyles.footerSubscribeContainer}` + " row m-0 "}>

                {/* Title */}
                <div className={footerStyles.leftItems}>
                    {t('subscribeournewsletter')}
                </div>

                {/* Input and button */}
                <div className={footerStyles.rightItems}>
                    <div className={footerStyles.subscribeInputContainer}>
                        <input type="email" placeholder={t('enteremail')}/>
                        <button>{t('subscribe')}</button>
                    </div>
                </div>
            </div>

            {/* Logo and Links */}
            <div className={`${footerStyles.footerPagesContainer}` + " row m-0 "}>
                
                {/* Logo, Description, and Social Icons */}
                <div className=" col-lg-4 col-md-4 col-sm-4 p-0 d-flex flex-column align-items-center ">
                    <div className={footerStyles.footerSection}>

                        {/* Logo */}
                        <div className={footerStyles.footerLogo}>
                            <img src={footerLogo}/>
                        </div>

                        {/* Description */}
                        <div className={footerStyles.footerDescription}>
                            {t('shortlorem')}
                        </div>

                        {/* Social media icons */}
                        <div className={footerStyles.footerSocialIconsContainer}>
                            {socialIcons?.map((data,index)=>{
                                return(
                                    <Link key={index} to={data.link} target="_blank" className={footerStyles.footerSocialIconsItem}>
                                        {data.icon}
                                    </Link>
                                )
                            })}
                        </div>

                    </div>
                </div>
                
                {/* Navigation */}
                <div className=" col-lg-4 col-md-4 col-sm-4 p-0 d-flex flex-column align-items-center ">  
                    <div className={footerStyles.footerSection}>

                        {/* Title */}
                        <div className={footerStyles.footerSectionTitle}>
                            {t('usefullinks')}
                        </div>

                        {/* Components */}
                        <div className={footerStyles.footerSectionContent}>
                            {pages?.map((data,index)=>{
                                return(
                                    <NavLink key={index} to={data.link} className={footerStyles.footerNavItem + " navItem "}>
                                        {data.name}
                                    </NavLink>
                                )
                            })}
                        </div>

                    </div>
                </div>

                {/* Product Category */}
                <div className=" col-lg-4 col-md-4 col-sm-4 p-0 d-flex flex-column align-items-center ">
                    <div className={footerStyles.footerSection + " mb-0 "}>
                        
                        {/* Title */}
                        <div className={footerStyles.footerSectionTitle}>
                            {t('productcategories')}
                        </div>

                        {/* Product Categories */}
                        <div className={footerStyles.footerSectionContent}>
                            {categories?.map((data,index)=>{
                                category=data;
                                return(
                                    <Link to={'/products/'+category} key={index} className={footerStyles.footerNavItem + " navItem "}
                                        onClick={()=>{
                                            dispatch(productSlice.actions.setCategory(data))
                                        }}
                                    >
                                        {data}
                                    </Link>
                                )
                            })}

                        </div>

                    </div>
                </div>

            </div>

            {/* Copyright and Payments */}
            <div className={`${footerStyles.footerBottomSection}` + " row m-0 "}>

                {/* Copy right statment */}
                <div className={footerStyles.copyRight}>
                    © {t('rights')}
                </div>

                {/* Payment methods */}
                <div className={footerStyles.paymentSection}>
                    {payments?.map((data, index)=>{
                        return(
                            <div key={index} className={footerStyles.paymentItem}>
                                <img src={data.image}/>
                            </div>
                        )
                    })}
                </div>

            </div>
        </Fragment>
    )
}

export default Footer