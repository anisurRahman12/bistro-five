import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p>--{heading}--</p>
            <p className='uppercase'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;