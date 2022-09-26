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
              <img className="logo" alt="Logo" src={logoImg} />
            </a>
          </th>
          <th>
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              <img
                class="linkedin_logo"
                alt="LinkedIn Logo"
                src={linkedinImg}
              />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="banner" colSpan="3">
            <a href={bannerLink} target="_blank" rel="noreferrer">
              <img className="banner_img" alt="Banner" src={bannerImg} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmailSignature;
