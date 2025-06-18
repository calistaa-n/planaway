'use client';

import { useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Star, Telescope, Leaf, Baby, Wallet } from "lucide-react";

const bestActivities = [
  { title: "Snorkeling in Clear Waters", image: "/icons-rank/1st.png", rating: 4.9 },
  { title: "Cultural Tour & Old Town Tour", image: "/icons-rank/2nd.png", rating: 4.9 },
  { title: "River or Lake Cruise by Boat", image: "/icons-rank/3rd.png", rating: 4.8 },
  { title: "Visit to a Giant Aquarium or Zoo", image: "/icons-rank/4th.png", rating: 4.8 },
  { title: "Stargazing", image: "/icons-rank/5th.png", rating: 4.8 },
  { title: "Hunting Local Product at Traditional Markets", image: "/icons-rank/6th.png", rating: 4.7 },
  { title: "HIking to the top of Waterfall", image: "/icons-rank/7th.png", rating: 4.6 },
  { title: "Escape Room Challenge", image: "/icons-rank/8th.png", rating: 4.5 },
  { title: "Night Tour with Lanterns", image: "/icons-rank/9th.png", rating: 4.4 },
  { title: "Stay in a Traditional House", image: "/icons-rank/10th.png", rating: 4.2 },
];

const natureAdventures = [
  { title: "Stargazing at Atacama Desert", image: "/icons-rank/1st.png", rating: 4.9 },
  { title: "Hiking the Emerald Trail", image: "/icons-rank/2nd.png", rating: 4.8 },
  { title: "Kayaking Through the Mangroves", image: "/icons-rank/3rd.png", rating: 4.7 },
  { title: "Glacier Trekking Experience", image: "/icons-rank/4th.png", rating: 4.6 },
  { title: "Kayaking Through the Mangroves", image: "/icons-rank/5th.png", rating: 4.5 },
  { title: "Amazon Rainforest Canopy Walk", image: "/icons-rank/6th.png", rating: 4.5 },
  { title: "Sunset Camel Safari", image: "/icons-rank/7th.png", rating: 4.5 },
  { title: "Mountain Biking Expedition", image: "/icons-rank/8th.png", rating: 4.5 },
  { title: "Waterfall Rappelling Adventure", image: "/icons-rank/9th.png", rating: 4.3 },
  { title: "Hot Air Balloon Over Cappadocia", image: "/icons-rank/10th.png", rating: 4.3 },
];

const familyFriendly = [
  { title: "Visit to a Giant Aquarium", image: "/icons-rank/1st.png", rating: 4.9 },
  { title: "Escape Room Challenge", image: "/icons-rank/2nd.png", rating: 4.9 },
  { title: "Theme Park Day Pass", image: "/icons-rank/3rd.png", rating: 4.8 },
  { title: "Puppet Show and Theater Tour", image: "/icons-rank/4th.png", rating: 4.8 },
  { title: "Build-a-Kite Workshop", image: "/icons-rank/5th.png", rating: 4.7 },
  { title: "City Scavenger Hunt", image: "/icons-rank/6th.png", rating: 4.7 },
  { title: "Storybook Village Experience", image: "/icons-rank/7th.png", rating: 4.5 },
  { title: "Family-Friendly Beach Resort", image: "/icons-rank/8th.png", rating: 4.4 },
  { title: "Whale Watching Tour", image: "/icons-rank/9th.png", rating: 4.4 },
  { title: "Trampoline Park & Kids Zone", image: "/icons-rank/10th.png", rating: 4.3 },
];

