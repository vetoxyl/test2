import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ShoppingCartIcon,
  BellIcon,
  UserIcon,
  ClipboardListIcon,
  UtensilsIcon,
  StoreIcon,
  CompassIcon,
  BookOpenIcon,
  BotIcon,
  LayoutDashboardIcon,
  BarChartIcon,
  SparklesIcon,
} from "lucide-react";

export default function Homepage() {
  return (
    <>
      <style>{`
        :root {
          --background: 0 0% 100%;
          --foreground: 222.2 84% 4.9%;
          --card: 0 0% 100%;
          --card-foreground: 222.2 84% 4.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 222.2 84% 4.9%;
          --primary: 142 94% 30%;
          --primary-foreground: 210 40% 98%;
          --secondary: 25 95% 53%;
          --secondary-foreground: 222.2 47.4% 11.2%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215.4 16.3% 46.9%;
          --accent: 240 86% 71%;
          --accent-foreground: 222.2 47.4% 11.2%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 214.3 31.8% 91.4%;
          --input: 214.3 31.8% 91.4%;
          --ring: 222.2 84% 4.9%;
          --radius: 0.5rem;
        }

        .dark {
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --card: 222.2 84% 4.9%;
          --card-foreground: 210 40% 98%;
          --popover: 222.2 84% 4.9%;
          --popover-foreground: 210 40% 98%;
          --primary: 210 40% 98%;
          --primary-foreground: 222.2 47.4% 11.2%;
          --secondary: 217.2 32.6% 17.5%;
          --secondary-foreground: 210 40% 98%;
          --muted: 217.2 32.6% 17.5%;
          --muted-foreground: 215 20.2% 65.1%;
          --accent: 217.2 32.6% 17.5%;
          --accent-foreground: 210 40% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 217.2 32.6% 17.5%;
          --input: 217.2 32.6% 17.5%;
          --ring: 212.7 26.8% 83.9%;
        }

        * {
          border-color: hsl(var(--border));
        }
      `}</style>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          fontFamily: "'Inter', sans-serif",
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: "16rem",
            borderRight: "1px solid hsl(var(--border))",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#059669" }}>Nutri</span>
              <span style={{ color: "#f97316" }}>Plan</span>
            </h1>
          </div>

          <nav
            style={{
              flex: 1,
              paddingLeft: "1rem",
              paddingRight: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              { icon: ClipboardListIcon, label: "My meal Plans", path: "/" },
              { icon: UserIcon, label: "Profile", path: "/profile" },
              { icon: UtensilsIcon, label: "Meals", path: "/meals" },
              { icon: StoreIcon, label: "Shop", path: "/shop" },
              { icon: CompassIcon, label: "Discover", path: "/discover" },
              { icon: BookOpenIcon, label: "Learn", path: "/learn" },
              { icon: BotIcon, label: "AI ChatBot", path: "/chatbot" },
            ].map(({ icon: Icon, label, path }) => (
              <Link
                key={label}
                to={path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  color: "#4b5563",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
                </div>
                <span style={{ fontWeight: "500" }}>{label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <header
            style={{
              height: "4rem",
              borderBottom: "1px solid hsl(var(--border))",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {[
                { icon: LayoutDashboardIcon, label: "Meal Plan", path: "/meal-plan" },
                { icon: BarChartIcon, label: "Log", path: "/log" },
                { icon: SparklesIcon, label: "Nutri AI", path: "/nutri-ai" },
              ].map(({ icon: Icon, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
                  <span style={{ fontSize: "0.875rem" }}>{label}</span>
                </Link>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              {[
                { icon: ShoppingCartIcon, label: "cart", path: "/cart" },
                { icon: BellIcon, label: "Notification", path: "/notifications" },
                { icon: UserIcon, label: "Account", path: "/account" },
              ].map(({ icon: Icon, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
                  <span style={{ fontSize: "0.75rem" }}>{label}</span>
                </Link>
              ))}
            </div>
          </header>

          {/* Main Content Area */}
          <main
            style={{
              flex: 1,
              backgroundColor: "#fdf2c5",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                maxWidth: "80rem",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Low Sodium Diet Plan */}
              <div
                style={{
                  backgroundColor: "hsl(var(--card))",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h2 style={{ color: "#7879f1", fontSize: "1.125rem", fontWeight: "500" }}>
                  Low Sodium Diet Plan Active
                </h2>
                <p style={{ color: "#6b7280" }}>
                  Your meal suggestions are optimized for your hypertension management.
                </p>
                <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "0.25rem" }}>
                  Sodium today: 1,250mg of 2,000mg limit
                </p>
              </div>

              {/* User Progress */}
              <div
                style={{
                  backgroundColor: "hsl(var(--card))",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h2 style={{ color: "#059669", fontSize: "1.5rem", fontWeight: "500" }}>
                  Hello, John
                </h2>
                <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                  Your personalized nutrition journey
                </p>

                <div
                  style={{
                    borderTop: "1px solid #f3f4f6",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#6b7280" }}>Your Progress</span>
                    <span style={{ color: "#6b7280" }}>Week 3</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3 style={{ color: "#374151" }}>Current</h3>
                      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>185 kg</div>
                      <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>Weekly Loss</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <div
                          style={{
                            width: "0.75rem",
                            height: "0.75rem",
                            borderRadius: "9999px",
                            backgroundColor: "#d1d5db",
                          }}
                        ></div>
                        <span style={{ fontSize: "0.875rem" }}>0.5 kg</span>
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                      }}
                    >
                      <div
                        style={{
                          height: "0.5rem",
                          backgroundColor: "#e5e7eb",
                          borderRadius: "9999px",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            height: "0.5rem",
                            backgroundColor: "#f54135",
                            borderRadius: "9999px",
                            width: "30%",
                          }}
                        ></div>
                      </div>
                      <div style={{ marginTop: "0.5rem" }}>
                        <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                          Daily calories
                        </div>
                        <div style={{ fontSize: "1.125rem" }}>1820 kcal</div>
                      </div>
                    </div>

                    <div>
                      <h3 style={{ color: "#374151" }}>Goal</h3>
                      <div style={{ fontSize: "1 sabem", fontWeight: "bold" }}>120 kg</div>
                      <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                        Plan Adherence
                      </div>
                      <div style={{ fontSize: "0.875rem" }}>85%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <h2 style={{ color: "#2dc291", fontSize: "1.25rem", fontWeight: "500" }}>
                    Suggestions:
                  </h2>
                  <span style={{ color: "#2dc291" }}>Low Sodium diets</span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      src: "/meals/creamysaladandboiledegg.jpg",
                      alt: "Creamy Salad and boiled Eggs",
                      label: "Creamy Salad and boiled Eggs",
                    },
                    {
                      src: "/meals/scrambledsalad.png",
                      alt: "Mediterranean Salad Bowl",
                      label: "Mediterranean Salad Bowl",
                    },
                  ].map(({ src, alt, label }) => (
                    <div
                      key={alt}
                      style={{
                        position: "relative",
                        borderRadius: "0.5rem",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={src}
                        alt={alt}
                        style={{ width: "100%", height: "240px", objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "1rem",
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          color: "white",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Meal */}
              <div
                style={{
                  backgroundColor: "hsl(var(--card))",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h2 style={{ color: "#2dc291", fontSize: "1.25rem", fontWeight: "500" }}>
                    Today's Meal
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "#6b7280",
                    }}
                  >
                    <CalendarIcon style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>Calendar</span>
                  </div>
                </div>

                {[
                  {
                    meal: "Breakfast",
                    name: "Vegan Protein Smoothie",
                    src: "/meals/beetsmoothie.png",
                    alt: "Vegan Protein Smoothie",
                    kcal: "320 kcal",
                  },
                  {
                    meal: "Lunch",
                    name: "Mediterranean Salad Bowl",
                    src: "/meals/scrambledsalad.png",
                    alt: "Mediterranean Salad Bowl",
                    kcal: "320 kcal",
                  },
                  {
                    meal: "Dinner",
                    name: "Avocado Salad",
                    src: "/meals/avocadosalad.png",
                    alt: "Avocado Salad",
                    kcal: "320 kcal",
                  },
                ].map(({ meal, name, src, alt, kcal }, index) => (
                  <div
                    key={name}
                    style={{
                      borderBottom: index < 2 ? "1px solid #f3f4f6" : "none",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div
                        style={{
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "0.25rem",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={src}
                          alt={alt}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <div style={{ color: "#2dc291" }}>{meal}</div>
                        <div style={{ fontWeight: "500" }}>{name}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ color: "#f97316" }}>{kcal}</div>
                      <div style={{ color: "#f97316", cursor: "pointer" }}>view</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
