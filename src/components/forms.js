import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Forms() {

    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jotform.com/form/220652760779060/submissions?apiKey=8cc17c20fe79be24f60cb418bd2283fd`)
            .then(response => {
                console.log(response);
                setSubmissions(response.data.content)
            }
            )
    }, []);

    return (
        <div >
            {submissions.map(sub =>

                <div className="jfForms " style={{ backgroundImage: `url()`, }}>
                    <img className="jfForms-jfImage"src={sub.answers[4].answer[0]} alt="" />
                    <div className='contentText'>
                        <span className='title'>{sub.answers[7].answer}</span>
                        <br />
                        <span>
                            <span className='information' > {sub.answers[5].answer}</span>
                        </span>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Forms