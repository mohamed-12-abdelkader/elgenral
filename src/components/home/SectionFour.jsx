import { Fade, Zoom } from "react-awesome-reveal";
const SectionFour = () => {
  return (
    <div
      className="  my-9 p-3 bg-[#03a9f5] "
      style={{
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "100px",
      }}
    >
      <div className="w-[95%] h-[350px] m-auto md:flex justify-between items-center">
        <div className="text-center">
          <Fade bottom>
            <h1
              className="fonts font-bold text-3xl flex text-[white] my-3"
              style={{ fontWeight: "bold", fontSize: "50px" }}
            >
              ذاكر مع الجنرال
            </h1>
          </Fade>
        </div>
        <div>
          <Zoom>
            <img
              src="Rectangle.a433f53cf185268fb6f4.png"
              className="h-[300px] m-auto"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
