import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.499364031623!2d85.36174172602033!3d27.640017860316277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb10b7a75bb1f7%3A0x925ea0a3d0249d5b!2sBishnudol+Mart!5e0!3m2!1sen!2snp!4v1548326137935"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="map"
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
