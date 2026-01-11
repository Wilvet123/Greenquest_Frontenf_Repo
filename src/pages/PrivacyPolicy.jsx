import React from 'react'
import PrivacyPolicyPic from '../assets/gqshop/Privacy-policy-pic.png'

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 px-4 md:px-8 lg:px-12">
      {/* Text Section */}
      <div className="mt-16 md:mt-20 lg:mt-28 lg:w-2/3">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Privacy Policy</h1>
        <h2 className="font-bold pb-6 text-lg md:text-xl">
          Welcome to the GreenQuest Innovations store!
        </h2>
        <p className="pb-4">
          We are thrilled to share Rebirth of Idah, a powerful Afrofuturistic board game that blends culture, strategy, and climate action storytelling.
        </p>
        <p className="pb-8">
          Below are our privacy policies to ensure a smooth and trustworthy experience for all our customers, locally and globally.
        </p>

        <p className="pb-8">
          We value your privacy. Any personal information collected (name, address, payment info) is strictly used to process and ship your order. We do not sell or share your information with third parties.
        </p>

        <h3 className="font-bold pb-4">Shipping Policy:</h3>

        <h4 className="font-bold">Domestic (Nigeria):</h4>
        <p>Delivery Time: 3-7 business days after order confirmation.</p>
        <p>Shipping Carrier: Local logistics partner including GIG, DHL Nigeria, or FedEx.</p>
        <p>Shipping fees: Calculated at checkout based on location. </p>

        <h4 className="font-bold pt-6">International:</h4>
        <p>Delivery Time: 7-21 business days (may vary based on location and customs processing)</p>
        <p>Shipping Carrier: DHL, FedEx, or UPS</p>
        <p>Shipping fees: Automatically calculated at checkout. Any duties or custom fees are the responsibility of the buyer.</p>

        <p className="py-6">
          <span className="font-bold">Order tracking:</span> You'll receive a tracking number once your order is shipped.
        </p>

        <h3 className="font-bold">Return and Exchange Policy:</h3>
        <h4 className="font-bold">Returns:</h4>
        <p>Eligible within 7 days of receiving your order.</p>
        <p>Item must be unopened, unused, and its original packaging.</p>
        <p>Email us at <a href="mailto:greenquestinnovations@gmail.com" className="text-green-700 underline">greenquestinnovations@gmail.com</a> with your order number and reason to return.</p>
        <p>Buyer is responsible for return shipping costs unless the product was defective or incorrect.</p>

        <h4 className="font-bold pt-6">Exchanges:</h4>
        <p>Only possible if the item arrived damaged or defective.</p>
        <p>Exchange requests must be made within 5 days of delivery with photo proof.</p>

        <h4 className="font-bold pt-6">Non-returnable Items:</h4>
        <p>Open board games.</p>
        <p>Sale items or promotional bundles.</p>

        <h4 className="font-bold pt-6">Damaged or missing items</h4>
        <p>
          If your order arrives damaged or incomplete, please contact us within 48 hours of delivery with photo or video evidence. We'll resolve it quickly with a replacement or refund.
        </p>

        <h3 className="font-bold py-6">Payment Policy:</h3>
        <h4 className="font-bold">We accept:</h4>
        <p>Local payments (Nigeria): Paystack and bank transfer</p>
        <p>International payments: PayPal</p>

        <p className="py-6">All payment must be completed before dispatch. We do not offer Cash on Delivery at this time.</p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-end lg:w-1/3">
        <img
          src={PrivacyPolicyPic}
          alt="Privacy Policy Illustration"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default PrivacyPolicy
