const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className=" max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
            <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <div className=" bg-card rounded-2xl p-8 border border-border glow-blue animate-scale-in">
            <div className="text-lg leading-relaxed text-foreground">
              <p className="mb-6">
                <span className="text-primary font-semibold">Versatile Full Stack Developer</span> with hands-on experience building and deploying real-world applications using{" "}
                <span className="text-accent font-medium">Python</span> and the{" "}
                <span className="text-accent font-medium">MERN stack</span>.
              </p>
              
              <p className="mb-6">
                Proven ability to integrate <span className="text-primary font-semibold">AI functionalities</span> and work on both client and academic projects, delivering{" "}
                <span className="text-accent font-medium">scalable and maintainable software solutions</span>.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-secondary rounded-lg px-4 py-2 text-sm font-medium border border-border">
                  🚀 4+ Years Experience
                </div>
                <div className="bg-secondary rounded-lg px-4 py-2 text-sm font-medium border border-border">
                  💼 Real-World Projects
                </div>
                <div className="bg-secondary rounded-lg px-4 py-2 text-sm font-medium border border-border">
                  🤖 AI Integration Expert
                </div>
                <div className="bg-secondary rounded-lg px-4 py-2 text-sm font-medium border border-border">
                  ☁️ Cloud Deployment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;