import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import styles from "./Modal.module.css";
import leafImag from "../utils/leaf.png";
import { toast } from "react-toastify";
import axios from "axios";

const AccountModal = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username/Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      otp: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true);
      setIsSubmitting(true);
      const username = values.username;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[0-9]{10}$/;
      let loginType = "";
      if (emailRegex.test(username)) {
        loginType = "email";
      } else if (mobileRegex.test(username)) {
        loginType = "mobile";
      }

      try {
        const payload = { userName: values.username, inputType: loginType };
        console.log(payload);
        const response = await axios.post(
          "https://newsehaloserver.onrender.com/api/v1/sendOtp",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response) {
          console.log(response);

          // // Verify OTP
          // const verifyResponse = await axios.post('', { otp });
          // const { success } = verifyResponse.data;

          // if (isOTPModalOpen) {
          //   // Perform OTP verification API call
          //   const otpVerificationSuccess = true; // Replace with your API call result
          //   if (otpVerificationSuccess) {
          //     setIsOTPModalOpen(false);
          //     setIsConfirmationModalOpen(true);
          //   } else {
          //     toast.error("OTP verification failed. Please try again.");
          //   }
          // } else {
          //   toast.error("Wrong username or password");
          // }

          // setIsSubmitting(false);
          // actions.setSubmitting(false);
          // actions.resetForm();
        }
      } catch (error) {
        alert("somthing went wrong....");
        console.error("Error:", error);
        setIsSubmitting(false);
        actions.setSubmitting(false);
        actions.resetForm();
      }
    },
  });

  const handleConfirmation = async () => {
    setIsSubmitting(true);
    // Perform account deletion API call
    const accountDeletionSuccess = true; // Replace with your API call result
    if (accountDeletionSuccess) {
      toast.success("Your account deleted successfully");
      setIsConfirmationModalOpen(false);
    } else {
      toast.error("Failed to delete account. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      <Modal
        show={isFirstModalOpen}
        onHide={() => {
          setIsFirstModalOpen(false);
        }}
        style={{ marginTop: "20vh" }}
      >
        <Modal.Header closeButton>
          <Modal.Title className={styles.title}>
            manaChoice
            <span>
              <img src={leafImag} alt="leafImage" className={styles.leafImag} />
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter your Username/Email"
              className={`form-control mt-2 mb-2 ${styles.form_input}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-danger">{formik.errors.username}</div>
            )}

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={`form-control mt-2 mb-2 ${styles.form_input}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}

            {isOTPModalOpen && (
              <>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  className={`form-control mt-2 mb-2 ${styles.form_input}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.otp}
                />
                {formik.touched.otp && formik.errors.otp && (
                  <div className="text-danger">{formik.errors.otp}</div>
                )}
              </>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting || isSubmitting}
          >
            {formik.isSubmitting || isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Modal.Footer>
      </Modal>

      {isConfirmationModalOpen && (
        <Modal
          show={isConfirmationModalOpen}
          onHide={() => setIsConfirmationModalOpen(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete account?</p>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-primary"
              onClick={handleConfirmation}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Deleting..." : "Yes"}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsConfirmationModalOpen(false)}
            >
              No
            </button>
          </Modal.Footer>
        </Modal>
      )}

      <button
        onClick={() => setIsFirstModalOpen(true)}
        className={styles.account}
      >
        Account
      </button>
    </div>
  );
};

export default AccountModal;
