import "./smtg.css";
import britlogo from "../Assets/britlogo.png";
import lumaxlogo from "../Assets/lumaxlogo.png";
import dmart from "../Assets/dmartlogo.png";

const CardList = () => {
  const profileList = [
    {
      logopath: britlogo,
      title: "Britannia Industries",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      logopath: lumaxlogo,
      title: "Lumax Industries India Ltd",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
    {
      logopath: dmart,
      title: "D-Mart",
      name: "Britannia",
      shareprice: "65.87",
      price: "₹4267",
    },
  ];

  return (
    <div className="main-div">
      {profileList.map((profile) => {
        return (
          <div className="card-div">
            <div className="bookmark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </div>
            <div className="top-card">
              <div className="card-img">
                <img src={profile.logopath} alt="logo" />
              </div>
              <div className="card-title">
                {profile.title}
                <div className="card-name">{profile.name}</div>
              </div>
            </div>
            <div className="bottom-card">
              <div className="left-bottom">
                <div className="svg-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                  >
                    <rect
                      width="4.57762"
                      height="10.2514"
                      transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.4844 6.02368)"
                      fill="#0E7112"
                    />
                    <rect
                      x="4.03125"
                      y="6.01587"
                      width="4.57762"
                      height="10.4207"
                      transform="rotate(-45 4.03125 6.01587)"
                      fill="#258D10"
                    />
                    <rect
                      width="4.57762"
                      height="11.4132"
                      transform="matrix(-0.00129876 -0.999999 -0.999999 0.00129876 25.9102 4.57764)"
                      fill="#61BF0D"
                    />
                    <rect
                      x="21.3281"
                      y="0.133545"
                      width="4.57762"
                      height="11.444"
                      transform="rotate(-0.0744132 21.3281 0.133545)"
                      fill="#61BF0D"
                    />
                    <rect
                      width="4.57762"
                      height="15.9965"
                      transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 25.207 4.57227)"
                      fill="#61BF0D"
                    />
                  </svg>
                </div>
                <div className="card-shareprice">{profile.shareprice}</div>
              </div>
              <div className="card-price">{profile.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
