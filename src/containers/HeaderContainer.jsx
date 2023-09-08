import Header from "../components/Header";

import { connect } from "react-redux";

const mapStateToProps=state=>({
     data:state.cartItem
})

const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);