import SectionOne from "../../components/home/SectionOne";
import SectionTwo from "../../components/home/SectionTwo";
import SectionThree from "../../components/home/SectionThree";
import SectionFour from "../../components/home/SectionFour";
import AllTeacher from "../../components/teacher/AllTeacher";
import UserType from "../../Hooks/auth/userType";
import LoginHome from "../../components/home/LoginHome";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import img from "../../img/صورة يوتيوب مصغّرة مدونة فيديو عن السفر مرح احترافي أبيض وقرمزي وأصفر (51).png";
const Home = () => {
  const [userData, isAdmin, isTeacher, student] = UserType();
  return (
    <div>
      <SectionOne />
      {student ? (
        <div>
          <LoginHome />
        </div>
      ) : (
        <div>
          {" "}
          <SectionTwo />
          <SectionFour />
          <div className="flex justify-center">
            <img
              src={img}
              className="h-[400px] w-[80%] m-auto my-5"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Home;
