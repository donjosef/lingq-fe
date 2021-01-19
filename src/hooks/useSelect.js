import { useState } from 'react'

const useSelect = () => {
    const [langValue, setLangValue] = useState('')
    const [levelValue, setLevelValue] = useState('')

    return { langValue, levelValue, setLangValue, setLevelValue}
}

export default useSelect