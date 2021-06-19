import {React, useState } from 'react';
import '../css/Schedule.css';

function Schedule(props) {

  return (
    <main>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr className="bg-light-gray">
                <th className="text-uppercase">Time
                </th>
                <th className="text-uppercase">Monday</th>
                <th className="text-uppercase">Tuesday</th>
                <th className="text-uppercase">Wednesday</th>
                <th className="text-uppercase">Thursday</th>
                <th className="text-uppercase">Friday</th>
                <th className="text-uppercase">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle">07:00am</td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Fundamentals Jiujitsu</span>
                  <div className="margin-10px-top font-size14">7:00-8:00</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals Jiujitsu</span>
                  <div className="margin-10px-top font-size14">7:00-8:00</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddyy</div>
                </td>

                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals Jiujitsu</span>
                  <div className="margin-10px-top font-size14">7:00-8:00</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals Jiujitsu</span>
                  <div className="margin-10px-top font-size14">7:00-8:00</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Fundamentals Jiujitsu</span>
                  <div className="margin-10px-top font-size14">7:00-8:00</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td className="bg-light-gray">
                </td>
              </tr>
              <tr>
                <td className="align-middle">8:00am</td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                  <div className="margin-10px-top font-size14">8:00-9:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray">
                </td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                  <div className="margin-10px-top font-size14">8:00-9:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                  <div className="margin-10px-top font-size14">8:00-9:00</div>
                  <div className="font-size13 text-light-gray">Marta Healy</div>
                </td>
                <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                  <div className="margin-10px-top font-size14">8:00-9:00</div>
                  <div className="font-size13 text-light-gray">James Smith</div>
                </td>
                <td className="bg-light-gray">
                </td>
              </tr>
              <tr>
                <td className="align-middle">17:00pm</td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                  <div className="margin-10px-top font-size14">17:00-18:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                  <div className="margin-10px-top font-size14">17:00-18:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                  <div className="margin-10px-top font-size14">17:00-18:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                  <div className="margin-10px-top font-size14">17:00-18:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                  <div className="margin-10px-top font-size14">17:00-18:00</div>
                </td>
                <td>
                  <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                  <div className="margin-10px-top font-size14">17:00-18:00</div>
                </td>
              </tr>
              <tr>
                <td className="align-middle">18:00pm</td>
                <td className="bg-light-gray">
                </td>
                <td>
                  <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                  <div className="margin-10px-top font-size14">18:00-19:00</div>
                  <div className="font-size13 text-light-gray">Kate Alley</div>
                </td>
                <td>
                  <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</span>
                  <div className="margin-10px-top font-size14">18:00-19:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                  <div className="margin-10px-top font-size14">18:00-19:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray">

                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                  <div className="margin-10px-top font-size14">18:00-19:00</div>
                  <div className="font-size13 text-light-gray">Marta Healy</div>
                </td>
              </tr>
              <tr>
                <td className="align-middle">19:00pm</td>
                <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                  <div className="margin-10px-top font-size14">19:00-20:00</div>
                  <div className="font-size13 text-light-gray">James Smith</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                  <div className="margin-10px-top font-size14">19:00-20:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
                <td className="bg-light-gray">

                </td>
                <td>
                  <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                  <div className="margin-10px-top font-size14">19:00-20:00</div>
                  <div className="font-size13 text-light-gray">James Smith</div>
                </td>
                <td>
                  <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                  <div className="margin-10px-top font-size14">19:00-20:00</div>
                  <div className="font-size13 text-light-gray">Marta Healy</div>
                </td>
                <td>
                  <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                  <div className="margin-10px-top font-size14">19:00-20:00</div>
                  <div className="font-size13 text-light-gray">Ivana Wong</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Schedule
