const arrowClasses = (index) => 
  "absolute z-5 -bottom-4 hidden lg:block " + (index % 2 !== 0 ? "left-4 -scale-x-100" : "right-4")

export default ({index}) => index === 2 ? <></> :
    <img src="images/howItWorks/arrow.svg" className={arrowClasses(index)}/>