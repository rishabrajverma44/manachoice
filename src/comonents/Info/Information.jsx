import React, { useState } from "react";

const Information = () => {
  const content = `
    <p>This Privacy Policy explains how Manachoice ("we", "us", or "our") collects, uses, and discloses information about you when you use our mobile application (the "App") and the services offered through the App.</p>
    <h2>Information We Collect</h2>
    <ul>
      <li>When you register as a seller or buyer on our App, we collect information such as your name, phone number, and address.</li>
      <li>If you choose to make a purchase through the App, we collect information necessary to complete the transaction, including your order details and payment information.</li>
      <li>Usage Information: We may also collect any other information you choose to provide to us, such as feedback or comments.</li>
      <li>Camera Permission: With your consent, we may access your device's camera to enable features such as uploading photos of items for sale.</li>
    </ul>
    <h2>How We Use Your Information</h2>
    <p>We use the information we collect for the following purposes:</p>
    <ul>
      <li>To provide and improve the App and our services.</li>
      <li>To process transactions and fulfill orders.</li>
      <li>To communicate with you, including responding to your inquiries and providing customer support.</li>
      <li>To personalize your experience on the App.</li>
      <li>To detect and prevent fraud and abuse.</li>
      <li>To enable features such as accessing your device's camera for photo uploads.</li>
    </ul>
    <h2>How We Share Your Information</h2>
    <p>We may share your information with the following parties:</p>
    <ul>
      <li>Sellers: We may share your information with sellers on the App to facilitate transactions and fulfill orders.</li>
      <li>Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, order fulfillment, and analytics.</li>
      <li>Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
    </ul>
    <h2>Your Choices</h2>
    <p>You may choose not to provide certain information, but this may limit your ability to use certain features of the App. You can also control how we collect and use certain types of information through your device settings and preferences.</p>
    <h2>Data Security</h2>
    <p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
    <h2>Changes to this Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or through the App.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@manaChoice1493@gmail.com">contact@manaChoice1493@gmail.com</a>.</p>
  `;
  const [showPrivacy, setShowPrivacy] = useState(false);

  const toggleContent = () => {
    setShowPrivacy(!showPrivacy);
  };
  return (
    <div style={{ background: "rgb(12, 35, 35)" }}>
      <div className="container p-4">
        <div class="card border-secondary mb-3">
          <div class="card-header">
            <h4>What We Do</h4>
          </div>
          <div class="card-body ">
            <p class="card-text">
              We offer high-quality organic vegetables, fruits, food items, and
              groceries to our customers. At manaChoice, we are dedicated to
              building a better future!
            </p>
          </div>
        </div>

        <div class="card border-secondary mb-3">
          <div class="card-header">
            <h4>About Us</h4>
          </div>
          <div class="card-body ">
            <p class="card-text">
              We are a team of passionate individuals dedicated to promoting
              organic farming. manaChoice is a startup company registered in
              Pakala, India. Utilizing emerging technologies, including web and
              mobile app-based services, we aim to transform the food industry.
              Initially, our goal is to connect not only vegetable lovers, but
              also fruit enthusiasts, and those seeking groceries, mineral
              water, and milk, on one platform to deliver freshly made, hygienic
              produce and products to the community.
            </p>
          </div>
        </div>

        <div class="card border-secondary mb-3">
          <div class="card-header">
            <h4>Privacy Policy</h4>
          </div>
          <div class="card-body ">
            <p class="card-text">
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
                  className="btn btn-link"
                >
                  See More
                </button>
              ) : (
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="btn btn-link"
                >
                  See Less
                </button>
              )}
            </p>
          </div>
        </div>

        <div class="card border-secondary mb-3">
          <div class="card-header">
            <h4>Contact Us</h4>
          </div>
          <div class="card-body ">
            <p class="card-text">
              If you have any questions or inquiries, feel free to reach out to
              us.
            </p>
          </div>
        </div>

        <div class="card border-secondary mb-3 mt-2">
          <div class="card-header">
            <h4>Careers</h4>
          </div>
          <div class="card-body ">
            <p class="card-text">
              Join our team and contribute to our mission of sustainable
              agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
