/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Cart} from './cart'
export {default as CartGuest} from './cart-guest'
export {default as Categories} from './categories'
export {default as FeaturedProducts} from './featured-products'
export {default as Home} from './home'
export {default as Footer} from './footer'
export {default as Navbar} from './navbar'
export {default as OrderHistory} from './order-history'
export {default as Products} from './products'
export {default as SingleProduct} from './single-product'
export {default as UserHome} from './user-home'
export {default as NewUserEntry} from './new-user-entry'
export {default as SignUpSuccess} from './sign-up-success'
export {default as ThankYou} from './thank-you'
export {default as SignUpForm} from './sign-up-form'
export {default as CheckoutForm} from './checkout-form'
export {default as Stripe} from './stripe'

export {Login, Signup} from './auth-form'
