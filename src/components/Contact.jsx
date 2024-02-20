import React ,{useState} from "react";
import validator from "validator";
const Contact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { name, email, message } = data;

  const [emailError, setEmailError] = useState('') 
  const validateEmail = (e) => { 
    var email = e.target.value 
  
    if (validator.isEmail(email)) { 
      setEmailError('') 
    } else { 
      setEmailError('Please enter a valid email!') 
    } 
  } 


  const handleSubmit = async e => {
    e.preventDefault();
    alert("Form has been succesfully Submitted!")
    try {
      await fetch("https://v1.nocodeapi.com/aadii1502/google_sheets/fWSbHpGEQrbCyind?tabId=Page1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, message]]),
      });
      setData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e =>
  setData({ ...data, [e.target.name] : e.target.value })

  return (
    <div id="contact"
      className="w-full h-screen bg-gray-900 p-4 text-white"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
        <h2 className='titleBackground border border-b-[#00df9a] w-fit border-t-0 border-l-0 border-r-0'>CONTACT</h2>
        <h1 className=' text-white mt-10 text-2xl flex justify-center font-bold'>SHARE YOUR THOUGHTS</h1>
        </div>

        <div className=" flex justify-center items-center">
          <form
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={name}
              onChange={handleChange}
              onSubmit={""}
            />
            <pre>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="mt-2 w-full mr-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={email}
              onChange={(e) => {
                handleChange(e);
                validateEmail(e);
              }}
              />
            <p className=" my-2 w-[30vh] text-red-600 font-serif font-normal rounded-md">{emailError}</p>
            </pre>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={message}
              onChange={handleChange}

            ></textarea>

            <button 
             className="text-white bg-[#00df9a] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;