const budgetFriendly = [
  { title: "Night Tour with Lanterns", image: "/icons-rank/1st.png", rating: 4.8 },
  { title: "Stay in a Traditional House", image: "/icons-rank/2nd.png", rating: 4.8 },
  { title: "Street Food Market Crawl", image: "/icons-rank/3rd.png", rating: 4.8 },
  { title: "Public Thermal Spa Experience", image: "/icons-rank/4th.png", rating: 4.7 },
  { title: "Camping by the Lake", image: "/icons-rank/5th.png", rating: 4.7 },
  { title: "Train Ride Through the Countryside", image: "/icons-rank/6th.png", rating: 4.6 },
  { title: "Free Museum Day", image: "/icons-rank/7th.png", rating: 4.5 },
  { title: "Sunset Picnic at the Cliffs", image: "/icons-rank/8th.png", rating: 4.5 },
  { title: "Sunset Picnic at the Cliffs", image: "/icons-rank/9th.png", rating: 4.5 },
  { title: "Sunset Picnic at the Cliffs", image: "/icons-rank/10th.png", rating: 4.3 },
];

function ActivityRow({ title, image, rating }: { title: string; image: string; rating: number }) {
  return (
    <div className="py-4 border-t-2 border-gray-300 first:border-t-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={image} alt="Rank Icon" />
          <span className="text-base sm:text-xl text-[#1D2B29]">{title}</span>
        </div>
        <div className="flex items-center text-gray-600 gap-x-2">
          <Star size={18} className="text-yellow-500 fill-yellow-500" />
          <span className="font-medium text-gray-800">{rating}</span>
          <span className="text-gray-500 hidden sm:inline">(1,878 reviews)</span>
        </div>
      </div>
    </div>
  );
}

function ActivityList({ data }: { data: typeof bestActivities }) {
  return (
    <Card className="bg-[#F2ECE3] rounded-2xl px-4 py-2 gap-1 mt-6">
      {data.map((activity, i) => (
        <ActivityRow key={i} {...activity} />
      ))}
    </Card>
  );
}

export default function ActivityTabs() {
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  };

  return (
    <section className="mt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10">
        Traveler-rated Leaderboard
      </h2>
      
      <Tabs defaultValue="best-activities" className="w-full">
        <div ref={tabListRef} className="overflow-x-auto scrollbar-hide">
          <TabsList className="flex w-max sm:grid sm:grid-cols-4 h-[72px] bg-[#F2ECE3] rounded-3xl p-2 sm:p-3 gap-2">
            <TabsTrigger onClick={handleTabClick} value="best-activities" className="flex-1 h-[48px] rounded-2xl whitespace-nowrap px-3 text-sm sm:text-base data-[state=active]:bg-[#1D2B29] data-[state=active]:text-white">
              <Telescope className="size-5 sm:size-6 mr-1" />
              Best Activities
            </TabsTrigger>
            <TabsTrigger onClick={handleTabClick} value="nature-adventures" className="flex-1 h-[48px] rounded-2xl whitespace-nowrap px-3 text-sm sm:text-base data-[state=active]:bg-[#1D2B29] data-[state=active]:text-white">
              <Leaf className="size-5 sm:size-6 mr-1" />
              Nature Adventures
            </TabsTrigger>
            <TabsTrigger onClick={handleTabClick} value="family-friendly" className="flex-1 h-[48px] rounded-2xl whitespace-nowrap px-3 text-sm sm:text-base data-[state=active]:bg-[#1D2B29] data-[state=active]:text-white">
              <Baby className="size-5 sm:size-6 mr-1" />
              Family Friendly
            </TabsTrigger>
            <TabsTrigger onClick={handleTabClick} value="budget-friendly" className="flex-1 h-[48px] rounded-2xl whitespace-nowrap px-3 text-sm sm:text-base data-[state=active]:bg-[#1D2B29] data-[state=active]:text-white">
              <Wallet className="size-5 sm:size-6 mr-1" />
              Budget Friendly
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="best-activities">
          <ActivityList data={bestActivities} />
        </TabsContent>
        <TabsContent value="nature-adventures">
          <ActivityList data={natureAdventures} />
        </TabsContent>
        <TabsContent value="family-friendly">
          <ActivityList data={familyFriendly} />
        </TabsContent>
        <TabsContent value="budget-friendly">
          <ActivityList data={budgetFriendly} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
