import { useState } from 'react'

const useSelect = () => {
    const [langValue, setLangValue] = useState(localStorage['lang'])
    const [levelValue, setLevelValue] = useState(localStorage['level'])

    return { langValue, levelValue, setLangValue, setLevelValue}
}

export default useSelect