import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from '../../src/components/Button'

describe('Button', () => {
  it('renders a button with provided aria-label and icon', () => {
    render(<Button onClick={() => { }} icon={<svg data-testid="icon" />} aria-label="Like motto" />)
    const btn = screen.getByRole('button', { name: /like motto/i })
    expect(btn).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handle = vi.fn()
    render(<Button onClick={handle} icon={<svg />} aria-label="Like motto" />)
    const btn = screen.getByRole('button', { name: /like motto/i })
    await fireEvent.click(btn)
    expect(handle).toHaveBeenCalledTimes(1)
  })
})
