// React
import React, {Fragment,useState} from "react"

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import {useSelector,useDispatch } from 'react-redux'
import { productSlice } from '../ReduxFiles/productSlice'

// Components
import PageSection from '../PageSectionFiles/PageSection'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import productStyles from './ProductStyles/singleproduct.module.css'

// Rating
import { Rating } from 'react-simple-star-rating'

const SingleProduct = () => {

    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()
    const currency = useSelector((state)=>state?.product?.currency)
    const productData = useSelector((state)=>state?.product?.singleItem)
    
    // Checking if product is added to cart or not
    const [addedToCart, setaddedToCart] = useState(false) 

    return(
        <Fragment>

            {/* Section title */}
            <PageSection title={t('productdetails')}/>

            {/* Single Product section container */}
            <div className="mainSectionContainer">

                <div className={productStyles.productDetailsContainer}>
                    
                    {/* Products image */}
                    <div className={productStyles.productImageContainer}>
                        <div className={productStyles.productImage}>
                            <img src={productData?.image}/>
                        </div>
                    </div>

                    {/* Product details */}
                    <div className={productStyles.productDetails}>

                        {/* Product title */}
                        <div className={productStyles.productName + ' word-break-1 '}>
                            {productData?.title}
                        </div>

                        {/* Product price and rate */}
                        <div className="d-flex align-items-center justify-content-between justify-content-sm-center flex-wrap w-100">
                            
                            {/* Price */}
                            <div className={productStyles.productPrice}>
                                {currency == "USD" && t('usd')} {currency == "EGP" ? (productData?.price * 30.77).toFixed(2) : productData?.price} {currency == "EGP" && t('egp')}
                            </div>

                            {/* Rate */}
                            <div className={`${productStyles.productRating}`}>
                                <Rating
                                    size={20}
                                    rtl={false} 
                                    readonly={true} 
                                    initialValue={productData?.rating?.rate} 
                                />

                                ({productData?.rating?.rate})
                            </div>
                        </div>

                        {/* Product description */}
                        <div className={productStyles.productDescription}>
                            {productData.description}
                        </div>

                        {/* Add to cart button */}
                        {addedToCart?

                            // Remove button
                            <div className={"button secondaryButton"}
                                onClick={()=>{
                                    dispatch(productSlice?.actions?.removefromcart(productData))
                                    setaddedToCart(false)
                                }}
                            >
                                {t('removefromcart')}
                            </div>
                            :

                            // Add button
                            <div className={"button primaryButton"} 
                                onClick={()=>{
                                    dispatch(productSlice?.actions?.addtocart(productData))
                                    setaddedToCart(true)
                                }}
                            >
                                {t('addtocart')}
                            </div>
                        }

                    </div>

                </div>
            
            </div>
        </Fragment>
    )
}

export default SingleProduct