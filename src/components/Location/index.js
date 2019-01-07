import React, { Component } from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22378.250200937404!2d-73.61736371233351!3d45.484280337390445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a51db732db3%3A0xe3a56d3801423fd8!2sTravelodge+by+Wyndham+Montreal+Centre!5e0!3m2!1sen!2sca!4v1546033057970"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
