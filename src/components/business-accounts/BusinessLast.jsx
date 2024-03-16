"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import Select from "react-select";
import countries from "@/lib/countries.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';

const countryOptions = countries.map((country) => ({
  value: country.name,
  label: country.name,
}));

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f0f0f0" : "#fff",
    color: state.isSelected ? "#000" : "#333",
  }),
};

const montserrat = Montserrat({ subsets: ["latin"] });
const requiredText = "This field is required";

const phoneUtil = PhoneNumberUtil.getInstance();

const phoneValidation = Yup.string().test(
  'is-valid-phone',
  'Phone number is not valid',
  (value) => {
    try {
      const number = phoneUtil.parseAndKeepRawInput(value, ''); // You might need to adjust the default region code
      return phoneUtil.isValidNumber(number);
    } catch (error) {
      return false;
    }
  }
);

const ValidationSchema = Yup.object().shape({
  yourName: Yup.string().required(requiredText),
  birthDate: Yup.string().required(requiredText),
  addressLine1: Yup.string().required(requiredText),
  contactPhoneNumber: phoneValidation.required(requiredText),
  emailAddress: Yup.string().email("Invalid email").required(requiredText),
  yourCountry: Yup.string().required(requiredText),
  yourCity: Yup.string().required(requiredText),
  yourState: Yup.string().required(requiredText),
  zipCode: Yup.string().required(requiredText),
  countryOfBankAccount: Yup.string().required(requiredText),
  monthlyPaymentVolume: Yup.string().required(requiredText),
  idType: Yup.string().required(requiredText),
  idNumber: Yup.string().required(requiredText),
  anticipatedPaymentCountries: Yup.string().required(requiredText),
  privacy: Yup.string().required(requiredText),
});

