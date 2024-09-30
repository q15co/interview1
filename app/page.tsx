"use client";

import { Toy, ToyConfigForm } from "@/components/toy-config-form";
import { generateImage } from "./actions";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [toy, setToy] = useState<Toy>({
    type: "human",
    legs: 2,
    arms: 2,
    color: "#000",
  });

  const [imageURL, setImageUrl] = useState<string>();

  const [isPending, startTransition] = useTransition();

  const onGenerate = () => {
    startTransition(async () => {
      const newImageUrl = await generateImage(toy);
      setImageUrl(newImageUrl);
    });
  };

  return (
    <div className="flex min-h-screen w-full justify-center align-middle">
      <div className="flex max-w-4xl flex-col justify-center gap-4 align-middle">
        <ToyConfigForm toy={toy} setToy={setToy} />
        <Button onClick={onGenerate} disabled={isPending}>
          Generate
        </Button>
        {imageURL && <img src={imageURL} />}
      </div>
    </div>
  );
}
