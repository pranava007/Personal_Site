import React from 'react';
import { Button } from 'flowbite-react'; // Ensure flowbite-react is installed

const Download = () => {

  const downloadResume = () =>{
    const link = document.createElement("a")
    link.href="/pranavamuth.pdf"
    link.download="pranavamuhtu_resume.pdf"
    link.click()
  }

  return (
    <Button onClick={downloadResume} className="bg-gradient-to-r from-teal-400 to-blue-500">
      Download CV
    </Button>
  );
};

export default Download;
