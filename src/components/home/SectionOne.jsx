import React, { useState, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import UserType from "../../Hooks/auth/userType";
import img from "../../img/Red and Blue Badminton Team Sport Logo (10).png";

const SectionOne = () => {
  const [userData, isAdmin, isTeacher, student] = UserType();
  const [displayedName, setDisplayedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const name = "Mr. Ahmed Hisham Abbas 😇 The Joker in English 🃏";
  const description = "الجنرال احمد جمال فى اللغة العربية ";

  const messages = [
    "نقدم لك دعم تعليمى متميز ",
    "محاضرات باعلى جودة ",
    "منصة ثابتة وسريعة ",
    "امتحانات دورية مستمرة ",
  ];

  useEffect(() => {
    if (nameIndex < name.length) {
      const timer = setTimeout(() => {
        setDisplayedName(name.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100); // تحديد معدل السرعة بالميلي ثانية
      return () => clearTimeout(timer);
    }
  }, [name, nameIndex]);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // تغيير الجملة كل 2 ثانية
    return () => clearInterval(messageTimer);
  }, []);

  return (
    <div
      className="  relative overflow-hidden bg-[#03a9f5]"
      style={{ minHeight: "720px" }}
    >
      {/* النقاط الخلفية */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-10"></div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto flex flex-col items-center">
          {/* صورة الشعار */}
          <Zoom>
            <img
              src={img}
              alt="Logo"
              className="h-[300px] w-[300px] md:h-[250px] md:w-[250px] mt-[50px] mb-3 "
              style={{ borderRadius: "50%" }}
            />
          </Zoom>
          {/* نص متحرك */}
          <h1 className="text-2xl text-white w-[100%] m-auto md:text-3xl w-[65%] m-auto font-bold text-center mb-4">
            {description}
          </h1>
          <h1 className="text-xl text-white w-[100%] m-auto md:text-2xl w-[65%] m-auto font-bold text-center mb-4">
            اللغة العربية اسهل مع الجنرال <br /> عاش استمر 💪🏻💪🏻
          </h1>
          {/* خط فاصل */}
          <div className="h-1 w-[150px] bg-white mb-6"></div>
          {/* حالة المستخدم */}
          {isTeacher ? (
            <div className="flex justify-center">
              <h1 className="text-lg md:text-xl font-medium text-gray-800">
                {messages[currentMessageIndex]}
              </h1>
            </div>
          ) : student ? (
            <div className="flex flex-col items-center my-4">
              <h1 className="text-2xl text-red-500 md:text-3xl font-bold text-center mb-4">
                كود الطالب: {userData.id}
              </h1>
            </div>
          ) : isAdmin ? (
            <div className="flex justify-center">
              <h1 className="text-lg md:text-xl font-medium text-gray-800">
                مرحباً، يمكنك إدارة المنصة من هنا.
              </h1>
            </div>
          ) : (
            <div className="flex space-x-4"></div>
          )}
        </div>
      </div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
};

export default SectionOne;
