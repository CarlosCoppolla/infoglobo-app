import React from 'react'
import {useRouteMatch} from 'react-router-dom'

const generatePage = page => {
    try {
        const Component = require(`./pages/${page}`).default
        return <Component />;
    } catch (errp) {
        console.warn(errp)
        return 'Site em manutenção'
    }
}

const PageRenderer = () => {
    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)
}

export default PageRenderer