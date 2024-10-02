import { FaFacebookSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#03a9f5] flex items-center justify-center h-[250px]  ">
      <div>
        <div className="w-[90%] m-auto text-center md:w-[100%]">
          <h1 className="font-bold text-white md:text-xl">
            استمتع بدروس الثانوية العامة واحصل على دعم تعليمى مميز
          </h1>
        </div>
        <div className="text-center my-3">
          <h1 className="font-bold text-white md:text-xl">
            هذة المنصة تابعة لشركة E-M Online
          </h1>
        </div>
        <div className="flex justify-center  my-3">
          <a href="https://www.facebook.com/profile.php?id=61556280021487&mibextid=kFxxJD">
            <FaFacebookSquare className="text-4xl text-white mx-2" />
          </a>
          <a href="#">
            <FaYoutube className="text-4xl text-red-500 mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
