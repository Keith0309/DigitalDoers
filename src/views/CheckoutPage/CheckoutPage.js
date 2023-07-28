import React from 'react'
import "./CheckoutPage.css"
import DefaultLayout from '../../components/Layout/DefaultLayout/DefaultLayout'
import CheckoutContainer from './CheckoutContainer'

const CheckoutPage = () => {
  return (
    <DefaultLayout>
      <CheckoutContainer />
    </DefaultLayout>
  )
}

export default CheckoutPage