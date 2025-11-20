"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export interface MealPlanProps {
  preferences?: string[];
}

export function MealPlan({ preferences = [] }: MealPlanProps) {
  const [plan, setPlan] = useState<string[][]>([]);

  const generatePlan = () => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const meals = ["Breakfast", "Lunch", "Dinner"];
    const sampleRecipes = [
      "Pasta Primavera",
      "Grilled Chicken Salad",
      "Beef Stir Fry",
      "Vegetable Curry",
      "Fish Tacos",
      "Quinoa Bowl",
      "Omelette",
    ];
    const newPlan = days.map(() => {
      return meals.map(() => {
        const recipe =
          sampleRecipes[Math.floor(Math.random() * sampleRecipes.length)];
        return `${recipe}`;
      });
    });
    setPlan(newPlan);
  };

  return (
    <div className="space-y-4">
      <Button onClick={generatePlan}>Generate Weekly Meal Plan</Button>
      {plan.length > 0 && (
        <div className="grid gap-4">
          {plan.map((dayMeals, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{`Day ${idx + 1}`}</CardTitle>
              </CardHeader>
              <CardContent>
                {dayMeals.map((meal, i) => (
                  <CardDescription key={i}>{meal}</CardDescription>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
