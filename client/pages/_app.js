import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
// import 
module.exports = ({Component, pageProps}) => {
    return <>
        <Header/>
        <Component {...pageProps} /> 
    </>; 
}