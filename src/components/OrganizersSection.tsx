
import { cn } from "@/lib/utils";

const organizers = [
  {
    name: "Arjun Sharma",
    role: "Event Coordinator",
    image: "https://via.placeholder.com/150?text=AS"
  },
  {
    name: "Priya Desai",
    role: "Technical Lead",
    image: "https://via.placeholder.com/150?text=PD"
  },
  {
    name: "Rahul Kapoor",
    role: "Marketing Head",
    image: "https://via.placeholder.com/150?text=RK"
  },
  {
    name: "Isha Patel",
    role: "Creative Director",
    image: "https://via.placeholder.com/150?text=IP"
  },
  {
    name: "Vikram Singh",
    role: "Logistics Manager",
    image: "https://via.placeholder.com/150?text=VS"
  },
  {
    name: "Anjali Menon",
    role: "Public Relations",
    image: "https://via.placeholder.com/150?text=AM"
  }
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-20 bg-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            MEET THE TEAM
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            The <span className="text-squidGreen">Masterminds</span> Behind
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our dedicated team working tirelessly to bring you an unforgettable experience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 reveal">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden transition-all duration-300 group-hover:squid-border">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-white text-center">{organizer.name}</h3>
              <p className="text-sm text-white/60 text-center mt-1">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