const BusinessLast = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [resultMessage, setResultMessage] = useState("");
  return (
    <>
      <section className="business-last">
        <div className="_container">
          <div className="business-last__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">
                Transact securely
                <br />
                with Clarity Solutions
              </h2>
              <h3>
                Please provide information about your needs, empowering us to
                deliver <br />
                customised solutions aligned with your requirements.
              </h3>
            </RevealWrapper>

            <Formik
              initialValues={{
                yourName: "",
                birthDate: "",
                addressLine1: "",
                addressLine2: "",
                contactPhoneNumber: "",
                emailAddress: "",
                yourCountry: "",
                yourCity: "",
                yourState: "",
                zipCode: "",
                countryOfBankAccount: "",
                monthlyPaymentVolume: "1 - 5,000",
                idType: "Identity Card",
                idNumber: "",
                anticipatedPaymentCountries: "",
                additionalComments: "",
                privacy: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  // Make a POST request to your serverless function
                  const response = await fetch("/api/business", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  });
                  console.log(JSON.stringify(values));
                  if (response.ok) {
                    resetForm();
                    setResultMessage("success");
                  } else {
                    setResultMessage("failed");
                  }
                } catch (error) {
                  console.error(error);
                  setResultMessage("failed");
                }
              }}
            >
              {({ errors, touched, setFieldValue, values }) => (
                <Form className={`contact-form ${montserrat.className}`}>
                  <div className="input-wrap">
                    <Field
                      name="yourName"
                      placeholder="Your Name"
                      className={
                        errors.yourName && touched.yourName ? "error" : ""
                      }
                    />
                    {errors.yourName && touched.yourName ? (
                      <div className="error-label">{errors.yourName}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={values.contactPhoneNumber}
                      onChange={(value) =>
                        setFieldValue("contactPhoneNumber", value)
                      }
                      className={`form-control ${
                        errors.contactPhoneNumber && touched.contactPhoneNumber
                          ? "error"
                          : ""
                      }`}
                    />
                    {errors.contactPhoneNumber && touched.contactPhoneNumber ? (
                      <div className="error-label">
                        {errors.contactPhoneNumber}
                      </div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="emailAddress"
                      placeholder="Email Address"
                      type="email"
                      className={
                        errors.emailAddress && touched.emailAddress
                          ? "error"
                          : ""
                      }
                    />
                    {errors.emailAddress && touched.emailAddress ? (
                      <div className="error-label">{errors.emailAddress}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <DatePicker
                      selected={values.birthDate}
                      onChange={(date) => setFieldValue("birthDate", date)}
                      className={`form-control ${
                        errors.birthDate && touched.birthDate ? "errors" : ""
                      }`}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Your Date of Birth"
                    />
                    {errors.birthDate && touched.birthDate ? (
                      <div className="error-label">{errors.birthDate}</div>
                    ) : null}
                  </div>

                  <div
                    className={`input-wrap ${
                      errors.yourCountry && touched.yourCountry ? "error" : ""
                    }`}
                  >
                    <Select
                      options={countryOptions}
                      name="yourCountry"
                      placeholder="Your Country"
                      styles={customStyles}
                      value={countryOptions.find(
                        (option) => option.value === values.yourCountry
                      )}
                      onChange={(option) =>
                        setFieldValue("yourCountry", option.value)
                      }
                      error={errors.yourCountry && touched.yourCountry}
                      classNamePrefix="select"
                    />
                    {errors.yourCountry && touched.yourCountry ? (
                      <div className="error-label">{errors.yourCountry}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="addressLine1"
                      placeholder="Address Line 1"
                      className={
                        errors.addressLine1 && touched.addressLine1
                          ? "error"
                          : ""
                      }
                    />
                    {errors.addressLine1 && touched.addressLine1 ? (
                      <div className="error-label">{errors.addressLine1}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="addressLine2"
                      placeholder="Address Line 2"
                      className={
                        errors.addressLine2 && touched.addressLine2
                          ? "error"
                          : ""
                      }
                    />
                    {errors.addressLine2 && touched.addressLine2 ? (
                      <div className="error-label">{errors.addressLine2}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="yourCity"
                      placeholder="Your City"
                      className={
                        errors.yourCity && touched.yourCity ? "error" : ""
                      }
                    />
                    {errors.yourCity && touched.yourCity ? (
                      <div className="error-label">{errors.yourCity}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="yourState"
                      placeholder="Your State/Province"
                      className={
                        errors.yourState && touched.yourState ? "error" : ""
                      }
                    />
                    {errors.yourState && touched.yourState ? (
                      <div className="error-label">{errors.yourState}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="zipCode"
                      placeholder="Zip Code"
                      className={
                        errors.zipCode && touched.zipCode ? "error" : ""
                      }
                    />
                    {errors.zipCode && touched.zipCode ? (
                      <div className="error-label">{errors.zipCode}</div>
                    ) : null}
                  </div>

                  <div
                    className={`input-wrap full ${
                      errors.countryOfBankAccount &&
                      touched.countryOfBankAccount
                        ? "error"
                        : ""
                    }`}
                  >
                    <Select
                      options={countryOptions}
                      name="countryOfBankAccount"
                      placeholder="Country of Bank Account"
                      styles={customStyles}
                      value={countryOptions.find(
                        (option) => option.value === values.countryOfBankAccount
                      )}
                      onChange={(option) =>
                        setFieldValue("countryOfBankAccount", option.value)
                      }
                      error={
                        errors.countryOfBankAccount &&
                        touched.countryOfBankAccount
                      }
                      classNamePrefix="select"
                    />
                    {errors.countryOfBankAccount &&
                    touched.countryOfBankAccount ? (
                      <div className="error-label">
                        {errors.countryOfBankAccount}
                      </div>
                    ) : null}
                  </div>

                  <div className="radio-wrap">
                    <h4>Monthly Payment Volume</h4>
                    <div className="radio-row">
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="1 - 5,000"
                        />

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          1 - 5,000
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="5,001 - 100,000"
                        />

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          5,001 - 100,000
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="100,001 - 500,000"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          100,001 - 500,000
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="500,001+"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          500,001+
                        </span>
                      </label>
                    </div>
                    {errors.monthlyPaymentVolume &&
                    touched.monthlyPaymentVolume ? (
                      <div className="error-label">
                        {errors.monthlyPaymentVolume}
                      </div>
                    ) : null}
                  </div>
                  <div className="radio-wrap">
                    <h4>ID Type</h4>
                    <div className="radio-row">
                      <label>
                        <Field
                          type="radio"
                          name="idType"
                          value="Identity Card"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          <span>Identity Card</span>
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="idType"
                          value="Passport Number"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          <span>Passport Number</span>
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="idType"
                          value="Driving Licence"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          <span>Driving Licence</span>
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="idType"
                          value="Social Security Number"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          <span>Social Security Number</span>
                        </span>
                      </label>
                    </div>
                    {errors.idType && touched.idType ? (
                      <div className="error-label">{errors.idType}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap full with-border">
                    <h4>ID Number</h4>
                    <Field
                      type="number"
                      name="idNumber"
                      placeholder="ID Number"
                      className={
                        errors.idNumber && touched.idNumber ? "error" : ""
                      }
                    />
                    {errors.idNumber && touched.idNumber ? (
                      <div className="error-label">{errors.idNumber}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <h4>Anticipated Payment Countries</h4>
                    <Field
                      as="textarea"
                      name="anticipatedPaymentCountries"
                      placeholder="Please provide information here"
                      className={
                        errors.anticipatedPaymentCountries &&
                        touched.anticipatedPaymentCountries
                          ? "error"
                          : ""
                      }
                    />
                    {errors.anticipatedPaymentCountries &&
                    touched.anticipatedPaymentCountries ? (
                      <div className="error-label">
                        {errors.anticipatedPaymentCountries}
                      </div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <h4>Additional Comments</h4>
                    <Field
                      as="textarea"
                      name="additionalComments"
                      placeholder="Share insights about your business and its payment requirements"
                    />
                  </div>

                  <div
                    className={
                      errors.privacy && touched.privacy
                        ? "error radio-wrap privacy"
                        : "radio-wrap privacy"
                    }
                  >
                    <div className="radio-row">
                      <label>
                        <Field type="radio" name="privacy" value="privacy" />

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          <div>
                            By confirming, you agree that you have read and
                            accepted the{" "}
                            <a href="/terms-and-conditions">
                              Terms and Conditions
                            </a>{" "}
                            and <a href="/privacy-policy">Privacy Policy</a>.
                          </div>
                        </span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="orange-button">
                    Submit Form
                  </button>

                  {resultMessage === "success" ? (
                    <div className="input-wrap full">
                      <div className="message success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="41"
                          height="40"
                          viewBox="0 0 41 40"
                          fill="none"
                        >
                          <path
                            d="M12.2773 20.8334L17.2773 25.8334L28.944 14.1667"
                            stroke="#F85C3A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.6108 36.6668C29.8158 36.6668 37.2774 29.2052 37.2774 20.0002C37.2774 10.7952 29.8158 3.3335 20.6108 3.3335C11.4058 3.3335 3.94409 10.7952 3.94409 20.0002C3.94409 29.2052 11.4058 36.6668 20.6108 36.6668Z"
                            stroke="#F85C3A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>
                          <b>Success!</b> Your account registration is complete!
                          Thank you for choosing Clarity Solutions! We will
                          reach you out to you shortly.
                        </span>
                      </div>
                    </div>
                  ) : resultMessage === "failed" ? (
                    <div className="input-wrap full">
                      <div className="message error">
                        Failed to send message. Please try again.
                      </div>
                    </div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessLast;
