import React from 'react';
import { Button } from 'flowbite-react'; // Ensure flowbite-react is installed


const Download = () => {

  const downloadResume = () => {
    // Trigger a download programmatically
    const link = document.createElement("a");
    link.href = "pranavamuthu.pdf"; // The path to your PDF file in the public folder
    link.download = "resuma.pdf"; // The filename for the downloaded file
    link.click();
  };


  return (
   
      <Button onClick={downloadResume} className='bg-gradient-to-r from-teal-400 to-blue-500'>
        Download CV
      </Button>
    
  );
};

export default Download;
