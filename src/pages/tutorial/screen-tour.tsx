import { Screen } from "@/components/screen/screen";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RefObject, useEffect, useRef, useState } from "react";

type Tutorial = {
  previous?: Tutorial;
  next?: Tutorial;
  setUp: () => void;
};

export default function ScreenTour() {
  const title = useRef<HTMLDivElement | null>(null);
  const text = useRef<HTMLDivElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);
  const card = useRef<HTMLDivElement | null>(null);

  const [info, setInfo] = useState("");

  const setCard = (element: RefObject<HTMLElement | null>) => {
    card.current!.style.left = `${
      element.current!.getBoundingClientRect().left
    }px`;
    card.current!.style.top = `${
      element.current!.getBoundingClientRect().top +
      element.current!.getBoundingClientRect().height +
      10
    }px`;
  };

  const tourTitle: Tutorial = {
    setUp() {
      setInfo("titulo");
      setCard(title);
    },
  };
  const tourText: Tutorial = {
    setUp() {
      setInfo("texto");
      setCard(text);
    },
  };
  const tourInput: Tutorial = {
    setUp() {
      setInfo("input");
      setCard(input);
    },
  };
  const tourButton: Tutorial = {
    setUp() {
      setInfo("botão");
      setCard(button);
    },
  };

  tourTitle.next = tourText;
  tourText.previous = tourTitle;
  tourText.next = tourInput;
  tourInput.previous = tourText;
  tourInput.next = tourButton;
  tourButton.previous = tourInput;

  const [tour, setTour] = useState<Tutorial>(tourTitle);

  useEffect(() => {
    tour.setUp();
  }, []);

  return (
    <>
      <Screen {...{ title, button, input, text }} />
      <Card
        ref={card}
        className="w-36 h-32 p-2 flex flex-col justify-between fixed"
      >
        <h2>{info}</h2>
        <div className="flex justify-between">
          <Button
            data-hide={!tour.previous}
            className="data-[hide=true]:invisible"
            variant={"link"}
            onClick={() => {
              setTour(tour.previous!);
              tour.previous?.setUp();
            }}
          >
            prev
          </Button>
          <Separator orientation="vertical" />
          <Button
            data-hide={!tour.next}
            className="data-[hide=true]:invisible"
            variant={"link"}
            onClick={() => {
              setTour(tour.next!);
              tour.next?.setUp();
            }}
          >
            next
          </Button>
        </div>
      </Card>
    </>
  );
}
