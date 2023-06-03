import React from 'react'
import ColorInputProps from '../models/ColorInputProps'

export default function ColorInput({ colorText, setColor }: ColorInputProps) {
    return (
        <form action="">
            <label htmlFor="color"></label>
            <input
                type="text"
                id='color'
                autoFocus
                placeholder='Type color name'
                value={colorText}
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
    )
}
