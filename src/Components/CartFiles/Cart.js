// React
import React,{Fragment,} from 'react'
import { useNavigate } from 'react-router-dom'

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { productSlice } from '../ReduxFiles/productSlice'

// Components
import PageSection from '../PageSectionFiles/PageSection'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/tablestyles.css'
import cartStyles from './cart.module.css'
import '../StyleSheets/bootstrapstyles.css'

// Icons
import {AiOutlineClose} from 'react-icons/ai'
import {TbShoppingCartExclamation} from 'react-icons/tb'

const Cart = () => {
    
    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()
    const productData = useSelector((state)=>state?.product?.items)
    const currency = useSelector((state)=>state?.product?.currency)
    
    // Navigation
    const navigate = useNavigate()

    // Filtering products by their id to show the product only once
    const filteredProducts = productData.filter((value, index, self)=>
        index === self.findIndex((p)=>(
            p.id === value.id
        ))
    )
    
    // Variable to calculate the total price of the items added to cart
    var totalPrice = 0

    return(
        <Fragment>
            
            {/* Section Title */}
            <PageSection title={t('yourcart')}/>

            {/* Cart Section Container */}
            <div className='mainSectionContainer'>

                {/* Checking if any products are added to cart */}
                {productData.length === 0?

                    // if products are not added return the following
                    <Fragment>
                        <div className={cartStyles.noProductsContainer}>

                            {/* Icon */}
                            <TbShoppingCartExclamation size={70}/>
                            
                            {/* Content */}
                            <div className={cartStyles.noProductStatement}>
                                {t('noitemsaddedyet')}
                            </div>
                            
                            {/* Button to navigate to products */}
                            <div className={"button secondaryButton"}
                                onClick={()=>{
                                    navigate("/products")
                                }}
                            >
                                {t('cart_addtocart')}
                            </div>

                        </div>
                    </Fragment>
                
                    :
                    
                    // if products are added return the following
                    <Fragment>

                        {/* Table that holds products added information */}
                        <div className={ `${cartStyles.productsTableContainer}`}>

                            <table>
                            
                                {/* table row header */}
                                <tr>
                                    <th colspan="2" className='p-2'>{t('product')}</th>
                                    <th className='p-2'>{t('price')}</th>
                                    <th className='p-2'>{t('remove')}</th>
                                </tr>

                                {/* table product rows */}
                                {filteredProducts?.map((data,index)=>{
                                    totalPrice += data.price
                                    return(
                                        <tr key={index}>
                                            
                                            {/* Product Image */}
                                            <td className='d-flex justify-content-center'>
                                                <div className={cartStyles.productImage}>
                                                    <img src={data.image}/>
                                                </div>
                                            </td>

                                            {/* Product title */}
                                            <td>
                                                <div className='d-flex text-start'>
                                                    {data.title}
                                                </div>
                                            </td>

                                            {/* Product price */}
                                            <td>
                                                {currency == "USD" && t('usd')} {currency == "EGP" ? (data?.price * 30.77).toFixed(2) : data?.price} {currency == "EGP" && t('egp')}
                                            </td>

                                            {/* Remove product button */}
                                            <td>
                                                <div className='d-flex justify-content-center'>
                                                    <div className={cartStyles.removeIcon} 
                                                        onClick={()=>dispatch(productSlice.actions.removefromcart(data))}
                                                    >
                                                        <AiOutlineClose/>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    )
                                })}

                                {/* table row that holds the total price and checkout button */}
                                <tr>

                                    {/* title */}
                                    <td colspan='2' className={`${cartStyles.totalPrice}`}>
                                        {t('totalprice')}
                                    </td>
                                    
                                    {/* price */}
                                    <td>
                                        <div className={`${cartStyles.totalPriceValue}`}>
                                            {currency == "USD" && t('usd')} {currency == "EGP" ? (totalPrice* 30.77).toFixed(2) : totalPrice.toFixed(2)} {currency == "EGP" && t('egp') }
                                        </div>
                                    </td>
                                    
                                    {/* button that navigates to checkout page */}
                                    <td className='d-flex align-items-center justify-content-center '>
                                        <div className={" button primaryButton "}
                                            onClick={()=>navigate('/checkout')}
                                        >
                                            {t('checkout')}
                                        </div>
                                    </td>

                                </tr>                                
                            </table>
                        
                        </div>
                    
                    </Fragment>
                }

            </div>

        </Fragment>
    )
}

export default Cart