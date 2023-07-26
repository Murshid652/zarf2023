import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <ul className={classes.dropdown}>
      <li className={classes.drops}><Link to="/events/cultural" onClick={props.click} className={classes.links}>Culturals</Link></li>
            <li className={classes.drops}><Link to="/events/technical" onClick={props.click} className={classes.links}>Technical</Link></li>
            <li className={classes.drops}><Link to="/events/games" onClick={props.click} className={classes.links}>Sports</Link></li>
            <li className={classes.drops}><Link to="/events/hackathon" onClick={props.click} className={classes.links}>Literary</Link></li>
            {/* <li className={classes.drops}><Link to="/events/talk" onClick={props.click} className={classes.links}>Fun Events</Link></li> */}
    </ul>
  );
};

export default Dropdown;
