"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export interface Toy {
  type: "human" | "alien" | "robot";
  legs: number;
  arms: number;
  color: string;
}

export function ToyConfigForm({
  toy,
  setToy,
}: {
  toy: Toy;
  setToy: Dispatch<SetStateAction<Toy>>;
}) {
  const handleChange = (value: string, field: string) => {
    const parsedValue =
      field === "legs" || field === "arms" ? parseInt(value) : value;
    setToy((prev) => ({ ...prev, [field]: parsedValue }));
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Action Figure Configurator</CardTitle>
        <CardDescription>Customize your action figure toy</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <Select onValueChange={(value) => handleChange(value, "type")}>
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="human">Human</SelectItem>
              <SelectItem value="alien">Alien</SelectItem>
              <SelectItem value="robot">Robot</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="legs">Number of Legs</Label>
          <Select onValueChange={(value) => handleChange(value, "legs")}>
            <SelectTrigger id="legs">
              <SelectValue placeholder="Select number of legs" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 6, 8].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="arms">Number of Arms</Label>
          <Select onValueChange={(value) => handleChange(value, "arms")}>
            <SelectTrigger id="arms">
              <SelectValue placeholder="Select number of arms" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4, 6, 8, 12].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="color">Color</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="color"
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <div
                  className="mr-2 h-4 w-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: toy.color }}
                />
                {toy.color}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <HexColorPicker
                color={toy.color}
                onChange={(color) => handleChange(color, "color")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}
