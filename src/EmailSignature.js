import "./EmailSignature.css";

function EmailSignature({
  name,
  job,
  line1,
  line2,
  bannerLink,
  bannerImg,
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
            <a href={logoLink} target="_blank" rel="noreferrer">
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
            <a href={linkedinLink} target="_blank" rel="noreferrer">
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
            <a href={bannerLink} target="_blank" rel="noreferrer">
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
      </tbody>
    </table>
  );
}

export default EmailSignature;
