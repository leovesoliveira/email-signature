import "./EmailSignature.css";
import { getValidUrl } from "./getValidUrl";

function EmailSignature({
  name,
  job,
  line1,
  line2,
  bannerLink,
  bannerImg,
  bannerSmallLink,
  bannerSmallImg,
  logoLink,
  logoImg,
  linkedinLink,
  linkedinImg,
}) {
  return (
    <table className="tg">
      <thead>
        <tr>
          <th className="username">
            <big style={{ fontWeight: "bold" }}>{name}</big>
            <br />
            <small style={{ fontWeight: "normal" }}>{job}</small>
            <br />
            <br />
            <small style={{ fontWeight: "normal" }}>{line1}</small>
            <br />
            <small style={{ fontWeight: "normal" }}>{line2}</small>
          </th>
          <th>
            <a href={getValidUrl(logoLink)} target="_blank" rel="noreferrer">
              <img
                className="logo"
                alt="Logo"
                width="160"
                height="50"
                src={logoImg || "#"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "https://via.placeholder.com/160x50";
                }}
              />
            </a>
          </th>
          <th>
            <a
              href={getValidUrl(linkedinLink)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin_logo"
                alt="LinkedIn Logo"
                width="32"
                height="32"
                src={linkedinImg || "#"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "https://via.placeholder.com/32x32";
                }}
              />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="banner" colSpan="3">
            <a href={getValidUrl(bannerLink)} target="_blank" rel="noreferrer">
              <img
                className="banner_img"
                alt="Banner"
                width="600"
                height="84"
                src={bannerImg || "#"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "https://via.placeholder.com/600x84";
                }}
              />
            </a>
          </td>
        </tr>

        <tr>
          <td className="banner" colSpan="3">
            <a href={getValidUrl(bannerSmallLink)} target="_blank" rel="noreferrer">
              <img
                  className="banner_img"
                  alt="Banner"
                  width="320"
                  height="32"
                  src={bannerSmallImg || "#"}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://via.placeholder.com/320x32";
                  }}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmailSignature;
