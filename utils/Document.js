

const documentPDF = (data, role) => {
  const today = new Date().toLocaleDateString();

  let additional = data?.additional;

  additional?.includes('https://drive.google.com/') ? additional = `<a href="http://" target="_blank" rel="noopener noreferrer">${additional}</a>` : additional = `<p>${additional}</p>`


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
           
          <div >

         
           <h5>Quote Number: ${data?._id}</h5>
         
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

              ${role === "supplier" ? ` <p style="font-size: small;">Price: ${data?.status === "approved" &&
      data?.profit ?
      data?.price :
      "N/A"}€  </p>` : ` <p style="font-size: small;">Price: ${data?.status === "approved" &&
        data?.profit ?
        data?.price + data?.profit :
        "N/A"}€  </p>`}

    ${role === "supplier" ?
      "" :

      `<div>
      <p style="font-size: small;">Es. Tax: ${data?.status === "approved" &&
        data?.profit ?
        '20%' :
        "N/A"}</p>

               <p style="font-size: small;">Shipping: ${data?.status === "approved" &&
        data?.profit ?
        '30€' :
        "N/A"}</p>

               <p style="font-size: small;">Subtotal: ${data?.status === "approved" &&
        data?.profit ?
        (data?.price + data?.profit) + (data?.price + data?.profit) * (22 / 100) + 30 :
        "N/A"}€</p>
      </div>`
    }

      
               <p style="font-size: small;">Status: ${data?.status}</p>
               <p style="font-size: small;">Delivery will take: ${data?.deliveryDate} days</p>
   
            </div>
         
         </div>
        
         <br/> <br/>
   
          <div style="display: grid;grid-template-columns: auto auto; gap: 1rem; margin: 1rem;">
            <div style="border: green 1px dotted; padding: 1rem;">
            <h5 style="font-size: small;">Shipping details</h5>
          ${role === 'supplier' ?
      `<div style="font-size: small;">
            <p>QTool srl <br/>
            Via Carlo Viola, 78 <br/>
            Pont Saint Martin 11026  <br/>
            (+39) 3801207403  <br/>
            info@qtoolsrl.it
            </p>
      </div>
            `
      :
      `<div>
     
      <p style="font-size: small;">Full name: ${data?.user?.fullName}</p>
      <p style="font-size: small;">Email:  ${data?.user?.email} </p>
      <p style="font-size: small;">Company:  ${data?.user?.company}</p>
      <p style="font-size: small;">Phone:  ${data?.user?.phoneNumber}</p>
      <p style="font-size: small;">Country:  ${data?.user?.country}</p>
      <p style="font-size: small;">Postal Code:  ${data?.user?.postalCode}</p>
    </div>`}
               
            </div>
   
   
            <div style="border: green 1px dotted; text-align: center;padding-top: 3rem;">
               <h5>Additional requests</h5>
          
               <span style="font-size: small;">${additional}</span>
                              
            </div>
          </div>
          </div>
           
          <div style="line-height: 5px; text-align: center; margin: 1.5rem 0 1.5rem 0;">
            <p style="font-size: small;">Contact Customer Service at (+39) 3801207403 or info@qtoolsrl.it</p>
            <!-- <p>JSON Manufacturing Company, 5540 Pioneer Creek Dr. Maple Plain, MN 55359 United State</p> -->
          </div>
       </main>
   </body>
   </html>
    `;
};

module.exports = documentPDF;