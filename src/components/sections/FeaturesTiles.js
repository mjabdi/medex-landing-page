import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Paper from "@material-ui/core/Paper";
import Button from "../elements/Button";

const cardContents = [
  {
    title: " GP APPOINTMENT",
    content:
      "An unrestricted consultation with the doctor, no need to complete a medical history questionnaire.",
    delay: "0",
    href: "",
    enabled: false,
  },
  {
    title: "GYNAECOLOGY",
    content:
      " Our highly experienced consultant gynaecologists offers full range of gynaecological services.",
    delay: "200",
    href: "http://londonmedicalclinic.co.uk/medicalexpressclinic/book/gynae/",
    enabled: true,
  },
  {
    title: "PCR TEST FOR TRAVEL",
    content:
      " Covid-19 (Coronavirus) Test Certificate for Travel and Immigration Purpose.",
    delay: "400",
    href: "https://travelpcrtest.com/",
    enabled: true,
  },
  {
    title: "TEST TO RELEASE PCR TEST",
    content:
      "Covid-19 (Coronavirus) Test to Release Certificate for Travelers.",
    delay: "0",
    href: "https://testrelease.co.uk/",
    enabled: true,
  },
  {
    title: "DERMATOLOGY APPOINTMENT",
    content: "Make an appointment with the best dermatologists in London.",
    delay: "200",
    href: "",
    enabled: false,
  },
  {
    title: "STD",
    content: " Private Sexual Health (GUM) Clinic for Same Day STD testing.",
    delay: "400",
    href: "",
    enabled: false,
  },
];

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Private Healthcare at our Harley Street Medical Centre",
    paragraph: "Services currently available include:",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="feature-tiles">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {cardContents.map((card) => (
              <Paper elevation={3} style={{ margin: "10px" }}>
                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay={card.delay}
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      {/* <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require("./../../assets/images/feature-tile-icon-01.svg")}
                          alt="Features tile icon 01"
                          width={64}
                          height={64}
                        />
                      </div> */}
                    </div>
                    <div className="features-tiles-item-content">
                      <h4
                        className="mt-0 mb-8"
                        style={{
                          fontSize: "1rem",
                          marginTop: "10px",
                          height: "50px",
                          color: "#00a1c5",
                        }}
                      >
                        {card.title}
                      </h4>
                      <p
                        className="m-0 text-sm"
                        style={{ marginTop: "10px", height: "100px" }}
                      >
                        {card.content}
                      </p>
                      {card.enabled && (
                        <Button
                          tag="a"
                          style={{
                            color: "#fff",
                            fontSize: "0.8rem",
                            marginTop: "30px",
                          }}
                          color="secondary"
                          wideMobile
                          href={card.href}
                          target="_blank"
                        >
                          Book Now
                        </Button>
                      )}
                      {!card.enabled && (
                        <Button
                          tag="a"
                          style={{
                            color: "#555",
                            fontSize: "0.8rem",
                            marginTop: "30px",
                            backgroundColor:"#eee",
                            cursor:"not-allowed"
                          }}
                          color="dark"
                          wideMobile
                        >
                          Comming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
