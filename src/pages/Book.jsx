import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import camera from '../assets/img/Figma/booking page.jpg'
import { IoIosCheckbox } from "react-icons/io";
import Footer from '../components/Footer/Footer';

export default function Book() {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            phone: '',
            email: '',
            date: '',
            service: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            company: Yup.string().required('Company is required'),
            phone: Yup.string().required('Phone is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            date: Yup.date().required('Date is required'),
            service: Yup.string().required('Service is required'),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>
            <section className="flex flex-col px-6 md:px-20 py-28 text-lightBrown h-screen" style={{
                backgroundImage: `url('${camera}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='flex flex-col items-center justify-center space-y-14'>
                    <div className="flex-col flex items-center justify-center space-y-2 md:px-56 text-center px-6">
                        <h1 className="text-5xl md:text-7xl font-jetbrains">PHOTO STUDIO</h1>
                        <p className='font-noto text-lg md:text-3xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <button className="rounded-3xl bg-lightBrown text-black px-8 py-4 md:px-16 md:py-8 text-2xl md:text-4xl hover:bg-black hover:text-lightBrown duration-300 transition ease-in-out">BOOK NOW</button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center bg-lightBrown py-14 px-6">
                <div className="flex flex-col items-center justify-center space-y-12 w-full">
                    <div className="bg-white p-8 md:p-24 items-center flex flex-col justify-center w-full max-w-4xl">
                        <h1 className="font-noto font-bold text-3xl md:text-5xl mb-8">Book Services Now</h1>
                        <p className='font-noto text-xl md:text-2xl mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

                        <form onSubmit={formik.handleSubmit} className="w-full space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-red-600">{formik.errors.name}</div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-600">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                        className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <div className="text-red-600">{formik.errors.phone}</div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.company}
                                        className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                    />
                                    {formik.touched.company && formik.errors.company ? (
                                        <div className="text-red-600">{formik.errors.company}</div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col">
                                    <input
                                        type="date"
                                        name="date"
                                        placeholder="Date"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.date}
                                        className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                    />
                                    {formik.touched.date && formik.errors.date ? (
                                        <div className="text-red-600">{formik.errors.date}</div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col">
                                    <select
                                        name="service"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.service}
                                        className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                    >
                                        <option value="" label="Select service" />
                                        <option value="productShoot" label="Product Shoot" />
                                        <option value="adsShoot" label="Ads Shoot" />
                                        <option value="weddingShoot" label="Wedding Shoot" />
                                    </select>
                                    {formik.touched.service && formik.errors.service ? (
                                        <div className="text-red-600">{formik.errors.service}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    className="p-4 border rounded text-lg md:text-xl bg-slate-200"
                                />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="text-red-600">{formik.errors.message}</div>
                                ) : null}
                            </div>

                            <button type="submit" onClick={handleSubmit} className="w-full p-4 bg-darkGreen text-lightBrown text-xl rounded">
                                Book Now
                            </button>
                            {
                                submitted && <div className="text-green-600 flex items-center justify-center space-x-2 mt-4"><IoIosCheckbox /> This Form was Sent Successfully</div>
                            }
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}