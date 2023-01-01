import React from "react";
import "./Specifications.scss";
import SpecificationValues from "../SpecificationValues/SpecificationValues";
import structure1Icon from "./icons/structure1.svg";
import structure2Icon from "./icons/structure2.svg";
import electricalIcon from "./icons/electrical.svg";
import flooringIcon from "./icons/flooring.svg";
import facilitiesIcon from "./icons/facilities.svg";
import kitchenIcon from "./icons/kitchen.svg";
import waterIcon from "./icons/water.svg";
import paintIcon from "./icons/paint.svg";
import featuresIcon from "./icons/features.svg";
import lobbyIcon from "./icons/lobby.svg";
import toiletIcon from "./icons/toilet.svg";
import doorIcon from "./icons/door.svg";

const Specifications = () => {
  const struct1 =
    " RCC framed structure with brick walls designed for isolated foundation.";
  const struct2 =
    "  3 tracks UPVC sliding windows with sound proof & safety grill with Mosquito Mesh.";
  const electrical =
    " Wiring concealed with fire resistant wires. (Finolex, Anchor & Roma Switches) Provision for split AC in all bedrooms & Living Area. Adequate points for lights, fans & other plugs in bedrooms, toilets and kitchen with modular switches of reputed brand. Exhaust fans & geysers points in toilets Plug points for chimney, water purifier, refrigerator & other kitchen appliances in kitchen. TV points in living & Master bedrooms. Telephone points in living & master bedrooms.";
  const flooring = `Living bedroom, dining area vetrified 2'6" x 2'6" tiles dado upto 3 height above kitchen platform.
  Toilets- Anti skid tiles flooring with ceramic tiles dado up to door height
  (1'0x2'0") in master bedroom toilet.
  Anti skid ceramic tiles flooring with ceramic tiles dado up to door height 
  (1'0x2'0") in other toilets.
  Balconies - Anti skid ceramic tiles with water proofing treatment.
  Utilities - Anti skid ceramic tiles with water proofing treatment and dado up to 
  3 feet height.`;
  const facilities =
    "Automatic Generator for common area & Every flat lighting circuits.Electrical vehicles charging power point provision in parking area. Natural rain water for drinking purpose provides in Kitchen Anti skid Parking tiles.";
  const kitchen =
    "Granite cooking platform with steel sink. CP fittings of Jaguar or equivalent make. ";
  const water = "24 hours water supply from Borewell and Corporation.";
  const paint =
    "Plaster of paris (POP) in hall, External wall: 1 coat of primer & 2 coats of Asian paint.All internal walls: Emulsion paint with 2 coats of wall putty.";
  const features =
    "Round the clock security.CCTV with recording system.Intercom facility with entrance gate from each apartment.";
  const lobby = `Entrance lobby finished with Wooden
  tiles flooring, wall tiles for main door 
 wall. Automatic two individual ess 
 lifts with 5 passenger capacity `;
  const toilet = `CP fittings of Jaguar, parryware or 
  equivalent make.
  Concealed piping system for cold & 
  hot water with provision for geysers.
  Porcelain sanitary wares of reputed 
  brand.
  White WC of reputed brand.`;
  const door = `Main door: Teak wood door frame with Teak wood shutters.
  Bedrooms
  : Matti door frames with laminated print flush doors.
  Toilets:
  WPC solid frame with WPC solid doors.`;
  return (
    <>
      <div className="Specify-main-container">
        <div className="Specify-header-wrapper">
          <h3 className="Specify-header">Specifications</h3>
          <div className="Specify-header-border"></div>
        </div>
        <div className="Specify-grid-container">
          <div className="specify-structure1-grid">
            <SpecificationValues
              img={structure1Icon}
              heading="Building structure"
              description={struct1}
            />
          </div>
          <div className="Specify-structure2-grid">
            <SpecificationValues
              img={structure2Icon}
              heading="Building structure"
              description={struct2}
            />
          </div>
          <div className="Specify-electricals-grid">
            <SpecificationValues
              img={electricalIcon}
              heading="Electricals"
              description={electrical}
            />
          </div>
          <div className="Specify-flooring-grid">
            <SpecificationValues
              img={flooringIcon}
              heading="Flooring"
              description={flooring}
            />
          </div>
          <div className="Specify-facilities-grid">
            <SpecificationValues
              img={facilitiesIcon}
              heading="Common Facilities"
              description={facilities}
            />
          </div>
          <div className="Specify-kitchen-grid">
            <SpecificationValues
              img={kitchenIcon}
              heading="Kitchen"
              description={kitchen}
            />
          </div>
          <div className="Specify-water-grid">
            <SpecificationValues
              img={waterIcon}
              heading=" Water"
              description={water}
            />
          </div>
          <div className="Specify-paint-grid">
            <SpecificationValues
              img={paintIcon}
              heading=" External & internal paint"
              description={paint}
            />
          </div>
          <div className="Specify-features-grid">
            <SpecificationValues
              img={featuresIcon}
              heading="Security features "
              description={features}
            />
          </div>
          <div className="Specify-lobby-grid">
            <SpecificationValues
              img={lobbyIcon}
              heading=" Lobby & lifts"
              description={lobby}
            />
          </div>
          <div className="Specify-toilets-grid">
            <SpecificationValues
              img={toiletIcon}
              heading="Toilets"
              description={toilet}
            />
          </div>
          <div className="Specify-doors-grid">
            <SpecificationValues
              img={doorIcon}
              heading="Doors"
              description={door}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Specifications;
