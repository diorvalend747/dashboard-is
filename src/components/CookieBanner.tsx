import { useState } from 'react'

const CookieBanner = (): any => {
   const [cookie, setCookie] = useState<string>("cookies-container")

   const handleCookie = (): any => {
      document.cookie = "Cookie=cookie1234; max-age=" + 120;

      if (document.cookie) {
         setCookie("cookies-container-hide")
      }
   };

   return (
      <div className={ cookie }>
         <img src="info.svg" alt="info" />
         <h4>This website uses cookies</h4>
         <button className="btn" onClick={handleCookie}>OK</button>
      </div>
   )
}

export default CookieBanner;
