const api_key = `AIzaSyAXKBp3xOb8-jYXt7Bzl9zlRROQwsob5zY`;
const url = `https://vision.googleapis.com/v1/images:annotate`;

// Send API Request to Cloud Vision API
const sendVisionAPI = async (base64string: string) => {
    let body = {
        requests: [
            {
                image: { content: base64string }, features: [{
                    type: 'TEXT_DETECTION', "maxResults": 50,
                }]
            }
        ]
    };
    const response = await fetch(
        `${url}?key=${api_key}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(body)
    })
    return await response.json()
}

export default sendVisionAPI