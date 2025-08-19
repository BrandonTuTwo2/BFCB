import { useEffect } from 'react'
import './App.css'

function App() {
  const callMe = async () => {
    // const res = await fetch("http://localhost:9999/askMe/?=what is the capital of guatemala?")

    // const json = await res.json();
    // console.log(json)
    console.log("HIIII");

  }

  useEffect(() => {
    // callMe();
  }, []);

  return (
    <>

      <h1>HI ME</h1>
      <div className="flex items-start gap-2.5">
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Confused Kelpi</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Timestamp?</span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white"> text goes here!</p>
          </div>
        </div>
      </div>

      <form action={callMe}>
        <label htmlFor="chat" className="sr-only">Your message</label>
        <div className="flex items-center px-3 py-2 m-2 rounded-lg bg-gray-50 dark:bg-gray-700 ">
          <textarea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
          <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>

      </form>

    </>
  )
}

export default App
