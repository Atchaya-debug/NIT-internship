import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const news = [
  {
    title: "New Smart Waste Management System Launched",
    date: "March 15, 2024",
    category: "Smart City",
    desc: "IoT-enabled waste collection with real-time tracking"
  },
  {
    title: "Solar Power Initiative: 10,000 Homes Connected",
    date: "March 12, 2024",
    category: "Renewable Energy",
    desc: "Green energy program reaches new milestone"
  },
  {
    title: "Digital Health Centers Opened in 5 Zones",
    date: "March 10, 2024",
    category: "Health",
    desc: "Telemedicine and vaccination services now available"
  },
  {
    title: "Public Feedback Portal Receives 50,000+ Responses",
    date: "March 8, 2024",
    category: "Citizen Engagement",
    desc: "Record participation in civic improvement surveys"
  },
];

export const NewsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Latest Updates & Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
