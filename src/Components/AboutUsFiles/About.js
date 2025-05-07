// React
import React, {Fragment} from "react"

// i18Next
import { useTranslation } from 'react-i18next'

// Components
import PageSection from '../PageSectionFiles/PageSection'

// Style Sheets
import '../StyleSheets/mainStyles.css'
import '../StyleSheets/bootstrapstyles.css'
import aboutStyles from './about.module.css'
import homeStyles from '../HomeFiles/home.module.css'

// Images
import about from '../Assets/Images/about.jpg'

// Icons
import {GiReceiveMoney} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'
import { FaRegEnvelope } from "react-icons/fa6";
import { RiFilePaperLine } from "react-icons/ri";
import { MdOutlineDesignServices,MdSupportAgent } from "react-icons/md";

const About = () => {

    // Language
    const {t} = useTranslation();

    // Services Section
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

    // Choose us section
    const chooseUs = [
        {
            icon:<MdOutlineDesignServices />,
            title:t('creativedesign'),
            description:t('chooseUsDescription'),
        },
        {
            icon:<RiFilePaperLine />,
            title:t('flexiblelayouts'),
            description:t('chooseUsDescription'),
        },
        {
            icon:<FaRegEnvelope />,
            title:t('emailmarketing'),
            description:t('chooseUsDescription'),
        },
    ]

    return(
        <Fragment>

            {/* Page title */}
            <PageSection title={t('aboutUs')}/>

            {/* About section container */}
            <div className="mainSectionContainer">

                <div className={aboutStyles.aboutContainer}>

                    {/* Who are we section 1 */}
                    <div className={aboutStyles.whoWeAreSectionContainer}>
                    
                        {/* Image */}
                        <div className={aboutStyles.whoImage}>
                            <img src={about}/>
                        </div>

                        {/* Content */}
                        <div className={aboutStyles.whoContent}>
                            {/* Title */}
                            <span>{t('whoweare')}</span>
                            
                            {/* Descriptions */}
                            <p>{t('lorem')}</p>
                            <p>{t('lorem')}</p>
                        </div>

                    </div>

                    {/* Choose us section 2 */}
                    <div className={aboutStyles.chooseSection}>

                        {/* Title */}
                        <span>{t('whychooseus')}</span>
                        
                        {/* Description */}
                        <p>{t('shortlorem')}</p>
                        
                        {/* Cards */}
                        <div className={aboutStyles.chooseCardsSection}>
                            {chooseUs.map((data,index)=>{
                                return(
                                    <div key={index} className={aboutStyles.cardSection}>
                                        
                                        {/* Icon */}
                                        <div className={aboutStyles.cardIcon}>
                                            {data.icon}
                                        </div>
                                        
                                        {/* Title */}
                                        <span>{data.title}</span>
                                        
                                        {/* Description */}
                                        <p>{data.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Services section 3 */}
                    <div className={homeStyles.servicesContainer}>
                        {services?.map((data,index)=>{
                            return(
                                <Fragment key={index}>
                                    <div className={homeStyles.servicesItemContainer}
                                        style={index == services.length-1? {border:"none"} :{ }}
                                    >
                                        {/* Icon */}
                                        <div className={homeStyles.servicesIcon}>
                                            {data.icon}
                                        </div>
                                        
                                        {/* Title */}
                                        <div className={homeStyles.servicesTitle}>
                                            {data.title}
                                        </div>
                                        
                                        {/* Description */}
                                        <div className={homeStyles.servicesDescription}>
                                            {data.description}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>

                </div>
            
            </div>

        </Fragment>
    )
}

export default About