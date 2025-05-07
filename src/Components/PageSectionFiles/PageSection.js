// React
import React, {Fragment} from 'react'

// Style Sheets
import pageStyles from './pagesection.module.css'

const PageSection = (props) => {
    return(
        <Fragment>
            {/* Title */}
            <div className={pageStyles.sectionContainer}>
                {props.title}
            </div>
        </Fragment>
    )
}

export default PageSection