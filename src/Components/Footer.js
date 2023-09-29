import React from 'react'

const Footer = () => {
  return (
    <>
        <section class="bg-white dark:bg-orange-500">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white-500 dark:text-white-400 sm:text-xl">हमसे संपर्क करें </p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" requiorange/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-white-900 bg-white-50 rounded-lg border border-white-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" requiorange/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white-900 dark:text-white-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-white-900 bg-white-50 rounded-lg shadow-sm border border-white-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
      </form>
  </div>
    <div className='p-2 text-right mr-4 pb-10'>
        <h2 className='font-semibold'>© Copyright Reserved 2023</h2>
        <h2 className='font-medium ml-4'>Ajay Singh</h2>
    </div>
</section>
    </>
  )
}

export default Footer