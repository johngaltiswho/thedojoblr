import {React } from 'react';
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
                <td className="align-middle">07:30am</td>
                <td>
                  <p className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Jiujitsu 101 <br/> Gi</p>
                  <div className="margin-10px-top font-size14">7:30-8:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu 101 <br/> No-Gi</p>
                  <div className="margin-10px-top font-size14">7:30-8:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddyy</div>
                </td>

                <td>
                  <p className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu 101 <br/> Gi</p>
                  <div className="margin-10px-top font-size14">7:30-8:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu 101 <br/> No-Gi</p>
                  <div className="margin-10px-top font-size14">7:30-8:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu 101 <br/> Gi</p>
                  <div className="margin-10px-top font-size14">7:30-8:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td className="bg-light-gray">
                </td>
              </tr>
              <tr>
                <td className="align-middle">11:00am</td>
                <td className="bg-light-gray">
                </td>
                <td className="bg-light-gray">
                </td>
                <td className="bg-light-gray">
                </td>
                <td className="bg-light-gray">
                </td>
                <td className="bg-light-gray">
                </td>
                <td>
                  <p className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu Open Mat </p>
                  <div className="margin-10px-top font-size14">11:00-12:00</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
              </tr>
              <tr>
                <td className="align-middle">17:30pm</td>
                <td>
                  <p className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu Pro Class <br/> No-Gi</p>
                  <div className="margin-10px-top font-size14">17:30-18:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu Pro Class <br/> Gi</p>
                  <div className="margin-10px-top font-size14">17:30-18:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu Pro Class <br/> No-Gi</p>
                  <div className="margin-10px-top font-size14">17:30-18:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu Pro Class <br/> Gi</p>
                  <div className="margin-10px-top font-size14">17:30-18:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td>
                  <p className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Jiujitsu Pro Class <br/> No-Gi</p>
                  <div className="margin-10px-top font-size14">17:30-18:30</div>
                  <div className="font-size13 text-light-gray">Uma Maheshwar Reddy</div>
                </td>
                <td className="bg-light-gray">
                </td>
              </tr>
              <tr>
                <td className="align-middle">19:00pm</td>
                <td>
                  <p className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</p>
                  <div className="margin-10px-top font-size14">19:00-20:30</div>
                  <div className="font-size13 text-light-gray">Vinayak Shetty</div>
                </td>
                <td className="bg-light-gray">
                </td>
                <td>
                  <p className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</p>
                  <div className="margin-10px-top font-size14">19:00-20:30</div>
                  <div className="font-size13 text-light-gray">Vinayak Shetty</div>
                </td>
                <td className="bg-light-gray">
                </td>
                <td>
                  <p className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</p>
                  <div className="margin-10px-top font-size14">19:00-20:30</div>
                  <div className="font-size13 text-light-gray">Vinayak Shetty</div>
                </td>
                <td className="bg-light-gray">
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
