export const PostRequest = async (endpoint, method, data, alertMessage) => {
    try {
        let res = await fetch(endpoint, {
            method:method,
            headers: {
                "Content-Type": "application/json",
                token: process.env.REACT_APP_TOKEN
            },
            body:JSON.stringify(data)
            
        })

        if (res.ok) {
            let data = await res.json()
            console.log(data)
            alert("Operation was successful")
        } else {
            alert(alertMessage)
        }
    } catch (error) {
        console.log(error)
    }

}
export const GetRequest = async (endpoint, message) => {
    let data;
    try {
        let request = await fetch(endpoint, {
            headers: {
                token: process.env.REACT_APP_TOKEN
            },
        })
        if (request.ok) {
            data = await request.json()
            return data
        } else {
            alert(message)
            return false
        }
    } catch (error) {
        console.log("errror: ", error)
        return false
    }
}

export const PostImageRequest = async (endpoint, body) => {
    try {
        let request = await fetch(endpoint, {
            method:"POST",
            headers: {
                ContentType: "multipart/form-data",
                token: process.env.REACT_APP_TOKEN
            },
            body: body,
        })
        return request
 
    } catch (error) {
        console.log("errror: ", error)
        return false
    }
}


