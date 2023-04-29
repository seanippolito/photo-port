import React from 'react'
import {render, cleanup, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockToggleModal = jest.fn();


afterEach(cleanup)

describe('Modal is rendering', () => {

    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto}
                      onClose={mockToggleModal} />)
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto}
                                             onClose={mockToggleModal} /> )
        expect(asFragment()).toMatchSnapshot()
    })

})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        render(<Modal currentPhoto={currentPhoto}
                      onClose={mockToggleModal} />)
        fireEvent.click(screen.getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
        // Act: Simulate click event
        // Assert: Expected matcher
    });
})