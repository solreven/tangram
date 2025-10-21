import style from "./Tangram.module.css";

export default function Tangram() {
  return (
    <>
      <div className={style.tangram_container}>
        <svg
          viewBox="0 0 100 100"
          width="25vw"
          className={style.tangram_background}
        >
          {/* <!-- Stor trekant venstre --> */}
          <polygon
            points="0,0 0,100 50,50"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />
          {/* <!-- Stor trekant oppe --> */}
          <polygon
            points="0,0 100,0 50,50"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />
          {/* <!-- Liten trekant oppe --> */}
          <polygon
            points="100,0 75,25 100,50"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />
          {/* <!-- Det hersens kvadratet --> */}
          <polygon
            points="100,50 75,75 50,50 75,25"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />
          {/* <!-- Trekant i midten--> */}
          <polygon
            points="25,75 50,50 75,75"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />

          {/* <!-- Parallelogrammet --> */}
          <polygon
            points="0,100 25,75 75,75 50,100"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />
          {/* <!-- Hjørnetrekanten nede --> */}
          <polygon
            points="100,100 50,100 100,50"
            fill="white"
            stroke="red"
            stroke-width="2.5"
          />
        </svg>
      </div>
    </>
  );
}
