import React from 'react'
import {render, cleanup, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'

const name = { name: "commercial" };
// const commercial = { name: "commercial", description: "Commercials in my life" };


afterEach(cleanup)

describe('PhotoList is rendering', () => {

    it('renders', () => {
        render(<PhotoList category={name} />)
    });

    it('matches snapshot portrait', () => {
        const { asFragment } = render(<PhotoList category={name} /> )
        expect(asFragment()).toMatchSnapshot()
    })

})