import { React } from "react";
import ButtonJexica from "../../components/ButtonJexica/ButtonJexica";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import * as colorClasses from "../../utils/colorClassesDay";
import { useMediaQuery } from "react-responsive";

export default function Main(props) {
  const media = useMediaQuery({ query: "(max-width: 1020px)" });

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letterBtns = [];
  let i = 0;

  let stylesContainer = {
    overflowStyle: "none",
    scrollbarWidth: "none",
    overscrollBehaviorX: "none",
    maxWidth: "1300px",
  };

  let stylesTailwind =
    " gap-5 mx-15 py-10 px-16 pb-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen overflow-scroll overscroll-x-none";

  for (let letter of alphabet) {
    let num = 0;
    if (Math.floor((i / 3) % 3) === 0) {
      num += 0;
    } else if (Math.floor((i / 3) % 3) === 1) {
      num += 7;
    } else {
      num += 14;
    }

    let stylesBtnContainer = {
      paddingLeft: num + "0".concat("px"),
      maxWidth: "200px",
    };

    if (media) {
      stylesBtnContainer = {};
      stylesContainer = {
        overflowStyle: "none",
        scrollbarWidth: "none",
        overscrollBehaviorX: "none",
        overflowX: "hidden",
        width: "100vw",
        maxWidth: "100%",
      };
    }

    letterBtns.push(
      <div style={stylesBtnContainer} key={letter}>
        <ButtonMain
          letterPage={letter}
          dayMode={props.dayMode}
          buttonClass={
            colorClasses.buttonClasses[i++ % colorClasses.buttonClasses.length]
          }
        >
          Letter {letter}
        </ButtonMain>
      </div>
    );
  }
  return (
    <>
      <div className={stylesTailwind} style={stylesContainer}>
        {letterBtns}
        <div className="pl-28 ">
          <ButtonJexica dayMode={props.dayMode} />
        </div>
      </div>
    </>
  );
}
