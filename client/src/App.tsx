import { useState, type ReactElement } from 'react';
import TextMsg from './components/message';
import './App.css'
import React from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [texts, setTexts] = React.useState<ReactElement[]>([])
  const [chatCount, setChatCount] = useState(1);
  const callMe = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(query)

    setTexts(texts => [...texts, (<TextMsg name={'YOU'} timestamp={new Date(Date.now()).toLocaleTimeString()} text={`${query}`} key={`${chatCount}-User`} />)])
    //pass actual stuff here
    const res = await (await fetch(`http://localhost:9999/askMe/?=${query}`)).json();
    setTexts(texts => [...texts, (<TextMsg name={'Confused Kelpi'} timestamp={new Date(Date.now()).toLocaleTimeString()} text={`${res}`} key={`${chatCount}-Chat`} />)])
    setChatCount(chatCount + 1);
    setQuery("");
  }

  const setTextFromInput = async (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(e.target.value);
  }

  return (
    <>

      <h1 className='fixed top-0 left-0 right-0 mx-auto w-fit '>Babies' First Chatbot Wrapper</h1>
      <div className='flex flex-row h-300 py-75'>
        <div id='chat' className='max-h-screen overflow-y-auto '>
          {texts}
        </div>
      </div>

      <form onSubmit={callMe} className='fixed bottom-0 left-0 right-0 mx-auto w-fit'>
        <label htmlFor="chat" className="sr-only">Your message</label>
        <div className="flex items-center px-3 py-2 m-2 rounded-lg  ">
          <input id="chat" name="chat" onChange={setTextFromInput} value={query} className="block mx-4 p-2.5 w-lg text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ask your query..."></input>
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
