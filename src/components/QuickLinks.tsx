import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Briefcase, Phone } from "lucide-react";

const quickLinks = [
  { icon: FileText, title: "RTI Applications", link: "#" },
  { icon: Users, title: "Mayor's Message", link: "#" },
  { icon: Briefcase, title: "Career Opportunities", link: "#" },
  { icon: Phone, title: "Helpline Numbers", link: "#" },
];

export const QuickLinks = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3 text-foreground">{link.title}</h3>
                  <Button variant="outline" size="sm">
                    Access Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
