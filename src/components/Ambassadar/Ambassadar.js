import classes from "./Ambassadar.module.css";
// import Mobile from "./Mobile.svg";
import Form from "./Form/Form";

import { useState } from "react";
import Background from "../../UI/Background";
import { fontSize } from "@mui/system";

const Ambassadar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="ambassador" className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Galley Fiesta ZARF 23</h3>
          <p className={classes.para}>
          Galley Fiesta has become an important event on the food calendar for the Engineering Faculty students and the local community. It provides an opportunity for students to experience the local culture and cuisine, and to support local businesses. The festival also serves as a platform for local businesses to showcase their culinary skills and to reach out to a wider audience.
          </p>
          <br/>
          <p className={classes.incharge}>Stalls Incharge - Mohd Adeeb Khan</p>
          <pre className={classes.incharge}>                  8868070850</pre>

          {/* <button className={classes.btn} onClick={() => setOpen(!open)}>
            Register Now !
          </button> */}
        </div>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Ambassador/fiesta.png"
            alt="Ambassador"
          />
        </div>
      </Background>

      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default Ambassadar;
