/* eslint-disable max-len */
import React from 'react';
import './style.scss';
import TuneIcon from '@material-ui/icons/Tune';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CreditCardIcon from '@material-ui/icons/CreditCard';

function PracticeAdvice() {
  return (
    <section className="practice__section">
      <div className="practice__container">
        <div className="practice__header">
          <h5>Practice Advice</h5>
          <h1>Make online education accesible</h1>
          <p>
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="practice-option__container">
          <div className="practice-option__block">
            <div className="icon__box icon__box--blue">
              <SentimentSatisfiedIcon fontSize="large" className="sentiment__icon" />
            </div>
            <h5>Evaluation time</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="practice-option__block">
            <div className="icon__box icon__box--green">
              <DoneAllIcon fontSize="large" className="done__icon" />
            </div>
            <h5>training Courses</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="practice-option__block">
            <div className="icon__box icon__box--grey">
              <CreditCardIcon fontSize="large" className="credit-card__icon" />
            </div>
            <h5>Evaluation time</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="practice-option__block">
            <div className="icon__box icon__box--pink">
              <TuneIcon fontSize="large" className="tune__icon" />
            </div>
            <h5>Market Analisys</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticeAdvice;
