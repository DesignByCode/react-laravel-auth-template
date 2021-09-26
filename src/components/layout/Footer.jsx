import React from 'react'
import GradientButton from '../form/GradientButton'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 pb-16 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex py-20 justify-between items-center space-x-5 ">
          <div className="max-w-2xl space-y-5">
            <h4 className="text-4xl tracking-tighter">You Think You Know What Life Is?</h4>
            <p>
              Promise your reader something valuable. Will you teach her how to learn a new skill? Will you persuade her to do something
              she’s never done before?
            </p>
          </div>
          <div>
            <GradientButton type="submit" classes={`px-6 py-4`}>
              Start 7day Free Trail
            </GradientButton>
          </div>
        </div>
        <div className="w-full bg-gray-100 bg-opacity-25 h-[1px] mt-5 mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-5">
          <div className="flex flex-col space-y-4">
            <div className="text-xl">Product</div>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Landingp ages</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Features</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Documentation</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Careers</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Blocks</a>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl">Industries</div>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Employment</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Childcare</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Education</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Accountancy</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Wholesale</a>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl">About us</div>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Company</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Download brochure</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Media Kit</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Accountancy</a>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl">Legal</div>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Terms and conditions</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Security</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Privacy and Cookie Statement</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Processor Agreement</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Sitemap</a>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-xl">Contact Us</div>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Landingp ages</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Features</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Documentation</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Careers</a>
            <a className="text-white text-opacity-25 hover:text-opacity-50 cursor-pointer">Blocks</a>
          </div>
        </div>
        <div className="w-full bg-gray-100 bg-opacity-25 h-[1px] my-10" />
        <div className="text-center py-5">
          Design & Developed by <span className="text-primary-500">DesignByCode</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
