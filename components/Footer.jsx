import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="absolute bottom-8 w-full flex justify-center">
      <Link href="https://github.com/hinilyu" target="_blank">
        <GitHubIcon fontSize="large" className="mr-5" />
      </Link>
      <Link href="https://www.linkedin.com/in/daniel-tse24/" target="_blank">
        <LinkedInIcon fontSize="large" className="mr-5" />
      </Link>
      <Link href="mailto:manhin.tse@proton.me">
        <EmailIcon fontSize="large" className="mr-5" />
      </Link>
    </div>
  );
};

export default Footer;
