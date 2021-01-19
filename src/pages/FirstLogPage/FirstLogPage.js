import React, { useState } from 'react'
import './FirstLogPage.css'

function FirstLogPage({ onLogin }) {
    const [langValue, setLangValue] = useState('')
    const [levelValue, setLevelValue] = useState('')

    const handleSettings = () => {
        localStorage.lang = langValue
        localStorage.level = levelValue

        onLogin()
    }

    return (
        <main className="container login-settings-page">
            <form className="form-inline">
                <select
                    value={langValue}
                    onChange={(e) => setLangValue(e.target.value)}
                    className="custom-select">
                    <option>Select a language</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                </select>

                <select
                    value={levelValue}
                    onChange={(e) => setLevelValue(e.target.value)}
                    className="custom-select">
                    <option>Select a level</option>
                    <option value="1">Beginner 1</option>
                    <option value="2">Beginner 2</option>
                    <option value="3">Intermediate 1</option>
                    <option value="4">Intermediate 2</option>
                    <option value="5">Advanced 1</option>
                    <option value="6">Advanced 2</option>
                </select>
            </form>
            <button 
                disabled={!langValue || !levelValue}
                className="btn btn-primary mt-5" 
                onClick={handleSettings}>Start Learning</button>
        </main>
    );
}

export default FirstLogPage;
