// React
import React, {Fragment,useState} from 'react'

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useDispatch,useSelector } from 'react-redux'
import { productSlice } from '../ReduxFiles/productSlice'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import productCardStyles from './ProductStyles/productcard.module.css'

// Rating
import { Rating } from 'react-simple-star-rating'

const ProductCard = (props) => {

    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()
    const currency = useSelector((state)=>state?.product?.currency)
    const productsInCart = useSelector((state)=>state?.product?.items)

    // Checking if product is found in cart
    const [productFoundInCart, setProductFoundInCart]  = useState(false)
    {productsInCart?.map((data)=>{
        if(data?.id == props?.id){
            setProductFoundInCart(true)
        }
    })}

    return(
        <Fragment>

            <div className={`${productCardStyles.cardContainer}`}>

                {/* Content shown on card hover */}
                <div className={`${productCardStyles.cardOverLay}`}>

                    {/* View button */}
                    <div className={"button primaryButton"}
                        onClick={()=>{
                            dispatch(productSlice?.actions?.showModal(true))
                            dispatch(productSlice?.actions?.viewProduct(props?.data))
                        }}
                    >
                        {t('viewproduct')}
                    </div>

                    {/* Add to cart button */}
                    {productFoundInCart?

                        // Remove from cart
                        <div className={"button secondaryButton"}
                            onClick={()=>{
                                dispatch(productSlice?.actions?.removefromcart(props?.data))
                                setProductFoundInCart(false)
                            }}
                        >
                            {t('removefromcart')}
                        </div>

                        :

                        // Add to cart
                        <div className={"button primaryButton"} 
                            onClick={()=>{
                                dispatch(productSlice?.actions?.addtocart(props?.data))
                                setProductFoundInCart(true)
                            }}
                        >
                            {t('addtocart')}
                        </div>
                    }
                </div>
                
                {/* Image container */}
                <div className={`${productCardStyles.cardImageContainer}`}>
                    <div className={`${productCardStyles.cardImage}`}>
                        <img src={props?.data?.image}/>
                    </div>
                </div>
                
                {/* Card details */}
                <div className={`${productCardStyles.cardContentContainer}`}>
                    
                    {/* Product name */}
                    <div className={`${productCardStyles.productTitle}` + " word-break-1 "}>
                        {props?.data?.title}
                    </div>

                    {/* Product description */}
                    <div className={`${productCardStyles.productDescription}` + ' word-break-2 '}>
                        {props?.data?.description}
                    </div>

                    {/* Product price and rate */}
                    <div className={`${productCardStyles.productPrice}`}>
                        
                        {/* Price */}
                        {currency == "USD" && t('usd')} {currency == "EGP" ? (props?.data?.price * 30.77).toFixed(2) : props?.data?.price} {currency == "EGP" && t('egp') }

                        {/* Rate */}
                        <div className={`${productCardStyles.ratingContainer}`}>
                            <Rating
                                size={20}
                                rtl={false} 
                                readonly={true} 
                                initialValue={props?.data?.rating?.rate} 
                            />

                            ({props?.data?.rating?.rate})
                        </div>

                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default ProductCard