import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="mt-20 mb-5">
      <div className="mx-auto w-fit p-2 flex gap-8">
        <a href="https://www.linkedin.com/in/hellojuliaefern/" target="_blank">
          <FaLinkedin className="rotating-icon" size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
