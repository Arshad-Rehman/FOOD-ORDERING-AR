import {Fragment} from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeadersCartButton from "./HeadersCartButton";
const Headers = (props) =>{

return <Fragment>
    <header className={classes.header}>
<h1>THE ROYAL KICHEN</h1>

<HeadersCartButton onClick={props.onShowCart}/>



    </header>
    <div className={classes['main-image']}>
<img src={mealsImage} alt="A table full of deliciou food"/>
    </div>
    </Fragment>
}
export default Headers;