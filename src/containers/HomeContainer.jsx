import Home from "../components/Home";
import { addToCart,removeToCart } from "../services/actions/action";
import { connect } from "react-redux";

const mapStateToProps=state=>({
     data:state.cartItem
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);