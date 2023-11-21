import React from "react";
import Post from "./Post";
import Link from "next/link";
import farmer from "../../../public/homepage_images/farmer.png";
import data from "../../../public/homepage_images/data.png";
import startup from "../../../public/homepage_images/startup.png";

export default function Update() {
  return (
    <main>
      <section className="flex flex-wrap justify-between p-10">
        <h1 className="text-3xl font-semibold">Latest Updates</h1>
        <Link href="#" className="font-bold">
          View all Posts
        </Link>
      </section>
      <section className="grid sm:grid-cols-3 gap-6 px-32">
        <Post
          src={farmer}
          title={"Enhanced Weather Integration"}
          time={"April 24, 2022 - 5 min read "}
          details={
            "We've enhanced our weather integration feature to provide even more accurate and real-time data for your farm."
          }
        />
        <Post
          src={data}
          title={"New Insights Dashboard Unveiled"}
          time={"April 03, 2022 - 4 min read"}
          details={
            "As a token of appreciation to our early adopters, we're excited to unveil our new Insights Dashboard."
          }
        />
        <Post
          src={startup}
          title={"Community Collaboration"}
          time={"March 12, 2022 - 6 min read"}
          details={
            "We're thrilled to introduce our Precision Farming Forum, a space for farmers, agronomists, and professionals to..."
          }
        />
      </section>
    </main>
  );
}
