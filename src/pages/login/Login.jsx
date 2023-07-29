import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200  ">
                <div className="hero-content flex-col w-1/2 ">
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center mt-5 font-bold">Login now!</h1>
                        {/* form */}
                        <form onSubmit={handleLogin} >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <p>Don't have an account?
                                            <Link className='text-red-700 font-bold' to="/register"> Register</Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-neutral" type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                        <div className='text-center mb-4 font-bold'>
                            <h1>Or, Login with</h1>
                            <button className="btn btn-outline mt-4 w-1/2">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;