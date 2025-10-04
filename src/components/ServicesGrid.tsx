import { 
  Building2, FileText, Droplets, Trash2, 
  Hospital, GraduationCap, Bus, Shield,
  Gauge, AlertTriangle, Calendar, Leaf,
  Sun, Heart, MessageSquare, Trees,
  Smartphone, Globe, Wifi, ParkingCircle,
  MapPin, Users, Zap, Activity
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  // Core Municipal Services
  { icon: Building2, title: "Property Tax", desc: "Online tax payment & records", color: "bg-primary" },
  { icon: FileText, title: "Birth & Death", desc: "Certificate services online", color: "bg-primary" },
  { icon: Droplets, title: "Water Supply", desc: "Bill payment & new connections", color: "bg-primary" },
  { icon: Trash2, title: "Waste Management", desc: "Collection schedules & complaints", color: "bg-primary" },
  { icon: Building2, title: "Building Permits", desc: "Plan approval & licenses", color: "bg-primary" },
  { icon: Shield, title: "Fire Services", desc: "NOC & safety certificates", color: "bg-primary" },
  
  // New Smart City Features
  { icon: Gauge, title: "Smart City Dashboard", desc: "Real-time traffic & pollution data", color: "bg-accent" },
  { icon: AlertTriangle, title: "Emergency Alerts", desc: "Flood, storm & health advisories", color: "bg-destructive" },
  { icon: Calendar, title: "Community Events", desc: "Festivals & cultural activities", color: "bg-secondary" },
  { icon: Sun, title: "Renewable Energy", desc: "Solar & wind energy projects", color: "bg-accent" },
  
  // Health & Education
  { icon: Hospital, title: "Health Services", desc: "Hospitals & vaccination centers", color: "bg-primary" },
  { icon: Heart, title: "Telemedicine", desc: "Online health consultations", color: "bg-primary" },
  { icon: GraduationCap, title: "Education Services", desc: "Schools & scholarship info", color: "bg-primary" },
  
  // Citizen Engagement
  { icon: MessageSquare, title: "Citizen Feedback", desc: "Suggestions & satisfaction surveys", color: "bg-secondary" },
  { icon: Users, title: "Community Forums", desc: "Public discussions & polls", color: "bg-secondary" },
  
  // Green Initiatives
  { icon: Trees, title: "Green Initiatives", desc: "Tree planting & conservation", color: "bg-accent" },
  { icon: Leaf, title: "Environmental Programs", desc: "Awareness & sustainability", color: "bg-accent" },
  
  // Smart Services
  { icon: Smartphone, title: "Mobile App", desc: "Download CCMC citizen app", color: "bg-primary" },
  { icon: Globe, title: "Multilingual Support", desc: "தமிழ், English, हिंदी", color: "bg-secondary" },
  { icon: Wifi, title: "IoT Services", desc: "Smart meters & monitoring", color: "bg-accent" },
  
  // Transportation
  { icon: Bus, title: "Public Transport", desc: "Bus routes & schedules", color: "bg-primary" },
  { icon: ParkingCircle, title: "Smart Parking", desc: "Live parking availability", color: "bg-accent" },
  { icon: Activity, title: "Traffic Management", desc: "Real-time traffic updates", color: "bg-accent" },
  
  // Tourism
  { icon: MapPin, title: "Tourism Info", desc: "Heritage sites & attractions", color: "bg-secondary" },
];

export const ServicesGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Citizen Services & Smart Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive municipal services with innovative digital features
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
