import classes from "./Events.module.css";
import Background from "../../UI/Background";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className={classes.events}>
      <Background className={classes.eventBox}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Ambassador/event.svg"
            alt="Ambassador"
          />
        </div>

        <div className={classes.headingBox}>
          <h3 className={classes.heading}>ZARF 23 Events</h3>
          <p className={classes.para}>
          The programme includes a variety of activities, including cultural, technical, sports and literary events. These events significantly increases our motivation & creativity and creates an aura of technological innovation among the new .
          </p>

          <Link
            to="/events"
            className={classes.btn} 
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore our events !
          </Link>
        </div>
      </Background>
    </section>
  );
};

export default Events;
