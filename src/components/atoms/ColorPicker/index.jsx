import { useState, useEffect } from 'react'
import { BlockPicker } from 'react-color'
import { getAvailableColors } from '../../../utils/tw-colors'

const availableColors = getAvailableColors()

const availableHex = Array.from(new Set(availableColors.map(color => color.hex)))

export const ColorPicker = ({ handleChange }) => {
    const [selectedHex, setSelectedHex] = useState('#3b82f6')

    useEffect(() => {
        let color = availableColors.find(color => color.hex === selectedHex)
        handleChange(color)
    }, [selectedHex])

    return (
        <div className='colorPicker absolute z-50 w-10/12 shadow-xl'>
            <BlockPicker width="100%" triangle='hide' colors={availableHex} color={selectedHex} onChange={value => setSelectedHex(value.hex)}></BlockPicker>
        </div>
    )
}