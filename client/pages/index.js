import buildClient from "../api/client-build";
import axios from "axios";
const LandingPage = (data) => {
    // console.log("ass", data)
    return <h1>Landing page {currentUser}</h1>
}

LandingPage.getInitialProps = async (context) => {
    // const client = buildClient(context);
    // console.log('client', client)
    // const data = await client.get("/api/get/currentuser")
    // console.log(data, 'data')
    // return data;
    if(typeof window === "undefined") {
        const data = await axios.get("http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/get/currentuser", {
            headers: {
                Host: "localhost"
            }
        });
        console.log("data", data)
    } else {
        // we must be on the browser
        // return axios.create({
        //     baseURL: "/"
        // })
    }
}

export default LandingPage;