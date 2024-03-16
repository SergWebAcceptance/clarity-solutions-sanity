import Link from "next/link";
import "@/public/scss/footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="_container">
          <div className="foot-top">
            <Link href="/" className="logo" aria-label="Logo">
              <img src="/images/logo.svg" alt="Logo"/>
            </Link>
            <span></span>
            <nav className="main-menu">
              <Link href="/use-cases">Use Cases</Link>
              <Link href="/tariffs">Tariffs</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/contacts">Contacts</Link>
            </nav>
            <span></span>
            <nav className="legal">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </nav>
          </div>

          <div className="foot-rights">
            <div className="icons-wrap ">
              <a href="mailto:info@clarity-solutions.io">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 9L12 12.5L17 9"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17Z"
                    stroke="#fff"
                    stroke-width="1.5"
                  />
                </svg>
                <span>info@clarity-solutions.io</span>
              </a>
              <a href="#" className="dt-hidden mob-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.118 14.702L14 15.5C11.218 14.104 9.49999 12.5 8.49999 10L9.26999 5.87L7.81499 2H4.06399C2.93599 2 2.04799 2.932 2.21699 4.047C2.63699 6.83 3.87699 11.877 7.49999 15.5C11.305 19.305 16.786 20.956 19.802 21.613C20.967 21.866 22 20.958 22 19.765V16.181L18.118 14.702Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Phone
              </a>
              <a href="#" className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M20 10.4546C20 14.8726 12 22.4546 12 22.4546C12 22.4546 4 14.8726 4 10.4546C4 8.33286 4.84285 6.29803 6.34315 4.79774C7.84344 3.29744 9.87827 2.45459 12 2.45459C14.1217 2.45459 16.1566 3.29744 17.6569 4.79774C19.1571 6.29803 20 8.33286 20 10.4546Z" stroke="white" stroke-width="1.5"/>
                  <path d="M12 11.4546C12.2652 11.4546 12.5196 11.3492 12.7071 11.1617C12.8946 10.9742 13 10.7198 13 10.4546C13 10.1894 12.8946 9.93502 12.7071 9.74748C12.5196 9.55995 12.2652 9.45459 12 9.45459C11.7348 9.45459 11.4804 9.55995 11.2929 9.74748C11.1054 9.93502 11 10.1894 11 10.4546C11 10.7198 11.1054 10.9742 11.2929 11.1617C11.4804 11.3492 11.7348 11.4546 12 11.4546Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Harju Maakond, Tallinn, Lasnamäe Linnaosa, Peteburi tee 2c, 11415, Estonia</span>
              </a>
            </div>

            <div className="soc">
              <a href="https://www.facebook.com/claritysolutions.io" target="_blank">
                <img src="/images/fb.svg" alt="fb"/>
              </a>
              <a href="https://www.instagram.com/claritysolutions.io" target="_blank">
                <img src="/images/inst.svg" alt="inst"/>
              </a>
              <a href="https://twitter.com/csolutions_io"  target="_blank">
                <img src="/images/twiter.svg" alt="twiter"/>
              </a>
              <a href="https://www.linkedin.com/company/claritysolutions-io/" target="_blank">
                <img src="/images/in.svg" alt="linkedin"/>
              </a>
            </div>

            <span>All Rights Reserved. © 2024</span>
          </div>

          <div className="foot-bottom">
            <span>
              Clarity Solutions upholds a robust security program aligned with
              the latest industry standards. This program is tailored to: (i)
              safeguard the security and integrity of customer data, including
              cardholder information, (ii) mitigate threats or risks to the
              security or integrity of customer data, and (iii) prevent
              unauthorised access to such data. Our security protocols adhere to
              the Service Organizational Controls Report. Clarity Solutions and
              its offerings comply with the Payment Card Industry Payment
              Application Data Security Standard (PA-DSS) and PCI Data Security
              Standard (PCI DSS) as applicable to our services.
              <br />
              <br />
              Reputable banks issue Clarity Solutions’ cards under relevant
              regulatory licences. As an authorised Program Manager and
              registered service provider, Clarity Solutions ensures all fund
              transfers are processed through partner financial institutions
              utilising certified “PrepaidGate” technology.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
