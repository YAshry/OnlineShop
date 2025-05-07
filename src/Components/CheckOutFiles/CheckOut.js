// React
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import React, {Fragment, useState} from 'react'

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useSelector } from 'react-redux'

// Components 
import PageSection from '../PageSectionFiles/PageSection'

// Styles
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/tablestyles.css'
import '../StyleSheets/bootstrapstyles.css'
import checkOutStyles from './checkout.module.css'
import footerStyles from '../FooterFiles/footer.module.css'

// images
import att from '../Assets/PaymentLogos/att.jpg'
import visa from '../Assets/PaymentLogos/visa.png'
import fawry from '../Assets/PaymentLogos/fawry.png'
import master from '../Assets/PaymentLogos/master.png'
import paypal from '../Assets/PaymentLogos/paypal.png'
import orange from '../Assets/PaymentLogos/orange.jpg'
import discover from '../Assets/PaymentLogos/discover.png'
import american from '../Assets/PaymentLogos/american.png'
import vodafone from '../Assets/PaymentLogos/vodafone.jpg'
import etisalat from '../Assets/PaymentLogos/etisalat.jpg'

// icons
import { BsFillPatchCheckFill } from "react-icons/bs";
import {TbShoppingCartExclamation} from 'react-icons/tb'

const ChechOut = () => {

    // Language
    const {t} = useTranslation();

    // Redux
    const userFound = useSelector((state)=>state.user.user)
    const productData = useSelector((state)=>state?.product?.items)
    const currency = useSelector((state)=>state?.product?.currency)

    // Navigation
    const navigate = useNavigate()

    // Filtering products by their id to show them in the table
    const filteredProducts = productData.filter((value, index, self)=>
    index === self.findIndex((p)=>(
        p.id === value.id
        ))
    )

    // Variable to calculate the total price of the items added to cart
    var totalPrice = 0
    
    // Payment selection variable
    const [paymentValue,setPaymentValue] = useState("")

    // Checking if order is successful
    const [orderSuccess,setOrderSuccess] = useState(false)

    // Input useStates to assign them if user is logged in
    const [selectedCountry, setSelectedCountry] = useState("")
    const [phone, setPhone] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.phone)
    const [email, setEmail] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.email)
    const [zipCode, setZipCode] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.address?.zipcode)
    const [lastName, setLastName] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.name?.lastname)
    const [city, setCity] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.address?.city + " City ")
    const [firstName, setFirstName] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.name?.firstname)
    const [address, setAddress] = useState(Object.keys(userFound).length == 0 ? "" : userFound?.address?.street + " Street " + userFound?.address?.number)

    // Countries array
    const country =[
        {
            value:"arizona",
            label:t('arizona'),
        },
        {
            value:"egypt",
            label:t('egypt'),
        },
        {
            value:"ireland",
            label:t('ireland'),
        },
        {
            value:"indiana",
            label:t('indiana'),
        },
        {
            value:"unitedstates",
            label:t('unitedstates'),
        },
        {
            value:"texas",
            label:t('texas'),
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
    const mobileCash = [
        {
            image:fawry,
        },
        {
            image:att,
        },
        {
            image:vodafone,
        },
        {
            image:etisalat,
        },
        {
            image:orange,
        },
    ]

    // Input fields array
    const input = [
        {
            tag: 'input',
            type: 'text',
            value: Object.keys(userFound).length == 0 ? firstName : userFound?.name?.firstname,
            placeholder: t('firstname') + " *",
            inputChange: (value)=>{setFirstName(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
        {
            tag: 'input',
            type: 'text',
            value: Object.keys(userFound).length == 0 ? lastName : userFound?.name?.lastname,
            placeholder: t('lastname') + " *",
            inputChange: (value)=>{setLastName(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
        {
            tag: 'select',
            options: country,
        },
        {
            tag: 'input',
            type: 'text',
            value: Object.keys(userFound).length == 0 ? city : userFound?.address?.city + " City ",
            placeholder: t('citytown') + " *",
            inputChange: (value)=>{setCity(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
        {
            tag: 'input',
            type: 'text',
            value: Object.keys(userFound).length == 0 ? zipCode : userFound?.address?.zipcode,
            placeholder: t('postcodezip') + " *",
            inputChange: (value)=>{setZipCode(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
        {
            tag: 'input',
            type: 'text',
            value: Object.keys(userFound).length == 0 ? address : userFound?.address?.street + " Street " + userFound?.address?.number,
            placeholder: t('address') + " *",
            inputChange: (value)=>{setAddress(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
        {
            tag: 'input',
            type: 'mobile',
            value: Object.keys(userFound).length == 0 ? phone : userFound?.phone,
            placeholder: t('phone') + " * ",
            inputChange: (value)=>{setPhone(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
        {
            tag: 'input',
            type: 'email',
            value: Object.keys(userFound).length == 0 ? email : userFound?.email,
            placeholder: t('emailaddress') + " *",
            inputChange: (value)=>{setEmail(value)},
            disabled:Object.keys(userFound).length == 0 ? false : true,
        },
    ]

    return(
        <Fragment>

            {/* Section Title */}
            <PageSection title={t('checkout')}/>

            {/* Checkout Section Container */}
            <div className='mainSectionContainer'>
                
                {/* Checking if the order has been made or not */}
                {orderSuccess?
                    
                    // if the order is success return the following
                    <div className={checkOutStyles.successContainer}>

                        {/* Icon */}
                        <BsFillPatchCheckFill size={70}/>

                        {/* Content */}
                        <div className={checkOutStyles.successStatement}>
                            {t('yourorderwassuccesfullymade')} !
                        </div>

                        {/* button that navigates to products */}
                        <div className={"button secondaryButton"}
                            onClick={()=>{
                                setOrderSuccess(false)
                                navigate("/products")
                            }}
                        >
                            {t('continueshopping')}
                        </div>

                    </div>
                    
                    :

                    // if the order is not successful return the following
                    <div className={checkOutStyles.checkOutContainer}>
                        
                        {/* Billing information container */}
                        <div className={checkOutStyles.sectionContainer}>
                            
                            {/* Bill title */}
                            <div className={checkOutStyles.sectionTitle}>
                                {t('billingdetails')}
                            </div>

                            {/* Bill information input fields */}
                            <div className={checkOutStyles.sectionContent}>

                                {input.map((data,index)=>{
                                    if(data.tag == 'input'){
                                        return(
                                            <input className={checkOutStyles.inputContainer} 
                                                type={data.type}
                                                placeholder={data.placeholder} 
                                                value={data.value}
                                                onChange={(e)=> data.inputChange(e.target.value)}
                                                disabled={data.disabled}
                                            />
                                        )
                                    }
                                    else if(data.tag == 'select'){
                                        return(
                                            <Select options={data.options} placeholder={t('selectcountry') + "..."} onChange={(e)=>setSelectedCountry(e.value)}/>
                                        )
                                    }
                                })}

                            </div>

                        </div>

                        {/* Orders information and payment method container */}
                        <div className={`${checkOutStyles.orderContainer}`}>

                            {/* Orders section */}
                            <div className={`${checkOutStyles.orderSection}`}>
                                <div className='d-flex flex-column' style={{padding:"15px",gap:"20px"}}>
                                
                                    {/* Orders title */}
                                    <div className={`${checkOutStyles.sectionTitle}`}>
                                        {t('yourorders')}
                                    </div>

                                    {/* Checking if products are found or not */}
                                    {filteredProducts.length != 0 ? 
                                        // if products are found return the following table
                                        <table className={`${checkOutStyles.tableContainer}`}>
                                            <tr>
                                                <th className={`${checkOutStyles.tableHeader}` + ' p-2 text-start '}>{t('product')}</th>
                                                <th className={`${checkOutStyles.tableHeader}` + ' p-2 text-center '}>{t('price')}</th>
                                            </tr>
                                            {filteredProducts?.map((data,index)=>{
                                                totalPrice += data.price
                                                return(
                                                    <tr key={index}>
                                                        <td className={`${checkOutStyles.tableContentTitle}` + ' text-start '}>
                                                            {data.title}
                                                        </td>
                                                        <td className={`${checkOutStyles.tableContentTitle}`}>
                                                            {currency == "USD" && t('usd')} {currency == "EGP" ? (data?.price * 30.77).toFixed(2) : data?.price} {currency == "EGP" && t('egp')}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td className={`${checkOutStyles.totalPrice}`}>
                                                    {t('totalproductsprice')}
                                                </td>
                                                <td>
                                                    <div className={`${checkOutStyles.totalPriceValue}`}>
                                                        {currency == "USD" && t('usd')} {currency == "EGP" ? (totalPrice * 30.77).toFixed(2) : totalPrice} {currency == "EGP" && t('egp')}
                                                    </div>
                                                </td>
                                            </tr>                                
                                        </table>
                                        :
                                        // if products are not found return the following
                                        <Fragment>
                                            <div className={checkOutStyles.noProductsYet}>
                                                <TbShoppingCartExclamation size={26}/>
                                                {t('pleaseadditemstoberepresentedhere')}
                                            </div>
                                        </Fragment>
                                    }
                                </div>
                            </div>

                            {/* Payment methods section */}
                            <div className={`${checkOutStyles.orderSection}`}>
                                <div className='d-flex flex-column' style={{padding:"15px",gap:"20px"}}>
                                
                                    {/* Payment title */}
                                    <div className={`${checkOutStyles.sectionTitle}`}>
                                        {t('paymentmethod')}
                                    </div>

                                    {/* Bank option radio */}
                                    <label className={`${checkOutStyles.radioContainer}`}
                                        onClick={()=>setPaymentValue("bank")}
                                    >
                                        <input type="radio" name="paymentMethod" value="bank"/>
                                        <span>{t('bankaccount')}</span>
                                    </label>

                                    {/* Bank option options */}
                                    <div className={`${checkOutStyles.choiceSelected}`}
                                        style={paymentValue == 'bank' ? { } : {display:"none"}}
                                    >
                                        {payments?.map((data, index)=>{
                                            
                                            return(
                                                <div key={index} className={footerStyles.paymentItem}>
                                                    <img src={data.image}/>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Mobile cash option radio */}
                                    <label className={`${checkOutStyles.radioContainer}`}
                                        onClick={()=>setPaymentValue("mobile")}
                                    >
                                        <input type="radio" name="paymentMethod" value="mobile"/>
                                        <span>{t('mobilecash')}</span>
                                    </label>

                                    {/* Mobile cash option options */}
                                    <div className={`${checkOutStyles.choiceSelected}`}
                                        style={paymentValue == 'mobile' ? { } : {display:"none"}}
                                    >
                                        {mobileCash?.map((data, index)=>{
                                            
                                            return(
                                                <div key={index} className={footerStyles.paymentItem}>
                                                    <img src={data.image}/>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Cash on delivery option radio */}
                                    <label className={`${checkOutStyles.radioContainer}`}
                                        onClick={()=>setPaymentValue("cash")}
                                    >
                                        <input type="radio" name="paymentMethod" value="cash"/>
                                        <span>{t('cashondelivery')}</span>
                                    </label>

                                    {/* Cash on delivery statement */}
                                    <div className={`${checkOutStyles.choiceSelected}`}
                                        style={paymentValue == 'cash' ? { } : {display:"none"}}
                                    >
                                        {t('youwillpaythefullamountwhenthepackagearrives')}
                                    </div>

                                </div>
                            </div>

                            {/* Order button */}
                            <div className='row m-0 w-100 justify-content-center align-items-center'>
                                
                                <div className="button centeredPrimaryButton w-100"
                                    onClick={()=>{
                                        if(firstName != "" && lastName != "" && city != "" && zipCode != "" && address != "" && phone != "" && email != "" &&  selectedCountry != "" &&  paymentValue != "" && filteredProducts.length != 0){
                                            setOrderSuccess(true)
                                        }
                                        else{
                                            alert(t('pleasemakesurethatallinputfieldsarefilledalloptionsaresetandthereareitemsavailabletocheckout'))
                                        }
                                    }}
                                >
                                    {t('placeorder')}
                                </div>

                            </div>

                        </div>

                    </div>
                }

            </div>

        </Fragment>
    )
}

export default ChechOut