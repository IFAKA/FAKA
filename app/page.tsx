import { Body } from "@/components";
import { Inter } from "@next/font/google";
import { getRepos } from "./services";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getRepos();
  return (
    <main className={`${inter.className}`}>
      <Body projects={projects} />
    </main>
  );
}
