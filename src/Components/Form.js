import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const PrasadForm = ({ selectedTemple }) => {
  const initialValues = {
    name: '',
    fatherName: '',
    mobileNo: '',
    pinCode: '',
    address: '',
    prasadQuantity: '',
    prasadAmount: '',
    templeSelection: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    fatherName: Yup.string().required("Father's name is required"),
    mobileNo: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number must be numeric')
      .required('Mobile number is required'),
    pinCode: Yup.string()
      .matches(/^[0-9]+$/, 'Pin code must be numeric')
      .required('Pin code is required'),
    address: Yup.string().required('Full address is required'),
    prasadQuantity: Yup.string().required('Prasad quantity is required'),
    prasadAmount: Yup.string().required('Prasad amount is required'),
    templeSelection: Yup.array().min(1, 'Select at least one temple'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // Handle form submission here
    try {
      const response = await axios.post('https://ayodhya-b.onrender.com/prasadForm', values);
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted',
        text: 'You have successfully submitted the form.',
      });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const ayodhyaTemples = [
    { id: 'RamJanamBhumi', label: 'Ram JanamBhumi (राम जन्मभूमि)' },
    { id: 'HanumanGadhi', label: 'Hanuman Gadhi (हनुमान गढ़ी)' },
    { id: 'KanakBhawan', label: 'Kanak Bhawan (कनक भवन)' },
    { id: 'ShriNageshwarNathMandir', label: 'Shri Nageshwar Nath Mandir (श्री नागेश्वर नाथ मंदिर)' },
  ];

  const mathuraTemples = [
    { id: 'Banke Bihari Temple', label: 'Banke Bihari Temple ( बांके बिहारी मंदिर )' },
    { id: 'Shri Radha Vallabh Temple', label: 'Shri Radha Vallabh Temple ( श्री राधा वल्लभ मंदिर )' },
    { id: 'Radha Raman Temple ji', label: 'Radha Raman Temple ji ( राधा रमण मंदिर जी )' },
    { id: 'Prem mandir', label: 'Prem mandir ( प्रेम मंदिर )' },
  ];

  const varanasiTemples = [
    { id: 'KashiVishwanath', label: 'Kashi Vishwanath Temple ( काशी विश्वनाथ मन्दिर )' },
    { id: 'SankatMochanHanuman', label: 'Sankat Mochan Hanuman Mandir ( संकट मोचन हनुमान मंदिर )' },
    { id: 'Durga', label: 'Durga Temple ( दुर्गा मंदिर )' },
  ];

  const getTempleList = () => {
    if (selectedTemple === 'Ayodhya') {
      return ayodhyaTemples;
    } else if (selectedTemple === 'Mathura') {
      return mathuraTemples;
    } else if (selectedTemple === 'Varanasi') {
      return varanasiTemples;
    }

    return ayodhyaTemples;
  };

  // Function to handle checkbox changes
  const handleTempleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      formik.setFieldValue('templeSelection', [...formik.values.templeSelection, value]);
    } else {
      formik.setFieldValue(
        'templeSelection',
        formik.values.templeSelection.filter((temple) => temple !== value)
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 lg:mt-28 p-6 bg-white rounded-lg shadow-lg shadow-orange-500">
      <h2 className="text-2xl font-semibold mb-8 lg:mb-12 text-red-500">Prasad Offering Form (प्रसाद चढ़ाने के लिए फॉर्म)</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
            Name (नाम) *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 p-2 w-full border rounded-lg"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="fatherName" className="block text-sm font-semibold text-gray-800">
            Father's Name (पिता का नाम) *
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fatherName}
            className="mt-1 p-2 w-full border rounded-lg"
          />
          {formik.touched.fatherName && formik.errors.fatherName && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.fatherName}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-sm font-semibold text-gray-800">
            Mobile No (फोन नंबर) *
          </label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNo}
            className="mt-1 p-2 w-full border rounded-lg"
          />
          {formik.touched.mobileNo && formik.errors.mobileNo && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.mobileNo}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="pinCode" className="block text-sm font-semibold text-gray-800">
            Pin Code Number (पिन कोड नंबर) *
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pinCode}
            className="mt-1 p-2 w-full border rounded-lg"
          />
          {formik.touched.pinCode && formik.errors.pinCode && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.pinCode}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-800">
            Full Address (पूरा पता) *
          </label>
          <textarea
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="mt-1 p-2 w-full border rounded-lg"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.address}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="prasadQuantity" className="block text-sm font-semibold text-gray-800">
            How much Prasad should be offered? (प्रसाद कितनी मात्रा में चढ़ाना है ?) *
          </label>
          <select
            id="prasadQuantity"
            name="prasadQuantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prasadQuantity}
            className="mt-1 p-2 w-full border rounded-lg"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {formik.touched.prasadQuantity && formik.errors.prasadQuantity && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.prasadQuantity}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="prasadAmount" className="block text-sm font-semibold text-gray-800">
            How much Prasad is to be offered? (कितने का प्रसाद चढ़ाना है ?) *
          </label>
          <select
            id="prasadAmount"
            name="prasadAmount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prasadAmount}
            className="mt-1 p-2 w-full border rounded-lg"
          >
            <option value="">Select</option>
            <option value="251 Rs">251 Rs</option>
            <option value="551 Rs">551 Rs</option>
            <option value="1051 Rs">1051 Rs</option>
            <option value="1111 Rs">1111 Rs</option>
          </select>
          {formik.touched.prasadAmount && formik.errors.prasadAmount && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.prasadAmount}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 mb-2">Select Temples (मंदिर चुनें) *</label>
          {getTempleList().map((temple) => (
            <div key={temple.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={temple.id}
                name="templeSelection"
                value={temple.id}
                onChange={handleTempleChange}
                checked={formik.values.templeSelection.includes(temple.id)}
              />
              <label htmlFor={temple.id} className="ml-2 font-semibold">
                {temple.label}
              </label>
            </div>
          ))}
          {formik.touched.templeSelection && formik.errors.templeSelection && (
            <div className="text-orange-600 text-sm mt-1">{formik.errors.templeSelection}</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover-bg-orange-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PrasadForm;
