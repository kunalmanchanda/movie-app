import React from 'react';
import BrowseContainer from '../containers/Browse'
import { useContent } from '../hooks'
import { selectionFilter } from '../utils';

const Browse = () => {
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionFilter({ series, films })
    
    return <BrowseContainer slides={slides} />
}

export default Browse
