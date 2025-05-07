// React
import React, {Fragment, useState, useEffect,} from "react";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";

// jquery
import $ from "jquery"

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import {useDispatch, useSelector,} from 'react-redux'
import { userSlice } from '../ReduxFiles/userSlice'
import { productSlice } from '../ReduxFiles/productSlice'

// Axios
import axios from 'axios'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import headerStyles from './header.module.css'

// Logo
import headerLogo from '../Assets/Logo/headerLogo.png' 

// Images
import ukIcon from '../Assets/LanguageIcons/uk.png'
import egIcon from '../Assets/LanguageIcons/eg.png'
import egpCurrency from '../Assets/CurrencyIcons/egp.png'
import dollarCurrency from '../Assets/CurrencyIcons/dollar.png'

// Icons
import {ImExit} from 'react-icons/im'
import {TfiMobile} from 'react-icons/tfi'
import {CgMenuBoxed} from 'react-icons/cg'
import {TbShoppingCartShare} from 'react-icons/tb'
import {BiUser, BiLogOutCircle, BiSearchAlt} from 'react-icons/bi'
import {AiOutlineHeart, AiOutlineSearch, AiOutlineClose, AiOutlineShoppingCart} from 'react-icons/ai'

// React DropDown
import Dropdown from 'react-dropdown';

