import React, { useState } from "react";
import styles from "./Modal.module.css";
import leafImag from "../utils/leaf.png";

const PrivacyPolicy = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className={styles.account}>
        Privacy Policy
      </button>

      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div
            className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${styles.model}`}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">
                  <span>
                    <img
                      src={leafImag}
                      alt="leafImage"
                      className={styles.leafImag}
                    />
                  </span>
                  <span style={{ color: "rgb(38, 88, 30)" }}>manaChoice</span>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ color: "black" }}>
                <div className="section">
                  <h2>Privacy Policy</h2>
                  <p>
                    This Privacy Policy explains how Manachoice ("we", "us", or
                    "our") collects, uses, and discloses information about you
                    when you use our mobile application (the "App") and the
                    services offered through the App.
                  </p>

                  <div className="policy-section">
                    <h3>Information We Collect</h3>
                    <p>
                      <i className="fas fa-hand-point-right"></i> When you
                      register as a seller or buyer on our App, we collect
                      information such as your name, phone number, and address.
                    </p>
                    <p>
                      <i className="fas fa-hand-point-right"></i> If you choose
                      to make a purchase through the App, we collect information
                      necessary to complete the transaction, including your
                      order details and payment information.
                    </p>
                    <p>
                      <i className="fas fa-hand-point-right"></i> Usage
                      Information: We may also collect any other information you
                      choose to provide to us, such as feedback or comments.
                    </p>
                    <p>
                      <i className="fas fa-hand-point-right"></i> Camera
                      Permission: With your consent, we may access your device's
                      camera to enable features such as uploading photos of
                      items for sale.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>How We Use Your Information</h3>
                    <p>To provide and improve the App and our services.</p>
                    <p>To process transactions and fulfill orders.</p>
                    <p>
                      To communicate with you, including responding to your
                      inquiries and providing customer support.
                    </p>
                    <p>To personalize your experience on the App.</p>
                    <p>To detect and prevent fraud and abuse.</p>
                    <p>
                      To enable features such as accessing your device's camera
                      for photo uploads.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>How We Share Your Information</h3>
                    <p>
                      Sellers: We may share your information with sellers on the
                      App to facilitate transactions and fulfill orders.
                    </p>
                    <p>
                      Service Providers: We may share your information with
                      third-party service providers who perform services on our
                      behalf, such as payment processing, order fulfillment, and
                      analytics.
                    </p>
                    <p>
                      Business Transfers: If we are involved in a merger,
                      acquisition, or sale of assets, your information may be
                      transferred as part of that transaction.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>Your Choices</h3>
                    <p>
                      You may choose not to provide certain information, but
                      this may limit your ability to use certain features of the
                      App. You can also control how we collect and use certain
                      types of information through your device settings and
                      preferences.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>Data Security</h3>
                    <p>
                      We take reasonable measures to protect your information
                      from unauthorized access, disclosure, alteration, and
                      destruction. However, no method of transmission over the
                      internet or electronic storage is 100% secure.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>Accessing Your Information</h3>
                    <p>
                      You may access, update, or delete your information by
                      contacting us using the contact information provided
                      below. Please note that we may retain certain information
                      as required by law or for legitimate business purposes.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>Changes to this Privacy Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. If we
                      make material changes to this Privacy Policy, we will
                      notify you by email or through the App.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h3>Contact Us</h3>
                    <p>
                      If you have any questions or concerns about this Privacy
                      Policy, please contact us at{" "}
                      <a href="mailto:contact@manaChoice1493@gmail.com">
                        contact@manaChoice1493@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
