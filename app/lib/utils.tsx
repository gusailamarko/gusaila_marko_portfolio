import { Star, StarHalf } from 'lucide-react';

export const scrollToSection = (sectionID: string) => {
    const section = document.getElementById(sectionID);
    if(section) section.scrollIntoView({behavior: "smooth"});
}

export const DisplayRatingAsStars = (rating:string) => {
  const numericRating = parseFloat(rating);
  
  //Maximum 5 stars system
  const starsArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center gap-1">
        {starsArray.map((starValue) => {
            //1. Full Star
            if (numericRating >= starValue) {
            return (
                <Star key={starValue} className="w-5 h-5 fill-amber-500 text-amber-500" />
            );
            }
            
            //2. Half Star
            if (numericRating > starValue - 1 && numericRating < starValue) {
            return (
                <div key={starValue} className="relative w-5 h-5">
                    {/* Background: An empty star that provides the zinc outline for the right side */}
                    <Star className="absolute top-0 left-0 w-5 h-5 text-zinc-700 stroke-current" />
                    
                    {/* Foreground: The filled half-star sitting perfectly on top */}
                    <StarHalf className="absolute top-0 left-0 w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
            );
            }

            // 3. Complete Empty Star
            return (
                <Star key={starValue} className="w-5 h-5 text-zinc-700 stroke-current" />
            );
        })}
    </div>
    );
};

export const setMetaTag = (name:string, content:string, iconSrc:string) => {
  let titleTag = document.querySelector("title");
  if (!titleTag) {
    titleTag = document.createElement("title");
    document.head.appendChild(titleTag);
  }
  titleTag.textContent = name;

  let iconLink = document.querySelector('link[rel="icon"]');
  if(!iconLink)
  {
    iconLink = document.createElement("link");
    iconLink.setAttribute("href", iconSrc);
    iconLink.setAttribute("rel", "icon");
    document.head.appendChild(iconLink);
  }

  const setOrUpdate = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, value);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setOrUpdate('meta[name="description"]', "name", "description");
  setOrUpdate('meta[property="og:title"]', "property", "og:title");
  setOrUpdate('meta[property="og:description"]', "property", "og:description");
}