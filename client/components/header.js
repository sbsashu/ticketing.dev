import react from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Gitx</a>
            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button>
                <button className="btn btn-outline-success my-3 my-sm-0" type="submit">Singin</button>
            </form>
        </nav>
    )
}

export default Header;