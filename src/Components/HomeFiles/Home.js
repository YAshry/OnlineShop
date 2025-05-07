// React
import React, { Fragment,useEffect,useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useSelector } from 'react-redux'

// Axios
import axios from 'axios'

// Components
import ProductCard from "../ProductFiles/ProductCard"
import ProductModal from '../ProductFiles/ProductModal'

// Style Sheets
import '../StyleSheets/carousel.css'
import '../StyleSheets/mainStyles.css'
import homeStyles from './home.module.css'
import '../StyleSheets/bootstrapstyles.css'

// Images
import menCat from '../Assets/Images/men.png'
import sale1 from '../Assets/Images/sale1.png'
import sale2 from '../Assets/Images/sale2.png'
import womenCat from '../Assets/Images/women.png'
import profile1 from '../Assets/Images/profile1.jpg'
import profile2 from '../Assets/Images/profile2.jpg'
import profile3 from '../Assets/Images/profile3.jpg'
import elecCat from '../Assets/Images/electronics.png'

// Icons
import {GiReceiveMoney} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdSupportAgent} from 'react-icons/md'

// Carousel
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {

    // Language
    const {t,i18n} = useTranslation();

    // Navigation
    const navigate = useNavigate()

    // Redux
    const showProductModal = useSelector((state)=>state?.product?.showProductModal)

    // Products fetched from API and saved in products array
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
    
    // Filtering the categories and assigning them to an array
    const categories = []
    {products?.map((data,index)=>{
        if(categories.includes(data.category) == false){
            categories.push(data.category)
        }
    })}
    const [selectedCategory, setSelectedCategory] = useState("men's clothing")
    
    // Client Comment section array
    const clientComment = [
        {
            image:profile1,
            name: t('lissacastro'),
            job: t('designer'),
            comment: t('lorem'),
        },
        {
            image:profile2,
            name: t('johnbecker'),
            job: t('cheifofficer'),
            comment: t('lorem'),
        },
        {
            image:profile3,
            name: t('aldensmith'),
            job: t('artist'),
            comment: t('lorem'),
        },
    ]
    // setting an initial value for client section
    var [clientCommentIndex, setClientCommentIndex]  = useState(0)
    // changing client comment every 3 seconds
    useEffect(()=>{
        setTimeout(()=>{
            if(clientCommentIndex >= 0 && clientCommentIndex != clientComment.length-1){
                clientCommentIndex++
                setClientCommentIndex(clientCommentIndex)
            }
            else if(clientCommentIndex == clientComment.length-1){
                clientCommentIndex = 0
                setClientCommentIndex(clientCommentIndex)
            }
        },3000)
    })

    // Services section array
    const services = [
        {
            icon:<TbTruckDelivery/>,
            title:t('freedelivery'),
            description:t('ifyouaregoingtouseofLoremyouneedtobesurethereanything')
        },
        {
            icon:<GiReceiveMoney/>,
            title:t('dayreturn'),
            description:t('ifyouaregoingtouseofLoremyouneedtobesurethereanything')
        },
        {
            icon:<MdSupportAgent/>,
            title:t('support'),
            description:t('ifyouaregoingtouseofLoremyouneedtobesurethereanything')
        },
    ]

    // Carrousel Items
    const carrouselItems = [
        {
            subtitle:t('checkoutallyourneeds'),
            title:t('mensfashionsale'),
            buttonContent:t("shopnow"),
            image:menCat,
        },
        {
            subtitle:t('checkoutallyourneeds'),
            title:t('womensfashionsale'),
            buttonContent:t("shopnow"),
            image:womenCat,
        },
        {
            subtitle:t('checkoutallyourneeds'),
            title:t('electronicssale'),
            buttonContent:t("shopnow"),
            image:elecCat,
        },
    ]

    return(
        <Fragment>

            {/* Section 1 Carousel */}
            <div className='row m-0 align-items-center justify-content-center w-100'>
                <Carousel
                    interval={3000}
                    autoPlay={true}
                    centerMode={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    axis={'horizontal'}
                    centerSlidePercentage={100}
                >

                    {carrouselItems.map((data,index)=>{
                        return(
                            <div key={index} className=" carouselItemContainer ">
                        
                                {/* Content */}
                                <div className=' col-lg-5 col-md-5 col-sm-12 p-0 '>
                                    <div className=" carouselItem ">
                                        
                                        {/* Subtitle */}
                                        <p>{data.subtitle}</p>
                                        
                                        {/* Title */}
                                        <span>{data.title}</span>
                                        
                                        {/* Button */}
                                        <button className='button primaryButton' 
                                            onClick={()=>{
                                                navigate('/products')
                                            }}
                                        >
                                            {data.buttonContent}
                                        </button>

                                    </div>
                                </div>

                                {/* Image */}
                                <div className=' col-lg-7 col-md-7 col-sm-12 p-0 '>
                                    <div className=" carouselItemImage ">
                                        
                                        {/* Image */}
                                        <img src={data.image}/>
                                    
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Carousel>
            </div>

            {/* Section 2 Image */}
            <div className={homeStyles.imageSectionContainer}>
                <img src={sale1}/>
                <img src={sale2}/>
            </div>

            {/* Section 3 Exclusive Products */}
            <div className={homeStyles.exclusiveProductsContainer + ' mb-5 '}>
                
                {/* Title */}
                <div className={homeStyles.etitle}>
                    {t('exclusiveproducts')}
                </div>
                
                {/* Product Categories */}
                <div className={homeStyles.catTitle}>
                    {categories?.map((data,index)=>{
                        return(
                            <Link key={index} className={homeStyles.homeCatItems + " navItem "} 
                            onClick={()=>{
                                    setSelectedCategory(data)
                                }}
                            >
                                {data}
                            </Link>
                        )
                    })}
                </div>

                {/* Products */}
                <div className={`${homeStyles.homeCardsContainer}`}>
                    {products?.map((data,index)=>{
                        if(data.category == selectedCategory){
                            return(
                                <ProductCard key={index} data={data} />
                            )
                        }
                    })}
                </div>
            </div>

            {/* Section 4 Client Opinion */}
            <div className={homeStyles.clientContainer + ' mb-5 '}>
                <div className={homeStyles.clientSubContainer + " col-lg-5 col-md-7 col-sm-3 p-0 "}>

                    {/* Title */}
                    <div className={homeStyles.clientTitle}>
                        {t('ourclientsay')}!
                    </div>
                    
                    {/* Comment */}
                    <div className={homeStyles.clientComment}>
                        {clientComment[clientCommentIndex].comment}
                    </div>

                    {/* User items */}
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        
                        {/* Left arrow button */}
                        <div className={homeStyles.clientArrow}
                            onClick={()=>{
                                if(clientCommentIndex == 0){
                                    clientCommentIndex = clientComment.length-1
                                    setClientCommentIndex(clientCommentIndex)
                                }
                                else{
                                    clientCommentIndex--
                                    setClientCommentIndex(clientCommentIndex)
                                }
                            }}
                        >
                            {i18n.language == "en" ?
                                <MdKeyboardArrowLeft/>
                                :
                                <MdKeyboardArrowRight/>   
                            }
                        </div>

                        {/* User image, name, and job */}
                        <div className={homeStyles.clientContent}>
                            
                            {/* Image */}
                            <img src={clientComment[clientCommentIndex].image}/>
                            
                            <div className='d-flex flex-column align-items-start'>
                                
                                {/* Name */}
                                {clientComment[clientCommentIndex].name}
                                
                                {/* Job */}
                                <span style={{color:"#e71580"}}>
                                    {clientComment[clientCommentIndex].job}
                                </span>

                            </div>

                        </div>

                        {/* Right arrow button */}
                        <div className={homeStyles.clientArrow}
                            onClick={()=>{
                                if(clientCommentIndex == clientComment.length-1){
                                    clientCommentIndex = 0
                                    setClientCommentIndex(clientCommentIndex)
                                }
                                else{
                                    clientCommentIndex++
                                    setClientCommentIndex(clientCommentIndex)
                                }
                            }}
                        >
                            {i18n.language == "en" ?
                                <MdKeyboardArrowRight/>   
                                :
                                <MdKeyboardArrowLeft/>
                            }
                        </div>
                    </div>

                </div>
            </div>

            {/* Section 5 Services */}
            <div className={homeStyles.servicesContainer + ' mb-5 '}>
                {services?.map((data,index)=>{
                    return(
                        <Fragment key={index}>
                            <div className={homeStyles.servicesItemContainer}
                                style={index == services.length-1? {border:"none"} :{ }}
                            >
                                {/* Icon */}
                                <div className={homeStyles.servicesIcon}>{data.icon}</div>
                                
                                {/* Title */}
                                <div className={homeStyles.servicesTitle}>{data.title}</div>
                                
                                {/* Description */}
                                <div className={homeStyles.servicesDescription}>{data.description}</div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>

            {showProductModal &&
                <ProductModal/>
            }

        </Fragment>
    )
}

export default Home