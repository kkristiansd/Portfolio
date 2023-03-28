import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xzbqvlww");
  if (state.succeeded) {
    return (
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Thanks for email!
        </h2>
        <iframe
          src="https://giphy.com/embed/d8v55gXkiNj3y"
          width="480"
          height="273"
          frameBorder="0"
          class="giphy-embed shadow-2xl shadow-purple-800 my-10"
          allowFullScreen
        ></iframe>
        <p></p>
      </div>
    );
  }
  return (
    <div>
      <section class="bg-white dark:bg-transparent ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="text-5xl font-bold text-center mb-8">Contact Me</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a job offer? Porject offer? Or just want to chat? Let me know.
          </p>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/a_form_id" method="POST" class="space-y-8">
            <div>
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light shadow-2xl shadow-purple-800"
                placeholder="name@flowbite.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 shadow-2xl shadow-purple-800"
                placeholder="Leave a comment..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-2xl shadow-purple-800"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
