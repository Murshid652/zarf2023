import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.aboutSec}>
      <div className={classes.about}>
        <div className={classes.details}>
          <h3 className={classes.heading}>About</h3>
          <h2 className={classes.heading1}>ZARF 23</h2>
          <p className={classes.para}>
          ‘ZARF’ is a cultural fest organised by the
          students of Zakir Husain College of Engineering
          and Technology, AMU. One of Aligarh Muslim
          University's largest festivals, according to
          popular opinion, will be organized this year
          after the pandemic. Along with cultural
          programs, it also features sporting, technical,
          and literary events. The students of Aligarh
          Muslim University as well as the delegates from
          various departments will grace the event with
          their presence.
          </p>

          <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            like Cultural, Technical, Literary and Sports hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, makes ZARF
            one of the most unique college fest of the country.
          </p>
        </div>

        <div className={classes.composition}>
          <img
            className={classes.images}
            src="assets/About/ellipse.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
