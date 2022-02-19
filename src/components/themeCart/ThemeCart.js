import React from "react";
import { Grid } from "@mui/material";
const ThemeCart = () => {
  return (
    <Grid container spacing={2} style={{ padding: "2px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
        (key) => (
          <Grid key={key} item sm={3}>
            <img
              style={{ width: "100%" }}
              src="https://cdn.psdrepo.com/images/2x/free-business-card-mockup-download-g4.jpg"
            />
            <div>
              <span></span>
              <a>Mockup Templates</a>
            </div>
            <h5 style={{ margin: "0" }}>Business Card Mockup</h5>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default ThemeCart;

// import React from "react";
// import { Grid } from "@mui/material";
// import Image from "next/image";
// const ThemeCart = () => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item sm={3}>
//         <Image
//           src="https://cdn.psdrepo.com/images/2x/free-business-card-mockup-download-g4.jpg"
//           width={100}
//         />
//         <div>
//           <span></span>
//           <a>Mockup Templates</a>
//         </div>
//         <h2>Business Card Mockup</h2>
//       </Grid>
//     </Grid>
//   );
// };

// export default ThemeCart;
