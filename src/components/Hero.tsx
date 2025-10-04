import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Coimbatore City
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Building a Smart, Sustainable, and Citizen-Friendly City
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary">
              Pay Property Tax
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
              File Complaint
            </Button>
          </div>
        </div>
      </div>

      {/* Emergency Alert Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 animate-pulse" />
            <span className="font-medium">Emergency Alert:</span>
            <span>Heavy rainfall expected. Stay updated on weather conditions.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
