import React from "react";
import {render, cleanup, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from "../index";

afterEach(cleanup);

describe('Contact Form is rendering', () => {
    it('renders', () => {
        render(<ContactForm/>);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders h1 tag', () => {
        render(<ContactForm/>);
        const h1Tag = screen.getByTestId('h1Tag');
        expect(h1Tag).toHaveTextContent('Contact me');
    })

    it('renders submit button', () => {
        render(<ContactForm/>)
        const submitButton = screen.getByTestId('submitButton');
        expect(submitButton).toHaveTextContent('Submit');
    })
})
