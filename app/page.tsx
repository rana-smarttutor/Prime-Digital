import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Code2,
  Globe2,
  GraduationCap,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  UserRoundCheck,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

type Program = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type WhyChoose = {
  icon: LucideIcon;
  title: string;
};

const programs: Program[] = [
  {
    icon: Code2,
    title: "Technology & Coding",
    description: "Build robust coding skills for a digital tomorrow.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Digital Marketing",
    description: "Learn strategies to lead in the digital business world.",
  },
  {
    icon: Palette,
    title: "Design & Creative Arts",
    description: "Unleash creativity with modern design and tools.",
  },
  {
    icon: Bot,
    title: "AI, Robotics & Future Tech",
    description: "Explore AI, robotics and emerging technologies.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship & Innovation",
    description: "Turn ideas into impact through innovation and leadership.",
  },
];

const stats: Stat[] = [
  {
    icon: Users,
    value: "25K+",
    label: "Students",
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "Expert Courses",
  },
  {
    icon: Trophy,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Target,
    value: "95%",
    label: "Placement Rate",
  },
];

const whyChoose: WhyChoose[] = [
  {
    icon: UserRoundCheck,
    title: "Industry Expert Mentors",
  },
  {
    icon: Sparkles,
    title: "Hands-on Projects",
  },
  {
    icon: Trophy,
    title: "Future-Ready Curriculum",
  },
  {
    icon: Users,
    title: "Personalised Learning",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
  },
];

export default function Home() {
  return (
    <main className="pds-page">
      <header className="pds-header">
        <Link
          href="/"
          className="pds-logo-link"
          aria-label="Prime Digital School Home"
        >
          <Image
            src="/pds-assets/pds-logo.jpeg"
            alt="Prime Digital School"
            width={420}
            height={140}
            priority
            className="pds-logo"
          />
        </Link>

        <nav className="pds-nav" aria-label="Main Navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/signup" className="pds-apply-btn">
          Apply Now <ArrowRight size={18} />
        </Link>
      </header>

      <section className="pds-hero">
        <div className="pds-hero-content">
          <div className="pds-badge">
            <GraduationCap size={17} />
            Future-Ready Education
          </div>

          <h1>
            Building Future Leaders with <span>Digital Skills</span>
          </h1>

          <p>
            Practical. Innovative. Industry-ready. Education for 6th to 12th
            Standard.
          </p>

          <div className="pds-hero-actions">
            <Link href="/programs" className="pds-primary-btn">
              Explore Programs <ArrowRight size={18} />
            </Link>

            <Link href="/about" className="pds-secondary-btn">
              Take a Tour <Play size={18} />
            </Link>
          </div>
        </div>

        <div className="pds-hero-image-wrap">
          <Image
            src="/pds-assets/hero-students.png"
            alt="Prime Digital School students"
            fill
            priority
            sizes="100vw"
            className="pds-hero-image"
          />
        </div>
      </section>

      <section className="pds-stats-bar">
        {stats.map(({ icon: Icon, value, label }) => (
          <div className="pds-stat" key={label}>
            <Icon size={44} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}

        <div className="pds-stats-message">
          <h3>
            Learn. Build.
            <br />
            Lead the Future.
          </h3>
          <p>
            Hands-on digital education that prepares you for tomorrow&apos;s
            world.
          </p>
        </div>
      </section>

      <section className="pds-programs-section">
        <div className="pds-section-heading">
          <div>
            <h2>Explore Our Future-Ready Programs</h2>
            <span />
          </div>

          <Link href="/programs">
            View All Programs <ArrowRight size={15} />
          </Link>
        </div>

        <div className="pds-program-grid">
          {programs.map(({ icon: Icon, title, description }) => (
            <article className="pds-program-card" key={title}>
              <div className="pds-program-icon">
                <Icon size={46} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>

              <Link
                href="/programs"
                className="pds-card-arrow"
                aria-label={title}
              >
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pds-feature-grid">
        <article className="pds-promo-card">
          <div className="pds-promo-content">
            <h2>
              Innovative Learning
              <br />
              for a Digital Future
            </h2>

            <p>
              Industry-focused curriculum with real-world projects and expert
              mentorship.
            </p>

            <Link href="/programs">
              Discover More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="pds-promo-image">
            <Image
              src="/pds-assets/laptop-student.jpg"
              alt="Student using laptop"
              width={700}
              height={500}
            />
          </div>
        </article>

        <article className="pds-excellence-card">
          <div className="pds-award-icon">★</div>

          <h2>Excellence in Education</h2>

          <p>
            Empowering students with skills, knowledge, and confidence to
            succeed in a global world.
          </p>
        </article>
      </section>

      <section className="pds-why-testimonial">
        <div className="pds-why-card">
          <div className="pds-small-label">Why Choose</div>

          <h2>Prime Digital School?</h2>

          <div className="pds-why-grid">
            {whyChoose.map(({ icon: Icon, title }) => (
              <div className="pds-why-item" key={title}>
                <Icon size={32} />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pds-campus-card">
          <Image
            src="/pds-assets/campus-building.jpg"
            alt="Prime Digital School campus"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="pds-campus-image"
          />
        </div>

        <div className="pds-testimonial-card">
          <div className="pds-quote">“</div>

          <p>
            Prime Digital School helped me build real-world skills and
            confidence in technology.
          </p>

          <div className="pds-student-review">
            <div className="pds-avatar">A</div>

            <div>
              <strong>Aranya Patil</strong>
              <span>Class 11 Student</span>
              <small>★★★★★</small>
            </div>
          </div>
        </div>
      </section>

      <footer className="pds-footer">
        <div className="pds-footer-pattern" />

        <div className="pds-footer-grid">
          <div className="pds-footer-brand">
            <div className="pds-footer-logo-card">
              <Image
                src="/pds-assets/pds-logo.jpeg"
                alt="Prime Digital School"
                width={360}
                height={120}
                className="pds-footer-logo"
              />
            </div>

            <p>
              Empowering students with future-ready skills through innovation,
              creativity and digital education.
            </p>

            <div className="pds-footer-socials">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="YouTube">
                YT
              </a>
              <a href="#" aria-label="LinkedIn">
                IN
              </a>
            </div>
          </div>

          <div className="pds-footer-column">
            <h4>Quick Links</h4>
            <a href="#about">About Us</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="pds-footer-column">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#login">Login</a>
            <a href="#apply">Apply Now</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="pds-footer-column pds-footer-contact">
            <h4>Contact Us</h4>

            <div className="pds-footer-contact-item">
              <MapPin size={18} />
              <span>Vashi,sector 17, Navi Mumbai</span>
            </div>

            <div className="pds-footer-contact-item">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            <div className="pds-footer-contact-item">
              <Mail size={18} />
              <span>info@primedigitalschool.com</span>
            </div>
          </div>
          <div className="pds-footer-map-card">
            <iframe
              title="Prime Digital School Location"
              src="https://maps.google.com/maps?q=Sector%2017%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703&z=15&output=embed"              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="pds-footer-bottom">
          <p>© 2026 Prime Digital School. All rights reserved.</p>

          <div className="pds-footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
