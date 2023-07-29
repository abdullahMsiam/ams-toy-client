import React from 'react';

const AddToy = () => {
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toy_name = form.name.value;
        const category = form.category.value;
        const photo_url = form.photo.value;
        const seller_name = form.seller.value;
        const seller_email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToy = { toy_name, category, photo_url, seller_name, seller_email, price, rating, quantity, details }

        console.log(newToy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => console.log(data))


    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="card flex-shrink-0 w-2/3  shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center mt-5 font-bold">Add a Toy</h1>
                        <form onSubmit={handleAddToy}>
                            <div className="card-body">
                                <div className='flex gap-5 w-full p-0 mx-auto'>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                    </div>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" placeholder="seller name" name='seller' className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-5 w-full p-0 mx-auto'>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Seller email</span>
                                        </label>
                                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">category</span>
                                        </label>
                                        <input type="text" placeholder="category" name='category' className="input input-bordered" />
                                    </div>
                                </div>

                                <div className='flex gap-5 w-full p-0 mx-auto'>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="price" name='price' className="input input-bordered" />
                                    </div>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="rating" name='rating' className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-5 w-full p-0 mx-auto'>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="text" placeholder="quantity" name='quantity' className="input input-bordered" />
                                    </div>
                                    <div className="form-control grow">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" placeholder="details" name='details' className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    {/* <button>Add Toy</button> */}
                                    <input className="btn btn-neutral" type="submit" value="Add Toy" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;