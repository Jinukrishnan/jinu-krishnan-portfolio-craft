import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Name and Title */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">JINU</span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent text-glow">
                KRISHNAN
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground tracking-[0.2em] mb-8">
              FULL STACK DEVELOPER
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
              <span>W E B   D E V E L O P E R</span>
              <span className="hidden md:block">•</span>
              <span>R E A C T   S P E C I A L I S T</span>
              <span className="hidden md:block">•</span>
              <span>M E R N   S T A C K</span>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary p-4 glow-blue-strong animate-pulse-glow">
                <img
                  src={profilePhoto}
                  alt="Jinu Krishnan"
                  className="w-full h-full rounded-full object-cover transition-smooth hover:scale-105"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;