import React, { useState, useEffect } from 'react'
import AudioPlayer from 'react-audio-player'
import BackLink from '../../components/BackLink/BackLink'
import { useParams } from 'react-router-dom'

import { API } from '../../API'
import './Lesson.css'

const Lesson = () => {
    const [lesson, setLesson] = useState({})
    const [translation, setTranslation] = useState('')
    const params = useParams()

    useEffect(() => {
        const lang = localStorage.lang
        API(`http://localhost:4000/lesson/${lang}/${params.contentId}`)
            .then(lesson => {
                setLesson(lesson)
            })
    }, [])

    useEffect(() => {
        if (lesson.collectionId) { //after lesson is populated by response
            const settings = {
                lang: localStorage.lang,
                text: transcript //transcript will be available by the time this effect will execute
            }

            fetch('http://localhost:4000/translate', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(settings)
            })
                .then(res => res.json())
                .then(data => {
                    setTranslation(data.translatedText)
                })
        }
    }, [lesson])

    let transcript = ""
    if (lesson.tokenizedText) {
        transcript = lesson.tokenizedText
            .map(subSentence => subSentence.map(chunk => chunk.text).join('\n'))
            .join('\n')
    }


    return (
        <main className="container container-spacing">
            <BackLink path={'/course/' + lesson.collectionId} />
            <div className="row">
                <section className="col-md-6 card lesson">
                    <div className="card-header">
                        <h1 className="lesson__title">{lesson.title}</h1>
                    </div>
                    <div className="card-body">
                        <AudioPlayer
                            className="lesson__audio"
                            src={lesson.audio}
                            title={lesson.title}
                            controls
                        />
                        <pre className="mt-3 transcript">
                            {transcript}
                        </pre>
                    </div>
                </section>
                <section className="col-md-6">
                    <section className="card translation">
                        <div className="card-body">
                            <pre className="mt-3 translation__transcript">
                                {translation}
                            </pre>
                        </div>
                    </section>
                </section>
            </div>

        </main>
    )
}

export default Lesson
