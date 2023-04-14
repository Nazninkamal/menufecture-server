

const documentPDF = (data) => {
  const today = new Date().toLocaleDateString();


  return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body  style="padding: 0 8px;">
       <main>
          <div style="text-align: center;">
          <div style="display:flex; justify-content:center;">
          <img style="width: 150px; height: 100%; margin: 1rem;" src='https://i.ibb.co/SdQ9ytQ/logo-no-background.png' alt="">
           
           </div>
           <h5 >Date: ${today}</h5>
          </div>
           
          <div style="display:flex; justify-content:space-between;">

         
           <h5>Quote Number: ${data?._id}</h5>
         
           <h5>Ready for ${data?.user?.company} company</h5>  
          </div>
   
          <div  style="border: green 1px dotted;">
            <div  style="display:flex; justify-content:space-between;">
              <div style="display: flex;">
               <img style="width: 150px; height: 150px; margin: 1rem;" src='https://i.ibb.co/3S3DykD/img-For-PDF.jpg' alt="">
                 <div style="line-height: 5px; margin-top: 1rem;">
               <p style="font-size:small;">  ${data?.quoteTitle}</p>
               <p style="font-size:small;">Material: ${data?.material} </p>
               <p style="font-size:small;">Resolution: ${data?.resolution}</p>
               <p style="font-size:small;">Finishing: ${data?.finish} </p>
               <p style="font-size:small;">Orientation: ${data?.orientation}</p>
               
                 </div>
              </div>
   
   
            <div style="border: green 1px dotted; margin: 1rem; padding: 1rem 2rem; line-height: 8px;">
               <p style="font-size: small;">Quantity: ${data?.quantity}</p>
               <p style="font-size: small;">Price: ${data?.status === "approved" &&
      data?.profit ?
      data?.price + data?.profit :
      "N/A"}€  </p>
               <p style="font-size: small;">Es. Tax:${data?.status === "approved" &&
      data?.profit ?
      '20%' :
      "N/A"}</p>
               <p style="font-size: small;">Shipping:${data?.status === "approved" &&
      data?.profit ?
      '30€' :
      "N/A"}</p>

               <p style="font-size: small;">Sub Total:${data?.status === "approved" &&
      data?.profit ?
      (data?.price + data?.profit) + (data?.price + data?.profit) * (20 / 100) + 30 :
      "N/A"}€</p>
     

      
               <p style="font-size: small;">Status: ${data?.status}</p>
               <p style="font-size: small;">Delivery will take:${data?.deliveryDate} days</p>
   
            </div>
         
         </div>
         <hr>
           <div style="text-align: center; line-height: 5px;">
            <h5>Want you update quote?</h5>
            <p>Please Return to the configuration page and update</p>
           </div>
         <hr>
   
          <div style="display: grid;grid-template-columns: auto auto; gap: 1rem; margin: 1rem;">
            <div style="border: green 1px dotted; padding: 1rem;">
               <h5 style="font-size: small;">Shipping details</h5>
               <p style="font-size: small;">Full name: ${data?.user?.role !== 'supplier' ? data?.user?.fullName : "N/A"}</p>
               <p style="font-size: small;">Email:  ${data?.user?.role !== 'supplier' ? data?.user?.email : "N/A"} </p>
               <p style="font-size: small;">Company:  ${data?.user?.role !== 'supplier' ? data?.user?.company : "N/A"}</p>
               <p style="font-size: small;">Phone:  ${data?.user?.role !== 'supplier' ? data?.user?.phoneNumber : "N/A"}</p>
               <p style="font-size: small;">Country:  ${data?.user?.role !== 'supplier' ? data?.user?.country : "N/A"}</p>
               <p style="font-size: small;">Language:  ${data?.user?.role !== 'supplier' ? data?.user?.language : "N/A"}</p>
               <p style="font-size: small;">Postal Code:  ${data?.user?.role !== 'supplier' ? data?.user?.postalCode : "N/A"}</p>
               
            </div>
   
   
            <div style="border: green 1px dotted; text-align: center;padding-top: 3rem;">
               <h5>Order Summery</h5>
               <p style="font-size: small;">Your parts need to your attention </p>
               <p style="font-size: small;">Please go to configure page and checkout</p>
                              
            </div>
          </div>
          </div>
           
          <div style="line-height: 5px; text-align: center; margin: 1.5rem 0 1.5rem 0;">
            <p style="font-size: small;">Thank you for the opportunity to quote your parts</p>
            <p style="font-size: small;">Contact Customer Service at (87 7 ) 47 9-3680 or customerservice@protolabs.com</p>
            <!-- <p>JSON Manufecturing Company, 5540 Pioneer Creek Dr. Maple Plain, MN 55359 United State</p> -->
          </div>
       </main>
   </body>
   </html>
    `;
};

module.exports = documentPDF;