import { Tabs } from "expo-router";
import { Home, Users, GraduationCap, Calendar, Trophy } from "lucide-react-native";
import React from "react";

import Colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light.cardBackground,
          borderTopColor: Colors.light.border,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="creators"
        options={{
          title: "Creators",
          tabBarIcon: ({ color }) => <Users size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mentors"
        options={{
          title: "Mentors",
          tabBarIcon: ({ color }) => <GraduationCap size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => <Calendar size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color }) => <Trophy size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
