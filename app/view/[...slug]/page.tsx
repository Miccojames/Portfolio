"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function ProfilePage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const username = slug?.[0];
  const subpage = slug?.[1];

  // Fake Database
  const userDb = [
    {
      id: "jameboy",
      name: "Jameboy Escartin",
      section: "BSIT - 3A",
      email: "escartinjameboy@gmail.com",
      hobbies: ["Chess", "Guitar", "Hobby 3"],
    },
  ];

  // Find user
  const user = userDb.find((u) => u.id.toLowerCase() === username?.toLowerCase());

  if (!user) {
    return (
      <div className="border p-4 mb-4 rounded-md">
        <h1>User Not Found</h1>
      </div>
    );
  }

  // Hobbies page
  if (subpage?.toLowerCase() === "hobbies") {
    return (
      <div className="border p-4 mb-4 rounded-md">
        <h1>Hobby Page</h1>
        <ul className="list-disc pl-6">
          {user.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
        <Link href={`/view/${user.id}`}>
          <Button className="mt-4">Back to Profile</Button>
        </Link>
      </div>
    );
  }

  // Profile page
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-6">
        <div key={user.id} className="border p-4 mb-4 rounded-md">
          <h1>{user.name}</h1>
          <h2>{user.section}</h2>
          <p className="mb-4">Email: {user.email}</p>
          <Link href={`/view/${user.id}/hobbies`}>
            <Button>View Hobbies</Button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
