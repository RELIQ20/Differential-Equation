import Header from "./Header/Header.jsx";
import Calculator from "./Calculator/Calculator.jsx";
import Definition from "./Definition/Definition.jsx";
import Footer from "./Footer/Footer.jsx";
import Calculator1 from "./Calculator1/Calculator1.jsx";
function App() {
  return (
    <>
      <Header/>
      
        <div className="GeneralContainer">
       
            <Definition 
                    title= "Growth and Decay"
                    formula="P/Q = Ce<sup>kt</sup>"
                    description="Growth and decay refer to how quantities increase or decrease over time. 
                                These are commonly modeled by first-order differential equations,
                                 which describe how the rate of change of a quantity relates to the quantity itself." 
                    whereDetails={[
                        "P/Q = is the number of population",
                        "C = is the initial population",
                        "e = is the base of the natural logarithm",
                        "k = is the growth or decay rate",
                        "t = is the time"
                    ]}
                    videoUrl="https://www.youtube.com/embed/M9rcYTuFG4w" 
                       />
            <Calculator/>
        </div>
      
      
        <div className="GeneralContainer">
        <Definition 
                    title="Newton's Law of Cooling and Heating"
                    formula="T - Tm = Ce<sup>kt</sup>"
                    description="Newton's law of heating and cooling states that the rate of heat loss or gain by an object is proportional to the temperature difference between the object and its surroundings." 
                    whereDetails={[
                        "T = is the temperature of the object for t>0",
                        "Tm = is the ambient temperature",
                        "C = is the initial population",
                        "e = is the base of the natural logarithm",
                        "k = is the growth or decay rate",
                        "t = is the time"
                    ]}
                    videoUrl="https://www.youtube.com/embed/ejEXSjdMpck"
                />
         <Calculator1/>
        </div>
        
        <Footer/>
       
   </>
  );
}
export default App;