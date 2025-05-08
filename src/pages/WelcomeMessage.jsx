export default function WelcomeMessage() {
    return (
      <section className="bg-pink py-16 px-4 mx-12 my-12 rounded-3xl sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Welcome to Treasured Care For You
          </h1>
          
          {/* Tagline */}
          <p className="text-xl mb-8 font-light">
            A place where care goes beyond the task, and every individual is seen, heard, and appointed with dignity.
          </p>
  
          {/* Director's Message */}
          <div className="space-y-6 text-lg">
            <p className="italic border-l-4 border-accent pl-4">
              "With a long-standing career in nursing and years of hands-on experience as both a Registered Nurse and a support worker, I've witnessed firsthand the difference that genuine, person-centred care can make in someone's life."
            </p>
            
            <div className="space-y-4">
              <p>
                Our organization was built from the ground up with a deep understanding of what quality support truly looks like – not just from a clinical perspective, but from a human one. We are here not just to provide services, but to build trusted relationships, foster independence, and create an environment where every individual feels safe, respected, and empowered.
              </p>
              
              <p>
                Whether you're with us through the NDIS or seeking aged care support, know that you are at the heart of everything we do. Our dedicated team shares my passion and commitment to compassionate, professional care – and we're here to support you every step of the way.
              </p>
            </div>
          </div>
  
          {/* Signature */}
          <div className="mt-12 border-t pt-8 border-white/20">
            <p className="text-xl font-semibold">Adelaide Mosley</p>
            <p className="text-lg">Director & Founder</p>
            <p className="mt-2 text-accent">Treasured Care For You</p>
          </div>
        </div>
      </section>
    );
  }