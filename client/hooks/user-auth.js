import { useState } from "react"
import axios from "axios";

export default ({method, url, body, onSuccess}) => {
    const [errors, setError] = useState(null)

    const doRequest = async () => {
        try {
            console.log(method, url, body)
            setError(null)
            const res = await axios({
                method: method,
                url: url,
                data: body
            });

            if(onSuccess) {
                return onSuccess(res.data)
            }
            return res.data
        } catch (error) {
            console.log("asas", error)
            setError(
                <div className="alert alert-danger">
                    <h4>Opps ...</h4>
                    <ul>
                    {error.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)}
                    </ul>   
                </div>
            )
        }
    }
    return {doRequest,  errors}
}