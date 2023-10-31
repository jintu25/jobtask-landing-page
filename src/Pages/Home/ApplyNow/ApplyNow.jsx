import React from "react";
import CommonTitle from "../../Shared/CommonTitle/CommonTitle";
import "./apply.css";
const ApplyNow = () => {
  return (
    <div className="max-w-screen-xl m-auto py-20">
      {/* ------ common title use for apply now title ------- */}
      <div className="text-center w-full md:w-3/5 m-auto">
        <CommonTitle
          title={"funding circles"}
          subtitle={"You deserve better business loan"}
          description={
            "At Deserve Better Loan Solutions, we believe you deserve more than just a loan. You deserve financial freedom, peace of mind, and a partner who understands your unique needs."
          }></CommonTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-0 mt-12">
        <div className="apply-now-left-test">
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-[#11111]">
            We usually follow 4 steps to get a better business loans.
          </h2>
          <div className="step-timeline mb-8 mt-6">
            <ul>
              <li data-counter="1">
                <strong>Apply in 10 minutes</strong>
                <p>
                We understand that life moves fast, and you can't afford to spend hours on loan applications. With us, you can complete your application in just 10 minutes.
                </p>
              </li>
              <li data-counter="2">
                <strong>Hear from us in 1 hour</strong>
                <p>
                Once your application is submitted, we prioritize your request. You won't be left wondering about the status of your loan.
                </p>
              </li>
              <li data-counter="3">
                <strong>A decision in 24 hours</strong>
                <p>
                We know that waiting for a loan approval can be nerve-wracking. That's why we commit to providing a decision within 24 hours of your application. 
                </p>
              </li>
              <li data-counter="4">
                <strong>Your loan is funded</strong>
                <p>
                Upon approval, your loan is on its way to being funded. We work diligently to ensure the funds you need are in your hands as soon as possible.
                </p>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-left-to-right ">
            Apply Now
          </a>
        </div>
        <div className="calculate-rate bg-[#fdebeb]">
          <div className="finix-text text-center mb-3">
            <h6 className="text-[#606060] text-lg mt-6">
              {" "}
              Calculate your rate{" "}
            </h6>
            <h3 className="text-3xl text-[#11111] font-semibold">
              How much do you need?
            </h3>
          </div>

          <div className="calculate-from py-6 px-8">
            <form action="#">
              <div className="form-group mb-5">
                <label
                  for="type-money"
                  className="text-lg text-[#333] font-medium">
                  {" "}
                  Type The Money{" "}
                </label>
                <input
                  type="text"
                  className="form-control w-full py-3 px-4 mt-3"
                  id="type-money"
                  aria-describedby="helpId"
                  placeholder="$1000"
                />
              </div>

              <div className="form-group mb-5">
                <label
                  for="select-money"
                  className="text-lg text-[#333] font-medium">
                  {" "}
                  Select The Month/Years{" "}
                </label>

                <select
                  id="select-money"
                  className="form-select w-full py-3 px-4 mt-3"
                  aria-label="Default select example">
                  <option value="5">1 Month</option>
                </select>
              </div>
              <div className="form-group mb-5">
                <label
                  for="borrowing"
                  className="text-lg text-[#333] font-medium">
                  Borrowing{" "}
                </label>
                <input
                  type="text"
                  className="form-control w-full py-3 px-4 mt-3"
                  id="borrowing"
                  aria-describedby="helpId"
                  placeholder="$1000"
                />
              </div>
              <div className="form-group mb-5">
                <label
                  for="type-term"
                  className="text-lg text-[#333] font-medium">
                  {" "}
                  Term of use{" "}
                </label>
                <input
                  type="text"
                  className="form-control w-full py-3 px-4 mt-3"
                  id="type-term"
                  aria-describedby="helpId"
                  placeholder="6 Month"
                />
              </div>
              <div className="form-group mb-5">
                <label
                  for="type-total"
                  className="text-lg text-[#333] font-medium">
                  {" "}
                  The total you will pay{" "}
                </label>
                <input
                  type="text"
                  className="form-control w-full py-3 px-4 mt-3"
                  id="type-total"
                  aria-describedby="helpId"
                  placeholder="$112200"
                />
              </div>
              <button className="btn-left-to-right mt-4">
                Applay For the loan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
