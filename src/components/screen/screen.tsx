import { RefObject } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type ScreenProps = {
  title?: RefObject<HTMLDivElement | null>;
  text?: RefObject<HTMLDivElement | null>;
  input?: RefObject<HTMLInputElement | null>;
  button?: RefObject<HTMLButtonElement | null>;
};

export function Screen({ title, text, input, button }: ScreenProps) {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="py-3">
        <h1 ref={title}>Tela</h1>
      </header>
      <main>
        <div className="py-4">
          <h2 ref={text}>text</h2>
        </div>
        <div className="flex space-x-2 w-96">
          <Input ref={input} placeholder="Pesquisar" />
          <Button ref={button}>Adicionar</Button>
        </div>
      </main>
    </div>
  );
}
