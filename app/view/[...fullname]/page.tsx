import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function ProfilePage({
  params,
}: {
  params: { fullname?: string[] };
}) {
  const { fullname } = params;

  const username = fullname?.[0];
  const subpage = fullname?.[1];

  // Fake Database
  const userDb = [
    {
      id: "micco",
      fullname: "Micco James T. Ang",
      section: "BSIT - 3A",
      email: "miccojamesang9@gmail.com",
      hobbies: ["Basketball", "Running", "Playing Mobile Games"],
    },
  ];

  const user = userDb.find((u) => u.id === username);

  if (!user) {
    return (
      <div className="border p-4 rounded-md">
        <h1>User Not Found</h1>
      </div>
    );
  }

  const isHobbiesPage = subpage === "hobbies";

  if (isHobbiesPage) {
    return (
      <div className="container mx-auto p-6">
        <div className="border p-4 rounded-md">
          <h1 className="text-xl font-bold mb-2">Hobby Page</h1>
          <ul className="list-disc pl-6">
            {user.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>

          <Link href={`/view/${user.id}`}>
            <Button className="mt-4">Back to Profile</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-6">
        <div className="border p-4 rounded-md">
          <h1 className="text-xl font-bold">{user.fullname}</h1>
          <h2 className="text-md">{user.section}</h2>
          <p className="mb-4">Email: {user.email}</p>

          <Link href={`/view/${user.id}/hobbies`}>
            <Button>View Hobbies</Button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
