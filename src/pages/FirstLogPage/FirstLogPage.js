import React from 'react'
import Select from '../../components/Select/Select'
import useSelect from '../../hooks/useSelect'

import './FirstLogPage.css'

function FirstLogPage({ onLogin }) {
    const {langValue, levelValue, setLangValue, setLevelValue} = useSelect()    

    const handleSettings = () => {
        localStorage.lang = langValue
        localStorage.level = levelValue

        onLogin()
    }

    return (
        <main className="container login-settings-page">
            <form className="form-inline">
                <Select type='lang' value={langValue} onChange={setLangValue}/>
                <Select type='level' value={levelValue} onChange={setLevelValue}/>
            </form>
            <button 
                disabled={!langValue || !levelValue}
                className="btn btn-primary mt-5" 
                onClick={handleSettings}>Start Learning</button>
        </main>
    );
}

export default FirstLogPage;
