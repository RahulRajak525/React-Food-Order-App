import React from "react";
import classes from "./Modal.module.css";
import { Fragment } from "react";
import * as ReactDOM from "react-dom";
// var ReactDOM = require("react-dom");




const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlays>{props.children} </ModalOverlays>, portalElement)}
    </Fragment>
  );
};

export default Modal;
