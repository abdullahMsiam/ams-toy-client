import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register')

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
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
                        <h1 className="text-3xl text-center mt-5 font-bold">Please Register!</h1>
                        {/* form */}
                        <form onSubmit={handleRegister} >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="phot url" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <p>Already have an account?
                                            <Link className='text-red-700 font-bold' to="/login"> Login</Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-neutral" type="submit" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;