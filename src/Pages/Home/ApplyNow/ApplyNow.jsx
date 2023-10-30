import React from 'react';
import CommonTitle from '../../Shared/CommonTitle/CommonTitle';
import './apply.css'
const ApplyNow = () => {
    return (
        <div className='max-w-screen-xl m-auto py-20'>
            {/* ------ common title use for apply now title ------- */}
            <div className='text-center w-full md:w-3/5 m-auto'>
                <CommonTitle title={'funding circles'} subtitle={'You deserve better business loan'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></CommonTitle>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-0'>
            <div className="apply-now-left-test">
                        <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-[#11111]">We usually follow 4 steps to get a better business loans.</h2>
                        <div className="step-timeline mb-5">
                            <ul>
                                <li data-counter="1">
                                    <strong>Apply in 10 minutes</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li data-counter="2">
                                    <strong>Apply in 10 minutes</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li data-counter="3">
                                    <strong>Apply in 10 minutes</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li data-counter="4">
                                    <strong>Apply in 10 minutes</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                    <div className="calculate-rate bg-[#fdebeb]">
                        <div className="finix-text text-center mb-3">
                            <h6> Calculate your rate </h6>
                            <h3>How much do you need?</h3>
                        </div>

                        <div className="calculate-from py-6 px-8">
                            <form action="#">

                                <div className="form-group">
                                  <label for="type-money"> Type The Money </label>
                                  <input type="text"
                                    className="form-control w-full py-3 px-4" id="type-money" aria-describedby="helpId" placeholder="$1000" />
                                </div>

                                <div className="form-group">
                                  <label for="select-money">  Select The Month/Years  </label>

                                  <select id="select-money" className="form-select" aria-label="Default select example">
                                    <option value="5">1 Month</option>
                                  </select>

                                </div>
                                <div className="form-group">
                                  <label for="borrowing">Borrowing </label>
                                  <input type="text"
                                    className="form-control w-full py-3 px-4" id="borrowing" aria-describedby="helpId" placeholder="$1000" />
                                </div>
                                <div className="form-group">
                                  <label for="type-term">  Term of use  </label>
                                  <input type="text"
                                    className="form-control w-full py-3 px-4" id="type-term" aria-describedby="helpId" placeholder="6 Month" />
                                </div>
                                <div className="form-group">
                                  <label for="type-total">  The total you will pay  </label>
                                  <input type="text"
                                    className="form-control w-full py-3 px-4" id="type-total" aria-describedby="helpId" placeholder="$112200" />
                                </div>
                                <button className="btn btn-primary w-100 mt-4">Applay For the loan</button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ApplyNow;