import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import MottoCard from '../../src/components/MottoCard'

vi.mock('../../src/components/MottoCardContainer', () => {
    return {
        default: (props) => React.createElement('div', { 'data-testid': 'motto-card-container' }, props.children)
    }
})

vi.mock('../../src/components/Button', () => {
    return {
        default: (props) =>
            React.createElement(
                'button',
                { 'aria-label': props['aria-label'], onClick: props.onClick },
                props.icon
            )
    }
})

const sampleMotto = {
    name: '2026',
    content: 'Happy new year.',
    author: 'sddtc'
}

describe('MottoCard', () => {
    it('renders motto details inside container', () => {
        render(<MottoCard motto={sampleMotto} next={vi.fn()} pre={vi.fn()} likeIt={vi.fn()} />)
        expect(screen.getByTestId('motto-card-container')).toBeTruthy()
        expect(screen.getByText(sampleMotto.name)).toBeTruthy()
        expect(screen.getByText(sampleMotto.content)).toBeTruthy()
        expect(screen.getByText(`- ${sampleMotto.author}`)).toBeTruthy()
    })

    it('calls handlers when action buttons are clicked', () => {
        const next = vi.fn()
        const pre = vi.fn()
        const likeIt = vi.fn()
        render(<MottoCard motto={sampleMotto} next={next} pre={pre} likeIt={likeIt} />)

        const likeBtn = screen.getByRole('button', { name: 'Like motto' })
        const preBtn = screen.getByRole('button', { name: 'pre motto' })
        const nextBtn = screen.getByRole('button', { name: 'next motto' })

        fireEvent.click(likeBtn)
        fireEvent.click(preBtn)
        fireEvent.click(nextBtn)

        expect(likeIt).toHaveBeenCalledTimes(1)
        expect(pre).toHaveBeenCalledTimes(1)
        expect(next).toHaveBeenCalledTimes(1)
    })
})