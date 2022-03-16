import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="Digital City Zamboanga Website" content={title} />
      </Helmet>
    </div>
  );
};

export default Meta;
