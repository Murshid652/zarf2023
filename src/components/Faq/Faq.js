import { useState } from "react"
import classes from "./Faq.module.css"

const questions = [
    {
        question: "How can i participate in ZARF 23?",
        answer: "Anyone can participate by registering through our portal for different events by visiting our Events section."
    },
    {
        question: "What are the dates of ZARF 23?",
        answer: "March 3, 4 and 5. Events will happen from 9:00 am to 10:00 pm"
    },
    {
        question: "What is the entry fees for ZARF 23?",
        answer: "No, there is no entry fees."
    },
    {
        question: "Will be there any online events as well?",
        answer: "Yes, there will be a bunch of online events."
    },    
]

const Faq = () => {

    const [clicked, setClicked] = useState(null)

    const toggle = (i) => {
        if(clicked === i) {
            return setClicked(null)
        }

        setClicked(i)
    }

  return (
    <section className={classes.faqSection}>
    <div className={classes.heading}>
        FAQ
    </div>
        <div className={classes.faq}>

        {questions.map((ques, i) => {
           return <div className={classes.single} onClick={() => toggle(i)}>
                <div className={classes.question}>{ques.question}</div>
                <div className={`${clicked === i ? classes.answer : classes.noAnswer}`}>{ques.answer}</div>
                <span className={classes.btn}>+</span>
            </div>
        })}

            {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
        </div>
    </section>
  )
}

export default Faq