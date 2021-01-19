import React from 'react'

const Select = ({ type, value, onChange }) => {

    let elements = []

    if(type === 'lang') {
        elements = [
            { name: 'Select a language', val: '' },
            { name: 'German', val: 'de' },
            { name: 'Spanish', val: 'es' }
        ]
    }

    if (type === 'level') {
        elements = [
            { name: 'Select a level', val: '' },
            { name: 'Beginner 1', val: '1' },
            { name: 'Beginner 2', val: '2' },
            { name: 'Intermediate 1', val: '3' },
            { name: 'Intermediate 2', val: '4' },
            { name: 'Advanced 1', val: '5' },
            { name: 'Advanced 2', val: '6' },
        ]
    }

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="custom-select">
            {elements.map((element, ind) => <option key={ind} value={element.val}>{element.name}</option>)}
        </select>
    )
}

export default Select