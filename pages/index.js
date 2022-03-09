import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      router.push("landing");
    }
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
