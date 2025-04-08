import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header/Nav */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SaPHaRI Lab at CWRU</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="hover:underline">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" className="hover:underline">
              Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/publications" className="hover:underline">
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink to="/teaching" className="hover:underline">
              Teaching
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className="hover:underline">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hero Banner */}
      <div className="w-full bg-blue-800">
        <img
          src="/images/cover-splash.png"
          alt="ERIE Lab Splash"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-xl mb-6">
          In the Social and Physical Human-Robot Interaction (SaPHaRI) Lab at
          Case Western Reserve University’s Case School of Engineering, we focus
          on social and physical human-robot interaction.
        </h3>

        <img
          src="/images/SaPHaRI_Logo.png" //Logo needed
          alt="SaPHaRI Lab Logo"
          className="mx-auto my-10"
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600"></footer>
    </div>
  );
}
