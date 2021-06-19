export const Fetching = async (endpoint, method, body, alertMessage) => {
    try {
        let res = fetch(endpoint, {
            method: method,
            headers: {
                ContentType: "application/json",
                token: process.env.REACT_APP_TOKEN
            },
            body: body ? JSON.stringify(body) : ""
        })

        if (res.ok) {
            let data = res.json()
            return data
        } else {
            console.log(res)
            alert(alertMessage)
            return false    // The logic here is that we can check easylly the outcome in a logic IF ex. if (Feching) {...code here}
        }
    } catch (error) {
        console.log(error)
        return false   // The logic here is that we can check easylly the outcome in a logic IF ex. if (Feching) {...code here}
    }

}


