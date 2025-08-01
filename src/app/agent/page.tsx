import { AnimatedAIChat } from "../sections/agent/animated-ai-chat"
import Navbar from "../components/Navbar"

export default function AgentPage() {
  return (
    <div className="space-y-4">
      <Navbar currentPage="agent" />
      <div className="flex w-screen overflow-x-hidden">
        <AnimatedAIChat />
      </div>
    </div>
  );
}
