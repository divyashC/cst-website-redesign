import React from "react";

const data = [
  {
    q: "What is the general phone number and mailing address for the college?",
    a: "The general contact details for CST college are as follows:\n\t General Phone Number: +975-17160538 (Administration)\n\t+975 – 17652414 (Academics)\n\tGeneral Email Address: info.cst@rub.edu.bt",
  },
  {
    q: "How do I find contact information for CST staff?",
    a: "The contact information of the staff is provide in the staff directory section of the website.",
  },
  {
    q: "How do I get to CST?",
    a: "The college is located at Rinchending in Phuentsholing, Chhukha which is in the southern region of the country. It is about 150 km from Thimphu (capital).\nIt is a border town with Jaigaon under West Bengal State of  India.",
  },
  {
    q: "What programmes does CST offer?",
    a: "The programmes are listed clearly under programmes section.",
  },
  {
    q: "Is there any distance programme at CST?",
    a: "No. All the programmes offered at CST are full time on-campus.",
  },
  {
    q: "When does the semester start?",
    a: "The autumn semester usually starts at last week of July and the spring semester start in the first week of February.",
  },
  {
    q: "How do international students apply for admission to CST?",
    a: "The international students are requested to apply to CST through DRIL Office, CST or Department of External Linkages (DRE), Office of the Vice Chancellor, Royal University of Bhutan.",
  },
  {
    q: "What is the infrastructure and facilities like at CST?",
    a: "The CST academic zone contains facilities such as classrooms, seminar halls, conference halls, an IT center, library, faculty offices, and an auditorium.  Most of the facilities are new, with the most advanced technology desirable for teaching purposes. The recreational and residential zones currently include spacious, comfortable and convenient residences for students and staff, a gymnasium, and football, basketball and other playing fields. In the next phase, CST is also adding a substantially expanded library. There are ample open and multi-use spaces consisting of a convenience store, book-shops, and a canteen where students and faculty mingle for their meals and conversation.",
  },
];

const Connect = () => {
  return (
    <div className="flex flex-col content-center items-center py-10">
      <h1 className="text-[2.5rem] my-10">Frequently Asked Questions</h1>
      <div className="w-[90%] bg-[#EBF3F6] flex flex-col justify-center content-center p-10 rounded-md gap-4">
        {data.map((data, key) => {
          return <Questions question={data.q} answer={data.a} />;
        })}
      </div>
    </div>
  );
};

const Questions = ({ question, answer }) => {
  return (
    <div className="w-[100%]">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border  bg-white rounded-md"
      >
        <div className="collapse-title text-xl  font-medium">{question}</div>
        <div className="collapse-content">
          <p> {answer}</p>
        </div>
      </div>
    </div>
  );
};
export default Connect;
