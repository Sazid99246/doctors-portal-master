import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-base-100 text-neutral">
        <div>
          <span class="footer-title text-[#939393]">Services</span>
          <a href="/" class="link link-hover">
            Emergency Checkup
          </a>
          <a href="/" class="link link-hover">
            Monthly Checkup
          </a>
          <a href="/" class="link link-hover">
            Weekly Checkup
          </a>
          <a href="/" class="link link-hover">
            Deep Checkup
          </a>
        </div>
        <div>
          <span class="footer-title text-[#939393]">Oral Health</span>
          <a href="/" class="link link-hover">
            Flouride Treatment
          </a>
          <a href="/" class="link link-hover">
            Cavity Filling
          </a>
          <a href="/" class="link link-hover">
            Teeth Whitening
          </a>
        </div>
        <div>
          <span class="footer-title text-[#939393]">Our Address</span>
          <a href="/" class="link link-hover">
            New York - 101010 Hudson
          </a>
        </div>
      </footer>
      <footer class="footer footer-center p-4 bg-base-100">
        <div>
          <p>Copyright 2022 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
