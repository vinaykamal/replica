/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import SavartLogo from "./Assets/savartlogo.svg";
import graph from "./Assets/image 2.png";
import graph2 from "./Assets/image1.png";
import "./searchbar.css";
import CardList from "./components/smtg";
import BookmarkList from "./components/bookmark";
import RecentList from "./components/recent";
import laptop from "./Assets/laptop.png"

function App() {
  return (
    <div className="App">
      <div className="navbar">
        {/* display:flex flex-direction: column */}
        <div id="right-nav">
          <img src={SavartLogo} alt="savartlogo" />
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Benefits</a>
          <a href="#">...</a>
        </div>
        <div id="left-nav">
          <a href="tel:+91-9573720665">+91-9573720665</a>
          <button class="button rounded-corners" type="button">
            Get Started
          </button>
        </div>
        <div></div>
      </div>

      <div className="mainContainer">
        <div className="mainContainer_left">
          <div>
            <h1>
              Driven by <font color="#0000ffcf">Research</font> Accelerated by{" "}
              <font color="#0000ffcf">AI </font>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="mainContainer_right">
          <div className="circle1"></div>
          <img src={graph} alt="graph" />
          <img src={graph2} alt="graph2" />
        </div>
      </div>

      <div className="searchbar">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="searchstock" />
        </form>
      </div>
    <div className="mid-section">
      <div className="curr-trend-head">
        <div className="heading">
          <h1>Currently Trending</h1>
        </div>
        <div className="svg">
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.5684 2.48409L6.81835 12.2341C6.6071 12.4453 6.50104 12.7226 6.50104 12.9999C6.50104 13.2772 6.6071 13.5546 6.81835 13.7658L16.5684 23.5158C16.992 23.9394 17.6767 23.9394 18.1003 23.5158C18.5239 23.0922 18.5239 22.4076 18.1003 21.984L9.11621 12.9999L18.1003 4.01582C18.5239 3.59224 18.5239 2.90768 18.1003 2.48409C17.6767 2.06051 16.992 2.06051 16.5684 2.48409Z"
              fill="#DBDBDB"
            />
          </svg>
          </button>
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M9.43162 2.48409L19.1816 12.2341C19.3929 12.4453 19.499 12.7226 19.499 12.9999C19.499 13.2772 19.3929 13.5546 19.1816 13.7658L9.43162 23.5158C9.00803 23.9394 8.3233 23.9394 7.89972 23.5158C7.47614 23.0922 7.47614 22.4076 7.89972 21.984L16.8838 12.9999L7.89972 4.01582C7.47614 3.59224 7.47614 2.90768 7.89972 2.48409C8.3233 2.06051 9.00803 2.06051 9.43162 2.48409Z"
              fill="#676767"
            />
          </svg>
          </button>
        </div>
      </div>

      <CardList />

      <div className="curr-trend-head">
        <div className="heading">
          <h1>Your Bookmark</h1>
        </div>
        <div className="svg">
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.5684 2.48409L6.81835 12.2341C6.6071 12.4453 6.50104 12.7226 6.50104 12.9999C6.50104 13.2772 6.6071 13.5546 6.81835 13.7658L16.5684 23.5158C16.992 23.9394 17.6767 23.9394 18.1003 23.5158C18.5239 23.0922 18.5239 22.4076 18.1003 21.984L9.11621 12.9999L18.1003 4.01582C18.5239 3.59224 18.5239 2.90768 18.1003 2.48409C17.6767 2.06051 16.992 2.06051 16.5684 2.48409Z"
              fill="#DBDBDB"
            />
          </svg>
          </button>
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M9.43162 2.48409L19.1816 12.2341C19.3929 12.4453 19.499 12.7226 19.499 12.9999C19.499 13.2772 19.3929 13.5546 19.1816 13.7658L9.43162 23.5158C9.00803 23.9394 8.3233 23.9394 7.89972 23.5158C7.47614 23.0922 7.47614 22.4076 7.89972 21.984L16.8838 12.9999L7.89972 4.01582C7.47614 3.59224 7.47614 2.90768 7.89972 2.48409C8.3233 2.06051 9.00803 2.06051 9.43162 2.48409Z"
              fill="#676767"
            />
          </svg>
          </button>
        </div>
      </div>

      <BookmarkList />

      <div className="curr-trend-head">
        <div className="heading">
          <h1>Recently Viewed</h1>
        </div>
        <div className="svg">
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.5684 2.48409L6.81835 12.2341C6.6071 12.4453 6.50104 12.7226 6.50104 12.9999C6.50104 13.2772 6.6071 13.5546 6.81835 13.7658L16.5684 23.5158C16.992 23.9394 17.6767 23.9394 18.1003 23.5158C18.5239 23.0922 18.5239 22.4076 18.1003 21.984L9.11621 12.9999L18.1003 4.01582C18.5239 3.59224 18.5239 2.90768 18.1003 2.48409C17.6767 2.06051 16.992 2.06051 16.5684 2.48409Z"
              fill="#DBDBDB"
            />
          </svg>
          </button>
          <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M9.43162 2.48409L19.1816 12.2341C19.3929 12.4453 19.499 12.7226 19.499 12.9999C19.499 13.2772 19.3929 13.5546 19.1816 13.7658L9.43162 23.5158C9.00803 23.9394 8.3233 23.9394 7.89972 23.5158C7.47614 23.0922 7.47614 22.4076 7.89972 21.984L16.8838 12.9999L7.89972 4.01582C7.47614 3.59224 7.47614 2.90768 7.89972 2.48409C8.3233 2.06051 9.00803 2.06051 9.43162 2.48409Z"
              fill="#676767"
            />
          </svg>
          </button>
        </div>
      </div>

      <RecentList />

      </div>

      <div className="last-section">
        <div className="last-text"><h1>GIF animation<br/> explaining the report</h1>
        <div>Lorem Ipsum is simply dummy text of the printing <br/> and typesetting
              industry.</div>
        </div>
        <div>
        <img src={laptop}></img>
        </div>
      </div>

      <div className="footer">
        <div className="left-footer">x</div>
        <div className="right-footer">
          <div>y</div>
          <div>|</div>
          <div>z</div>
        </div>
      </div>
    </div>
  );
}

export default App;
