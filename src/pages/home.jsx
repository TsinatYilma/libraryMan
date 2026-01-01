import {
  BookOpen,
  Users,
  BookMarked,
  Settings,
  ArrowRight,
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ActionButton } from "@/components/ActionButton";
import libraryIcon from "@/assets/library-icon.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-scale-in mb-8">
            <img
              src={libraryIcon}
              alt="Library Management System"
              className="w-32 h-32 mx-auto object-contain drop-shadow-sm"
            />
          </div>

          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 leading-tight">
            Welcome to the Library
            <span className="block text-primary mt-2">Management System</span>
          </h1>

          <p className="opacity-0 animate-fade-in-delay-1 text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Stay organized and efficient with our elegant solution for managing
            your library's collection, members, and transactions.
          </p>

          <div className="opacity-0 animate-fade-in-delay-2">
            <button className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              Start Managing Books
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">
              Library Overview
            </h2>
            <p className="text-muted-foreground text-lg">
              Your library at a glance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="opacity-0 animate-fade-in-delay-1">
              <StatCard
                title="Total Books"
                value={120}
                description="Books are ready for checkout!"
                icon={BookOpen}
              />
            </div>
            <div className="opacity-0 animate-fade-in-delay-2">
              <StatCard
                title="Total Members"
                value={45}
                description="Members are actively using the library."
                icon={Users}
              />
            </div>
            <div className="opacity-0 animate-fade-in-delay-3">
              <StatCard
                title="Books Issued"
                value={30}
                description="Books are currently issued to members."
                icon={BookMarked}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="opacity-0 animate-fade-in-delay-3 flex flex-wrap justify-center gap-4">
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
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Library Management System. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
