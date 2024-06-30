import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import styles from "./Modal.module.css";
import leafImag from "../utils/leaf.png";
import { toast } from "react-toastify";
import axios from "axios";
import OtpInput from "otp-input-react";

const AccountModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mobileValidationSchema = Yup.object().shape({
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile is required"),
  });

  const otpValidationSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
  });

  const handleMobileSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      const payload = { mobile: values.mobile };
      const response = await axios.post(
        "https://manachoice.com/api/v1/send-otp",
        payload
      );
      if (response.data.status === 200) {
        localStorage.setItem("mobile", response.data.mobile);
        toast.success("OTP sent to your mobile");
        setCurrentStep(2);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.responseMessage);
        actions.setFieldError("mobile", error.response.data.responseMessage);
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Error:", error);
      }
    } finally {
      setIsSubmitting(false);
      actions.setSubmitting(false);
    }
  };

  const handleOtpSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      const mobile = localStorage.getItem("mobile");
      const payload = { otp: values.otp, mobile };
      const response = await axios.post(
        "https://manachoice.com/api/v1/verify-otp",
        payload
      );

      if (response.data.status === 200) {
        toast.success(response.data.responseMessage);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);
        setCurrentStep(3);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.responseMessage);
        actions.setFieldError("otp", error.response.data.responseMessage);
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Error:", error);
      }
    } finally {
      setIsSubmitting(false);
      actions.setSubmitting(false);
    }
  };

  const handleConfirmation = async () => {
    setIsSubmitting(true);
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://manachoice.com/api/v1/accDel",
        { userId: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
          },
        }
      );
      if (response.data.status === 200) {
        toast.success("Your account has been deleted successfully");
        setCurrentStep(1);
        setIsFirstModalOpen(false);
      } else {
        toast.error("Failed to delete account. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNo = () => {
    toast.info("Your Account is not deleted");
    setIsFirstModalOpen(false);
  };

  const formikMobile = useFormik({
    initialValues: { mobile: "" },
    validationSchema: mobileValidationSchema,
    onSubmit: handleMobileSubmit,
  });

  const formikOtp = useFormik({
    initialValues: { otp: "" },
    validationSchema: otpValidationSchema,
    onSubmit: handleOtpSubmit,
  });

  return (
    <div>
      <Modal
        show={isFirstModalOpen && currentStep === 1}
        onHide={() => setIsFirstModalOpen(false)}
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
          <form onSubmit={formikMobile.handleSubmit}>
            <input
              type="number"
              name="mobile"
              placeholder="Enter your mobile"
              className={`form-control mt-2 mb-2 ${styles.form_input}`}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  formikMobile.handleChange(e);
                }
              }}
              onBlur={formikMobile.handleBlur}
              value={formikMobile.values.mobile}
            />
            {formikMobile.touched.mobile && formikMobile.errors.mobile && (
              <div className="text-danger">{formikMobile.errors.mobile}</div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={formikMobile.isSubmitting || isSubmitting}
            >
              {formikMobile.isSubmitting || isSubmitting
                ? "Submitting..."
                : "Submit"}
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={isFirstModalOpen && currentStep === 2}
        onHide={() => setIsFirstModalOpen(false)}
        style={{ marginTop: "20vh" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Enter OTP
            <span>
              <img src={leafImag} alt="leafImage" className={styles.leafImag} />
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formikOtp.handleSubmit} className="text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <OtpInput
                value={formikOtp.values.otp}
                onChange={(otp) => formikOtp.setFieldValue("otp", otp)}
                isInputNum={true}
              />
            </div>
            {formikOtp.touched.otp && formikOtp.errors.otp && (
              <div className="text-danger mb-3">{formikOtp.errors.otp}</div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={formikOtp.isSubmitting || isSubmitting}
            >
              {formikOtp.isSubmitting || isSubmitting
                ? "Submitting..."
                : "Submit"}
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={isFirstModalOpen && currentStep === 3}
        onHide={() => setIsFirstModalOpen(false)}
        style={{ marginTop: "20vh" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Confirmation
            <span>
              <img src={leafImag} alt="leafImage" className={styles.leafImag} />
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete your account?</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={handleConfirmation}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Deleting..." : "Yes"}
          </button>
          <button className="btn btn-secondary" onClick={handleNo}>
            No
          </button>
        </Modal.Footer>
      </Modal>

      <button
        onClick={() => {
          setIsFirstModalOpen(true);
          setCurrentStep(1);
          formikMobile.resetForm();
          formikOtp.resetForm();
        }}
        className={styles.account}
      >
        Account
      </button>
    </div>
  );
};

export default AccountModal;
