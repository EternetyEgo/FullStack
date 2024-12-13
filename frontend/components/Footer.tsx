const Footer = () => {
  return (
    <footer
      className="bg-black py-10 text-white w-full"
      style={{ boxShadow: "0 -1px 3px rgba(255, 255, 255, 0.5)" }}
    >
      <div className="px-4 lg:px-8 w-[90%] mx-auto">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start w-full sm:w-auto">
            <img src="https://www.behance.net/favicon.ico" alt="Behance Logo" className="w-24 mb-4" />
            <p className="text-lg">© 2024 Adobe Inc. All rights reserved.</p>
          </div>

          {/* Built For Creatives */}
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-4">Built For Creatives</h3>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Try Behance Pro
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Find Inspiration
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Get Hired
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Sell Creative Assets
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Sell Freelance Services
            </a>
          </div>

          {/* Find Talent */}
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-4">Find Talent</h3>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Post a Job
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Graphic Designers
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Photographers
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Video Editors
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Web Designers
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Illustrators
            </a>
          </div>

          {/* Behance */}
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-4">Behance</h3>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              About Behance
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Adobe Portfolio
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Download the App
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Blog
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Careers
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Help Center
            </a>
            <a href="#" className="block text-lg mb-2 hover:opacity-80">
              Contact Us
            </a>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-lg hover:opacity-80">
                Instagram
              </a>
              <a href="#" className="text-lg hover:opacity-80">
                Twitter
              </a>
              <a href="#" className="text-lg hover:opacity-80">
                Pinterest
              </a>
              <a href="#" className="text-lg hover:opacity-80">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 mt-6 text-lg">
          <p>English | TOU | Privacy | Community | Cookie preferences | Do not sell or share my personal information</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
