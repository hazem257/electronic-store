'use client'
import React from 'react'
import { Suspense } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/ChekoutForm'
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function Checkout() {
  const searchParams =useSearchParams()
  const options ={
    mode: 'payment',
    currency:'usd',
    amount: searchParams.get('amount')*100
  }
  return (
    <Suspense fallback={<>Loading...</>}>
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount')*100)}/>
    </Elements>
    </Suspense>
  )
}

export default Checkout

