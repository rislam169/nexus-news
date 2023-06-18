import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import instagramIcon from "../../assets/instagram.svg";
import SocalMediaLink from "./socal-media-link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* <!--Footer content--> */}
      <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
          <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
            <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
              <div className="flex items-center mb-2">
                <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">
                  Nexus News
                </span>
              </div>
              <p>Nexus News for great newspapper, magazine and articles.</p>
              <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
                <SocalMediaLink
                  title="Facebook"
                  url="https://facebook.com"
                  icon={facebookIcon}
                />
                <SocalMediaLink
                  title="Twitter"
                  url="https://twitter.com"
                  icon={twitterIcon}
                />
                <SocalMediaLink
                  title="YouTube"
                  url="https://youtube.com"
                  icon={youtubeIcon}
                />
                <SocalMediaLink
                  title="Instagram"
                  url="https://instagram.com"
                  icon={instagramIcon}
                />
              </ul>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
              <p className="flex items-center justify-center h-full w-full">
                This website is not a real news portal. Only build for a
                Take-Home challenge for fullStack developer position{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Start footer copyright--> */}
      <div className="footer-dark">
        <div className="container mx-auto py-4 border-t border-gray-200 border-opacity-10">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="d-block my-3">
                Copyright © Nexus News | All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End footer copyright--> */}
    </footer>
  );
}
