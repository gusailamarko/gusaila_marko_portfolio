import { DisplayRatingAsStars } from "~/lib/utils"
import { clientReviews } from "~/constants/texts"
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Alert from "./Alert";

const Contact = () => {
  const [alert, setAlert] = useState<AlertState>({open: false, type: "success", message: ""})

  const form = useRef<HTMLFormElement>(null);
  const showAlert = (type: AlertState['type'], message: string) => setAlert({ open: true, type, message })

  const SubmitForm = (e:any) => {
    e.preventDefault();
    
    if(!form.current)
    {
      showAlert("empty", "Please fill out the required spaces!")
      return;
    }

    const fd = new FormData(form.current);
    const name = (fd.get('name') as any) || "";
    const email = (fd.get('email') as any) || "";
    const servicePackage = (fd.get('servicePackage') as any) || "";
    const message = (fd.get('message') as any) || "";

    if(!name.trim() || !email.trim() || !servicePackage.trim())
    {
      showAlert("empty", "Please fill out the required spaces (Name, Email, Package)!");
      return;
    }

    if(!email.includes('@')) {showAlert('failure', "Email is invalid!"); return;};

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        form.current?.reset();
        showAlert('success', 'Inquiry sent, will respond shortly!');
        }, (error) => {
        console.error(error);
        showAlert('failure', 'Unexpected error - please try again later!');
      })
  }

  const [feedbackIdx, setFeedbackIdx] = useState(0);

  const PrevReview = () => {
    setFeedbackIdx((prevIndex) => prevIndex === 0 ? clientReviews.length - 1 : prevIndex - 1)
  }

  const NextReview = () => {
    setFeedbackIdx((prevIndex) => prevIndex === clientReviews.length - 1 ? 0 : prevIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
        setTimeout(() => {
          setFeedbackIdx((prev) => prev === clientReviews.length - 1 ? 0 : prev + 1);
        }, 8000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="contact" className="flex flex-col md:flex-row items-center justify-center gap-[5rem] md:gap-[2rem] py-[3rem] Contact-Container">
        <div className="flex flex-col w-[80%] md:w-[40%] gap-[1rem]">
          <div className="text-center">
            <h3 className="text-[1.5rem] font-bold tracking-wider uppercase">Client feedback:</h3>
          </div>
          <div className="flex items-center justify-evenly gap-[0.5rem] w-full Client-Review">
            <div onClick={PrevReview} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
              </svg>
            </div>
            <div className="hidden lg:flex justify-center w-[15%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
            </div>
            <div key={feedbackIdx} className="flex flex-col items-start gap-[0.5rem] w-[70%] Feedback">
              <div>
                <p className="font-bold">{clientReviews[feedbackIdx].username} <span className="text-red-500 italic font-normal">- {clientReviews[feedbackIdx].clientType}</span></p>
              </div>
              <hr className="w-full" />
              <div>{DisplayRatingAsStars(clientReviews[feedbackIdx].rating)}</div>
              <div>
                <p>"<span className="italic">{clientReviews[feedbackIdx].review}</span>"</p>
              </div>
            </div>
            <div onClick={NextReview} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1rem] w-[80%] md:w-[40%] Contact-Content">
          <div className="w-full">
            <form className="flex flex-col justify-center gap-[1rem]" ref={form}>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <label htmlFor="servicePackage">Package:</label>
                <select id="servicePackage" name="servicePackage">
                  <option value="" defaultChecked>--Choose a package--</option>
                  <option value="Feature development & bug fixes">Feature integration or fixing</option>
                  <option value="High-converting landing page">High-converting landing page</option>
                  <option value="Custom full-stack web application">Complex full-stack web application</option>
                </select>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5}></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="SubmitBtn" onClick={SubmitForm}>Send email</button>
              </div>
            </form>
          </div>
          <div>
            <p className="text-center italic">Or if you would prefer a more secure method:</p>
          </div>
          <div>
            <a href="https://www.fiverr.com/gusaila_marko/create-you-a-fully-customised-webpage-to-your-desires?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=5ce3bad784d9447d933524454e9cec1f&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=479f2c04-979a-4d0f-ade3-bc25e9c952f7" target="_blank" className="ContactViaFiverr">
              Contact me on Fiverr
              <img src="/icons/fiverr-icon.webp" alt="Fiverr Logo" className="FiverrLogo" />
            </a>
          </div>
        </div>
      </div>

      <Alert open={alert.open} type={alert.type} message={alert.message} onClose={() => setAlert(s => ({ ...s, open: false }))} />
    </>
  )
}

export default Contact