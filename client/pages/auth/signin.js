import { useState } from "react"; 
import useRequest from "../../hooks/user-auth"
import Router from "next/router";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {doRequest, errors} = useRequest({
        method: 'POST',
        url: "http://localhost:54733/api/user/signin",
        body: {
            email, password
        },
        onSuccess:() => Router.push("/")
    });
    const onSubmit = async (event) => {
        event.preventDefault()
        doRequest()
    }


    return (
        <form onSubmit={onSubmit}>
            <h1>Sign In</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"/>
            </div>
            {errors}
            <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
    )
}