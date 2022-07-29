import { useRef ,useState} from 'react';
import classes from './CheckOut.module.css';

const IsEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length === 5;
const Checkout = (props) => {
const [formInputValidity,setFormInputValidity]=useState({
    name: true,
    street:true,
    city: true,
    postalcode: true
});

const nameInputRef=useRef();
const streetInputRef=useRef();
const postalInputRef=useRef();
const cityInputRef=useRef();



  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enterCity = cityInputRef.current.value;

    const enterNameIsValid = !IsEmpty(enteredName);
    const enterStreetIsValid = !IsEmpty(enteredStreet);
    const enterPostalIsValid = !isFiveChar(enteredPostal);
    const enterCityIsValid = !IsEmpty(enterCity);
 
setFormInputValidity({
    name: enterNameIsValid,
    street: enterStreetIsValid,
    postalcode: enterPostalIsValid,
    city: enterCityIsValid
});


const formIsValid = 
enterNameIsValid && 
enterStreetIsValid &&
enterPostalIsValid &&
enterCityIsValid;

if(!formIsValid){
    return;
}
props.onConfirm({
    name:enteredName,
    street: enteredStreet,
    city:enterCity,
    postalcode:enteredPostal
});
};

const nameControlClasses =  `${classes.control} ${
    formInputValidity.name ? '': classes.invalid
}`

const streetControlClasses =  `${classes.control} ${
    formInputValidity.street ? '': classes.invalid
}`

const postalcodeControlClasses =  `${classes.control} ${
    formInputValidity.postalcode ? '': classes.invalid
}`

const cityControlClasses =  `${classes.control} ${
    formInputValidity.city ? '': classes.invalid
}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name && <p>Please enter a valid name !</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputValidity.street && <p>Please enter a valid Street !</p>}
      </div>

      <div className={postalcodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputValidity.postalcode && <p>Please enter a valid postal code</p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor='City'>City</label>
        <input type='text' id='City' ref={cityInputRef}/>
        {!formInputValidity.city && <p>Please enter a valid City !</p>}
      </div>

      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;