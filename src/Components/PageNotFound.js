// React
import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

// i18Next
import { useTranslation } from 'react-i18next'

// Components
import PageSection from './PageSectionFiles/PageSection'

// Style Sheets
import './StyleSheets/mainStyles.css'
import './StyleSheets/bootstrapstyles.css'

const PageNotFound = () => {

    // Language
    const {t} = useTranslation();

    return(
        <Fragment>
            <PageSection title={t('pagenotfoundstatement')}/>

            <div className="mainSectionContainer">
                <Link to={'/home'} className='button secondaryButton mt-5 mb-5'>
                    {t('GoToHomePage')}
                </Link>
            </div>
        </Fragment>
    )
}

export default PageNotFound