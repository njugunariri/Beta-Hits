import "./About.css";
import BetaImage from "/Beta.jpg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaMusic,
} from "react-icons/fa";
import Sidebar from "../../Layouts/SideBar/Sidebar";

function About() {
  const contacts = [
    { name: "Beta Hits", email: "betahits@gmail.com", phone: "0123456789" },
  ];

  return (
    <div className="about-container">
      <div className="logo">
        <img src={BetaImage} alt="Beta Music Logo" />
      </div>
      <section className="section-1">
        <h1> About Beta Hits</h1>
        <p>
          {" "}
          Beta Hits is a music platform that allows you to get access to the
          hottest music. With Beta Hits you can; Create your profile,Search your
          favourite music,Save or delete your music and you can also add your
          own playlist as a saved song to organise your music.Our platform is designed to be
          intuitive, easy to use and access. With Beta Hits, you can stay
          connected to the world of music. Join our community of music lovers
          today and start discovering the hottest new music now!
        </p>
      </section>
      <section className="section-2">
        <h2>Our Team</h2>
        <p>
          Beta music is built with love by a team of passionate music lovers{" "}
        </p>
      </section>
      <section className="section-3">
        <h3> Contact Us</h3>
        <p> Have a question or feedback? We would love to hear from you!</p>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <a href={contact.name}>
                <FaMusic /> {contact.name}
              </a>
              <br />
              <a href={contact.email}>
                <FaEnvelope /> {contact.email}
              </a>
              <br />
              <a href={contact.phone}>
                <FaPhoneAlt /> {contact.phone}
              </a>
              <br />
            </li>
          ))}
        </ul>
      </section>
      <section className="section-4">
        <div>
          <h3>Follow Us</h3>
          <p>
            <FaTwitter />{" "}
            <a href="https://twitter.com/betahitstwitter">Beta Hits</a>
          </p>
          <p>
            <FaInstagram />{" "}
            <a href="https://instagram.com/betahitsinstagram"> Beta Hits</a>
          </p>
        </div>
      </section>
      <Sidebar />
    </div>
  );
}

export default About;
