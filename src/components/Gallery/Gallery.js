import classes from "./Gallery.module.css"
import React from 'react'
import Background from "../../UI/Background"
import { Link } from "react-router-dom"

const Gallery = () => {
  return (
    <section className={classes.gallery}>
         <Background className={classes.eventBox}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/GalleryImages/gallery_img.jpeg"
            alt="Gallery"
          />
        </div>

        <div className={classes.headingBox}>
          <h3 className={classes.heading}>ZARF - Corridor</h3>
          <p className={classes.para}>
          A time Capsule that holds the memories of the past ZARF. Those seniors I found on LinkedIn don’t give the same vibes here. Before you start living the hectic life of corporate businesses and Government Services, don’t forget to save your memories on the corridor. So when you look back, you can smile and laugh at yourself.
          </p>

          <Link
            to="/gallery"
            className={classes.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            View our Gallery !
          </Link>
        </div>
      </Background>
    </section>
  )
}

export default Gallery