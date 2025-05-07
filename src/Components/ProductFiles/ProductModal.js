// React
import React, {useState} from 'react'

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useDispatch,useSelector } from 'react-redux'
import { productSlice } from '../ReduxFiles/productSlice'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import singleProductStyles from './ProductStyles/singleproduct.module.css'

// icons
import {AiOutlineClose,} from 'react-icons/ai'

// Modal
import Modal from 'react-modal';

// Rating
import { Rating } from 'react-simple-star-rating'

const ProductModal = () => {

    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()
    const currency = useSelector((state)=>state?.product?.currency)
    const productData = useSelector((state)=>state?.product?.singleItem)
    const showProductModal = useSelector((state)=>state?.product?.showProductModal)

    // Checking if product is added to cart
    const [addedToCart, setaddedToCart] = useState(false)

    // Modal
    const modalStyle = {
        overlay: {
            zIndex:"9999999",
            backgroundColor:"rgb(0,0,0,0.8)",
        },
        content: {
            top: '50%',
            left: '50%',
            width: '80%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            backgroundColor:"white",
            transform: 'translate(-50%, -50%)',
            boxShadow:"0px 0px 5px 0px #aaa",
        },
    };

    return(
        <Modal
            isOpen={showProductModal}
            style={modalStyle}
        >
            {/* Modal close button */}
            <div className={singleProductStyles.closeModalButton} 
                onClick={()=>
                    dispatch(productSlice?.actions?.showModal(false))
                }
            >
                <AiOutlineClose/>
            </div>

            {/* Modal Content */}
            <div className="d-flex align-items-center justify-content-center">
                <div className={singleProductStyles.productDetailsContainer + ' w-100 '}>
                    
                    {/* Product image */}
                    <div className={singleProductStyles.productImageContainer}>
                        <div className={singleProductStyles.productImage}>
                            <img src={productData?.image}/>
                        </div>
                    </div>

                    {/* Product details */}
                    <div className={singleProductStyles.productDetails}>

                        {/* Product name */}
                        <div className={singleProductStyles.productName + ' word-break-1 '}>
                            {productData?.title}
                        </div>

                        {/* Product price and rate */}
                        <div className="d-flex align-items-center justify-content-between justify-content-sm-center flex-wrap w-100">
                            
                            {/* Price */}
                            <div className={singleProductStyles.productPrice}>
                                {currency == "USD" && t('usd')} {currency == "EGP" ? ((productData?.price)* 30.77).toFixed(2) : (productData?.price).toFixed(2)} {currency == "EGP" && t('egp') }
                            </div>
                            
                            {/* Rate */}
                            <div className={`${singleProductStyles.productRating}`}>
                                <Rating
                                    size={20}
                                    rtl={false} 
                                    readonly={true} 
                                    initialValue={productData?.rating?.rate} 
                                />

                                ({productData?.rating?.rate})
                            </div>
                        </div>
                        
                        {/* Product descriiption */}
                        <div className={singleProductStyles.productDescription}>
                            {productData?.description}
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
        </Modal>
    )
}

export default ProductModal