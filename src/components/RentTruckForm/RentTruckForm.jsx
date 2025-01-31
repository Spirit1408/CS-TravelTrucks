import { useState } from "react";
import css from "./RentTruckForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

export const RentTruckForm = ({truck}) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: ''
    });

    const { name:truckName } = truck;

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(name) && name !== '') {
            return 'Name should contain only Latin letters';
        }
        return '';
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) && email !== '') {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'name') {
            setErrors(prev => ({
                ...prev,
                name: validateName(value)
            }));
        } else if (name === 'email') {
            setErrors(prev => ({
                ...prev,
                email: validateEmail(value)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!errors.name && !errors.email && startDate && endDate) {
            setIsLoading(true);
            setFormData({ name: '', email: '', comment: '' });
            setErrors({ name: '', email: '' });
            setDateRange([null, null]);
            setTimeout(() => {
                toast.success(`Dear, ${formData.name}! Your request of renting ${truckName} in days from ${startDate.getDay()} to ${endDate.getDay()} has been successfully submitted.`);
                setIsLoading(false);
            }, 1500);
        }
    };

    return (
        <div className={css.formContainer}>
            <h3 className={css.formTitle}>Book your campervan now</h3>

            <p className={css.formDescription}>
                Stay connected! We are always ready to help you.
            </p>

            <form className={css.form} onSubmit={handleSubmit}>
                {isLoading && (
                    <div className={css.loadingOverlay}>
                        <div className={css.loadingSpinner}></div>
                    </div>
                )}
                <div className={css.inputWrapper}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className={`${css.input} ${errors.name ? css.inputError : ''}`}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.name && <span className={css.errorMessage}>{errors.name}</span>}
                </div>

                <div className={css.inputWrapper}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className={`${css.input} ${errors.email ? css.inputError : ''}`}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <span className={css.errorMessage}>{errors.email}</span>}
                </div>

                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    isClearable={true}
                    placeholderText="Booking date*"
                    dateFormat="dd/MM/yyyy"
                    className={css.input}
                    minDate={new Date()}
                    required
                />

                <textarea
                    name="comment"
                    placeholder="Comment"
                    className={css.textarea}
                    value={formData.comment}
                    onChange={handleInputChange}
                />

                <button type="submit" className={css.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};
