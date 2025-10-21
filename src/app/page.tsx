"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/button";
import { Loader2, Star, Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import { ThemeSwitcherHome } from "@/components/theme-switcher";
import ShadowPNG from "/public/images/shadow.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col bg-card">
      {/* Navigation */}
      <div className={cn(
        "sticky top-0 z-50 mx-auto flex w-full max-w-screen-lg items-center justify-between p-6 py-3 transition-all duration-300",
        isScrolled && "backdrop-blur-2xl bg-card/40 border-b border-border/30 shadow-lg"
      )}>
        <Link href="/" className="flex h-10 items-center gap-1">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                "group flex gap-3 px-0 text-primary/80 hover:text-primary hover:no-underline",
              )}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                "group flex gap-3 px-0 text-primary/80 hover:text-primary hover:no-underline",
              )}
            >
              Pricing
            </a>
            <a
              href="#results"
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                "group flex gap-3 px-0 text-primary/80 hover:text-primary hover:no-underline",
              )}
            >
              Results
            </a>
          </div>
          <Link
            href="#contact"
            className={buttonVariants({ size: "sm" })}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border/30 shadow-lg">
          <div className="flex flex-col gap-1 p-4 max-w-screen-lg mx-auto">
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
            >
              Pricing
            </a>
            <a
              href="#results"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
            >
              Results
            </a>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(buttonVariants({ size: "sm" }), "mt-2")}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="z-10 mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-6">
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-12 md:p-24">
          <Button
            variant="outline"
            className={cn(
              "hidden h-8 bg-white/40 px-3 text-sm font-bold backdrop-blur hover:text-primary dark:bg-secondary md:flex",
            )}
          >
            <span className="flex items-center gap-2 font-medium text-primary/60">
              Introducing GTM Growth System
            </span>
          </Button>
          <h1 className="font-display text-center text-5xl font-bold leading-tight text-primary md:text-7xl lg:leading-[1.1]">
            Your Pipeline{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              on Automation
            </span>
          </h1>
          <p className="max-w-3xl text-center text-xl !leading-relaxed text-muted-foreground md:text-2xl font-light">
            Qualified leads automatically flowing into your pipeline every week.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 w-full max-w-2xl">
            <div className="flex flex-col items-center gap-2 p-4 sm:p-0">
              <span className="text-3xl sm:text-4xl font-bold text-primary">20hrs/wk</span>
              <span className="text-sm text-muted-foreground text-center">Time Saved</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 sm:p-0 border-t sm:border-t-0 sm:border-l sm:border-r border-border pt-6 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold text-primary">45-150</span>
              <span className="text-sm text-muted-foreground text-center">Qualified Leads/Week</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 sm:p-0 border-t sm:border-t-0 border-border pt-6 sm:pt-0">
              <span className="text-3xl sm:text-4xl font-bold text-primary">100%</span>
              <span className="text-sm text-muted-foreground text-center">Focus on Closing</span>
            </div>
          </div>
          <div className="mt-2 flex w-full items-center justify-center gap-2">
            <Link
              href="#contact"
              className={cn(buttonVariants({ size: "lg" }), "hidden sm:flex")}
            >
              Book Your Free Audit
            </Link>
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "hidden dark:bg-secondary dark:hover:opacity-80 sm:flex",
              )}
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* The Problem Section */}
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-8 p-12">
          <h2 className="font-display text-center text-3xl md:text-4xl font-bold text-primary">
            Your Sales Team Is Drowning in Busy Work
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl">
            Manual prospecting is killing your productivity and revenue potential:
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-4xl border border-border backdrop-blur-sm">
            <div className="flex flex-col items-start gap-4 p-10 lg:p-12 bg-card/50 border-b md:border-b-0 md:border-r border-primary/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary mb-2">20+ hours/week on lead hunting</h3>
                  <p className="text-sm text-muted-foreground">Manual LinkedIn scraping, list building, and research. Time that should be spent closing deals.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 p-10 lg:p-12 bg-card/50 border-b md:border-b-0 md:border-r border-primary/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Poor lead quality = wasted time</h3>
                  <p className="text-sm text-muted-foreground">No systematic qualification. Reps chase unqualified leads and lose deals they never should have pursued.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 p-10 lg:p-12 bg-card/50 border-b md:border-b-0 md:border-r border-primary/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Generic copy-paste outreach</h3>
                  <p className="text-sm text-muted-foreground">No personalization at scale. Messages get ignored because they look like spam templates.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 p-10 lg:p-12 bg-card/50">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Inconsistent pipeline flow</h3>
                  <p className="text-sm text-muted-foreground">Some weeks you have 50 leads, other weeks zero. Can't forecast or plan growth.</p>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
          </div>
          <p className="text-center text-xl font-semibold text-primary mt-4">
            There's a better way.
          </p>
        </div>

        {/* Features Section */}
        <div id="features" className="flex w-full flex-col items-center justify-center gap-2">
          <h2 className="text-center font-serif text-xl font-medium text-primary/60">
            The GTM Growth Engine
          </h2>
          <div className="relative my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full border border-border backdrop-blur-sm">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Automated LinkedIn Scraping",
                description: "Extract 100s of prospects weekly based on your ICP—zero manual work, zero risk"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Automatic Lead Qualification",
                description: "Every lead scored across 50+ criteria—only qualified prospects reach your team"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Personalization at Scale",
                description: "Claude analyzes scraped profiles to craft unique messages—no templates, 100% personalized"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
                title: "Weekly Lead Delivery",
                description: "Consistent flow of qualified leads every week—predictable pipeline you can forecast on"
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-6 p-10 lg:p-12 bg-card/50 border-b md:border-b-0 md:border-r lg:border-r border-primary/10 last:border-r-0">
                <div className="flex h-12 w-12 items-center justify-center bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}

            <div className="absolute left-0 top-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="z-10 flex h-full w-full flex-col items-center justify-center gap-8 p-12">
          <h1 className="font-display text-center text-4xl font-bold leading-tight text-primary md:text-6xl">
            Simple, Predictable Pricing
          </h1>
          <p className="text-center text-lg text-primary/60 max-w-2xl">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0 w-full max-w-6xl mt-8 border border-border backdrop-blur-sm">
            <div className="flex flex-col items-start justify-between gap-6 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-primary/10 bg-card/50">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-2xl font-bold text-primary">Starter</h3>
                <p className="text-sm text-muted-foreground">For solopreneurs & consultants</p>
                <div className="flex flex-col gap-2 my-4">
                  <div className="text-4xl font-bold text-primary">$5,900</div>
                  <p className="text-sm text-muted-foreground">setup fee (one-time)</p>
                  <div className="text-2xl font-bold text-primary mt-2">$899/mo</div>
                  <p className="text-sm text-muted-foreground">subscription</p>
                </div>
                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-xs font-semibold text-primary mb-2">vs Traditional Agency:</p>
                  <p className="text-sm text-muted-foreground">You save <span className="font-bold text-primary">$289k-589k/year</span></p>
                  <p className="text-xs text-muted-foreground mt-1">(Agency costs $25-50k/mo)</p>
                </div>
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 campaign</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Airtable CRM setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>LinkedIn scraping (LGM)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI personalization (Claude)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Email outreach (Plus Vibe)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic n8n workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Email support (48h)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4h onboarding + training</span>
                  </div>
                </div>
              </div>
              <Link
                href="#contact"
                className={cn(buttonVariants({ size: "sm", variant: "outline" }), "w-full")}
              >
                Get Started
              </Link>
            </div>

            <div className="relative flex flex-col items-start justify-between gap-6 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-primary/10 bg-primary/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                RECOMMENDED
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-2xl font-bold text-primary">Growth</h3>
                <p className="text-sm text-muted-foreground">For SMBs & sales teams</p>
                <div className="flex flex-col gap-2 my-4">
                  <div className="text-4xl font-bold text-primary">$12,900</div>
                  <p className="text-sm text-muted-foreground">setup fee (one-time)</p>
                  <div className="text-2xl font-bold text-primary mt-2">$1,999/mo</div>
                  <p className="text-sm text-muted-foreground">subscription</p>
                </div>
                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-xs font-semibold text-primary mb-2">ROI Calculator:</p>
                  <p className="text-sm text-muted-foreground">40 meetings/week × $10k deal × 20% close</p>
                  <p className="text-sm font-bold text-primary mt-1">= $80k pipeline/week</p>
                  <p className="text-xs text-muted-foreground mt-1">Typical payback: 2-4 months</p>
                </div>
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Starter +</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced n8n workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>CRM integration (HubSpot, Salesforce)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom scoring (50+ criteria)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support (24h)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>8h onboarding + 4h training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monthly strategy session (1h)</span>
                  </div>
                </div>
              </div>
              <Link
                href="#contact"
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
              >
                Get Started
              </Link>
            </div>

            <div className="flex flex-col items-start justify-between gap-6 p-10 lg:p-12 bg-card/50">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-2xl font-bold text-primary">Scale</h3>
                <p className="text-sm text-muted-foreground">For large teams & SaaS companies</p>
                <div className="flex flex-col gap-2 my-4">
                  <div className="text-4xl font-bold text-primary">$19,900+</div>
                  <p className="text-sm text-muted-foreground">setup fee (one-time)</p>
                  <div className="text-2xl font-bold text-primary mt-2">$3,999/mo</div>
                  <p className="text-sm text-muted-foreground">subscription</p>
                </div>
                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-xs font-semibold text-primary mb-2">Scale Impact:</p>
                  <p className="text-sm text-muted-foreground">80+ meetings/week × $10k deal × 20% close</p>
                  <p className="text-sm font-bold text-primary mt-1">= $160k pipeline/week</p>
                  <p className="text-xs text-muted-foreground mt-1">$8.3M ARR potential</p>
                </div>
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Growth +</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom n8n workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom API integrations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Proprietary scoring models</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium support (4h response)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>16h+ onboarding + 8h training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly strategy sessions + annual audit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>99.9% SLA guarantee</span>
                  </div>
                </div>
              </div>
              <Link
                href="#contact"
                className={cn(buttonVariants({ size: "sm", variant: "outline" }), "w-full")}
              >
                Contact Sales
              </Link>
            </div>

            <div className="absolute left-0 top-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div id="results" className="flex w-full flex-col items-center justify-center gap-8 py-12">
          <h2 className="text-center font-serif text-xl font-medium text-primary/60">
            Proven Results
          </h2>
          <h3 className="font-display text-center text-3xl md:text-4xl font-bold text-primary max-w-2xl">
            Real Numbers, Real Growth
          </h3>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-4xl border border-border backdrop-blur-sm">
            {[
              {
                metric: "87%",
                label: "Reduction in prospecting time",
                description: "Sales teams spend 20+ hours/week on manual research. Our system cuts that to under 3 hours."
              },
              {
                metric: "$23",
                label: "Cost per qualified lead",
                description: "Down from $600+ with traditional methods. That's a 96% reduction in customer acquisition cost."
              },
              {
                metric: "5-10",
                label: "Qualified meetings per week",
                description: "Consistent pipeline flow. No more feast or famine cycles—predictable growth you can plan around."
              },
              {
                metric: "35%",
                label: "Higher response rates",
                description: "AI-powered personalization beats generic templates. Your prospects actually read and respond."
              }
            ].map((result, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4 p-10 lg:p-12 bg-card/50 border-b md:border-b-0 md:border-r border-primary/10 last:border-r-0">
                <div className="flex flex-col gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {result.metric}
                  </span>
                  <h4 className="text-lg font-semibold text-primary">{result.label}</h4>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
            <div className="absolute left-0 top-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center">
              <span className="absolute h-6 w-[1px] bg-primary/40" />
              <span className="absolute h-[1px] w-6 bg-primary/40" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="relative z-10 w-full border border-border backdrop-blur-sm bg-primary/5">
          <div className="flex flex-col items-center justify-center gap-6 p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
              Ready to Scale Your Pipeline?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Book a free 30-minute strategy session. We'll show you exactly how to generate 5-10 qualified meetings every week—starting next month.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex h-11 w-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" size="lg" className="sm:w-auto w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Book Free Audit"}
              </Button>
            </form>
            {submitStatus === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Thank you! We'll contact you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              No credit card required. 30-minute strategy call included.
            </p>
          </div>
          <div className="absolute left-0 top-0 z-10 flex flex-col items-center justify-center">
            <span className="absolute h-6 w-[1px] bg-primary/40" />
            <span className="absolute h-[1px] w-6 bg-primary/40" />
          </div>
          <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center">
            <span className="absolute h-6 w-[1px] bg-primary/40" />
            <span className="absolute h-[1px] w-6 bg-primary/40" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="z-10 flex w-full flex-col items-center justify-center gap-8 py-6">
        <ThemeSwitcherHome />

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <p className="flex items-center whitespace-nowrap text-center text-sm font-medium text-primary/60">
            © 2025 GTM Growth System. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Background */}
      <Image
        src={ShadowPNG}
        alt="Hero"
        className="fixed left-0 top-0 z-0 h-full w-full opacity-60 dark:invert"
        fill
        priority
      />
      <div className="fixed bottom-0 h-screen w-screen bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
    </div>
  );
}
