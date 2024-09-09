import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import "./LaunchCard.css";
import { PREVIOUS_API, UPCOMING_API } from "../../constants";
import useLaunchpad from "../../store/hooks/useLaunchPad";
import useRocket from "../../store/hooks/useRocket";
import { Link } from "react-router-dom";
import reddit from "../../assets/reddit.png";
import wiki from "../../assets/wiki.png";
import crew from "../../assets/crew.svg";
import youtubeLogo from "../../assets/youtubeLogo.png";

const LaunchCard = ({ upcoming }) => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [launch, setLaunch] = useState({
    mission_name: "",
    rocket_name: "",
    date: "",
    flight_number: "",
    launchpad_name: "",
  });

  const { rocketname } = useRocket(launch?.rocket_name);
  const { launchpadName } = useLaunchpad(launch?.launchpad_name);

  const upComing = async () => {
    setloading(true);
    const data = await fetch(upcoming ? UPCOMING_API : PREVIOUS_API);
    setloading(false);
    const JsonData = await data.json();
    setData(JsonData);
    setLaunch({
      mission_name: JsonData.name,
      rocket_name: JsonData.rocket,
      date: JsonData.date_utc.slice(0, 10),
      flight_number: JsonData.flight_number,
      launchpad_name: JsonData.launchpad,
    });
  };

  useEffect(() => {
    upComing();
  }, [upcoming]);

  return (
    <div className="box upcoming-launch-container">
      {loading ? (
        <MoonLoader className="loader" color="white" />
      ) : (
        <>
          <div className="upcoming-launch-header">
            {upcoming ? "Upcoming Launch" : "Previous Launch"}
          </div>
          <div className="upcoming-launch-wrapper-upper">
            <div className="upcoming-launch-info">
              <div className="launch-detail">
                <div className="launch-label">MISSION NAME</div>
                <div className="launch-value">
                  {launch?.mission_name || "N/A"}
                </div>
              </div>
              <div className="launch-detail">
                <div className="launch-label">ROCKET</div>
                <div className="launch-value">{rocketname || "N/A"}</div>
              </div>
              <div className="launch-detail">
                <div className="launch-label">FLIGHT NUMBER</div>
                <div className="launch-value">
                  {launch?.flight_number || "N/A"}
                </div>
              </div>
            </div>
            <div>
              <div className="launch-logo-label">
                {upcoming ? "ROCKET LOGO" : "MISSION PATCH"}
              </div>
              <div className="launch-card-logo-container">
                {upcoming ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Falcon_Heavy_logo.svg/105px-Falcon_Heavy_logo.svg.png"
                    alt="rocketLogo"
                  />
                ) : (
                  <img
                    src="https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png"
                    alt="Mission patch"
                    className="sc-bdfBQB sc-hKgJUU dlkYfS"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="upcoming-launch-wrapper-upper">
            <div>
              <div className="launch-detail">
                <div className="launch-label">TIME (UTC)</div>
                <div className="launch-value">{launch?.date || "N/A"}</div>
              </div>

              <div className="links-section">
                <p>LINKS</p>
                <div className="links-container">
                  {data?.links?.wikipedia ? (
                    <Link
                      to={data?.links?.wikipedia}
                      className="link-icon"
                      target="_blank"
                    >
                      <img src={wiki} alt="wiki" />
                    </Link>
                  ) : (
                    <div className="link-placeholder">
                      <img src={wiki} alt="wiki" />
                    </div>
                  )}
                  {data?.links?.webcast ? (
                    <Link
                      to={data?.links?.webcast}
                      className="link-icon"
                      target="_blank"
                    >
                      <img src={youtubeLogo} alt="youtube" />
                    </Link>
                  ) : (
                    <div className="link-placeholder">
                      <img src={youtubeLogo} alt="youtube" />
                    </div>
                  )}
                  {data?.links?.reddit?.launch ? (
                    <Link
                      to={data?.links?.reddit?.launch}
                      className="link-icon"
                      target="_blank"
                    >
                      <img src={reddit} alt="reddit" />
                    </Link>
                  ) : (
                    <div className="link-placeholder">
                      <img src={reddit} alt="reddit" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="launch-detail">
              <div className="launch-label">
                {upcoming ? "LAUNCHPAD" : "CREW"}
              </div>
              {upcoming ? (
                <div className="launch-value">{launchpadName || "N/A"}</div>
              ) : (
                <div>
                  {data?.crew?.map((i) => (
                    <img
                      key={i}
                      src={crew}
                      alt="crew"
                      className="xl:w-7 lg:w-5 w-6"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LaunchCard;