const Header = () => {
    
    // Redux
    const dispatch = useDispatch()
    const userFound = useSelector((state)=>state?.user?.user)
    const currency = useSelector((state)=>state?.product?.currency)
    
    // Language
    const {t,i18n} = useTranslation();
    useEffect(()=>{
        i18n.changeLanguage('en');
    },[])
    
    // Navigation
    const navigate = useNavigate()

    // Params
    var {category, name} = useParams()

    // Products fetched from API and saved in products const
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

    // Fixed Header on Scroll
    const [scrolled, setScrolled] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY >= 200 ? setScrolled(true) : setScrolled(false)
        })
    })

    // Checking if products dropdown shown or hidden
    const [productsDropDown,setProductsDropDown] = useState(false)

    // Search variables
    const [searchResults,setSearchResults] = useState("")
    const [searchActive,setSearchActive] = useState(false)

    // Responsive Navigation Menu
    const [navigationMenu,setNavigationMenu] = useState(false)

    // Language Drop down options
    const langDropdownOptions = [
        {
            value : 'en',
            label :  
             <Fragment>
                 <div className={headerStyles.headerLanguageDropDownContainer}>
                     <div className={headerStyles.headerLanguageIcon}>
                         <img src={ukIcon}/> 
                     </div>
                     {t('english')}
                 </div>
             </Fragment>,
         },
        {
           value : 'ar',
           label :  
            <Fragment>
                <div className={headerStyles.headerLanguageDropDownContainer}>
                    <div className={headerStyles.headerLanguageIcon}>
                        <img src={egIcon}/> 
                    </div>
                    {t('arabic')}
                </div>
            </Fragment>,
        },
    ];
    const respLangDropdownOptions = [
        {
            value : 'en',
            label :  
             <Fragment>
                <div className={headerStyles.headerLanguageIcon}>
                    <img src={ukIcon}/> 
                </div>
             </Fragment>,
         },
        {
           value : 'ar',
           label :  
            <Fragment>
                <div className={headerStyles.headerLanguageIcon}>
                    <img src={egIcon}/> 
                </div>
            </Fragment>,
        },
    ];

    // Currency Drop down options
    const currencyDropdownOptions = [
        {
            value : 'EGP',
            label :  
             <Fragment>
                 <div className={headerStyles.headerCurrencyDropDownContainer}>
                     <div className={headerStyles.headerCurrencyIcon}>
                         <img src={egpCurrency}/> 
                     </div>
                     {t('egp')}
                  </div>
             </Fragment>,
        },
        {
            value : 'USD',
            label :  
             <Fragment>
                <div className={headerStyles.headerCurrencyDropDownContainer}>
                    <div className={headerStyles.headerCurrencyIcon}>
                        <img src={dollarCurrency}/> 
                    </div>
                    {t('usd')}
                 </div>
             </Fragment>,
        },
    ];
    const respCurrencyDropdownOptions = [
        {
            value : 'EGP',
            label :  
             <Fragment>
                <div className={headerStyles.headerCurrencyIcon}>
                    <img src={egpCurrency}/> 
                </div>
             </Fragment>,
        },
        {
            value : 'USD',
            label :  
             <Fragment>
                <div className={headerStyles.headerCurrencyIcon}>
                    <img src={dollarCurrency}/> 
                </div>
             </Fragment>,
        },
    ];

    // Saving product Categories
    const categories = []
    {products?.map((data,index)=>{
        if(categories.includes(data.category) == false){
            categories.push(data.category)
        }
    })}

    // Responsive navigation links
    const responsiveNavigation = [
        {
            component:'home',
            title:t('home'),
        },
        {
            component:'products',
            title:t('products'),
        },
        {
            component:'cart',
            title:t('cart'),
        },
        {
            component:'about',
            title:t('aboutUs'),
        },
        {
            component:'contact',
            title:t('contactUs'),
        },
    ]

    return(
        <Fragment>

            {/* Header */}
            <div className={' col-lg-12 col-md-12 col-sm-12 p-0 '}>

                {/* Upper Header */}
                {scrolled?
                    // if scrolled don't show upper header
                    <Fragment></Fragment>
                    
                    :

                    // if not scrolled show upper header
                    <div className={`${headerStyles.upperHeaderContainer}` + ' row m-0 prl_lg_150 '}>
                        
                        {/* Upper Left Section */}
                        <div className={" col-lg-6 col-md-6 col-sm-12 h-100 p-0 "}>
                            <div className={`${headerStyles.topLeftSection}` + " w-100 justify-content-sm-center "}>
                                
                                {/* Language Drop Down */}
                                <Dropdown 
                                    value={i18n.language} 
                                    options={langDropdownOptions}
                                    placeholder={t('selectLanguage')}
                                    onChange={(e)=>{
                                        if(e.value == "ar"){
                                            $('html').css('direction','rtl');
                                            $('span').css('direction','rtl');
                                            $('.carouselItem').css('direction','rtl');
                                            $('.carouselItemContainer').css('flex-direction', "row-reverse");
                                        }
                                        else if(e.value == "en"){
                                            $('html').css('direction','ltr');
                                            $('span').css('direction','ltr');
                                            $('.carouselItem').css('direction','ltr');
                                            $('.carouselItemContainer').css('flex-direction', "row");
                                        }
                                        i18n.changeLanguage(e.value)
                                    }}
                                />

                                {/* Currency Drop Down */}
                                <Dropdown 
                                    value={currency == "EGP" ? t('egp') : t('usd')} 
                                    placeholder={t('selectCurrency')}
                                    options={currencyDropdownOptions}
                                    onChange={(e)=>{
                                        dispatch(productSlice.actions.changeCurrency(e.value))
                                    }}
                                />

                                {/* Mobile Number */}
                                <div className={headerStyles.headerMobileContainer}>
                                    <TfiMobile className={headerStyles.headerMobileIcon}/>
                                    123 - 456 - 7890
                                </div>

                            </div>
                        </div>

                        {/* Upper Right Section */}
                        <div className=" col-lg-6 col-md-6 col-sm-12 h-100 p-0 ">
                            <div className={headerStyles.topRightSection + ' w-100 justify-content-sm-center '}>

                                {/* Whishlist */}
                                {/* <NavLink to='wishlist' className={headerStyles.topNavItem + " navItem "}>
                                    <div className={headerStyles.headerWishlistContainer}>
                                        <AiOutlineHeart className={headerStyles.headerWishlistIcon}/>
                                        Wishlist
                                    </div>
                                </NavLink> */}

                                {/* Cart */}
                                <NavLink to='cart' className={headerStyles.topNavItem + " navItem "}>
                                    <div className={headerStyles.headerCartContainer}>
                                        <TbShoppingCartShare className={headerStyles.headerCartIcon}/>
                                        {t('cart')}
                                    </div>
                                </NavLink>

                                {/* CheckOut */}
                                <NavLink to='/checkout' className={headerStyles.topNavItem + " navItem "}>
                                    <div className={headerStyles.headerCartContainer}>
                                        <ImExit className={headerStyles.headerCartIcon}/>
                                        {t('checkout')}
                                    </div>
                                </NavLink>

                                {/* Login */}
                                {JSON.stringify(userFound) !== '{}' ?
                                    // Logged in user
                                    <NavLink to='login' className={headerStyles.topNavItem + " navItem "}
                                        onClick={()=>{
                                            dispatch(userSlice.actions.getUserData({}));
                                        }}
                                    >
                                        <div className={headerStyles.headerLogInContainer}>
                                            <BiLogOutCircle className={headerStyles.headerLoginIcon}/>
                                            {t('logout')}
                                        </div>
                                    </NavLink>
                                    :
                                    // User
                                    <NavLink to='login' className={headerStyles.topNavItem + " navItem "}>
                                        <div className={headerStyles.headerLogInContainer}>
                                            <BiUser className={headerStyles.headerLoginIcon}/>
                                            {t('login')}
                                        </div>
                                    </NavLink>
                                }
                                
                            </div>
                        </div>

                    </div>
                }
                

                {/* Lower Header */}
                <div className={scrolled?
                        `${headerStyles.lowerHeaderContainer} ${headerStyles.fixedHeaderAnimation}` + ' d-flex m-0 prl_lg_150 '
                        :
                        `${headerStyles.lowerHeaderContainer}` + ' d-flex m-0 prl_lg_150 '                    
                    }
                >
                      
                    {/* Lower left Section */}
                    <div className=' col-lg-4 col-md-4 col-sm-6 h-100 p-0 '>
                        <div className={headerStyles.lowerLeftSection + " w-100 "}>

                            {/* Logo */}
                            <div className={headerStyles.headerLogo}>
                                <img src={headerLogo}/>
                            </div>

                        </div>
                    </div>

                    {/* Lower Right Section */}
                    <div className=' col-lg-8 col-md-8 col-sm-6 h-100 p-0 d-sm-none '>
                        <div className={headerStyles.lowerRightSection + " w-100 "}>
                            
                            {/* Presents user name when logged in */}
                            <div className={headerStyles.userNameContainer} 
                                style={{display: JSON.stringify(userFound) !== '{}'? 'flex' : 'none'}}
                            >
                                {t('welcome')} {userFound.username} !
                            </div>

                            {/* Navigation Links */}
                            <div className={headerStyles.navigationContainer}>

                                {/* Home */}
                                <NavLink to='home' className={headerStyles.topNavItem + " navItem "}>
                                    {t('home')}
                                </NavLink>

                                {/* Products */}
                                <div className={`${headerStyles.product}`}>
                                    
                                    <NavLink to={'products'} className={`${headerStyles.topNavItem}` + " navItem "} onMouseEnter={()=>setProductsDropDown(true)}>
                                        {t('products')}
                                    </NavLink>

                                    {/* Checking if products dropdown is active or not */}
                                    {productsDropDown?

                                        // if mouse hovers on products nav item show the following
                                        <div className={i18n.language == 'en' ? `${headerStyles.productDropDownContainer}` : `${headerStyles.productDropDownContainer} ${headerStyles.productDropDownContainerAR}`}
                                            onMouseLeave={()=>setProductsDropDown(false)}
                                        >
                                            {categories?.map((data,index)=>{
                                                return(
                                                    <div key={index} className={headerStyles.productDropDownCategory} 
                                                        style={index==categories.length-1 ? {border:"none"}:{}}
                                                    >
                                                        {/* Category title */}
                                                        <div className={headerStyles.productDropDownCategoryTitle}>
                                                            {data}
                                                        </div>

                                                        {/* Category products */}
                                                        {products?.map((prod, i)=>{
                                                                if(prod.category == data){
                                                                    category=prod.category;
                                                                    name=prod.title;
                                                                    return(
                                                                        <Link to={"/products/"+category+"/"+name} key={i} className={headerStyles.productDropDownCategoryItem}
                                                                            onClick={()=>{
                                                                                dispatch(productSlice.actions.viewProduct(prod))
                                                                            }}
                                                                        >
                                                                            {prod.title}
                                                                        </Link>
                                                                    )
                                                                }
                                                            }
                                                        )}
                                                    </div>        
                                                )
                                            })}
                                        </div>

                                        :

                                        // if mouse leaves the container show nothing
                                        <Fragment></Fragment>
                                    }
                                    
                                </div>

                                {/* About Us */}
                                <NavLink to='about' className={headerStyles.topNavItem + " navItem "}>
                                    {t('aboutUs')}
                                </NavLink>

                                {/* Contact Us */}
                                <NavLink to='contact' className={headerStyles.topNavItem + " navItem "}>
                                    {t('contactUs')}
                                </NavLink>

                                {/* Cart */}
                                <NavLink to='cart' className={headerStyles.topNavItem + " navItem "}
                                    style={scrolled? { } : {display:"none"}}
                                >
                                    <AiOutlineShoppingCart/>
                                </NavLink>

                                {/* Checkout */}
                                <NavLink to='/checkout' className={headerStyles.topNavItem + " navItem "}
                                    style={scrolled? { } : {display:"none"}}
                                >
                                    <ImExit/>
                                </NavLink>

                                {/* Language Drop Down */}
                                <Dropdown 
                                    value={i18n.language} 
                                    placeholder={t('selectLanguage')}
                                    options={respLangDropdownOptions}
                                    className={scrolled? " " : "d-none"}
                                    onChange={(e)=>{
                                        if(e.value == "ar"){
                                            $('html').css('direction','rtl');
                                            $('span').css('direction','rtl');
                                            $('.carouselItem').css('direction','rtl');
                                            $('.carouselItemContainer').css('flex-direction', "row-reverse");
                                        }
                                        else if(e.value == "en"){
                                            $('html').css('direction','ltr');
                                            $('span').css('direction','ltr');
                                            $('.carouselItem').css('direction','ltr');
                                            $('.carouselItemContainer').css('flex-direction', "row");
                                        }
                                        i18n.changeLanguage(e.value)
                                    }}
                                />

                                <Dropdown 
                                    value={currency == "EGP" ? t('egp') : t('usd') } 
                                    placeholder={t('selectCurrency')}
                                    className={scrolled? " " : "d-none"}
                                    options={respCurrencyDropdownOptions}
                                    onChange={(e)=>{
                                        dispatch(productSlice.actions.changeCurrency(e.value))
                                    }}
                                />

                                {/* Search Icon */}
                                <div className={headerStyles.headerSearchIcon} onClick={()=>setSearchActive(true)}>
                                    <AiOutlineSearch/>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Responsive Navigation */}
                    <div className=' col-lg-6 col-md-6 col-sm-6 h-100 p-0 d-md-none '>
                        <div className={headerStyles.lowerRightSection + " w-100 "}>
                            
                            {/* Presents user name when logged in */}
                            <div className={headerStyles.userNameContainer} 
                                style={{display: JSON.stringify(userFound) !== '{}'? 'flex' : 'none'}}
                            >
                                {t('welcome')} {userFound.username} !
                            </div>
                            
                            {/* Search and Navigation Icons */}
                            <div style={{display:"flex",alignItems:"center", gap:"5px"}}>
                                {/* Search Icon */}
                                <div className={headerStyles.headerSearchIcon} onClick={()=>setSearchActive(true)}>
                                    <AiOutlineSearch size={25}/>
                                </div>
                                {/* Responsive Menu */}
                                <div className={headerStyles.responsiveNavigationMenuIcon} onClick={()=>setNavigationMenu(true)}>
                                    <CgMenuBoxed/>
                                </div>
                            </div>

                            {/* Responsive Navigation List */}
                            {navigationMenu?
                                
                                // if navigation menu is opened return the following
                                <div className={`${headerStyles.responsiveNavigationMenuContainer}`}>

                                    {/* Close navigation menu button */}
                                    <div className={headerStyles.closeRespNavigationButton} onClick={()=>setNavigationMenu(false)}>
                                        <AiOutlineClose/>
                                    </div>

                                    {/* Navigation Items */}
                                    {responsiveNavigation.map((data,index)=>{
                                        return(
                                            <NavLink
                                                key={index} 
                                                to={data.component} 
                                                onClick={()=>setNavigationMenu(false)}
                                                className={`${headerStyles.topNavItem} ${headerStyles.topNavItemResp}` + " navItem "} 
                                            >
                                                {data.title}
                                            </NavLink>
                                        )
                                    })}

                                    {/* Language Drop Down */}
                                    <Dropdown 
                                        className="mt-5"
                                        value={i18n.language} 
                                        options={langDropdownOptions}
                                        placeholder={t('selectLanguage')}
                                        onChange={(e)=>{
                                            if(e.value == "ar"){
                                                $('html').css('direction','rtl');
                                                $('span').css('direction','rtl');
                                                $('.carouselItem').css('direction','rtl');
                                                $('.carouselItemContainer').css('flex-direction', "row-reverse");
                                            }
                                            else if(e.value == "en"){
                                                $('html').css('direction','ltr');
                                                $('span').css('direction','ltr');
                                                $('.carouselItem').css('direction','ltr');
                                                $('.carouselItemContainer').css('flex-direction', "row");
                                            }
                                            i18n.changeLanguage(e.value)
                                        }}
                                    />

                                    {/* Currency Drop Down */}
                                    <Dropdown 
                                        value={currency == "EGP" ? t('egp') : t('usd')}
                                        arrowClassName='text-white'
                                        placeholder={t('selectCurrency')}
                                        options={currencyDropdownOptions}
                                        onChange={(e)=>{
                                            dispatch(productSlice.actions.changeCurrency(e.value))
                                        }}
                                    />
                                    
                                </div>
                                
                                :    
                                
                                // if navigation menu is closed return nothing
                                <Fragment></Fragment>
                            }
                            

                        </div>
                    </div>

                </div>

            </div>

            {/* Search Responsive */}
            {searchActive?

                // If search is active return the following
                <div className={headerStyles.searchContainer}>
                    
                    {/* Close search button */}
                    <div className={headerStyles.closeSearchButton} onClick={()=>setSearchActive(false)}>
                        <AiOutlineClose/>
                    </div>
                    
                    {/* Search content */}
                    <div className={headerStyles.searchInputContainer}>

                        {/* Label */}
                        <label>{t('search')}</label>

                        {/* input */}
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <input 
                                type="text" 
                                value={searchResults} 
                                onChange={(e)=>setSearchResults(e.target.value)}
                                placeholder={t('search') + '...'}
                            />

                            {/* Search icon button */}
                            <div 
                                className={headerStyles.searchIcon + ' searchIcon '}
                                onClick={()=>{
                                    if(searchResults == ""){
                                        alert(t('searchAlert'))
                                    }
                                    else{
                                        setSearchActive(false)
                                        navigate('/products')
                                    }
                                }}    
                            >
                                <BiSearchAlt/>
                            </div>
                        </div>

                    </div>

                </div>

                :

                // If search is not active return nothing
                <Fragment></Fragment>
            }
            

        </Fragment>
    )
}

export default Header