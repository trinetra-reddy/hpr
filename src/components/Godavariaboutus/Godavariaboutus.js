import React from 'react';
import './Godavariaboutus.scss';
import DataValues from "../DataValues/DataValues";
const Godavariaboutus = () => {
    return (
        <>
        <div className="godavari-aboutus">
        <div className="godavari-aboutus-heading">
            <h2>About Us</h2>
        </div>
        <div className="godavari-aboutus-1">
          <div className="godavari-aboutus-1-left">
            <p>
              We were originally established as a constractor to major
              housebuilders
            </p>
          </div>
          <div className="godavari-aboutus-1-right">
            <p>
            HPR GODAVARI Builders & Developers was built on the pillars of trust, leadership and innovation by the founders.
             We are taking calculated steps and marching towards becoming a leading developer in the Anantapur,
              irrespective of whether it is commercial, retail and residential space our primary focus is on 
              maintaining the highest level of quality in our work
            </p>
          </div>
        </div>
        <div className="godavari-aboutus-2">
          <p>
          Our aim is to develop residential and commercial spaces that easily conquer the hearts of buyers through unique 
          aesthetic appeal. By providing top class features and facilities in properties we develop to be successful in attaining 
          leadership position in the real estate industry and overtime to become the preferred brand when it comes to real-estate development.
          </p>
        </div>
        <div className="godavari-aboutus-hr">
          <hr />
        </div>
        <div className="godavari-aboutus-columns">
          <DataValues
            heading="Total workers"
            count="400+"
            description="Workers with more than 10 year’s
service"
         />
          
          <DataValues
            heading="Years Experience"
            count="11+"
            description="HPR Godavari bulders and developers
are in this field"
          />
          <DataValues
            heading="Completed Projects"
            count="300+"
            description="Project bulded all over Andhra 
Pradesh and in Tamil Nadu"
          />
          <DataValues
            heading="Happy Costumers"
            count="1500k"
            description="People and familys have beautiful
future and happy"
          />
        </div>
      </div>
    </>
  );
};
export default Godavariaboutus;
