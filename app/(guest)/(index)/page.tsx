import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      
      <p className="mb-4">
        Welcome to the homepage! This is a simple example of adding content 
        alongside a button component.
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>Easy to customize</li>
        <li>Reusable UI components</li>
        <li>Built with Next.js</li>
      </ul>

      <Button>Click Me</Button>
    </div>
  )
}
