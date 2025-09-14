

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-gray-800 text-white">

      {/* Government Logos Section */}
      <div className="bg-white/95 py-8 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 flex flex-wrap justify-between items-center gap-10">

          {[
            { label: "NHA", title: "national", subtitle: "health authority", bg: "bg-blue-800" },
            { label: "MoH", title: "MINISTRY OF", subtitle: "HEALTH AND FAMILY WELFARE", bg: "bg-blue-800" },
            { label: "MeitY", title: "MINISTRY OF", subtitle: "ELECTRONICS AND INFORMATION TECHNOLOGY", bg: "bg-blue-800" },
            { label: "GOV", title: "india.gov.in", subtitle: "Government of India", bg: "bg-gradient-to-br from-orange-600 to-yellow-500" },
            { label: "DI", title: "Digital India", subtitle: "Power To Empower", bg: "bg-gradient-to-br from-green-500 to-green-800" },
          ].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 min-w-[200px] flex-1">
              <div className={`w-12 h-12 ${logo.bg} text-white font-bold text-xs flex items-center justify-center rounded`}>
                {logo.label}
              </div>
              <div className="text-gray-800">
                <h4 className="text-sm font-bold mb-1">{logo.title}</h4>
                <p className="text-xs text-gray-500">{logo.subtitle}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Address</h4>
            <address className="text-gray-300 mb-4 not-italic">
              National Health Authority 9th Floor,<br />
              Tower-I, Jeevan Bharati Building,<br />
              Connaught Place, New Delhi - 110001
            </address>
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Email</h4>
            <p className="text-gray-300 mb-2">abdm[at]nha[dot]gov[dot]in</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Toll-free number</h4>
            <p className="text-gray-300 mb-4">1800-11-4477 / 14477</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Social media</h4>
            <div className="flex flex-wrap gap-3">
              {["Facebook","YouTube","Twitter","Instagram","LinkedIn"].map((name, idx) => (
                <a key={idx} href="#" className="w-11 h-11 bg-white/10 rounded flex items-center justify-center text-white border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition" title={name}>
                  {/* Insert SVG icon here */}
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {["Ministry of Health and Family Welfare","Ayushman Bharat Digital Mission","Grievance portal","FAQs"].map((link, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300 hover:text-white">● {link}</li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Policies</h3>
            <ul className="space-y-3">
              {["Health Data Management","Data Privacy Policy","Privacy Policy","Terms of Use"].map((link, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300 hover:text-white">● {link}</li>
              ))}
            </ul>
          </div>

          {/* ABHA Application */}
          <div>
            <h3 className="text-xl font-semibold mb-6">ABHA Application</h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 justify-center">
                <div className="w-24 h-24 bg-white rounded flex items-center justify-center">QR</div>
                <div className="w-24 h-24 bg-white rounded flex items-center justify-center">QR</div>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                {["Google Play","App Store"].map((app, idx) => (
                  <a key={idx} href="#" className="bg-black text-white rounded px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition">
                    {/* Insert SVG for store */}
                    {app}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black/20 py-5 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 flex flex-wrap justify-between items-center gap-3 text-sm text-gray-300">
          <p>This website belongs to National Health Authority, Ministry of Health and Family Welfare, Government of India.</p>
          <div className="text-gray-400">Version: 2.1.0</div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
