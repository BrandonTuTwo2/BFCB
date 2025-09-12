import { useEffect, useState, type ReactElement } from 'react';
import TextMsg from './components/message';
import './App.css'
import React from 'react';

function App() {
  const [texts, setTexts] = React.useState<ReactElement[]>([])
  const [chatCount, setChatCount] = useState(2);
  const callMe = async (form: FormData) => {
    const query = form.get("chat");

    setTexts(texts => [...texts,(<TextMsg name={'YOU'} timestamp={`${chatCount}`} text={`${query}`} key={`${chatCount}`}/>)])
    setChatCount(chatCount + 1);
    console.log(texts);
    //pass actual stuff here
    const res = await (await fetch(`http://localhost:9999/askMe/?=${query}`)).json();
    setTexts(texts => [...texts,(<TextMsg name={'Confused Kelpi'} timestamp={`${chatCount}`} text={`${res}`} key={`${chatCount}`}/>)])
    setChatCount(chatCount + 1);

    console.log(texts);
  }
  
  useEffect(() => {
    // callMe();
  }, []);

  return (
    <>

      <h1 className='fixed top-0 left-0 right-0 mx-auto w-fit '>Babies' First Chatbot Wra</h1>
      <div id='chat'>
        {texts}
      </div>
      <form action={callMe} className='fixed bottom-0 left-0 right-0 mx-auto w-fit'>
        <label htmlFor="chat" className="sr-only">Your message</label>
        <div className="flex items-center px-3 py-2 m-2 rounded-lg bg-gray-50 dark:bg-gray-700 ">
          <textarea name="chat" rows={1} className="block mx-4 p-2.5 w-lg text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ask your query..."></textarea>
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
