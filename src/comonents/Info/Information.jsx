import React, { useState } from "react";
import styles from "./Information.module.css";

const Information = () => {
  const content = `
    <p class="card-text fst-italic fs-6 fw-bold"> &nbsp;&nbsp;&nbsp;&nbsp;This Privacy Policy explains how Manachoice ("we", "us", or "our") collects, uses, and discloses information about you when you use our mobile application (the "App") and the services offered through the App.</p>
    <h4>Information We Collect</h4>
    <ul>
      👉 When you register as a seller or buyer on our App, we collect information such as your name, phone number, and address.<br>
      👉 If you choose to make a purchase through the App, we collect information necessary to complete the transaction, including your order details and payment information.<br>
      👉 Usage Information: We may also collect any other information you choose to provide to us, such as feedback or comments.<br>
      👉 Camera Permission: With your consent, we may access your device's camera to enable features such as uploading photos of items for sale.<br>
    </ul>
    <h4> &nbsp;&nbsp;&nbsp;&nbsp;How We Use Your Information</h4>
    <h3>We use the information we collect for the following purposes:</h3>
    <ul>
    👉 To provide and improve the App and our services.<br>
    👉 To process transactions and fulfill orders.<br>
    👉 To communicate with you, including responding to your inquiries and providing customer support.<br>
    👉 To personalize your experience on the App.<br>
    👉 To detect and prevent fraud and abuse.<br>
    👉 To enable features such as accessing your device's camera for photo uploads.<br>
    </ul>
    <h4>How We Share Your Information</h4>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;We may share your information with the following parties:</h3>
    <ul>
    👉 Sellers: We may share your information with sellers on the App to facilitate transactions and fulfill orders.<br>
    👉 Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, order fulfillment, and analytics.<br>
    👉 Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.<br>
    </ul>
    <h3>Your Choices</h3>
    <p class="card-text fst-italic fs-6 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;You may choose not to provide certain information, but this may limit your ability to use certain features of the App. You can also control how we collect and use certain types of information through your device settings and preferences.</p>
    <h3>Data Security</h3>
    <p class="card-text fst-italic fs-6 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
    <h3>Changes to this Privacy Policy</h3>
    <p class="card-text fst-italic fs-6 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or through the App.</p>
    <h3>Contact Us</h3>
    <p class="card-text fst-italic fs-6 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@manaChoice1493@gmail.com">contact@manaChoice1493@gmail.com</a>.</p>
  `;
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className={`${styles.main_img} p-3`}>
      <div className={`${styles.image} border border-3 border-info rounded`}>
        <div className={`p-2 pb-4 ${styles.image_overlay}`}>
          <div class="border-info mb-3 border-2">
            <div class="card-header ">
              <h3 className="fw-bolder">What We Do</h3>
            </div>
            <div class="card-body">
              <p class="card-text fst-italic fs-6 fw-bold">
                &nbsp;&nbsp;&nbsp;&nbsp;We offer high-quality organic
                vegetables, fruits, food items, and groceries to our customers.
                At manaChoice, we are dedicated to building a better future!
              </p>
            </div>
          </div>

          <div class="border-info mb-3 border-2">
            <div class="card-header ">
              <h3 className="fw-bolder">About Us</h3>
            </div>
            <div class="card-body ">
              <p class="card-text fst-italic fs-6 fw-bold">
                &nbsp;&nbsp;&nbsp;&nbsp;We are a team of passionate individuals
                dedicated to promoting organic farming. manaChoice is a startup
                company registered in Pakala, India. Utilizing emerging
                technologies, including web and mobile app-based services, we
                aim to transform the food industry. Initially, our goal is to
                connect not only vegetable lovers, but also fruit enthusiasts,
                and those seeking groceries, mineral water, and milk, on one
                platform to deliver freshly made, hygienic produce and products
                to the community.
              </p>
            </div>
          </div>

          <div class="border-info mb-3 border-2">
            <div class="card-header ">
              <h3 className="fw-bolder">Privacy Policy</h3>
            </div>
            <div class="card-body ">
              <p class="card-text fst-italic fs-6 fw-bold">
                <div
                  dangerouslySetInnerHTML={{
                    __html: !showPrivacy
                      ? content.split("\n").slice(0, 2).join("\n")
                      : content,
                  }}
                />
                {!showPrivacy ? (
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="btn btn-outline-dark"
                  >
                    See More ▼
                  </button>
                ) : (
                  <button
                    onClick={() => setShowPrivacy(false)}
                    className="btn btn-outline-dark"
                  >
                    See Less ▲
                  </button>
                )}
              </p>
            </div>
          </div>

          <div class="border-info mb-3 border-2">
            <div class="card-header ">
              <h3 className="fw-bolder">Contact Us</h3>
            </div>
            <div class="card-body ">
              <p class="card-text fst-italic fs-6 fw-bold">
                &nbsp;&nbsp;&nbsp;&nbsp;If you have any questions or inquiries,
                feel free to reach out to us.
              </p>
            </div>
          </div>

          <div class="border-info mb-3 mt-2 border-2">
            <div class="card-header ">
              <h3 className="fw-bolder">Careers</h3>
            </div>
            <div class="card-body">
              <p class="card-text fst-italic fs-6 fw-bold">
                &nbsp;&nbsp;&nbsp;&nbsp;Join our team and contribute to our
                mission of sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
