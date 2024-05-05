import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import styles from "./Modal.module.css";
import leafImag from "../utils/leaf.png";
import { toast } from "react-toastify";

const AccountModal = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username/Email is required"),
    password: Yup.string().required("Password is required"),
    mnum: Yup.string()
      .test(
        "is-ten-digits",
        "Mobile number should ideally be 10 digits",
        function (value) {
          if (!value) return true;
          return value.length <= 10;
        }
      )
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      mnum: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (values.username === "ram" && values.password === "123") {
        setIsConfirmationModalOpen(true);
        setIsFirstModalOpen(false);
      } else {
        setIsConfirmationModalOpen(false);
        toast.error("Wrong username or password");
      }
      actions.setSubmitting(false);
      actions.resetForm();
    },
  });

  const handleConfirmation = () => {
    setIsConfirmationModalOpen(false);
    toast.success("Your account deleted successfully");
  };

  return (
    <div>
      <Modal
        show={isFirstModalOpen}
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

            <input
              type="number"
              name="mnum"
              placeholder="Enter your mobile number"
              className={`form-control mt-2 mb-2 ${styles.form_input}`}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values.mnum}
            />
            {formik.touched.mnum && formik.errors.mnum && (
              <div className="text-danger">{formik.errors.mnum}</div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
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
            <button className="btn btn-primary" onClick={handleConfirmation}>
              Yes
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
