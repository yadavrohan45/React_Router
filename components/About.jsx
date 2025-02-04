import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_1.25/f_auto,q_auto/v1705580325/ideas-and-advice-prod/en-us/target_142183cd7b8/target_142183cd7b8.png?_i=AA"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React Router is a powerful library used for handling routing in React applications. It allows you to create single-page applications (SPAs) with multiple routes and views, without reloading the entire page. With React Router, you can easily switch between different components or pages, making navigation seamless.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Some key features of React Router include nested routes, dynamic routing, and URL parameters, which simplify the creation of complex navigation structures. Overall, it enhances user experience and improves the functionality of your React app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

  