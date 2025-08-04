import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lars Winkel | Fachinformatiker" },
    { name: "description", content: "Wilkommen bei larsw.net/" },
  ];
}

export default function Home() {
  return <Welcome />;
}
