"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Eddy",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used!",
  },
  {
    name: "Khaby",
    avatar: "A",
    title: "Software Engineer",
    description: "Having so much fun using it. Nice and simple to use.",
  },
  {
    name: "Nicol",
    avatar: "A",
    title: "Software Engineer",
    description: "Looks great to me. Best application!",
  },
  {
    name: "Kamal",
    avatar: "A",
    title: "Software Engineer",
    description: "Best application I've used!",
  },
  {
    name: "Harry",
    avatar: "A",
    title: "Software Engineer",
    description: "Used to get help for my recent project and I'm thankful it helped me just the way I want!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "Code snippets are quite useful.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
