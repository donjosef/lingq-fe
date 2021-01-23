import React, { useState, useEffect, useRef } from 'react'
import AudioPlayer from 'react-audio-player'
import { useParams } from 'react-router-dom'

import './Lesson.css'

const Lesson = () => {
    const [lesson, setLesson] = useState({})
    const params = useParams()
    const audioRef = useRef()

    useEffect(() => {
        const lang = localStorage.lang

        fetch(`http://localhost:4000/lesson/${lang}/${params.contentId}`)
            .then(res => res.json())
            .then(lesson => {
                setLesson(lesson)
            })
    }, [])

    useEffect(() => {
        console.log(audioRef.current.audioEl.current)
        console.log(audioRef.current.audioEl.current.getAttribute('title'))
    }, [])

    let transcript = ""
    if (lesson.tokenizedText) {
        transcript = lesson.tokenizedText
            .map(subSentence => subSentence.map(chunk => chunk.text).join('\n'))
            .join('\n')
    }


    return (
        <main className="container container-spacing">
            <section className="card lesson">
                <div className="card-header">
                    <h1 className="lesson__title">{lesson.title}</h1>
                </div>
                <div className="card-body">
                    <AudioPlayer
                        className="lesson__audio"
                        src={lesson.audio}
                        title={lesson.title}
                        controls
                        ref={(element) => audioRef.current = element} />
                    <pre className="mt-3 transcript">
                        {transcript}
                    </pre>
                </div>
            </section>
        </main>
    )
}

export default Lesson
