import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sleep Tracker</h1>
      <div className="text-red-600">Home Page</div>
    </div>
  );
}
