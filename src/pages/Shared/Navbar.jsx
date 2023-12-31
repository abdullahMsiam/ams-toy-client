import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, loading, userOut } = useContext(AuthContext)

    const handleLogout = () => {
        userOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className='fixed bg-neutral-300 bg-opacity-80 z-10 top-0 right-0 left-0'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a>All toys</a>
                                <ul className="p-2">
                                    <li>
                                        <Link>My toys</Link>
                                    </li>
                                    <li>
                                        <Link to="allToys">All toys</Link>
                                    </li>
                                    <li>
                                        <Link to="/addToy">Add a Toys</Link>
                                    </li>

                                </ul>
                            </li>
                            <Link to="/blogs">Blogs</Link>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">AMS-ToysWorld</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/allToys">All toys</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <>
                            {
                                user ? <li>
                                    <Link to="/addToy">Add a Toys</Link>
                                </li> : ' '
                            }
                            {
                                user ? <li>
                                    <Link>My toys</Link>
                                </li> : ' '
                            }
                        </>

                    </ul>
                </div>
                <div className="navbar-end">
                    <>
                        {
                            !user ? <>
                                <Link to="/login"> <button className='btn btn-neutral'>Login</button></Link>
                            </> :
                                <>
                                    <img src={user.displayName} />
                                    <button onClick={handleLogout} className='btn btn-neutral'>Logout</button>
                                </>
                        }
                    </>
                </div>
            </div>
        </div>
    );
};

export default Navbar;