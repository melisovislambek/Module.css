import React from 'react'
import classes from './Modal.module.css'
import Card from '../Button/Card'


const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick} >
      <Card className={classes.modal}>
        <header className={classes.header}>
            <h2> {props.title} </h2>
        </header>
        <main className={classes.content}>
            <p>{props.message}</p>
        </main>
            <footer className={classes.actions}>
                <button onClick={props.onClick}> Ok</button>
            </footer>
      </Card>

    </div>
  )
}

export default Modal