import React, { ChangeEventHandler, useState } from 'react'
import sendVisionAPI from '../hooks/UsevisionApi'

export const FileInput = () => {

    const [file, setfile] = useState<HTMLInputElement>()

    // const readFile = (file:File) => {
    //     let reader = new FileReader();
    //     const p = new Promise((resolve, reject) => {
    //         reader.onload = (ev) => {
    //             // document.querySelector('img').setAttribute('src', ev.target.result);
    //             resolve(ev!.target!.result!.replace(/^data:image\/(png|jpeg);base64,/, ''));
    //         };
    //     })

    //     reader.readAsDataURL(file);
    //     return p;
    // };

    const convertToBase64 = (file: File) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            const base64 = e.target?.result as string
            const result: string = base64.replace(/^data:image\/(png|jpeg);base64,/, '')
            const a = sendVisionAPI(result)
                .then(result => {
                    console.log(result.responses[0]);
                })
        }
    }

    const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget.files;
        if (!files || files?.length === 0) return;
        const file = files[0];
        const base64string = convertToBase64(file)
    };

    return (
        <div>
            <input type="file" accept='image/*' onChange={handleFiles} />
        </div>
    )
}
