import style from "./Burger.module.css";

export const Burger = () => {
  return (
    <>
      <div className="w-fit flex flex-col gap-1">
        <div className="line1 no-animation w-6 h-1 bg-red-500"></div>
        <div className="line2 no-animation w-6 h-1 bg-red-500"></div>
        <div className="line3 no-animation w-6 h-1 bg-red-500"></div>
      </div>
    </>
  );
};
