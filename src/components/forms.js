import React, { useEffect, useState } from 'react'
function Forms() {

    const axios = require('axios');

    const [forms, setForms] = useState([]);

    useEffect(() => {
        axios.get('https://api.jotform.com/user/forms?apiKey=8cc17c20fe79be24f60cb418bd2283fd')
            .then(response => {
                console.log(response)
                setForms(response.data.content)
            }
            );
    }, []);
    return (
        <div >
            {forms.map(form =>
                <div className='jfForms'>
                    <a className='aLinks' href={form.url} >
                        {form.title}
                    </a>
                </div>)}
        </div>
    )
}

export default Forms