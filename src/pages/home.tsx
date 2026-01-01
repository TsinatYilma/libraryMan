import React from "react";

import {
  BookOpen,
  Users,
  BookMarked,
  Settings,
  ArrowRight,
} from "lucide-react";
import { StatCard } from "../components/StatCard.tsx";
import { ActionButton } from "../components/ActionButton.tsx";

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="">
        <div className="">
          <div className="">
            <img
              src={"../assets/library-icon.png"}
              alt="Library Management System"
              className=""
            />
          </div>

          <h1 className="">
            Welcome to the Library
            <span className="">Management System</span>
          </h1>

          <p className="">
            Stay organized and efficient with our elegant solution for managing
            your library's collection, members, and transactions.
          </p>

          <div className="">
            <button className="">
              Start Managing Books
              <ArrowRight className="" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="">
        <div className="">
          <div className="">
            <h2 className="">Library Overview</h2>
            <p className="">Your library at a glance</p>
          </div>

          <div className="">
            <div className="">
              <StatCard
                title="Total Books"
                value={120}
                description="Books are ready for checkout!"
                icon={BookOpen}
              />
            </div>
            <div className="">
              <StatCard
                title="Total Members"
                value={45}
                description="Members are actively using the library."
                icon={Users}
              />
            </div>
            <div className="">
              <StatCard
                title="Books Issued"
                value={30}
                description="Books are currently issued to members."
                icon={BookMarked}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="">
            <ActionButton
              label="Manage Books"
              icon={BookOpen}
              variant="primary"
            />
            <ActionButton
              label="Manage Members"
              icon={Users}
              variant="success"
            />
            <ActionButton label="Settings" icon={Settings} variant="warning" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="">
        <div className="">
          <p className="">
            © 2026 Library Management System. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
