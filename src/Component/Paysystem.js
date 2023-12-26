import React, { useEffect, useState } from 'react';

const Paysystem = () => {
  const [qrCodePayload, setQrCodePayload] = useState('');

  useEffect(() => {
    const generateQrCodePayload = async () => {
      try {
        // Import the 'promptparse' library
        const promptparse = await import('promptparse');

        // Generate QR code payload
        const payload = promptparse.generate.truemoney({
          mobileNo: '0661651693',
          amount: 10.00,
          message: 'Hello World!'
        });

        // Set the QR code payload in state
        setQrCodePayload(payload);
      } catch (error) {
        console.error('Error loading or generating QR code payload:', error);
      }
    };

    // Call the function to generate QR code payload when the component mounts
    generateQrCodePayload();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (<>

        <div className='container'> 
        <br/><br/>
            <div className='card'>
                <div className='card-body'>
                    {qrCodePayload && (
                        <img
                        src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${qrCodePayload}`}
                        alt="QR Code"
                        />
                    )}
                </div>
            </div> 
            <br/>
            <a className='btn btn-primary m-1' href='/'>Old version</a><br/>
        </div>
     </>
  );
};

export default Paysystem;
