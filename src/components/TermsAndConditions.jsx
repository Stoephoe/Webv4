import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Terms &amp; Policy
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Terms and Policy
            </h3>
            <p>
              Welcome to my Portfolio Website. By accessing or using this Website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms and conditions, please do not use this Website.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              1. Intellectual Property
            </h5>
            <p>
              All content on this Website, including but not limited to text, graphics, logos, images, audio clips, and software, is my property and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify any content from this Website without my prior written permission.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              2. Portfolio Content
            </h5>
            <p>
              The portfolio projects showcased on this Website are my work. All rights to these projects, including the intellectual property rights, are owned by me. You may not use, reproduce, or distribute these projects without my prior written permission.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              3. Privacy Policy
            </h5>
            <p>
              Please review my Privacy Policy to understand how I collect, use, and protect your personal information when you visit this Website.
            </p>
            <h5 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              4. User-Generated Content
            </h5>
            <p>
              If you submit any content, comments, or feedback to this Website, you grant me a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content worldwide.
            </p>
            <h5 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              5. Links to Third-Party Websites
            </h5>
            <p>
              This Website may contain links to third-party websites for your convenience. I am not responsible for the content or practices of these websites and do not endorse or make any representations about them. Your use of third-party websites is at your own risk.
            </p>
            <h5 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              6. Limitation of Liability
            </h5>
            <p>
              I shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this Website, including but not limited to lost profits, business interruption, or loss of data.
            </p>
            <h5 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              7. Changes to Terms and Policy
            </h5>
            <p>
              I reserve the right to modify, amend, or update these terms and policies at any time without prior notice. It is your responsibility to review these terms periodically for changes.
            </p>
            <h5 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              8. Contact Information
            </h5>
            <p>
              If you have any questions or concerns regarding these terms and policies, please contact me at stefvandermeer@outlook.com.
            </p> 
            <p>
              By using this Website, you acknowledge that you have read, understood, and agreed to these terms and policies. If you do not agree with any part of these terms, please do not use this Website.
            </p>
            <p>
              Last updated: 09/01/2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
