import * as React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const FormSuccess = () => {
  return (
    <main style={pageStyles}>
      <title>Form Submitted</title>
      <h1 style={headingStyles}>Form Submitted</h1>
      <p style={paragraphStyles}>
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
};

export default FormSuccess;
