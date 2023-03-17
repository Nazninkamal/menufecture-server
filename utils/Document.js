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
           <h1>Goadditive</h1>
           <h5>Date: ${today}</h5>
          </div>
           
          <div style="display:flex; justify-content:space-between;">
           <h5>Quote Number: ${data?._id}</h5>
           <h5>Ready for {dynamic} company</h5>  
          </div>
   
          <div  style="border: green 1px dotted;">
            <div  style="display:flex; justify-content:space-between;">
              <div style="display: flex;">
               <img style="width: 150px; height: 150px; margin: 1rem;" src="" alt="">
                 <div style="line-height: 5px; margin-top: 1rem;">
               <p style="font-size:small;">  ${data?.quoteTitle}</p>
               <p style="font-size:small;">Material: ${data?.material} </p>
               <p style="font-size:small;">Resolution: ${data?.resolution}</p>
               <p style="font-size:small;">Finishing: ${data?.finish} </p>
               <p style="font-size:small;">Orientation: ${data?.orientation}</p>
               
                 </div>
              </div>
   
   
            <div style="border: green 1px dotted; margin: 1rem; padding: 1rem 2rem; line-height: 8px;">
               <h5 style="font-size: small;">Quantity: ${data?.quantity}</h5>
               <h5 style="font-size: small;">Total Price: $ ${data?.price}</h5>
               <h5 style="font-size: small;">Status: ${data?.status}</h5>
               <h5 style="font-size: small;">Delivery will take: 7 days</h5>
   
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
               <p style="font-size: small;">Full name: ${data?.user?.fullName}</p>
               <p style="font-size: small;">Email:  ${data?.user?.email} </p>
               <p style="font-size: small;">Company:  ${data?.user?.company}</p>
               <p style="font-size: small;">Phone:  ${data?.user?.phoneNumber}</p>
               <p style="font-size: small;">Country:  ${data?.user?.country}</p>
               <p style="font-size: small;">Language:  ${data?.user?.language}</p>
               <p style="font-size: small;">Postal Code:  ${data?.user?.postalCode}</p>
               
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