// React
import {NavLink,useParams} from "react-router-dom"
import React, {Fragment,useEffect, useState,} from "react"

// i18Next
import { useTranslation } from 'react-i18next'

// Redux
import { useSelector,useDispatch } from 'react-redux'
import { productSlice } from '../ReduxFiles/productSlice'

// Axios
import axios from 'axios'

// Components
import ProductCard from "./ProductCard"
import ProductModal from './ProductModal'
import PageSection from '../PageSectionFiles/PageSection'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import productStyles from './ProductStyles/products.module.css'

const Products = () => {
    
    // Language
    const {t} = useTranslation();

    // Redux
    const dispatch = useDispatch()
    const reduxCategory = useSelector((state)=>state?.product?.category)
    const showProductModal = useSelector((state)=>state?.product?.showProductModal)

    // Params
    var {category} = useParams()

    // Fetching products from api
    const [products, setProducts] = useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((resp)=>{
            setProducts(resp.data);
        }).catch((err)=>
            console.log(err)
        ) 
    },[])

    // Categories Array
    const categories = []
    {products?.map((data)=>{
        if(categories.includes(data.category) == false){
            categories.push(data.category)
        }
    })}
    // initializing the first category to be shown
    const [selectedCategory, setSelectedCategory] = useState("men's clothing")

    return(
        <Fragment>
            
            <PageSection title={t('ourproducts')}/>
            
            {/* Products Content */}
            <div className="mainSectionContainer">
             
                <div className={productStyles.categoriesSection}>
                    
                    {/* Product Categories */}
                    <div className={productStyles.filterContainer}>
                        <div className={productStyles.sectionTitle}>
                            {t('categories')}
                        </div>
                        <div className={productStyles.categoriesTitle}>
                            {categories?.map((data,index)=>{
                                category=data;
                                return(
                                    <NavLink to={'/products/'+category} key={index} className={productStyles.catItems + " navItem "} 
                                        onClick={()=>{
                                            dispatch(productSlice.actions.setCategory(""))
                                            setSelectedCategory(data);
                                        }}
                                    >
                                        {data}
                                    </NavLink>
                                )
                            })}
                        </div>                        
                    </div>

                    {/* Products Container */}
                    <div className={productStyles.productsContainer}>
                        <div className={productStyles.cardsSectionContainer}>
                            {products?.map((data,index)=>{
                                if(reduxCategory != ""){
                                    if(data.category == reduxCategory){
                                        return(
                                            <ProductCard key={index} data={data}/>
                                        )
                                    }    
                                }
                                else if(data.category == selectedCategory){
                                    return(
                                        <ProductCard key={index} data={data}/>
                                    )
                                }
                            })}
                        </div>
                    </div>

                </div>
            
            </div>

            {showProductModal &&
                <ProductModal/>
            }
            
        </Fragment>
    )
}

export default Products