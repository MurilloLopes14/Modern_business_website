//* Styles
import styles, { layout } from "../styles";

//* Components
import { Button } from "../components";

//* Assets
import { card } from "../assets";

export const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Voluptas dolorem ratione voluptatum doloribus praesentium magni
          corporis beatae molestias possimus, debitis.{" "}
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="Card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};
